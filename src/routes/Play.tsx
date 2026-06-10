import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getScenario } from '@/scenarios'
import { useSession, getNode } from '@/engine/store'
import { InstrumentCluster } from '@/components/InstrumentCluster'
import { CritiqueReveal } from '@/components/CritiqueReveal'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, ChevronRight, X } from 'lucide-react'

export function Play() {
  const { id } = useParams()
  const navigate = useNavigate()
  const session = useSession()
  const scenario = id ? getScenario(id) : undefined
  const [rationale, setRationale] = useState('')

  // Route guards: send the player where the session state actually is.
  useEffect(() => {
    if (!scenario) return
    if (session.view === 'ended') {
      navigate('/debrief', { replace: true })
    } else if (session.scenarioId !== scenario.id || session.view === 'briefing') {
      navigate(`/briefing/${scenario.id}`, { replace: true })
    }
  }, [scenario, session.view, session.scenarioId, navigate])

  if (!scenario) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground">That exercise could not be found.</p>
        <Button asChild variant="outline">
          <Link to="/">Back to catalogue</Link>
        </Button>
      </div>
    )
  }

  const node = getNode(scenario, session.currentNodeId)
  if (!node) return null

  const reviewing = session.view === 'reviewing'
  const last = session.lastStep
  const chosenOption = reviewing && last
    ? node.decision?.options.find((o) => o.id === last.optionId)
    : undefined

  function choose(optionId: string) {
    const option = node?.decision?.options.find((o) => o.id === optionId)
    if (!option) return
    session.choose(option, rationale)
    setRationale('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function next() {
    session.advance()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      {/* Main column */}
      <div className="order-2 space-y-6 lg:order-1">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-instrument">
            {node.phaseLabel}
          </div>
          <button
            onClick={() => {
              if (confirm('Abandon this exercise? Progress will be lost.')) {
                session.abandon()
                navigate('/')
              }
            }}
            className="inline-flex items-center gap-1 rounded-sm font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-destructive"
          >
            <X className="size-3" /> Abandon
          </button>
        </div>

        <h1 className="text-2xl font-bold tracking-tight">{node.title}</h1>

        <div className="space-y-3 text-[15px] leading-relaxed text-foreground/90">
          {node.narrative.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* DECIDING — show the decision */}
        {!reviewing && node.decision && (
          <div className="space-y-5 border-t border-border/60 pt-6">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-wide text-foreground">
              {node.decision.prompt}
            </h2>

            <div className="space-y-2">
              <label
                htmlFor="rationale"
                className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                Your reasoning <span className="opacity-60">(optional — sharpens your debrief)</span>
              </label>
              <Textarea
                id="rationale"
                value={rationale}
                onChange={(e) => setRationale(e.target.value)}
                placeholder="Why are you about to make this call? One line is enough."
                className="font-mono text-sm"
              />
            </div>

            <div className="grid gap-3">
              {node.decision.options.map((o, i) => (
                <button
                  key={o.id}
                  onClick={() => choose(o.id)}
                  className="group flex items-start gap-3 rounded-md border border-border bg-card/40 p-4 text-left transition-colors hover:border-instrument/60 hover:bg-accent/40 focus-visible:border-instrument"
                >
                  <span className="mt-0.5 font-mono text-xs text-muted-foreground tnum">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1 text-sm leading-relaxed text-foreground/90">
                    {o.label}
                  </span>
                  <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-instrument" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* REVIEWING — show the consequence + authored critique */}
        {reviewing && last && chosenOption && (
          <div className="space-y-6 border-t border-border/60 pt-6">
            <CritiqueReveal
              optionLabel={last.optionLabel}
              consequence={last.consequence}
              critique={chosenOption.critique}
              rationale={last.rationale}
            />
            <Button onClick={next} size="lg" className="font-mono uppercase tracking-wider">
              Continue <ArrowRight className="size-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Instrument sidebar */}
      <div className="order-1 lg:order-2">
        <div className="lg:sticky lg:top-6">
          <InstrumentCluster
            metrics={session.metrics}
            lastEffects={reviewing ? last?.effects : undefined}
            phase={node.phase}
            totalPhases={scenario.estPhases}
            phaseLabel={`Phase ${node.phase}`}
          />
        </div>
      </div>
    </div>
  )
}
