'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertCircle, ChevronDown, Mail, MapPin } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { leadService } from '@/services/lead.service';
import { Analytics } from '@/utils/analytics';
import { ErrorHandler } from '@/utils/error';
import { business } from '@/config/business';

export function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // Cooldown protection (60 seconds)
    const now = Date.now();
    if (now - lastSubmissionTime < 60000) {
      setErrorMessage('Please wait a minute before submitting again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Honeypot check
    if (data.website_url_honey) {
      // Silently fail for bots
      setTimeout(() => {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, 1000);
      return;
    }
    
    // Sanitize and trim
    const name = String(data.name).trim();
    const email = String(data.email).trim().toLowerCase();
    const businessName = String(data.businessName).trim();
    let phone = String(data.phone).trim();
    
    // Basic HTML rejection
    if (/[<>]/.test(name) || /[<>]/.test(businessName)) {
      setErrorMessage('Invalid characters detected. Please remove special characters (<, >).');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    phone = phone.replace(/[^0-9+]/g, '');
    const bdPhoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    const match = phone.match(bdPhoneRegex);
    
    if (!match) {
      setErrorMessage('অনুগ্রহ করে সঠিক বাংলাদেশ মোবাইল নম্বর প্রদান করুন।');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    
    const normalizedPhone = `+88${match[1]}`;

    try {
      const response = await leadService.submitLead({
        name,
        phone: normalizedPhone,
        email,
        businessName,
        stage: data.stage as string,
        supportType: data.category as string, 
        engagementModel: data.sales as string, 
        problem: data.problem as string,
        createdAt: new Date().toISOString(),
      });

      if (response.success) {
        Analytics.trackLeadGen();
        setLastSubmissionTime(Date.now());
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(response.error || 'Submission failed');
      }
    } catch (err) {
      setErrorMessage(ErrorHandler.handle(err));
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Section bg="warm" id="contact" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-60" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          {/* Context column */}
          <div className="lg:pt-6">
            <SectionHeading
              eyebrow="Contact"
              title="আপনার Business নিয়ে কথা বলুন"
              subtitle="আপনার business-এর বর্তমান অবস্থা ও প্রধান সমস্যা জানান। আমাদের টিম আপনার সাথে যোগাযোগ করবে।"
              className="mb-10 md:mb-10"
            />

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-line">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-text">Email</p>
                  <a href={`mailto:${business.email}`} className="mt-0.5 block break-all font-semibold text-ink hover:text-primary">
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-line">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-text">Office</p>
                  <p className="mt-0.5 font-semibold text-ink">{business.fullAddress}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form card */}
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-elevated md:p-10">
            {status === 'success' ? (
              <div className="py-12 text-center" role="status">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-bengali text-2xl font-bold">ধন্যবাদ!</h3>
                <p className="font-bengali text-body">
                  আপনার মেসেজ সফলভাবে জমা হয়েছে। আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।
                </p>
                <Button className="mt-8" onClick={() => setStatus('idle')}>আরেকটি মেসেজ পাঠান</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl border border-rose-100 bg-rose-50 p-4 font-bengali text-sm text-rose-700" role="alert">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    {errorMessage || 'অনুগ্রহ করে সঠিক বাংলাদেশ মোবাইল নম্বর প্রদান করুন এবং আবার চেষ্টা করুন।'}
                  </div>
                )}

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full Name" htmlFor="name" required>
                    <input id="name" required name="name" type="text" maxLength={100} autoComplete="name" className="field" placeholder="Your Name" />
                  </Field>
                  <Field label="Mobile Number" htmlFor="phone" required>
                    <input id="phone" required name="phone" type="tel" maxLength={20} autoComplete="tel" className="field" placeholder="01XXXXXXXXX" />
                  </Field>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Email Address" htmlFor="email" required>
                    <input id="email" required name="email" type="email" maxLength={150} autoComplete="email" className="field" placeholder="email@example.com" />
                  </Field>
                  <Field label="Business / Brand Name" htmlFor="businessName" required>
                    <input id="businessName" required name="businessName" type="text" maxLength={100} autoComplete="organization" className="field" placeholder="Your Brand" />
                  </Field>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Business Category" htmlFor="category" required>
                    <Select id="category" required name="category">
                      <option value="">Select Category</option>
                      <option value="ecommerce">E-commerce / Retail</option>
                      <option value="service">Service Based</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="software">Software / IT</option>
                      <option value="other">Other</option>
                    </Select>
                  </Field>
                  <Field label="Current Business Stage" htmlFor="stage" required>
                    <Select id="stage" required name="stage">
                      <option value="">Select Stage</option>
                      <option value="Idea Stage">Idea Stage</option>
                      <option value="Pre-launch">Pre-launch</option>
                      <option value="Recently Launched">Recently Launched</option>
                      <option value="Growing">Growing</option>
                      <option value="Established">Established</option>
                      <option value="Repositioning / Relaunching">Repositioning / Relaunching</option>
                    </Select>
                  </Field>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Current Monthly Sales Range" htmlFor="sales">
                    <Select id="sales" name="sales">
                      <option value="">Select Range</option>
                      <option value="under_1l">Under 1 Lakh</option>
                      <option value="1l_5l">1 Lakh - 5 Lakhs</option>
                      <option value="5l_15l">5 Lakhs - 15 Lakhs</option>
                      <option value="15l_plus">15 Lakhs+</option>
                    </Select>
                  </Field>
                  <Field label="Main Operational Problem" htmlFor="problem" required>
                    <Select id="problem" required name="problem">
                      <option value="">Select Problem</option>
                      <option value="Inconsistent Sales">Inconsistent Sales</option>
                      <option value="Weak Marketing Execution">Weak Marketing Execution</option>
                      <option value="Content & Design Pressure">Content & Design Pressure</option>
                      <option value="Customer Response Delay">Customer Response Delay</option>
                      <option value="Order Management Problem">Order Management Problem</option>
                      <option value="Team Coordination Problem">Team Coordination Problem</option>
                      <option value="Founder Overload">Founder Overload</option>
                      <option value="Reporting & Accountability Gap">Reporting & Accountability Gap</option>
                      <option value="Launch Support Needed">Launch Support Needed</option>
                      <option value="Other">Other</option>
                    </Select>
                  </Field>
                </div>

                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website_url_honey">Leave this field blank</label>
                  <input type="text" id="website_url_honey" name="website_url_honey" tabIndex={-1} autoComplete="off" />
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-medium text-ink">
                    Services Needed <span className="font-normal text-muted-text">(select all that apply)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {['Branding', 'Marketing', 'Automation', 'Customer Support', 'Operations', 'Full System'].map(service => (
                      <label key={service} className="cursor-pointer">
                        <input type="checkbox" name="services" value={service} className="peer sr-only" />
                        <span className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-body transition-colors hover:border-primary/40 peer-checked:border-primary peer-checked:bg-primary-soft peer-checked:text-primary-deep peer-focus-visible:ring-4 peer-focus-visible:ring-primary/15">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="pt-3">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Request a Business Consultation'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Field({ label, htmlFor, required, children }: { label: string; htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-primary" aria-hidden="true"> *</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select className={cn('field appearance-none pr-10', className)} {...props}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-text" aria-hidden="true" />
    </div>
  );
}
