import React, { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { leadService } from '@/services/lead.service';
import { Analytics } from '@/utils/analytics';
import { ErrorHandler } from '@/utils/error';

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
    <Section bg="ivory" id="contact" className="border-t border-sage/50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            title="আপনার Business নিয়ে কথা বলুন" 
            centered 
          />
          
          <div className="bg-white rounded-[24px] p-6 md:p-10 shadow-card border border-sage/20 mt-8 md:mt-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 font-bengali">ধন্যবাদ!</h3>
                <p className="text-charcoal/70 font-bengali">
                  আপনার মেসেজ সফলভাবে জমা হয়েছে। আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।
                </p>
                <Button className="mt-8" onClick={() => setStatus('idle')}>আরেকটি মেসেজ পাঠান</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 font-bengali text-sm" role="alert">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {errorMessage || 'অনুগ্রহ করে সঠিক বাংলাদেশ মোবাইল নম্বর প্রদান করুন এবং আবার চেষ্টা করুন।'}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                    <input id="name" required name="name" type="text" maxLength={100} className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Mobile Number *</label>
                    <input id="phone" required name="phone" type="tel" maxLength={20} className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="01XXXXXXXXX" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email Address *</label>
                    <input id="email" required name="email" type="email" maxLength={150} className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-charcoal mb-2">Business / Brand Name *</label>
                    <input id="businessName" required name="businessName" type="text" maxLength={100} className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Your Brand" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-charcoal mb-2">Business Category *</label>
                    <select id="category" required name="category" className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-700">
                      <option value="">Select Category</option>
                      <option value="ecommerce">E-commerce / Retail</option>
                      <option value="service">Service Based</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="software">Software / IT</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="stage" className="block text-sm font-medium text-charcoal mb-2">Current Business Stage *</label>
                    <select id="stage" required name="stage" className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-700">
                      <option value="">Select Stage</option>
                      <option value="Idea Stage">Idea Stage</option>
                      <option value="Pre-launch">Pre-launch</option>
                      <option value="Recently Launched">Recently Launched</option>
                      <option value="Growing">Growing</option>
                      <option value="Established">Established</option>
                      <option value="Repositioning / Relaunching">Repositioning / Relaunching</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="sales" className="block text-sm font-medium text-charcoal mb-2">Current Monthly Sales Range</label>
                  <select id="sales" name="sales" className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-700">
                    <option value="">Select Range</option>
                    <option value="under_1l">Under 1 Lakh</option>
                    <option value="1l_5l">1 Lakh - 5 Lakhs</option>
                    <option value="5l_15l">5 Lakhs - 15 Lakhs</option>
                    <option value="15l_plus">15 Lakhs+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-charcoal mb-2">Main Operational Problem *</label>
                  <select id="problem" required name="problem" className="w-full bg-bg-warm border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-700">
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
                  </select>
                </div>
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website_url_honey">Leave this field blank</label>
                  <input type="text" id="website_url_honey" name="website_url_honey" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3 font-bengali">Services Needed (Select multiple if needed)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Branding', 'Marketing', 'Automation', 'Customer Support', 'Operations', 'Full System'].map(service => (
                      <label key={service} className="flex items-center gap-3 text-sm text-charcoal/80 cursor-pointer hover:text-primary transition-colors">
                        <input type="checkbox" name="services" value={service} className="w-5 h-5 text-primary rounded border-none bg-bg-warm focus:ring-primary/50" />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-sage/30 mt-8">
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
