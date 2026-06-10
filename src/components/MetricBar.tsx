import type { MetricId } from '@/engine/types'
import { METRIC_META, signalLevel, SIGNAL_COLOR_VAR } from '@/engine/metrics'
import { cn } from '@/lib/utils'

/**
 * A single instrument readout: label, live value, and a bar coloured by signal
 * level (polarity-aware, so "healthy" is always calm regardless of direction).
 * Width transitions are disabled under prefers-reduced-motion via global CSS.
 */
export function MetricBar({
  id,
  value,
  delta,
}: {
  id: MetricId
  value: number
  /** Optional signed change to flag the most recent movement. */
  delta?: number
}) {
  const meta = METRIC_META[id]
  const level = signalLevel(id, value)
  const colour = SIGNAL_COLOR_VAR[level]
  const showDelta = typeof delta === 'number' && delta !== 0

  return (
    <div className="space-y-1" title={meta.description}>
      <div className="flex items-baseline justify-between gap-2 font-mono text-[11px]">
        <span className="uppercase tracking-wider text-muted-foreground">
          <span className="text-foreground/80">{meta.abbr}</span> {meta.label}
        </span>
        <span className="flex items-baseline gap-1.5">
          {showDelta && (
            <span
              className={cn(
                'tnum text-[10px]',
                delta > 0 ? 'text-instrument' : 'text-muted-foreground',
              )}
            >
              {delta > 0 ? '+' : ''}
              {delta}
            </span>
          )}
          <span className="tnum tabular-nums text-foreground" style={{ color: colour }}>
            {value}
          </span>
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
        <div
          className="h-full rounded-full transition-[width,background-color] duration-700 ease-out"
          style={{ width: `${value}%`, backgroundColor: colour }}
          role="meter"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${meta.label}: ${value} of 100`}
        />
      </div>
    </div>
  )
}
