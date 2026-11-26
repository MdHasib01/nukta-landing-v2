import { ArrowUpRight, Sparkles, MessagesSquare } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

type ProductStatus = 'Live' | 'MVP' | 'In development' | 'Internal tool';

interface Product {
  name: string;
  desc: string;
  status: ProductStatus;
  url: string | null;
  icon: typeof Sparkles;
}

// Keep status honest — only mark a product "Live" once it is publicly usable.
const products: Product[] = [
  {
    name: "Smash",
    desc: "AI tool for planning, generating and managing marketing creatives for businesses.",
    status: "MVP",
    url: null,
    icon: Sparkles,
  },
  {
    name: "Tentsa Mini",
    desc: "CRM for managing customer conversations and orders across multiple brands.",
    status: "Internal tool",
    url: null,
    icon: MessagesSquare,
  },
];

// Styled for the dark section background
const statusStyles: Record<ProductStatus, { badge: string; dot: string }> = {
  'Live': { badge: 'bg-primary/25 text-emerald-300 ring-primary/50', dot: 'bg-emerald-400' },
  'MVP': { badge: 'bg-accent/15 text-accent ring-accent/30', dot: 'bg-accent' },
  'In development': { badge: 'bg-white/5 text-white/80 ring-white/15', dot: 'bg-accent' },
  'Internal tool': { badge: 'bg-white/10 text-white ring-white/15', dot: 'bg-white/70' },
};

export function Products() {
  return (
    <Section bg="ink" id="products" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-light mask-fade" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(11,107,75,0.45),transparent)]" aria-hidden="true" />

      <Container className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Products"
          title="What We Build"
          subtitle="Nukta শুধু service দেয় না—নিজস্ব business চালানোর অভিজ্ঞতা থেকে আমরা AI-powered software tool তৈরি করি।"
          centered
        />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative flex flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] md:p-8"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-deep text-white ring-1 ring-white/15">
                  <product.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    'inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1',
                    statusStyles[product.status].badge
                  )}
                >
                  <span className={cn('h-1.5 w-1.5 rounded-full', statusStyles[product.status].dot)} aria-hidden="true" />
                  <span className="sr-only">Status: </span>
                  {product.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white">{product.name}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/65">{product.desc}</p>

              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-1 self-start text-sm font-semibold text-white hover:text-accent focus:outline-none focus-visible:underline"
                >
                  Visit {product.name}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
