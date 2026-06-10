import { Link } from 'react-router-dom'
import { listScenarios } from '@/scenarios'
import { DossierCard } from '@/components/DossierCard'
import { useSession } from '@/engine/store'
import { getScenario } from '@/scenarios'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Play } from 'lucide-react'

export function Catalog() {
  const scenarios = listScenarios()
  const session = useSession()
  const resumeScenario =
    session.scenarioId && session.view !== 'ended' && session.view !== 'briefing'
      ? getScenario(session.scenarioId)
      : null

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="space-y-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-instrument">
          Strategic Decision Simulator
        </div>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Strategic decision-making under uncertainty.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Each exercise places you in a senior role in a developing crisis and
          requires the decisions it would force on you. Every choice is assessed —
          its strengths, its risks, and the reasoning by which a competent
          decision-maker might justify it — and a structured debrief sets out how you
          tend to decide. The scenarios are fictional; the dilemmas and the concepts
          are drawn from contemporary strategic practice.
        </p>
      </section>

      {/* Resume banner */}
      {resumeScenario && (
        <Card className="classification-strip flex flex-col items-start justify-between gap-3 border-instrument/40 p-4 sm:flex-row sm:items-center">
          <div className="font-mono text-sm">
            <span className="text-muted-foreground">Exercise in progress · </span>
            <span className="font-bold text-foreground">{resumeScenario.codename}</span>
          </div>
          <Button asChild size="sm">
            <Link to={`/play/${resumeScenario.id}`}>
              <Play className="size-3.5" /> Resume exercise
            </Link>
          </Button>
        </Card>
      )}

      {/* Catalogue */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Exercise Catalogue
          </h2>
          <span className="font-mono text-[11px] text-muted-foreground tnum">
            {scenarios.length} available
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s) => (
            <DossierCard key={s.id} scenario={s} />
          ))}
        </div>
      </section>
    </div>
  )
}
