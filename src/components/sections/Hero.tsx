import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { HeroIllustration } from '@/components/ui/hero-illustration';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-white to-bg-warm !border-t-0">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-sage text-primary rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                One Stop Premium Business Service
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.1] text-primary-deep font-medium tracking-tight">
                Founder <span className="italic">vision</span> দিবে, <br className="hidden md:block" />
                operation সামলাবে <span className="text-accent">Nukta.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed font-bengali font-medium">
                Production, branding, marketing, technology, customer support এবং business operation—সবকিছু একটি connected system-এর মাধ্যমে পরিচালনা করি, যাতে founder growth এবং decision-making-এ focus করতে পারেন।
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollTo('contact')}>
                আপনার Business নিয়ে কথা বলুন
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo('services')}>
                আমাদের Services দেখুন
              </Button>
            </div>
          </div>

          <div className="relative">
            <HeroIllustration />
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-sage flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-12">
          {['Strategy', 'Manpower', 'Technology', 'Execution', 'Reporting', 'Growth'].map((text) => (
            <div key={text} className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent"></span>
              {text}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
