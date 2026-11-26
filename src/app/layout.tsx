import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { business } from '@/config/business';
import { I18nProvider } from '@/components/providers/I18nProvider';

export const metadata: Metadata = {
  title: `${business.businessName} — ${business.tagline}`,
  description: 'Nukta Technologies — a Jashore-based venture studio running consumer brands and building AI-powered business tools.',
  icons: {
    icon: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-body antialiased">
        <I18nProvider>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
