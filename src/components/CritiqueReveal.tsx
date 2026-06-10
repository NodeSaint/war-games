import type { Critique } from '@/engine/types'
import { Card, CardContent } from '@/components/ui/card'
import { Check, AlertTriangle, Scale, BookOpen } from 'lucide-react'

/**
 * The pedagogical heart: after a decision, show what happened and the authored
 * critique — strengths, risks, the steelman for choosing it, and a doctrinal note.
 * This is the offline-complete baseline; the optional AI panel layers on top later.
 */
export function CritiqueReveal({
  optionLabel,
  consequence,
  critique,
  rationale,
}: {
  optionLabel: string
  consequence: string
  critique: Critique
  rationale?: string
}) {
  return (
    <div className="space-y-5">
      {/* What you chose + what happened */}
      <div className="space-y-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Decision taken
        </div>
        <p className="border-l-2 border-instrument pl-3 text-sm font-medium text-foreground">
          {optionLabel}
        </p>
        {rationale && (
          <p className="border-l-2 border-border pl-3 font-mono text-xs italic text-muted-foreground">
            Your reasoning: “{rationale}”
          </p>
        )}
        <p className="text-[15px] leading-relaxed text-foreground/90">{consequence}</p>
      </div>

      {/* Authored critique */}
      <Card className="bg-card/60">
        <CardContent className="grid gap-5 p-5 sm:grid-cols-2">
          <CritiqueList
            icon={<Check className="size-3.5 text-signal-good" />}
            title="Strengths"
            items={critique.strengths}
          />
          <CritiqueList
            icon={<AlertTriangle className="size-3.5 text-signal-high" />}
            title="Risks"
            items={critique.risks}
          />
          <CritiqueBlock
            icon={<Scale className="size-3.5 text-instrument" />}
            title="Why a leader might choose this"
            body={critique.whyChosen}
          />
          <CritiqueBlock
            icon={<BookOpen className="size-3.5 text-instrument" />}
            title="Doctrinal note"
            body={critique.doctrine}
          />
        </CardContent>
      </Card>
    </div>
  )
}

function CritiqueList({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {icon} {title}
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="text-sm leading-relaxed text-foreground/85">
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CritiqueBlock({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {icon} {title}
      </div>
      <p className="text-sm leading-relaxed text-foreground/85">{body}</p>
    </div>
  )
}
