import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function Accountability() {
  const principles = [
    {
      num: "01",
      title: "Clear Responsibility",
      desc: "প্রতিটি কাজের একজন নির্দিষ্ট owner থাকে।"
    },
    {
      num: "02",
      title: "Defined Deadline",
      desc: "কখন কাজ শেষ হবে—তা শুরুতেই নির্ধারিত থাকে।"
    },
    {
      num: "03",
      title: "Structured Reporting",
      desc: "Progress, blocker এবং outcome নিয়মিত report করা হয়।"
    },
    {
      num: "04",
      title: "Review & Feedback",
      desc: "কাজ review করে প্রয়োজন অনুযায়ী correction ও improvement করা হয়।"
    },
    {
      num: "05",
      title: "Continuous Improvement",
      desc: "একই ভুল যেন বারবার না হয়—সে অনুযায়ী process উন্নত করা হয়।"
    }
  ];

  return (
    <Section bg="ivory" id="accountability" className="relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading 
          title="কাজে Accountability কীভাবে নিশ্চিত করি" 
          centered 
          subtitle="Clear responsibility, defined deadline, structured reporting এবং regular review-এর মাধ্যমে প্রতিটি কাজের progress ও outcome দৃশ্যমান রাখা হয়।"
        />
        
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-12 right-12 h-[2px] bg-sage/50 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-x-6 md:gap-y-12">
              {principles.map((item, index) => (
                <div key={index} className="relative z-10 bg-white p-6 rounded-[24px] shadow-card border-t-4 border-primary group hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                  <div className="absolute -top-5 bg-bg-ivory px-2">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-bg-ivory">
                      {item.num}
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary opacity-80" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-bengali text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bengali font-bold text-primary-deep leading-relaxed">
            "আমরা শুধু কাজ শুরু করি না—কাজের দায়িত্ব, অগ্রগতি এবং ফলাফল follow through করি।"
          </h3>
        </div>
      </Container>
    </Section>
  );
}
