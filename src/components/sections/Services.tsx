import {
  PackageSearch,
  Lightbulb,
  Paintbrush,
  Share2,
  Megaphone,
  Globe,
  Bot,
  HeadphonesIcon,
  ShoppingCart,
  Wrench,
  HeartHandshake,
  Network,
  LineChart,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { buttonClasses } from '@/components/ui/button';

const services = [
  { icon: PackageSearch, title: "Product & Production Support", desc: "কোয়ালিটি কন্ট্রোল এবং প্রোডাকশন প্রসেস অপ্টিমাইজেশন।" },
  { icon: Lightbulb, title: "Brand Strategy & Positioning", desc: "সঠিক অডিয়েন্সের কাছে সঠিক মেসেজ পৌঁছানোর গাইডলাইন।" },
  { icon: Paintbrush, title: "Branding & Graphics Design", desc: "প্রিমিয়াম ভিজ্যুয়াল আইডেন্টিটি ও প্রফেশনাল ডিজাইন।" },
  { icon: Share2, title: "Content Planning & Social Media", desc: "এনগেজিং কন্টেন্ট এবং ধারাবাহিক সোশ্যাল মিডিয়া ম্যানেজমেন্ট।" },
  { icon: Megaphone, title: "Facebook & Google Ads", desc: "ডেটা-ড্রিভেন এবং আরওআই (ROI) ফোকাসড অ্যাড ক্যাম্পেইন।" },
  { icon: Globe, title: "Website & Landing Page Development", desc: "ফাস্ট, রেস্পন্সিভ এবং কনভার্শন-অপ্টিমাইজড ওয়েব সলিউশন।" },
  { icon: Bot, title: "AI & Business Automation", desc: "ম্যানুয়াল কাজ কমিয়ে অটোমেটেড ওয়ার্কফ্লো তৈরি।" },
  { icon: HeadphonesIcon, title: "Customer Service", desc: "দ্রুত ও প্রফেশনাল কাস্টমার রেসপন্স সিস্টেম।" },
  { icon: ShoppingCart, title: "Order Management", desc: "অর্ডার রিসিভ থেকে ডেলিভারি পর্যন্ত স্মুথ ট্র্যাকিং।" },
  { icon: Wrench, title: "After-Sales Support", desc: "ডেলিভারি পরবর্তী কাস্টমার এক্সপেরিয়েন্স ম্যানেজমেন্ট।" },
  { icon: HeartHandshake, title: "Customer Retention", desc: "লয়াল কাস্টমার বেস তৈরি ও রিপিট সেলস বৃদ্ধি।" },
  { icon: Network, title: "Team & Operational Structure", desc: "সঠিক লোকবল ও সিস্টেমের মাধ্যমে অপারেশন পরিচালনা।" },
  { icon: LineChart, title: "Reporting & Growth Optimisation", desc: "অ্যাকশনেবল ডেটা এবং রেগুলার পারফরম্যান্স রিভিউ।" }
];

export function Services() {
  return (
    <Section bg="white" id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Production থেকে Growth—এক জায়গা থেকে।"
          subtitle="Brand চালাতে যা যা লাগে—planning, creative, marketing, technology, customer experience এবং reporting—সব একটি connected system-এ।"
        />

        {/* Hairline grid: 1px gaps over a line-coloured background */}
        <div className="overflow-hidden rounded-[24px] border border-line bg-line">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.title} className="group relative flex items-start gap-4 bg-white p-5 transition-colors duration-300 hover:bg-bg-warm sm:block sm:p-6 md:p-7">
                <div className="flex shrink-0 items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="hidden font-mono text-xs text-muted-text/70 sm:inline">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug sm:mt-6 sm:text-[17px]">{service.title}</h3>
                  <p className="mt-1.5 font-bengali text-[15px] leading-relaxed text-body sm:mt-2">{service.desc}</p>
                </div>
              </div>
            ))}

            {/* CTA tile fills the remainder of the last row */}
            <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-ink p-7 md:p-8 lg:col-span-2 xl:col-span-3">
              <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(11,107,75,0.55),transparent)]" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">One Stop Premium Business Service</p>
                <p className="mt-3 max-w-lg font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                  আলাদা আলাদা vendor না—সব service, একটি connected system, একটি accountable team।
                </p>
              </div>
              <a href="#contact" className={buttonClasses({ variant: 'light', className: 'relative self-start' })}>
                আপনার Business নিয়ে কথা বলুন
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
