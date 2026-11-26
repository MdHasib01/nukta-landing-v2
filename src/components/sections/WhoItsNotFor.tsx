import { Ban, X } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const points = [
  "যারা overnight guaranteed result চান",
  "যারা প্রয়োজনীয় business information share করতে চান না",
  "যারা responsibility বা approval process follow করতে চান না",
  "যারা শুধু lowest-price vendor খুঁজছেন"
];

export function WhoItsNotFor() {
  return (
    <Section bg="white" className="!pt-0">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-line bg-bg-warm">
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-line p-8 md:p-10 lg:border-b-0 lg:border-r">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-rose-600 ring-1 ring-line">
                <Ban className="h-3.5 w-3.5" aria-hidden="true" />
                Not for everyone
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">Nukta সবার জন্য নয়</h2>
              <p className="mt-4 font-bengali text-[15px] leading-relaxed text-body">
                Nukta structured execution, transparency এবং long-term business improvement-এ বিশ্বাস করে।
              </p>
              <p className="mt-6 border-l-2 border-accent pl-4 font-bengali text-sm leading-relaxed text-muted-text">
                “সঠিক partnership তৈরি হয় shared commitment, clear communication এবং realistic expectation-এর মাধ্যমে।”
              </p>
            </div>

            <ul className="grid gap-px bg-line sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 bg-bg-warm p-6 md:p-8">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-muted-text ring-1 ring-line">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <p className="font-bengali text-[15px] font-medium leading-relaxed text-ink">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
