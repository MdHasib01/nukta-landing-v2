import { Search, Map, Settings, Users, PlayCircle, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function HowWeWork() {
  const steps = [
    { num: "01", icon: Search, title: "Business Audit", desc: "বর্তমান অবস্থা ও সমস্যা চিহ্নিত করা।" },
    { num: "02", icon: Map, title: "Problem & Opportunity Mapping", desc: "কোথায় গ্যাপ আছে এবং কোথায় সুযোগ আছে তা বের করা।" },
    { num: "03", icon: Settings, title: "Growth & Operational Plan", desc: "একটি ক্লিয়ার রোডম্যাপ তৈরি করা।" },
    { num: "04", icon: Users, title: "Team & System Setup", desc: "সঠিক লোকবল ও টেকনোলজি সেটআপ করা।" },
    { num: "05", icon: PlayCircle, title: "Execution & Monitoring", desc: "প্ল্যান অনুযায়ী কাজ করা ও ট্রাক করা।" },
    { num: "06", icon: TrendingUp, title: "Optimisation & Scale", desc: "ডেটা এনালাইজ করে গ্রোথ আরও বাড়ানো।" }
  ];

  return (
    <Section bg="ivory" id="how-we-work" className="relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading 
          title="আমরা কীভাবে কাজ করি" 
          centered 
        />
        
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-8 right-8 h-[2px] bg-sage/50 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`relative z-10 bg-white p-6 md:p-8 rounded-[24px] shadow-card border-l-4 group hover:bg-primary transition-all flex flex-col items-center text-center ${index % 2 === 0 ? 'border-primary' : 'border-accent'}`}>
                  <div className="absolute -top-5 px-2 bg-bg-ivory group-hover:bg-primary transition-colors duration-300">
                    <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-bg-ivory ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}>
                      {step.num}
                    </div>
                  </div>
                  <div className="mt-4 mb-4 text-primary group-hover:text-white transition-colors">
                    <step.icon className="w-8 h-8 opacity-80" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-white transition-colors mb-2">{step.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/80 transition-colors font-bengali text-sm font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
