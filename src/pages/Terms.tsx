import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { business } from '@/config/business';
import { AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | {business.businessName}</title>
        <meta name="description" content={`Terms of Service for ${business.businessName}.`} />
        <link rel="canonical" href="https://nukta.com/terms" />
      </Helmet>
      <main className="flex-grow pt-24 pb-16">
      <Section bg="white">
        <Container className="max-w-4xl">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">
              <strong>Draft Document:</strong> This terms of service is a baseline placeholder. It requires review by legal counsel before the website is launched in production.
            </p>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">Terms of Service</h1>
          <p className="text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-sage max-w-none space-y-8 text-gray-600">
            {/* Legal review required before production launch. */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Website Information Purpose</h2>
              <p>The content provided on this website is for general informational purposes. It outlines our methodology and service offerings but does not constitute a binding agreement until a formal contract is signed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Consultation Requests</h2>
              <p>By submitting a consultation request, you agree to provide accurate and complete information about your business. We reserve the right to decline consultation requests at our discretion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Project Acceptance & Scope</h2>
              <p>All projects, engagements, and profit-sharing models are subject to mutual agreement, formal proposals, and signed contracts detailing specific scopes of work, timelines, and responsibilities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Intellectual Property</h2>
              <p>Unless otherwise agreed in writing, all materials, systems, methodologies, and content created by {business.businessName} remain the intellectual property of {business.businessName}.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of any proprietary business information, strategies, and financial data shared during the consultation and execution phases.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, {business.businessName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Contact Information</h2>
              <p>For questions regarding these Terms, please contact:</p>
              <p className="font-bold mt-2">{business.email}</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
    </>
  );
}
