import { useState, useEffect } from 'react';
import { MapPin, BriefcaseIcon, DollarSign, Mail, ArrowRight, X, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { business } from '@/config/business';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  responsibilities: string[];
  requirements: string[];
  isActive: boolean;
}

export function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    { 
      id: "1",
      title: "Full Stack Web Developer",
      location: "Palbari, Jashore",
      type: "Onsite / Full-time",
      salary: "Negotiable",
      responsibilities: ["Develop and maintain web applications.", "Collaborate with the design and marketing team.", "Ensure performance and scalability."],
      requirements: ["Proven experience in the relevant field.", "Strong problem-solving skills."],
      isActive: false
    },
    { 
      id: "2",
      title: "Digital Marketer",
      location: "Palbari, Jashore",
      type: "Onsite / Full-time",
      salary: "Negotiable",
      responsibilities: ["Plan and execute marketing campaigns.", "Analyze data and optimize strategies."],
      requirements: ["Experience with Meta/Google Ads.", "Strong analytical skills."],
      isActive: false
    },
    { 
      id: "3",
      title: "Brand Content Executive",
      location: "Palbari, Jashore",
      type: "Onsite / Full-time",
      salary: "Negotiable",
      responsibilities: ["Create engaging brand content.", "Manage social media presence."],
      requirements: ["Strong writing and communication skills.", "Creative mindset."],
      isActive: false
    },
    { 
      id: "4",
      title: "Creative Graphics Designer",
      location: "Palbari, Jashore",
      type: "Onsite / Full-time",
      salary: "Negotiable",
      responsibilities: ["Design visual assets for brands and marketing.", "Maintain consistent brand identity."],
      requirements: ["Proficiency in design tools (Photoshop, Illustrator, etc.).", "A strong portfolio."],
      isActive: false
    }
  ];

  const activeJobs = jobs.filter(job => job.isActive);

  // Handle Escape key and body overflow for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedJob(null);
      }
    };

    if (selectedJob !== null) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedJob]);

  return (
    <Section bg="warm" id="careers">
      <Container>
        <SectionHeading 
          title="Build brands. Build systems. Grow with Nukta." 
          centered 
        />
        
        {activeJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8 md:mt-12">
            {activeJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 md:p-8 rounded-[24px] shadow-card border border-sage/50 hover:border-primary/40 transition-colors flex flex-col group focus-within:ring-2 focus-within:ring-primary">
                <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <BriefcaseIcon className="w-4 h-4 mr-3 text-primary/70" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <MapPin className="w-4 h-4 mr-3 text-primary/70" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <DollarSign className="w-4 h-4 mr-3 text-primary/70" />
                    Salary: {job.salary}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  onClick={() => setSelectedJob(job)}
                >
                  View Job Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 max-w-2xl mx-auto bg-white border border-sage/50 rounded-[32px] p-10 md:p-16 text-center shadow-card">
            <div className="w-16 h-16 bg-bg-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-sage/30">
              <Users className="w-8 h-8 text-primary/60" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">No Open Positions Currently</h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-8">
              We are not actively hiring right now, but we are always looking for great talent. Feel free to drop your CV for future opportunities.
            </p>
          </div>
        )}

        <div className="mt-8 md:mt-12 bg-white max-w-2xl mx-auto rounded-[24px] p-8 border border-sage/50 shadow-sm text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <Mail className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-charcoal mb-2 font-bengali">অ্যাপ্লাই করার নিয়ম</h4>
          <p className="text-gray-500 mb-6 font-bengali">
            "CV শুধুমাত্র Email-এ গ্রহণ করা হবে।"
          </p>
          <a href={`mailto:${business.email}`} className="inline-flex items-center justify-center bg-bg-ivory hover:bg-sage/40 text-primary font-bold px-6 py-3 rounded-xl transition-colors">
            {business.email}
          </a>
        </div>
      </Container>

      {/* Job Details Modal */}
      {selectedJob !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedJob(null)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="sticky top-0 bg-white border-b border-sage/50 px-6 md:px-8 py-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-charcoal">
                {selectedJob.title}
              </h2>
              <button 
                onClick={() => setSelectedJob(null)}
                className="p-2 bg-bg-warm hover:bg-sage rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm font-bold text-charcoal bg-bg-warm px-4 py-2 rounded-lg">
                  <BriefcaseIcon className="w-4 h-4 mr-2 text-primary" />
                  {selectedJob.type}
                </div>
                <div className="flex items-center text-sm font-bold text-charcoal bg-bg-warm px-4 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {selectedJob.location}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary-deep uppercase tracking-wider text-sm">Responsibilities</h3>
                <ul className="space-y-2 text-gray-600">
                  {selectedJob.responsibilities.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                      <p>{req}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary-deep uppercase tracking-wider text-sm">Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                      <p>{req}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-sage/50">
                <p className="text-sm text-gray-500 mb-4">Ready to apply? Send your CV to our email.</p>
                <a href={`mailto:${business.email}?subject=Application for ${selectedJob.title}`} className="inline-flex w-full sm:w-auto items-center justify-center bg-primary hover:bg-primary-deep text-white font-bold px-8 py-3 rounded-xl transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
