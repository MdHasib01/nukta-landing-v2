import { Target, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function FounderRole() {
  const founderTasks = [
    "Vision",
    "Product",
    "Major decisions",
    "Opportunity",
    "Growth direction"
  ];

  const nuktaTasks = [
    "Manpower",
    "Strategy",
    "System",
    "Execution",
    "Reporting",
    "Operational follow-up"
  ];

  return (
    <Section bg="primary" className="text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6 text-white">
            তাহলে Founder কী করবেন?
          </h2>
          <p className="text-xl md:text-2xl font-bengali font-medium text-white/90">
            "Founder-এর কাজ সব manage করা না।<br className="hidden md:block" />Founder-এর কাজ direction দেওয়া।"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Founder Role */}
          <div className="bg-primary-deep/50 p-6 md:p-8 rounded-[24px] border border-white/10 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/20 p-3 rounded-xl text-accent">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Founder focuses on:</h3>
            </div>
            <ul className="space-y-4">
              {founderTasks.map((task, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80 font-medium text-lg">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                  {task}
                </li>
              ))}
            </ul>
          </div>

          {/* Nukta Role */}
          <div className="bg-white text-charcoal p-6 md:p-8 rounded-[24px] shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sage/50 p-3 rounded-xl text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal">Nukta handles:</h3>
            </div>
            <ul className="space-y-4">
              {nuktaTasks.map((task, index) => (
                <li key={index} className="flex items-center gap-3 text-charcoal/80 font-medium text-lg">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary focus:ring-white/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Operational pressure কমান
          </Button>
        </div>
      </Container>
    </Section>
  );
}
