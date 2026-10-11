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

const statusStyles: Record<ProductStatus, { badge: string; dot: string }> = {
  'Live': { badge: 'bg-primary text-white border-primary', dot: 'bg-white' },
  'MVP': { badge: 'bg-accent text-charcoal border-accent', dot: 'bg-charcoal' },
  'In development': { badge: 'bg-white text-charcoal border-accent border-2', dot: 'bg-accent' },
  'Internal tool': { badge: 'bg-charcoal text-white border-charcoal', dot: 'bg-white/80' },
};

export function Products() {
  return (
    <Section bg="ivory" id="products" className="border-y border-sage/30">
      <Container>
        <SectionHeading
          title="What We Build"
          subtitle="Nukta শুধু service দেয় না—নিজস্ব business চালানোর অভিজ্ঞতা থেকে আমরা AI-powered software tool তৈরি করি।"
          centered
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={cn(
                'bg-white p-6 md:p-8 rounded-[24px] shadow-card border-l-4 flex flex-col',
                index % 2 === 0 ? 'border-primary' : 'border-accent'
              )}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="bg-sage/40 p-3 rounded-xl">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <span
                  className={cn(
                    'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest whitespace-nowrap',
                    statusStyles[product.status].badge
                  )}
                >
                  <span className={cn('w-1.5 h-1.5 rounded-full', statusStyles[product.status].dot)} aria-hidden="true" />
                  <span className="sr-only">Status: </span>
                  {product.status}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium flex-1">
                {product.desc}
              </p>

              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center self-start text-primary font-bold text-sm hover:text-primary-deep transition-colors focus:outline-none focus-visible:underline"
                >
                  Visit {product.name}
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
