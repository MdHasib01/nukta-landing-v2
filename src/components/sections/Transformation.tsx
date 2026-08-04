import { X, Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function Transformation() {
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

  return (
    <Section bg="warm">
      <Container>
        <SectionHeading 
          title="Chaos থেকে System. System থেকে Growth." 
          centered 
        />

        <div className="max-w-4xl mx-auto mt-8 md:mt-12 grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* Before Card */}
          <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-sage/50 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-full h-2 bg-red-400 group-hover:bg-red-500 transition-colors"></div>
            <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Before</h3>
            <ul className="space-y-4">
              {beforeList.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-500 font-medium text-lg">
                  <div className="bg-red-50 p-1.5 rounded-full flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-primary p-6 md:p-8 rounded-[24px] shadow-lg border border-primary-deep relative overflow-hidden text-white group">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent group-hover:bg-white transition-colors"></div>
            <h3 className="text-2xl font-bold mb-6 font-serif text-white">After Nukta</h3>
            <ul className="space-y-4">
              {afterList.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90 font-medium text-lg">
                  <div className="bg-white/20 p-1.5 rounded-full flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <Check className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4">
          <p className="text-xl md:text-2xl font-bengali font-medium text-primary-deep">
            "আমরা শুধু service deliver করি না—business-এর ভিতরের <span className="text-primary font-bold">execution system</span> build করি।"
          </p>
        </div>
      </Container>
    </Section>
  );
}
