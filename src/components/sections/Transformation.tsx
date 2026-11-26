import { X, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const beforeList = [
  "Random tasks",
  "Late response",
  "Scattered team",
  "Weak follow-up",
  "No reporting",
  "Founder overload"
];

const afterList = [
  "Clear workflow",
  "Assigned responsibility",
  "Faster execution",
  "Automated follow-up",
  "Central reporting",
  "Founder focus"
];

export function Transformation() {
  return (
    <Section bg="white">
      <Container>
        <SectionHeading
          eyebrow="The shift"
          title="Chaos থেকে System. System থেকে Growth."
          centered
        />

        <div className="relative mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-[24px] border border-line bg-bg-warm p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">Before</p>
            <ul className="mt-6 space-y-4">
              {beforeList.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-medium text-muted-text md:text-lg">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-rose-500 ring-1 ring-line">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow connector */}
          <span className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-primary shadow-card-hover md:flex" aria-hidden="true">
            <ArrowRight className="h-5 w-5" />
          </span>

          {/* After */}
          <div className="relative overflow-hidden rounded-[24px] bg-primary-deep p-7 text-white shadow-elevated md:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(201,151,28,0.35),transparent)]" aria-hidden="true" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-accent">After Nukta</p>
            <ul className="relative mt-6 space-y-4">
              {afterList.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-medium text-white md:text-lg">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center font-display text-xl font-semibold leading-relaxed text-ink md:text-2xl">
          “আমরা শুধু service deliver করি না—business-এর ভিতরের <span className="text-primary">execution system</span> build করি।”
        </p>
      </Container>
    </Section>
  );
}
