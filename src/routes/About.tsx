import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-instrument">
          About
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          A thinking tool, not a video game.
        </h1>
      </header>

      <Card>
        <CardContent className="space-y-4 p-6 text-[15px] leading-relaxed text-foreground/90">
          <p>
            War Games is a single-player strategic decision simulator built for the
            War Studies community — students, researchers, and the wider defence and
            OSINT audience. You step into a senior role in a crisis, make the calls
            events force on you, and watch the situation evolve. Every decision is
            critiqued for its strengths, its risks, and the reasoning a competent
            leader might use to justify it. At the end you receive a debrief on how{' '}
            <em>you</em> tend to decide.
          </p>
          <p>
            It exists because the most valuable thing a war game teaches is not the
            right answer — there usually isn't one — but self-knowledge under
            pressure. When do you reach for escalation and when for the off-ramp? Do
            you wait for evidence or back your instinct? Do you keep a human hand on
            the irreversible decisions? Those defaults are what you carry into the
            real thing.
          </p>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
          How it is built
        </h2>
        <Card>
          <CardContent className="space-y-4 p-6 text-[15px] leading-relaxed text-foreground/90">
            <p>
              Scenarios are <strong>data, not code</strong>. One engine renders any
              war game written to a published schema, so researchers and educators can
              author new exercises — different domains, different lengths, different
              dilemmas — without touching the engine. The authoring contract lives in{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                SCHEMA.md
              </code>{' '}
              in the repository.
            </p>
            <p>
              The critique you read after each decision is authored by the scenario
              designer and works entirely offline. An optional AI deep-analysis — using
              your own Anthropic API key, held only in your browser — can add a
              personalised tutor's debrief on top.
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="classification-strip rounded-md border border-signal-warn/30 p-4 font-mono text-[12px] leading-relaxed text-muted-foreground">
        <span className="font-bold uppercase tracking-wider text-signal-warn/90">
          Exercise only ·{' '}
        </span>
        Every scenario, state, actor and event in War Games is fictional. Nothing here
        is operational, predictive, or an assessment of any real country, organisation
        or person. It is a training and thinking aid, nothing more.
      </div>

      <Button asChild size="lg" className="font-mono uppercase tracking-wider">
        <Link to="/">
          Browse the catalogue <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  )
}
