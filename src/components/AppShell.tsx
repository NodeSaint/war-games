import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ClassificationStrip } from './ClassificationStrip'

/** Persistent frame: brand header, classification strip, content, footer. */
export function AppShell({
  children,
  codename,
}: {
  children: ReactNode
  codename?: string
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-border/60 bg-card/40 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link
            to="/"
            className="group flex items-baseline gap-2 rounded-sm font-mono"
            aria-label="War Games home"
          >
            <span className="text-base font-bold tracking-[0.18em] text-foreground">
              WAR&nbsp;GAMES
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-instrument">
              ◆ decision simulator
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-xs">
            <Link
              to="/"
              className="rounded-sm px-3 py-1.5 font-mono uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Catalogue
            </Link>
            <Link
              to="/about"
              className="rounded-sm px-3 py-1.5 font-mono uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <ClassificationStrip codename={codename} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>

      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            War Games · a fictional training exercise · all actors and events are
            invented
          </span>
          <span className="text-muted-foreground/70">
            Built for War Studies · single-player · offline-complete
          </span>
        </div>
      </footer>
    </div>
  )
}
