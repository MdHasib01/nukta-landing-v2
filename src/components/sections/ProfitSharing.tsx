import { Info, Check, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const points = [
  "Founder retains complete brand ownership",
  "Core product and brand remain the founder's",
  "Nukta becomes the operational partner",
  "Nukta grows only when the business grows"
];

export function ProfitSharing() {
  return (
    <Section bg="white" id="model">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Partnership model" title="আমাদের model আলাদা কেন?" className="mb-8 md:mb-10" />
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <p className="text-base font-medium text-ink md:text-lg">{point}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3 rounded-2xl border border-line bg-bg-warm p-4 font-bengali text-sm leading-relaxed text-body">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p>Profit-sharing structure project, responsibility, investment and agreement অনুযায়ী নির্ধারিত হবে।</p>
            </div>
          </div>

          {/* Split visual */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(11,107,75,0.12),transparent)] blur-xl" aria-hidden="true" />
            <div className="rounded-[28px] border border-line bg-white p-7 shadow-elevated md:p-9">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">Profit-Sharing Model</p>
                <span className="rounded-full bg-bg-warm px-2.5 py-1 text-[11px] font-medium text-muted-text ring-1 ring-line">Per agreement</span>
              </div>

              <div className="mt-8 grid grid-cols-[3fr_2fr] gap-6">
                <div>
                  <p className="font-display text-5xl font-extrabold tracking-tight text-primary md:text-6xl">60%</p>
                  <p className="mt-2 text-sm font-medium text-body">Founder&apos;s Profit Share</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-extrabold tracking-tight text-accent md:text-6xl">40%</p>
                  <p className="mt-2 text-sm font-medium text-body">Nukta&apos;s Growth Fee</p>
                </div>
              </div>

              <div className="mt-8 flex h-3 overflow-hidden rounded-full" role="img" aria-label="60% founder, 40% Nukta">
                <div className="w-[60%] bg-primary" />
                <div className="w-[40%] border-l-2 border-white bg-accent" />
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-primary-soft p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-primary-deep">Founder retains 100% brand ownership</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
