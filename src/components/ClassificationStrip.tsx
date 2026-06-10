import { cn } from '@/lib/utils'

/**
 * The "EXERCISE — NOT REAL" classification banding that frames the whole tool.
 * A constant reminder this is a training simulation, never an operational system.
 */
export function ClassificationStrip({
  codename,
  className,
}: {
  codename?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'classification-strip flex items-center justify-between gap-4 border-y border-signal-warn/30 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-warn/90',
        className,
      )}
      role="note"
      aria-label="Exercise classification banner"
    >
      <span>Exercise — Not Real</span>
      <span className="hidden sm:inline">Training Simulation · No Operational Value</span>
      <span className="tnum">{codename ?? 'WAR GAMES'}</span>
    </div>
  )
}
