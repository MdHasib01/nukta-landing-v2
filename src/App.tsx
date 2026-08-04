import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProblemAwareness } from './components/sections/ProblemAwareness';
import { WhoItsFor } from './components/sections/WhoItsFor';
import { WhoItsNotFor } from './components/sections/WhoItsNotFor';
import { Services } from './components/sections/Services';
import { Transformation } from './components/sections/Transformation';
import { HowWeWork } from './components/sections/HowWeWork';
import { FounderRole } from './components/sections/FounderRole';
import { ProfitSharing } from './components/sections/ProfitSharing';
import { Accountability } from './components/sections/Accountability';
import { WhyNukta } from './components/sections/WhyNukta';
import { LeadForm } from './components/sections/LeadForm';
import { ErrorBoundary } from './components/ui/error-boundary';
import { business } from './config/business';

// Lazy load non-critical sections
const Portfolio = lazy(() => import('./components/sections/Portfolio').then(module => ({ default: module.Portfolio })));
const Careers = lazy(() => import('./components/sections/Careers').then(module => ({ default: module.Careers })));

// Lazy load pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const Disclaimer = lazy(() => import('./pages/Disclaimer').then(module => ({ default: module.Disclaimer })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
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
      <Helmet>
        <title>{business.businessName} — {business.tagline}</title>
        <meta name="description" content="Production, branding, marketing, technology, customer support, and business operations—all connected in a single system." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
          <Portfolio />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
          <Careers />
        </Suspense>
      </ErrorBoundary>
      <LeadForm />
    </main>
  );
}

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-warm">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}
