import { Hero } from '@/components/sections/Hero';
import { ProblemAwareness } from '@/components/sections/ProblemAwareness';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { WhoItsNotFor } from '@/components/sections/WhoItsNotFor';
import { Services } from '@/components/sections/Services';
import { Products } from '@/components/sections/Products';
import { Transformation } from '@/components/sections/Transformation';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { FounderRole } from '@/components/sections/FounderRole';
import { ProfitSharing } from '@/components/sections/ProfitSharing';
import { Accountability } from '@/components/sections/Accountability';
import { About } from '@/components/sections/About';
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
    "name": business.legalName,
    "url": business.siteUrl,
    "logo": `${business.siteUrl}/nukta-logo.jpg`,
    "slogan": business.tagline,
    "email": business.email,
    "foundingDate": business.foundingDate,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Palbari, Jashore Sadar",
      "addressLocality": "Jashore",
      "addressCountry": "BD"
    },
    "sameAs": [business.linkedinUrl, business.facebookUrl].filter(Boolean),
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
      <Products />
      <Transformation />
      <HowWeWork />
      <FounderRole />
      <ProfitSharing />
      <Accountability />
      <About />
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
