import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Nukta</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <main className="flex-grow flex items-center justify-center py-20">
        <Section bg="white" className="w-full">
          <Container className="max-w-xl text-center">
            <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
              <MapPin className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Page Not Found</h1>
            <p className="text-gray-600 mb-10 text-lg">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/">
              <Button variant="primary" className="px-8 py-3">
                Return to Home
              </Button>
            </Link>
          </Container>
        </Section>
      </main>
    </>
  );
}
