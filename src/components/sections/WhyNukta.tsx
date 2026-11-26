import { Briefcase, Users, Cpu, BarChart2, Crosshair, ClipboardCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const reasons = [
  { icon: Briefcase, title: "One operational partner" },
  { icon: Users, title: "Multi-disciplinary team" },
  { icon: Cpu, title: "AI-enabled workflow" },
  { icon: BarChart2, title: "Data-driven decisions" },
  { icon: Crosshair, title: "Founder-focused execution" },
  { icon: ClipboardCheck, title: "Centralised reporting and accountability" }
];

export function WhyNukta() {
  return (
    <Section bg="warm" id="why-nukta">
      <Container>
        <SectionHeading eyebrow="Why Nukta" title="কেন Nukta?" centered />

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="card card-hover group flex items-center gap-4 p-5 md:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <reason.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold leading-snug md:text-[17px]">{reason.title}</h3>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl font-bold leading-snug tracking-tight text-ink md:text-[32px]">
          “Brand আপনার। Backend, execution ও operational pressure—<span className="text-primary">আমাদের।</span>”
        </p>
      </Container>
    </Section>
  );
}
