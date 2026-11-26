import { ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { HeroIllustration } from '@/components/ui/hero-illustration';

const pillars = ['Strategy', 'Manpower', 'Technology', 'Execution', 'Reporting', 'Growth'];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(11,107,75,0.12),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(201,151,28,0.10),transparent)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 py-1 pl-1 pr-3.5 text-xs font-medium text-body shadow-card backdrop-blur">
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-white">Nukta</span>
              One Stop Premium Business Service
            </span>

            <h1 className="mt-7 text-[40px] font-bold leading-[1.15] tracking-[-0.03em] sm:text-5xl lg:text-[60px] lg:leading-[1.1]">
              Founder <span className="text-primary">vision</span> দিবে,{' '}
              <br className="hidden md:block" />
              operation সামলাবে{' '}
              <span className="relative whitespace-nowrap text-ink">
                Nukta.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-accent"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-body md:text-lg">
              Production, branding, marketing, technology, customer support এবং business operation—সবকিছু একটি connected system-এর মাধ্যমে পরিচালনা করি, যাতে founder growth এবং decision-making-এ focus করতে পারেন।
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={buttonClasses({ size: 'lg' })}>
                আপনার Business নিয়ে কথা বলুন
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover/btn:translate-x-0.5" />
              </a>
              <a href="#services" className={buttonClasses({ variant: 'secondary', size: 'lg' })}>
                আমাদের Services দেখুন
              </a>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:150ms] lg:pl-6">
            <HeroIllustration />
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-24 border-t border-line pt-8 md:mt-28">
          <ul className="grid grid-cols-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {pillars.map((text, i) => (
              <li key={text} className="flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="font-mono text-xs text-muted-text">{String(i + 1).padStart(2, '0')}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
