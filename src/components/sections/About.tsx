import { CalendarDays, MapPin, Target, FileBadge, UserRound } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { business, foundingYear, foundingMonthYear } from '@/config/business';

export function About() {
  const facts = [
    { icon: CalendarDays, label: "Founded", value: foundingYear },
    { icon: MapPin, label: "Location", value: business.fullAddress },
    { icon: Target, label: "Focus", value: "Brand operations + AI software" },
    business.tradeLicenseNo && { icon: FileBadge, label: "Registration", value: `Trade License No. ${business.tradeLicenseNo}` },
    business.founderName && { icon: UserRound, label: "Founder", value: business.founderName },
  ].filter((fact): fact is { icon: typeof CalendarDays; label: string; value: string } => Boolean(fact));

  return (
    <Section bg="white" id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About" title="About Nukta" className="mb-6 md:mb-8" />
            <p className="max-w-2xl text-lg leading-relaxed text-body md:text-xl md:leading-relaxed">
              {business.legalName} is a venture studio based in Jashore, Bangladesh, operating since {foundingMonthYear}. We run our own direct-to-consumer brands and build AI-powered software tools, first for our own operations and then for other businesses in Bangladesh and South Asia.
            </p>
          </div>

          <dl className="self-end divide-y divide-line overflow-hidden rounded-[24px] border border-line bg-bg-warm">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-4 p-5 md:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-line">
                  <fact.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-text">{fact.label}</dt>
                  <dd className="mt-1 font-semibold leading-snug text-ink">{fact.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
