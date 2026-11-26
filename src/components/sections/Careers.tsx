'use client';

import { useState, useEffect } from 'react';
import { MapPin, BriefcaseIcon, Banknote, Mail, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { buttonClasses } from '@/components/ui/button';
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

export function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Handle Escape key and body overflow for modal
  useEffect(() => {
    if (selectedJob === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedJob(null);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedJob]);

  return (
    <Section bg="white" id="careers">
      <Container>
        <SectionHeading eyebrow="Careers" title="Build brands. Build systems. Grow with Nukta." centered />

        {activeJobs.length > 0 && (
          <ul className="mx-auto mb-6 max-w-4xl divide-y divide-line overflow-hidden rounded-[24px] border border-line bg-white">
            {activeJobs.map((job) => (
              <li key={job.id}>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="group flex w-full flex-col gap-3 p-6 text-left transition-colors hover:bg-bg-warm focus:outline-none focus-visible:bg-bg-warm md:flex-row md:items-center md:justify-between md:p-7"
                >
                  <div>
                    <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-text">
                      <span className="inline-flex items-center gap-1.5"><BriefcaseIcon className="h-4 w-4" aria-hidden="true" />{job.type}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{job.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Banknote className="h-4 w-4" aria-hidden="true" />Salary: {job.salary}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View Job Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mx-auto grid max-w-4xl overflow-hidden rounded-[24px] border border-line bg-bg-warm md:grid-cols-[1.3fr_1fr]">
          <div className="p-8 md:p-10">
            {activeJobs.length === 0 && (
              <>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted-text ring-1 ring-line">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-text/60" aria-hidden="true" />
                  No open positions currently
                </span>
                <p className="mt-5 leading-relaxed text-body">
                  We are not actively hiring right now, but we are always looking for great talent. Feel free to drop your CV for future opportunities.
                </p>
              </>
            )}
            <h3 className={activeJobs.length === 0 ? 'mt-6 font-bengali text-lg font-bold' : 'font-bengali text-lg font-bold'}>অ্যাপ্লাই করার নিয়ম</h3>
            <p className="mt-1 font-bengali text-body">“CV শুধুমাত্র Email-এ গ্রহণ করা হবে।”</p>
          </div>
          <div className="flex flex-col justify-center gap-4 border-t border-line bg-white p-8 md:border-l md:border-t-0 md:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <a href={`mailto:${business.email}`} className="break-all font-semibold text-ink hover:text-primary">
              {business.email}
            </a>
            <a href={`mailto:${business.email}?subject=CV`} className={buttonClasses({ variant: 'outline', size: 'sm', className: 'self-start' })}>
              Send your CV
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>

      {/* Job Details Modal */}
      {selectedJob !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="job-modal-title">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setSelectedJob(null)} />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl animate-modal-in flex-col overflow-y-auto rounded-3xl bg-white shadow-elevated custom-scrollbar">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white/95 px-6 py-5 backdrop-blur md:px-8">
              <h2 id="job-modal-title" className="text-xl font-bold md:text-2xl">{selectedJob.title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="rounded-full p-2 ring-1 ring-line transition-colors hover:bg-bg-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-ink" />
              </button>
            </div>

            <div className="space-y-8 p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                {[
                  [BriefcaseIcon, selectedJob.type],
                  [MapPin, selectedJob.location],
                  [Banknote, `Salary: ${selectedJob.salary}`],
                ].map(([Icon, text]) => {
                  const I = Icon as typeof MapPin;
                  return (
                    <span key={text as string} className="inline-flex items-center gap-2 rounded-full bg-bg-warm px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                      <I className="h-4 w-4 text-primary" aria-hidden="true" />
                      {text as string}
                    </span>
                  );
                })}
              </div>

              {[
                ['Responsibilities', selectedJob.responsibilities],
                ['Requirements', selectedJob.requirements],
              ].map(([heading, items]) => (
                <div key={heading as string}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{heading as string}</h3>
                  <ul className="mt-4 space-y-2.5 text-body">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="border-t border-line pt-6">
                <p className="mb-4 text-sm text-muted-text">Ready to apply? Send your CV to our email.</p>
                <a
                  href={`mailto:${business.email}?subject=Application for ${selectedJob.title}`}
                  className={buttonClasses({ className: 'w-full sm:w-auto' })}
                >
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
