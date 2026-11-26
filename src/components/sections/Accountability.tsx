import { UserCheck, CalendarClock, FileBarChart, MessagesSquare, RefreshCw } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const principles = [
  { num: "01", icon: UserCheck, title: "Clear Responsibility", desc: "প্রতিটি কাজের একজন নির্দিষ্ট owner থাকে।" },
  { num: "02", icon: CalendarClock, title: "Defined Deadline", desc: "কখন কাজ শেষ হবে—তা শুরুতেই নির্ধারিত থাকে।" },
  { num: "03", icon: FileBarChart, title: "Structured Reporting", desc: "Progress, blocker এবং outcome নিয়মিত report করা হয়।" },
  { num: "04", icon: MessagesSquare, title: "Review & Feedback", desc: "কাজ review করে প্রয়োজন অনুযায়ী correction ও improvement করা হয়।" },
  { num: "05", icon: RefreshCw, title: "Continuous Improvement", desc: "একই ভুল যেন বারবার না হয়—সে অনুযায়ী process উন্নত করা হয়।" }
];

export function Accountability() {
  return (
    <Section bg="warm" id="accountability">
      <Container>
        <SectionHeading
          eyebrow="Accountability"
          title="কাজে Accountability কীভাবে নিশ্চিত করি"
          centered
          subtitle="Clear responsibility, defined deadline, structured reporting এবং regular review-এর মাধ্যমে প্রতিটি কাজের progress ও outcome দৃশ্যমান রাখা হয়।"
        />

        <div className="relative">
          {/* connector line (desktop) */}
          <div className="absolute left-[10%] right-[10%] top-[22px] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" aria-hidden="true" />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {principles.map((item) => (
              <li key={item.num} className="group relative flex flex-col lg:items-center lg:text-center">
                <span className="relative z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white font-mono text-xs font-semibold text-primary shadow-card lg:flex">
                  {item.num}
                </span>
                <div className="card card-hover flex h-full w-full flex-col p-6 lg:mt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary lg:mx-auto">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold">
                    <span className="mr-2 font-mono text-xs text-muted-text lg:hidden">{item.num}</span>
                    {item.title}
                  </h3>
                  <p className="mt-2 font-bengali text-sm leading-relaxed text-body">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center font-display text-xl font-semibold leading-relaxed text-ink md:text-2xl">
          “আমরা শুধু কাজ শুরু করি না—কাজের দায়িত্ব, অগ্রগতি এবং ফলাফল <span className="text-primary">follow through</span> করি।”
        </p>
      </Container>
    </Section>
  );
}
