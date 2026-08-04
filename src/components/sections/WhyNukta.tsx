import { Briefcase, Users, Cpu, BarChart2, Crosshair, ClipboardCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function WhyNukta() {
  const reasons = [
    { icon: Briefcase, title: "One operational partner" },
    { icon: Users, title: "Multi-disciplinary team" },
    { icon: Cpu, title: "AI-enabled workflow" },
    { icon: BarChart2, title: "Data-driven decisions" },
    { icon: Crosshair, title: "Founder-focused execution" },
    { icon: ClipboardCheck, title: "Centralised reporting and accountability" }
  ];

  return (
    <Section bg="ivory" id="why-nukta" className="border-y border-sage/30">
      <Container>
        <SectionHeading 
          title="কেন Nukta?" 
          centered 
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8 md:mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`bg-white p-5 md:p-6 rounded-[24px] shadow-card border-l-4 group hover:bg-primary transition-all flex items-center gap-4 ${index % 2 === 0 ? 'border-primary' : 'border-accent'}`}
            >
              <div className="bg-sage/20 p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-charcoal group-hover:text-white text-lg transition-colors leading-tight">{reason.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bengali font-bold text-primary-deep leading-relaxed">
            "Brand আপনার। Backend, execution ও operational pressure—আমাদের।"
          </h3>
        </div>
      </Container>
    </Section>
  );
}
