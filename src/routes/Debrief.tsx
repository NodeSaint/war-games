import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSession } from '@/engine/store'
import { getScenario } from '@/scenarios'
import { METRIC_ORDER } from '@/engine/metrics'
import { computeProfile, PROFILE_AXES } from '@/engine/profile'
import { tallyStyleTags } from '@/engine/endings'
import { deriveInsights, pickKeyJunctures } from '@/engine/debrief'
import { MetricBar } from '@/components/MetricBar'
import { ProfileSpectrum } from '@/components/ProfileSpectrum'
import { AiAnalysisPanel } from '@/components/AiAnalysisPanel'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, AlertTriangle, RotateCcw, LayoutGrid } from 'lucide-react'

const TONE_RING: Record<string, string> = {
  good: 'border-signal-good/50',
  mixed: 'border-signal-warn/50',
  bad: 'border-signal-crit/50',
}

export function Debrief() {
  const navigate = useNavigate()
  const session = useSession()
  const scenario = session.scenarioId ? getScenario(session.scenarioId) : undefined
  const { ending, metrics, path } = session

  const tally = useMemo(() => tallyStyleTags(path), [path])
  const axes = useMemo(() => computeProfile(tally), [tally])
  const insights = useMemo(() => deriveInsights(metrics, axes), [metrics, axes])
  const junctures = useMemo(
    () => (scenario ? pickKeyJunctures(scenario, path) : []),
    [scenario, path],
  )

  if (!scenario || !ending || path.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground">No completed exercise to debrief.</p>
        <Button asChild variant="outline">
          <Link to="/">Back to catalogue</Link>
        </Button>
      </div>
    )
  }

  function replay() {
    session.start(scenario!)
    navigate(`/play/${scenario!.id}`)
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-instrument">
        Exercise Debrief · {scenario.codename}
      </div>

      {/* Ending banner */}
      <Card className={`border-2 ${TONE_RING[ending.tone]}`}>
        <CardContent className="space-y-3 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={ending.tone === 'good' ? 'signal' : 'warn'}>
              {ending.tone === 'good' ? 'Outcome · Favourable' : ending.tone === 'bad' ? 'Outcome · Adverse' : 'Outcome · Mixed'}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{ending.title}</h1>
          <p className="text-lg font-medium text-foreground/90">{ending.verdict}</p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {ending.narrative}
          </p>
        </CardContent>
      </Card>

      {/* Final state */}
      <section className="space-y-4">
        <SectionTitle>Final State</SectionTitle>
        <Card>
          <CardContent className="grid gap-3 p-6 sm:grid-cols-2">
            {METRIC_ORDER.map((m) => (
              <MetricBar key={m} id={m} value={metrics[m]} />
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Decision-making profile */}
      <section className="space-y-4">
        <SectionTitle>How You Decided</SectionTitle>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Your choices, read across four spectrums. There is no "correct" position —
          each tendency is a strength in some situations and a liability in others.
          The point is to see your defaults.
        </p>
        <Card>
          <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
            {axes.map((axis) => {
              const def = PROFILE_AXES.find((a) => a.id === axis.id)!
              return (
                <ProfileSpectrum
                  key={axis.id}
                  axis={axis}
                  leftLabel={def.negLabel}
                  rightLabel={def.posLabel}
                />
              )
            })}
          </CardContent>
        </Card>
      </section>

      {/* Strengths & blind spots */}
      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal-good">
              <Check className="size-3.5" /> Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {insights.strengths.map((s, i) => (
                <li key={i} className="text-sm leading-relaxed text-foreground/85">
                  {s}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal-high">
              <AlertTriangle className="size-3.5" /> Blind Spots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {insights.blindSpots.length > 0 ? (
                insights.blindSpots.map((s, i) => (
                  <li key={i} className="text-sm leading-relaxed text-foreground/85">
                    {s}
                  </li>
                ))
              ) : (
                <li className="text-sm leading-relaxed text-muted-foreground">
                  No single dimension finished in crisis — a creditable, balanced
                  performance.
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Key junctures — roads not taken */}
      <section className="space-y-4">
        <SectionTitle>Key Junctures</SectionTitle>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The decisions that moved the situation most, and the roads you did not take.
        </p>
        <div className="space-y-3">
          {junctures.map(({ step, altLabels }) => (
            <Card key={step.nodeId}>
              <CardContent className="space-y-3 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {step.phaseLabel}
                </div>
                <div className="text-sm font-medium text-foreground">
                  You chose:{' '}
                  <span className="border-l-2 border-instrument pl-2">{step.optionLabel}</span>
                </div>
                {altLabels.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      You could have:
                    </div>
                    <ul className="space-y-1">
                      {altLabels.map((l, i) => (
                        <li key={i} className="pl-2 text-sm text-muted-foreground">
                          — {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How this reflects real life */}
      <section className="space-y-4">
        <SectionTitle>How This Reflects Real Life</SectionTitle>
        <Card>
          <CardContent className="space-y-3 p-6 text-[15px] leading-relaxed text-foreground/90">
            <p>
              The hardest part of a crisis like this is not the final decision — it is
              that you are forced to act before you understand. Real decision-makers
              rarely get the clean attribution, the unambiguous intelligence, or the
              time the textbook case assumes. They decide on partial pictures, under
              audience costs at home, with allies whose interests only partly overlap
              theirs, and increasingly against the clock of automated systems that move
              faster than human deliberation.
            </p>
            <p>
              Whatever outcome you reached, the value is in noticing your own defaults:
              when you reached for pressure and when you reached for the off-ramp, when
              you waited for evidence and when you backed your instinct, and whether you
              kept a human hand on the decisions that could not be undone. Those habits
              are what you carry into the next crisis — real or simulated.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* AI deep-analysis (optional, BYO key) */}
      <section className="space-y-4">
        <SectionTitle>AI Deep-Analysis · Optional</SectionTitle>
        <AiAnalysisPanel scenario={scenario} path={path} metrics={metrics} ending={ending} />
      </section>

      {/* Actions */}
      <div className="flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row">
        <Button onClick={replay} variant="outline" className="font-mono uppercase tracking-wider">
          <RotateCcw className="size-4" /> Replay this exercise
        </Button>
        <Button asChild className="font-mono uppercase tracking-wider">
          <Link to="/">
            <LayoutGrid className="size-4" /> Back to catalogue
          </Link>
        </Button>
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </h2>
  )
}
