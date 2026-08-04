import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { business } from '@/config/business';
import { AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {business.businessName}</title>
        <meta name="description" content={`Privacy Policy for ${business.businessName}.`} />
        <link rel="canonical" href="https://nukta.com/privacy-policy" />
      </Helmet>
      <main className="flex-grow pt-24 pb-16">
      <Section bg="white">
        <Container className="max-w-4xl">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">
              <strong>Draft Document:</strong> This privacy policy is a baseline placeholder. It requires review by legal counsel before the website is launched in production.
            </p>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-sage max-w-none space-y-8 text-gray-600">
            {/* Legal review required before production launch. */}
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you submit consultation requests, including your name, email address, phone number, business details, and other information you choose to provide.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Why We Collect Information</h2>
              <p>We use the information we collect to understand your business needs, communicate with you regarding your consultation, and provide relevant solutions tailored to your business stage and requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Local Storage and Technology</h2>
              <p>Our website may use browser local storage and similar technologies to improve your experience and manage session state across consultation forms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Third-Party Services</h2>
              <p>We may share information with trusted third-party service providers that assist us in operating our business and providing services to you, subject to appropriate confidentiality obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Data Retention</h2>
              <p>We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal information. Please contact us using the details below to exercise these rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Contact Information</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="font-bold mt-2">{business.email}</p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
    </>
  );
}
