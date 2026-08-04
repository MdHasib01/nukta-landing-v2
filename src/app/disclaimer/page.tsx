import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { business } from '@/config/business';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: `Disclaimer | ${business.businessName}`,
  description: `Disclaimer for ${business.businessName}.`,
};

export default function DisclaimerPage() {
  return (
    <main className="flex-grow pt-24 pb-16">
      <Section bg="white">
        <Container className="max-w-4xl">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">
              <strong>Draft Document:</strong> This disclaimer is a baseline placeholder. It requires review by legal counsel before the website is launched in production.
            </p>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">Disclaimer</h1>
          <p className="text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-sage max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. No Guaranteed Business Results</h2>
              <p>{business.businessName} provides strategic and operational support. However, we do not and cannot guarantee specific business outcomes, growth metrics, or performance results.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. No Guaranteed Sales or Profit</h2>
              <p>Any references to increased sales, revenue, or profit are provided as examples of potential outcomes and are not guarantees of future performance for your specific business.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Multiple Variables</h2>
              <p>Business outcomes depend on multiple factors, including market conditions, product-market fit, competition, and external economic variables beyond the control of {business.businessName}.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Illustrative Models</h2>
              <p>Any profit-sharing examples, equity models, or financial projections shown on this website are purely illustrative. Actual financial arrangements will be determined on a case-by-case basis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Written Agreement Required</h2>
              <p>Final terms of service, deliverables, and expectations require a formal written agreement signed by authorized representatives of both parties.</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}
