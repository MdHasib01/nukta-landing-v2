import { TrendingDown, Users, Shuffle, MessageSquareWarning, UserCog, BarChart3 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const problems = [
  { icon: TrendingDown, text: "Marketing হচ্ছে, কিন্তু sales consistent না" },
  { icon: Users, text: "Team আছে, কিন্তু clear system নেই" },
  { icon: Shuffle, text: "Content, design ও operation scattered" },
  { icon: MessageSquareWarning, text: "Customer response ও follow-up দুর্বল" },
  { icon: UserCog, text: "Founder সবকিছু নিজে manage করছেন" },
  { icon: BarChart3, text: "Data আছে, কিন্তু actionable reporting নেই" },
];

export function ProblemAwareness() {
  return (
    <Section bg="warm" id="problem-awareness">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Business grow করতে গিয়ে কোথায় আটকে যাচ্ছেন?"
          centered
        />

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, text }) => (
            <div key={text} className="card card-hover flex items-start gap-4 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="pt-1.5 font-bengali text-base font-semibold leading-relaxed text-ink md:text-[17px]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote className="font-display text-xl font-semibold leading-relaxed text-ink md:text-2xl">
            “সমস্যা শুধু marketing-এ না—অনেক সময় business-এর ভিতরের{' '}
            <span className="text-primary">operation-এই growth আটকে থাকে।</span>”
          </blockquote>
        </figure>
      </Container>
    </Section>
  );
}
