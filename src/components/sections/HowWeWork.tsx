import { Search, Map, Settings, Users, PlayCircle, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const steps = [
  { num: "01", icon: Search, title: "Business Audit", desc: "বর্তমান অবস্থা ও সমস্যা চিহ্নিত করা।" },
  { num: "02", icon: Map, title: "Problem & Opportunity Mapping", desc: "কোথায় গ্যাপ আছে এবং কোথায় সুযোগ আছে তা বের করা।" },
  { num: "03", icon: Settings, title: "Growth & Operational Plan", desc: "একটি ক্লিয়ার রোডম্যাপ তৈরি করা।" },
  { num: "04", icon: Users, title: "Team & System Setup", desc: "সঠিক লোকবল ও টেকনোলজি সেটআপ করা।" },
  { num: "05", icon: PlayCircle, title: "Execution & Monitoring", desc: "প্ল্যান অনুযায়ী কাজ করা ও ট্রাক করা।" },
  { num: "06", icon: TrendingUp, title: "Optimisation & Scale", desc: "ডেটা এনালাইজ করে গ্রোথ আরও বাড়ানো।" }
];

export function HowWeWork() {
  return (
    <Section bg="warm" id="how-we-work">
      <Container>
        <SectionHeading eyebrow="Process" title="আমরা কীভাবে কাজ করি" centered />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.num} className="card card-hover group relative overflow-hidden p-7">
              <span
                className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[96px] font-extrabold leading-none text-ink/[0.04] transition-colors group-hover:text-primary/[0.08]"
                aria-hidden="true"
              >
                {step.num}
              </span>
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">Step {step.num}</span>
              </div>
              <h3 className="relative mt-6 text-lg font-bold">{step.title}</h3>
              <p className="relative mt-2 font-bengali text-[15px] leading-relaxed text-body">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
