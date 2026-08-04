import { AlertCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function ProblemAwareness() {
  const problems = [
    "Marketing হচ্ছে, কিন্তু sales consistent না",
    "Team আছে, কিন্তু clear system নেই",
    "Content, design ও operation scattered",
    "Customer response ও follow-up দুর্বল",
    "Founder সবকিছু নিজে manage করছেন",
    "Data আছে, কিন্তু actionable reporting নেই"
  ];

  return (
    <Section bg="ivory" id="problem-awareness">
      <Container>
        <SectionHeading 
          title="Business grow করতে গিয়ে কোথায় আটকে যাচ্ছেন?" 
          centered 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`bg-white p-5 md:p-6 rounded-[24px] shadow-card border-l-4 group hover:bg-primary transition-all flex items-start gap-4 ${index % 2 === 0 ? 'border-primary' : 'border-accent'}`}
            >
              <div className="bg-red-50 p-2 rounded-full flex-shrink-0 mt-1 group-hover:bg-white/20 transition-colors">
                <AlertCircle className="w-5 h-5 text-red-500 group-hover:text-white" />
              </div>
              <p className="font-bengali text-base md:text-lg text-charcoal group-hover:text-white leading-relaxed font-bold transition-colors">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4">
          <p className="text-lg md:text-xl lg:text-2xl font-bengali font-medium text-primary-deep leading-relaxed">
            "সমস্যা শুধু marketing-এ না—অনেক সময় business-এর ভিতরের operation-এই growth আটকে থাকে।"
          </p>
        </div>
      </Container>
    </Section>
  );
}
