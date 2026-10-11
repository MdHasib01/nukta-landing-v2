import { CalendarDays, MapPin, Target, FileBadge, UserRound } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { business, foundingYear, foundingMonthYear } from '@/config/business';

export function About() {
  const facts = [
    { icon: CalendarDays, label: "Founded", value: foundingYear },
    { icon: MapPin, label: "Location", value: business.fullAddress },
    { icon: Target, label: "Focus", value: "Brand operations + AI software" },
    business.tradeLicenseNo && { icon: FileBadge, label: "Registration", value: `Trade License No. ${business.tradeLicenseNo}` },
    business.founderName && { icon: UserRound, label: "Founder", value: business.founderName },
  ].filter((fact): fact is { icon: typeof CalendarDays; label: string; value: string } => Boolean(fact));

  const lgCols: Record<number, string> = {
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
  };

  return (
    <Section bg="white" id="about">
      <Container>
        <SectionHeading
          title="About Nukta"
          centered
          className="mb-8 md:mb-10"
        />

        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium text-center max-w-3xl mx-auto">
          {business.legalName} is a venture studio based in Jashore, Bangladesh, operating since {foundingMonthYear}. We run our own direct-to-consumer brands and build AI-powered software tools, first for our own operations and then for other businesses in Bangladesh and South Asia.
        </p>

        <dl className={cn('grid sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mt-10 md:mt-14', lgCols[facts.length])}>
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={cn(
                'bg-bg-warm p-5 rounded-[20px] border-l-4 flex items-start gap-3',
                index % 2 === 0 ? 'border-primary' : 'border-accent'
              )}
            >
              <fact.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">{fact.label}</dt>
                <dd className="font-bold text-charcoal text-sm md:text-base leading-snug">{fact.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
