import { Target, Layers, Check, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/section-heading';

const founderTasks = ["Vision", "Product", "Major decisions", "Opportunity", "Growth direction"];

const nuktaTasks = ["Manpower", "Strategy", "System", "Execution", "Reporting", "Operational follow-up"];

export function FounderRole() {
  return (
    <Section bg="primary" className="overflow-hidden bg-primary-deep">
      <div className="pointer-events-none absolute inset-0 bg-grid-light mask-fade" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,151,28,0.18),transparent)]" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <Eyebrow tone="light" className="mb-4">Division of roles</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.025em] text-white md:text-[44px]">
            তাহলে Founder কী করবেন?
          </h2>
          <p className="mt-6 font-display text-xl font-medium leading-relaxed text-white/80 md:text-2xl">
            “Founder-এর কাজ সব manage করা না।<br className="hidden md:block" /> Founder-এর কাজ direction দেওয়া।”
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-white">Founder focuses on</h3>
            </div>
            <ul className="mt-7 space-y-3.5">
              {founderTasks.map((task) => (
                <li key={task} className="flex items-center gap-3 text-base font-medium text-white/85 md:text-lg">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {task}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-white p-7 shadow-elevated md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">Nukta handles</h3>
            </div>
            <ul className="mt-7 space-y-3.5">
              {nuktaTasks.map((task) => (
                <li key={task} className="flex items-center gap-3 text-base font-medium text-ink md:text-lg">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center md:mt-14">
          <a href="#contact" className={buttonClasses({ variant: 'light', size: 'lg' })}>
            Operational pressure কমান
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
