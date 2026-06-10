import { useState } from 'react'
import type { Ending, Metrics, PathStep, Scenario } from '@/engine/types'
import {
  AI_MODEL,
  AiError,
  getStoredKey,
  runAnalysis,
  storeKey,
} from '@/engine/ai'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sparkles, ShieldCheck, Loader2, KeyRound } from 'lucide-react'

/**
 * Optional AI tutor debrief. Entirely client-side: the user's key is read from
 * and written to localStorage only, and used for a direct browser call. The panel
 * is fully usable-free without it — this just adds a personalised analysis.
 */
export function AiAnalysisPanel({
  scenario,
  path,
  metrics,
  ending,
}: {
  scenario: Scenario
  path: PathStep[]
  metrics: Metrics
  ending: Ending
}) {
  const [key, setKey] = useState(getStoredKey())
  const [remember, setRemember] = useState(getStoredKey().length > 0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  async function run() {
    setStatus('loading')
    setError('')
    setResult('')
    if (remember) storeKey(key)
    try {
      const text = await runAnalysis(key, { scenario, path, metrics, ending })
      setResult(text)
      setStatus('done')
    } catch (e) {
      setError(e instanceof AiError ? e.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <Card className="border-instrument/30">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 size-5 shrink-0 text-instrument" />
          <div className="space-y-1">
            <p className="text-sm leading-relaxed text-foreground/90">
              Want a senior adjudicator to mark your decision-making? Supply your own
              Anthropic API key and an AI War Studies tutor will write you a candid,
              ~250-word debrief on how you played.
            </p>
            <p className="font-mono text-[11px] text-muted-foreground">
              Everything above already works without this. This is an optional extra.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-md border border-border/60 bg-muted/30 p-3">
          <ShieldCheck className="size-4 shrink-0 text-signal-good" />
          <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
            Your key stays in this browser (localStorage) and is sent directly to
            Anthropic. It is never committed, logged, or sent anywhere else. Clear it
            any time by emptying the field.
          </p>
        </div>

        <div className="space-y-3">
          <label
            htmlFor="api-key"
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            <KeyRound className="size-3.5" /> Anthropic API key
          </label>
          <input
            id="api-key"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="sk-ant-..."
            autoComplete="off"
            spellCheck={false}
            className="w-full rounded-md border border-input bg-background/60 px-3 py-2 font-mono text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2 font-mono text-[11px] text-muted-foreground">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => {
                  setRemember(e.target.checked)
                  if (!e.target.checked) storeKey('')
                }}
                className="accent-instrument"
              />
              Remember on this device
            </label>
            <Badge variant="outline">model · {AI_MODEL}</Badge>
          </div>
        </div>

        <Button
          onClick={run}
          disabled={status === 'loading' || !key.trim()}
          className="font-mono uppercase tracking-wider"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Adjudicating…
            </>
          ) : (
            <>
              <Sparkles className="size-4" /> Generate AI debrief
            </>
          )}
        </Button>

        {status === 'error' && (
          <div className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive-foreground">
            {error}
          </div>
        )}

        {status === 'done' && result && (
          <div className="space-y-2 rounded-md border border-instrument/30 bg-instrument/5 p-4">
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-instrument">
              <Sparkles className="size-3" /> Adjudicator's debrief
            </div>
            {result.split('\n').filter(Boolean).map((para, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-foreground/90">
                {para}
              </p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
