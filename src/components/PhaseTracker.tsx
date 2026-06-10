import { cn } from '@/lib/utils'

/** A compact phase ladder showing how far through the crisis the player is. */
export function PhaseTracker({
  current,
  total,
  label,
}: {
  current: number
  total: number
  label: string
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>{label}</span>
        <span className="tnum">
          {current.toString().padStart(2, '0')} / {total.toString().padStart(2, '0')}
        </span>
      </div>
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: total }, (_, i) => {
          const n = i + 1
          return (
            <div
              key={n}
              className={cn(
                'h-1 flex-1 rounded-full transition-colors duration-500',
                n < current && 'bg-instrument/50',
                n === current && 'bg-instrument',
                n > current && 'bg-muted/60',
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
