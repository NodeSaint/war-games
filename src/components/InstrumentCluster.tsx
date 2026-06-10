import type { Metrics } from '@/engine/types'
import { METRIC_ORDER } from '@/engine/metrics'
import { AttributionGauge } from './AttributionGauge'
import { MetricBar } from './MetricBar'
import { PhaseTracker } from './PhaseTracker'

/**
 * The instrument cluster — the signature live readout. Attribution sits up top as
 * the centrepiece gauge; the remaining five dimensions read out as bars; a phase
 * ladder shows progress. Everything moves in real time as decisions land.
 */
export function InstrumentCluster({
  metrics,
  lastEffects,
  phase,
  totalPhases,
  phaseLabel,
}: {
  metrics: Metrics
  lastEffects?: Partial<Metrics>
  phase: number
  totalPhases: number
  phaseLabel: string
}) {
  // Attribution gets the gauge; the rest become bars, in display order.
  const barMetrics = METRIC_ORDER.filter((m) => m !== 'attribution')

  return (
    <div className="space-y-5 rounded-lg border border-border bg-card/60 p-4 backdrop-blur">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>Instrument Cluster</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-instrument" />
          Live
        </span>
      </div>

      <AttributionGauge value={metrics.attribution} />

      <div className="space-y-3 border-t border-border/60 pt-4">
        {barMetrics.map((id) => (
          <MetricBar key={id} id={id} value={metrics[id]} delta={lastEffects?.[id]} />
        ))}
      </div>

      <div className="border-t border-border/60 pt-4">
        <PhaseTracker current={phase} total={totalPhases} label={phaseLabel} />
      </div>
    </div>
  )
}
