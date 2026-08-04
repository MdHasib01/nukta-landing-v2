import { PieChart, Info } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function ProfitSharing() {
  const points = [
    "Founder retains complete brand ownership",
    "Core product and brand remain the founder's",
    "Nukta becomes the operational partner",
    "Nukta grows only when the business grows"
  ];

  return (
    <Section bg="warm" className="!pb-0">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto pb-14 md:pb-20">
          <div>
            <SectionHeading 
              title="আমাদের model আলাদা কেন?" 
              className="mb-8 md:mb-10"
            />
            <ul className="space-y-4 mb-8">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-lg text-charcoal/80 font-medium">{point}</p>
                </li>
              ))}
            </ul>
            <div className="bg-sage/40 border border-sage p-4 rounded-xl flex gap-3 text-sm text-charcoal/80 font-bengali">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p>Profit-sharing structure project, responsibility, investment and agreement অনুযায়ী নির্ধারিত হবে।</p>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Visual Split */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-white overflow-hidden flex">
              {/* Founder 60% */}
              <div className="w-[60%] h-full bg-primary flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent)]"></div>
                <div className="text-center z-10 text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-1">60%</div>
                  <div className="text-xs md:text-sm font-medium tracking-wider uppercase opacity-90">Founder</div>
                </div>
              </div>
              {/* Nukta 40% */}
              <div className="w-[40%] h-full bg-accent flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent)]"></div>
                <div className="text-center z-10 text-white">
                  <div className="text-2xl md:text-3xl font-bold mb-1">40%</div>
                  <div className="text-xs md:text-sm font-medium tracking-wider uppercase opacity-90">Nukta</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 bg-white px-6 py-3 rounded-full shadow-lg border border-sage/50 flex items-center gap-3">
              <PieChart className="w-5 h-5 text-primary" />
              <span className="font-semibold text-charcoal">Profit-Sharing Model</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Profit Visual Bar */}
      <div className="h-12 bg-primary-deep flex items-center justify-between px-4 md:px-10 text-white w-full shadow-inner">
        <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-accent font-bold">60%</span>
            <span className="text-[10px] uppercase font-medium text-white/70">Founder's Profit Share</span>
          </div>
          <div className="w-px h-4 bg-white/20 flex-shrink-0"></div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-accent font-bold">40%</span>
            <span className="text-[10px] uppercase font-medium text-white/70">Nukta's Growth Fee</span>
          </div>
        </div>
        <div className="hidden md:block text-[10px] italic text-white/60">
          Founder retains 100% Brand Ownership
        </div>
      </div>
    </Section>
  );
}
