import { Lightbulb, TrendingUp, Clock, Settings, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function WhoItsFor() {
  const audiences = [
    {
      icon: Lightbulb,
      title: "New Founder",
      desc: "Idea বা product আছে, কিন্তু launch করার complete execution structure নেই।"
    },
    {
      icon: TrendingUp,
      title: "Growing Brand",
      desc: "Sales হচ্ছে, কিন্তু marketing, content, team এবং operations consistent নয়।"
    },
    {
      icon: Clock,
      title: "Overloaded Founder",
      desc: "Founder নিজের সময়ের বড় অংশ daily operational problem সমাধানে ব্যয় করছেন।"
    },
    {
      icon: Settings,
      title: "Established Business",
      desc: "Existing team আছে, কিন্তু stronger system, automation, reporting এবং accountability প্রয়োজন।"
    }
  ];

  return (
    <Section bg="white" id="who-its-for">
      <Container>
        <SectionHeading 
          title="Nukta কার জন্য?" 
          centered 
          subtitle="Nukta সেই founder এবং brand-এর জন্য, যারা business grow করতে চান—but scattered execution, team pressure অথবা operational complexity তাদের গতি কমিয়ে দিচ্ছে।"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8 md:mt-12">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-bg-warm p-6 rounded-[24px] shadow-sm border border-sage/30 hover:border-primary/40 hover:shadow-card transition-all group"
            >
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
                <audience.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-charcoal text-lg mb-3">{audience.title}</h3>
              <p className="text-gray-600 font-bengali text-sm font-medium leading-relaxed">
                {audience.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button 
            size="lg"
            className="group"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                  const stageSelect = document.getElementById('stage');
                  if (stageSelect) stageSelect.focus();
                }, 800);
              }
            }}
          >
            আপনার Business Stage জানান
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
