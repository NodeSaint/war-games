import { Link } from 'react-router-dom'
import type { Scenario } from '@/engine/types'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const DIFFICULTY_TONE: Record<Scenario['difficulty'], string> = {
  Introductory: 'text-signal-good',
  Intermediate: 'text-signal-warn',
  Advanced: 'text-signal-high',
}

/** A catalogue dossier card — the entry point to a war game. */
export function DossierCard({ scenario }: { scenario: Scenario }) {
  return (
    <Link
      to={`/briefing/${scenario.id}`}
      className="group block rounded-lg focus-visible:outline-none"
      aria-label={`Open dossier: ${scenario.codename}`}
    >
      <Card className="flex h-full flex-col gap-4 p-5 transition-colors group-hover:border-instrument/50 group-focus-visible:border-instrument">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Exercise Dossier
            </div>
            <h3 className="font-mono text-lg font-bold tracking-wide text-foreground">
              {scenario.codename}
            </h3>
          </div>
          <Badge variant="outline">{scenario.domain}</Badge>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {scenario.basis}
        </p>

        <div className="flex items-center justify-between border-t border-border/60 pt-3 font-mono text-[11px]">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className={DIFFICULTY_TONE[scenario.difficulty]}>
              {scenario.difficulty}
            </span>
            <span className="tnum">{scenario.estPhases} phases</span>
          </div>
          <span className="flex items-center gap-1 text-instrument opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Open <ArrowRight className="size-3.5" />
          </span>
        </div>
      </Card>
    </Link>
  )
}
