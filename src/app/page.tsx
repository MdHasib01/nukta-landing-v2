import { Hero } from '@/components/sections/Hero';
import { ProblemAwareness } from '@/components/sections/ProblemAwareness';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { WhoItsNotFor } from '@/components/sections/WhoItsNotFor';
import { Services } from '@/components/sections/Services';
import { Transformation } from '@/components/sections/Transformation';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { FounderRole } from '@/components/sections/FounderRole';
import { ProfitSharing } from '@/components/sections/ProfitSharing';
import { Accountability } from '@/components/sections/Accountability';
import { WhyNukta } from '@/components/sections/WhyNukta';
import { Portfolio } from '@/components/sections/Portfolio';
import { Careers } from '@/components/sections/Careers';
import { LeadForm } from '@/components/sections/LeadForm';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { business } from '@/config/business';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": business.businessName,
    "url": "https://nukta.com",
    "logo": "https://nukta.com/favicon.ico",
    "slogan": business.tagline,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": business.email,
      "contactType": "customer support"
    }
  };

  return (
    <main className="flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <ProblemAwareness />
      <WhoItsFor />
      <WhoItsNotFor />
      <Services />
      <Transformation />
      <HowWeWork />
      <FounderRole />
      <ProfitSharing />
      <Accountability />
      <WhyNukta />
      <ErrorBoundary>
        <Portfolio />
      </ErrorBoundary>
      <ErrorBoundary>
        <Careers />
      </ErrorBoundary>
      <LeadForm />
    </main>
  );
}
