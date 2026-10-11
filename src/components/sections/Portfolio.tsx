'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Facebook, Image as ImageIcon, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

interface Project {
  id: string;
  brandName: string;
  category: string;
  coverImage: string | null;
  projectSummary: string;
  challenge: string;
  approach: string;
  services: string[];
  implementation: string;
  verifiedResults: string;
  status: 'completed' | 'ongoing';
  isPublished: boolean;
}

interface Brand {
  name: string;
  desc: string;
  logo: string | null;
  facebookUrl: string;
}

// Nukta's own brands — shown until verified case studies are published.
// The grid stays hidden while this list is empty. Example entry:
// { name: "Brand Name", desc: "One-line description", logo: null, facebookUrl: "https://www.facebook.com/brandpage" },
const brands: Brand[] = [];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Editable placeholders
  const portfolios: Project[] = [
    {
      id: "1",
      brandName: "Brand A",
      category: "Brand identity",
      coverImage: null,
      projectSummary: "Rebranded for premium positioning.",
      challenge: "Brief challenge description",
      approach: "Nukta's approach",
      services: ["Branding", "Design"],
      implementation: "Implementation details",
      verifiedResults: "Result details",
      status: "completed",
      isPublished: false
    }
  ];

  const publishedProjects = portfolios.filter(p => p.isPublished);

  // Handle Escape key and body overflow for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <Section bg="white" id="brands">
      <Container>
        <SectionHeading 
          title="আমাদের কাজের ভিতরের প্রমাণ" 
          centered 
        />
        
        {publishedProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-12">
            {publishedProjects.map((item) => (
              <div key={item.id} className="group rounded-[24px] border border-sage/50 overflow-hidden bg-bg-warm transition-all hover:shadow-card hover:border-primary/30 flex flex-col focus-within:ring-2 focus-within:ring-primary">
                {/* Image Placeholder */}
                <button 
                  onClick={() => setSelectedProject(item)}
                  className="w-full text-left focus:outline-none"
                  aria-label={`View project details for ${item.brandName}`}
                >
                  <div className="aspect-[4/3] bg-sage/30 flex items-center justify-center relative overflow-hidden">
                    {item.coverImage ? (
                      <img src={item.coverImage} alt={item.brandName} className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-charcoal/20" />
                    )}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-white text-primary px-4 py-2 rounded-full font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Project
                      </span>
                    </div>
                  </div>
                </button>
                
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {item.brandName}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 flex-1 font-medium">
                    {item.projectSummary}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(item)}
                    className="flex items-center text-primary font-bold text-sm hover:text-primary-deep transition-colors mt-auto focus:outline-none focus:underline"
                  >
                    Case Study দেখুন
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : brands.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8 md:mt-12">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`bg-bg-warm p-6 md:p-8 rounded-[24px] shadow-sm hover:shadow-card transition-shadow border-l-4 flex flex-col ${index % 2 === 0 ? 'border-primary' : 'border-accent'}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-sage/50 flex items-center justify-center overflow-hidden mb-5">
                  {brand.logo ? (
                    <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" decoding="async" className="w-full h-full object-contain p-2" />
                  ) : (
                    <span className="text-2xl font-serif font-bold text-primary" aria-hidden="true">{brand.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {brand.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-1 font-medium font-bengali leading-relaxed">
                  {brand.desc}
                </p>
                <a
                  href={brand.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center self-start text-primary font-bold text-sm hover:text-primary-deep transition-colors focus:outline-none focus-visible:underline"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook Page দেখুন
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        )}
      </Container>

      {/* Case Study Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-bg-warm hover:bg-sage rounded-full transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>
            
            <div className="w-full aspect-video bg-sage/30 flex items-center justify-center relative overflow-hidden">
              {selectedProject.coverImage ? (
                <img src={selectedProject.coverImage} alt={selectedProject.brandName} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              ) : (
                <ImageIcon className="w-16 h-16 text-charcoal/10" />
              )}
            </div>
            
            <div className="p-6 md:p-10">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {selectedProject.category}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                {selectedProject.brandName} Case Study
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg font-medium leading-relaxed">
                  {selectedProject.projectSummary}
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-sage/50">
                  <div className="bg-bg-warm p-4 rounded-xl">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Challenge</div>
                    <div className="font-medium text-charcoal">{selectedProject.challenge}</div>
                  </div>
                  <div className="bg-bg-warm p-4 rounded-xl">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Approach</div>
                    <div className="font-medium text-charcoal">{selectedProject.approach}</div>
                  </div>
                  <div className="bg-bg-warm p-4 rounded-xl">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Results</div>
                    <div className="font-medium text-charcoal">{selectedProject.verifiedResults}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
