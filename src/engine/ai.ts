import type { Ending, Metrics, PathStep, Scenario } from './types'
import { METRIC_META } from './metrics'

/**
 * Optional, bring-your-own-key AI deep-analysis. The authored critique is the
 * baseline and always works offline; this layer is a bonus for users who supply
 * their own Anthropic API key. The key lives only in this browser's localStorage,
 * is never committed, and is sent directly to Anthropic — there is no backend.
 */

/** Editable in one place. Defaults to a current, well-balanced Claude model. */
export const AI_MODEL = 'claude-sonnet-4-6'

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages'
const ANTHROPIC_VERSION = '2023-06-01'
const KEY_STORAGE = 'war-games:anthropic-key'

export function getStoredKey(): string {
  try {
    return localStorage.getItem(KEY_STORAGE) ?? ''
  } catch {
    return ''
  }
}

export function storeKey(key: string): void {
  try {
    if (key.trim()) localStorage.setItem(KEY_STORAGE, key.trim())
    else localStorage.removeItem(KEY_STORAGE)
  } catch {
    /* storage may be unavailable (private mode) — fail silently */
  }
}

export interface AnalysisInput {
  scenario: Scenario
  path: PathStep[]
  metrics: Metrics
  ending: Ending
}

const SYSTEM_PROMPT =
  'You are a senior wargaming adjudicator and a War Studies tutor in the King’s ' +
  'College London tradition. You are debriefing a student after a fictional ' +
  'strategic decision exercise. Write in British English. Be honest, not ' +
  'flattering — your job is to make them a sharper decision-maker, not to praise ' +
  'them. Around 250 words. Cover, in flowing prose (not headings): the decision ' +
  'style their choices reveal; one genuine strength; one sharp blind spot; and ' +
  'what a different school of strategic thought would have done differently. ' +
  'Ground your points in real concepts (escalation control, the attribution ' +
  'problem, automation bias, alliance cohesion, audience costs) but do not invent ' +
  'citations, figures or real-world quotes. Address the student as "you".'

export function buildUserMessage(input: AnalysisInput): string {
  const { scenario, path, metrics, ending } = input
  const decisions = path
    .map((s, i) => {
      const rationale = s.rationale ? ` | Their stated reasoning: "${s.rationale}"` : ''
      return `${i + 1}. [${s.phaseLabel}] At "${s.nodeTitle}", facing "${s.prompt}", they chose: "${s.optionLabel}".${rationale}`
    })
    .join('\n')

  const finalState = (Object.keys(metrics) as (keyof Metrics)[])
    .map((k) => `${METRIC_META[k].label}: ${metrics[k]}/100`)
    .join(', ')

  return (
    `EXERCISE: ${scenario.codename} — ${scenario.domain}\n` +
    `THEIR ROLE: ${scenario.role}\n\n` +
    `THEIR DECISIONS, IN ORDER:\n${decisions}\n\n` +
    `FINAL STATE — ${finalState}\n` +
    `OUTCOME REACHED: ${ending.title} — ${ending.verdict}\n\n` +
    `Write the debrief now.`
  )
}

export class AiError extends Error {}

/**
 * Call the Anthropic Messages API directly from the browser. Throws AiError with
 * a human-readable message for every known failure mode — never a raw stack.
 */
export async function runAnalysis(
  key: string,
  input: AnalysisInput,
): Promise<string> {
  if (!key.trim()) {
    throw new AiError('No API key set. Add your Anthropic key to enable AI analysis.')
  }

  let res: Response
  try {
    res = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key.trim(),
        'anthropic-version': ANTHROPIC_VERSION,
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: AI_MODEL,
        max_tokens: 700,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: buildUserMessage(input) }],
      }),
    })
  } catch {
    throw new AiError(
      'Could not reach Anthropic. Check your connection and try again. Your key never leaves this browser.',
    )
  }

  if (!res.ok) {
    if (res.status === 401)
      throw new AiError('That API key was rejected (401). Check it and try again.')
    if (res.status === 429)
      throw new AiError('Rate limited by Anthropic (429). Wait a moment and retry.')
    if (res.status === 400)
      throw new AiError(
        `Anthropic rejected the request (400). The model id "${AI_MODEL}" may need updating.`,
      )
    throw new AiError(`Anthropic returned an error (${res.status}). Please try again later.`)
  }

  let data: unknown
  try {
    data = await res.json()
  } catch {
    throw new AiError('Anthropic returned an unreadable response. Please try again.')
  }

  const text = (data as { content?: { type: string; text?: string }[] })?.content
    ?.filter((b) => b.type === 'text')
    .map((b) => b.text ?? '')
    .join('\n')
    .trim()

  if (!text) throw new AiError('Anthropic returned an empty analysis. Please try again.')
  return text
}
