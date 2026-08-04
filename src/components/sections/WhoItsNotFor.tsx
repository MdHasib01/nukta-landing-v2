import { AlertCircle, Ban } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function WhoItsNotFor() {
  const points = [
    "যারা overnight guaranteed result চান",
    "যারা প্রয়োজনীয় business information share করতে চান না",
    "যারা responsibility বা approval process follow করতে চান না",
    "যারা শুধু lowest-price vendor খুঁজছেন"
  ];

  return (
    <Section bg="ivory" className="!pt-0">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-card border border-sage/50 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            
            <div className="md:w-1/3">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Ban className="w-3.5 h-3.5" />
                Not For Everyone
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
                Nukta সবার জন্য নয়
              </h2>
              <p className="text-gray-600 font-bengali text-sm font-medium leading-relaxed">
                Nukta structured execution, transparency এবং long-term business improvement-এ বিশ্বাস করে।
              </p>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-bg-warm p-4 rounded-[16px]">
                  <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 font-bengali text-sm font-medium leading-tight">
                    {point}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-sage/30 text-center">
            <p className="text-gray-600 font-bengali text-sm font-medium max-w-2xl mx-auto">
              "সঠিক partnership তৈরি হয় shared commitment, clear communication এবং realistic expectation-এর মাধ্যমে।"
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
