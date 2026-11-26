'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Facebook, Image as ImageIcon, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { brands, publishedProjects, hasPortfolioContent, type Project } from '@/config/portfolio';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle Escape key and body overflow for modal
  useEffect(() => {
    if (selectedProject === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  // Nothing verified to show yet — hide the section rather than render an empty heading.
  if (!hasPortfolioContent) return null;

  return (
    <Section bg="white" id="brands">
      <Container>
        <SectionHeading eyebrow="Portfolio" title="আমাদের কাজের ভিতরের প্রমাণ" centered />

        {publishedProjects.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publishedProjects.map((item) => (
              <div key={item.id} className="card card-hover group flex flex-col overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                <button
                  onClick={() => setSelectedProject(item)}
                  className="w-full text-left focus:outline-none"
                  aria-label={`View project details for ${item.brandName}`}
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-bg-warm">
                    {item.coverImage ? (
                      <img src={item.coverImage} alt={item.brandName} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    ) : (
                      <ImageIcon className="h-8 w-8 text-ink/20" />
                    )}
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.category}</p>
                  <h3 className="mt-2 text-xl font-bold">{item.brandName}</h3>
                  <p className="mt-2 mb-6 flex-1 text-sm text-body">{item.projectSummary}</p>
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-deep focus:outline-none focus-visible:underline"
                  >
                    Case Study দেখুন
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand.name} className="card card-hover flex flex-col p-7">
                <div className="mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-line">
                  {brand.logo ? (
                    <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" decoding="async" className="h-full w-full object-contain p-2" />
                  ) : (
                    <span className="font-display text-2xl font-bold text-primary" aria-hidden="true">{brand.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold">{brand.name}</h3>
                <p className="mt-2 mb-6 flex-1 font-bengali text-[15px] leading-relaxed text-body">{brand.desc}</p>
                <a
                  href={brand.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:text-primary-deep focus:outline-none focus-visible:underline"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook Page দেখুন
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        )}
      </Container>

      {/* Case Study Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={`${selectedProject.brandName} case study`}>
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl animate-modal-in flex-col overflow-y-auto rounded-3xl bg-white shadow-elevated custom-scrollbar">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 ring-1 ring-line transition-colors hover:bg-bg-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-ink" />
            </button>

            <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-bg-warm">
              {selectedProject.coverImage ? (
                <img src={selectedProject.coverImage} alt={selectedProject.brandName} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              ) : (
                <ImageIcon className="h-16 w-16 text-ink/10" />
              )}
            </div>

            <div className="p-6 md:p-10">
              <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
                {selectedProject.category}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{selectedProject.brandName} Case Study</h2>
              <p className="mt-6 text-lg leading-relaxed text-body">{selectedProject.projectSummary}</p>
              <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
                {[
                  ['Challenge', selectedProject.challenge],
                  ['Approach', selectedProject.approach],
                  ['Results', selectedProject.verifiedResults],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-bg-warm p-4">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-text">{label}</div>
                    <div className="font-medium text-ink">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
