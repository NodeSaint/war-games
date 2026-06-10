import type { AxisReading } from '@/engine/profile'
import { cn } from '@/lib/utils'

/** One decision-tendency spectrum with a marker showing where the player sat. */
export function ProfileSpectrum({ axis, leftLabel, rightLabel }: {
  axis: AxisReading
  leftLabel: string
  rightLabel: string
}) {
  // score -1..1 → 0..100% position on the bar.
  const pos = ((axis.score + 1) / 2) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-sm font-semibold text-foreground">
          {axis.leaning}
        </span>
        <span
          className={cn(
            'font-mono text-[10px] uppercase tracking-wider',
            axis.strength === 'pronounced' && 'text-instrument',
            axis.strength === 'moderate' && 'text-muted-foreground',
            axis.strength === 'balanced' && 'text-muted-foreground/70',
          )}
        >
          {axis.strength}
        </span>
      </div>

      <div className="relative h-2 rounded-full bg-gradient-to-r from-muted via-muted/40 to-muted">
        {/* centre tick */}
        <div className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-border" />
        {/* marker */}
        <div
          className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-instrument shadow transition-[left] duration-700"
          style={{ left: `${pos}%` }}
        />
      </div>

      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{axis.summary}</p>
    </div>
  )
}
