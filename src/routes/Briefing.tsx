import { useParams, useNavigate, Link } from 'react-router-dom'
import { getScenario } from '@/scenarios'
import { useSession } from '@/engine/store'
import { METRIC_ORDER, METRIC_META } from '@/engine/metrics'
import { MetricBar } from '@/components/MetricBar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Play, Target } from 'lucide-react'

export function Briefing() {
  const { id } = useParams()
  const navigate = useNavigate()
  const start = useSession((s) => s.start)
  const scenario = id ? getScenario(id) : undefined

  if (!scenario) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground">That dossier could not be found.</p>
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="size-4" /> Back to catalogue
          </Link>
        </Button>
      </div>
    )
  }

  function begin() {
    if (!scenario) return
    start(scenario)
    navigate(`/play/${scenario.id}`)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Catalogue
      </Link>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="signal">{scenario.domain}</Badge>
          <Badge variant="outline">{scenario.difficulty}</Badge>
          <span className="font-mono text-[11px] text-muted-foreground tnum">
            {scenario.estPhases} phases
          </span>
        </div>
        <h1 className="font-mono text-3xl font-bold tracking-wide">{scenario.codename}</h1>
        <p className="font-mono text-sm text-instrument">{scenario.role}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Situation Brief
          </CardTitle>
        </CardHeader>
        <CardContent>
          {scenario.brief.split('\n\n').map((para, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed text-foreground/90 last:mb-0">
              {para}
            </p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Target className="size-3.5" /> Your Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {scenario.objectives.map((o, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-instrument" />
                {o}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Opening State
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {METRIC_ORDER.map((m) => (
            <MetricBar key={m} id={m} value={scenario.metricsInit[m]} />
          ))}
        </CardContent>
      </Card>

      <div className="rounded-md border border-border/60 bg-muted/30 p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
        <span className="text-foreground/80">REAL-WORLD BASIS · </span>
        {scenario.basis} All actors, states and events are fictional. This is a
        training exercise of no operational value.
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" onClick={begin} className="font-mono uppercase tracking-wider">
          <Play className="size-4" /> Begin exercise
        </Button>
        <p className="self-center text-xs text-muted-foreground">
          {METRIC_META.attribution.description}
        </p>
      </div>
    </div>
  )
}
