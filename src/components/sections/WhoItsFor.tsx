'use client';

import { Lightbulb, TrendingUp, Clock, Settings, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const audiences = [
  {
    icon: Lightbulb,
    title: "New Founder",
    desc: "Idea বা product আছে, কিন্তু launch করার complete execution structure নেই।"
  },
  {
    icon: TrendingUp,
    title: "Growing Brand",
    desc: "Sales হচ্ছে, কিন্তু marketing, content, team এবং operations consistent নয়।"
  },
  {
    icon: Clock,
    title: "Overloaded Founder",
    desc: "Founder নিজের সময়ের বড় অংশ daily operational problem সমাধানে ব্যয় করছেন।"
  },
  {
    icon: Settings,
    title: "Established Business",
    desc: "Existing team আছে, কিন্তু stronger system, automation, reporting এবং accountability প্রয়োজন।"
  }
];

export function WhoItsFor() {
  return (
    <Section bg="white" id="who-its-for">
      <Container>
        <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Who it's for"
            title="Nukta কার জন্য?"
            subtitle="Nukta সেই founder এবং brand-এর জন্য, যারা business grow করতে চান—but scattered execution, team pressure অথবা operational complexity তাদের গতি কমিয়ে দিচ্ছে।"
            className="mb-0 md:mb-0"
          />
          <Button
            size="lg"
            className="shrink-0 self-start lg:self-end"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => document.getElementById('stage')?.focus(), 800);
              }
            }}
          >
            আপনার Business Stage জানান
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <div key={audience.title} className="card card-hover group flex flex-col p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <audience.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-text">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-8 text-lg font-bold">{audience.title}</h3>
              <p className="mt-2 font-bengali text-[15px] leading-relaxed text-body">{audience.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
