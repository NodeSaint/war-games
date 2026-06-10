import { signalLevel, SIGNAL_COLOR_VAR } from '@/engine/metrics'

/**
 * The centrepiece instrument. Attribution confidence drives the whole exercise —
 * deciding before you are sure — so it gets a radial gauge, not just a bar.
 * A semicircular dial from 0 (no idea who) to 100 (certain).
 */
export function AttributionGauge({ value }: { value: number }) {
  const level = signalLevel('attribution', value)
  const colour = SIGNAL_COLOR_VAR[level]

  // Semicircle geometry: 180° sweep, needle rotates from -90° (0) to +90° (100).
  const radius = 70
  const cx = 90
  const cy = 84
  const circumference = Math.PI * radius
  const dash = (value / 100) * circumference
  const needleAngle = -90 + (value / 100) * 180
  const label =
    value >= 75 ? 'HIGH' : value >= 50 ? 'MODERATE' : value >= 25 ? 'LOW' : 'NEGLIGIBLE'

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 180 104"
        className="w-full max-w-[200px]"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Attribution confidence: ${value} of 100, ${label}`}
      >
        {/* Track */}
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Value arc */}
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke={colour}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          className="transition-[stroke-dasharray,stroke] duration-700 ease-out"
        />
        {/* Needle */}
        <g
          style={{
            transform: `rotate(${needleAngle}deg)`,
            transformOrigin: `${cx}px ${cy}px`,
            transition: 'transform 700ms ease-out',
          }}
        >
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy - radius + 6}
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <circle cx={cx} cy={cy} r="4" fill="hsl(var(--foreground))" />
      </svg>
      <div className="-mt-1 text-center">
        <div className="tnum text-2xl font-bold" style={{ color: colour }}>
          {value}
          <span className="text-sm text-muted-foreground">/100</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Attribution · {label}
        </div>
      </div>
    </div>
  )
}
