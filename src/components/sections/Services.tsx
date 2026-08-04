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
  LineChart 
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function Services() {
  const services = [
    { icon: PackageSearch, title: "Product & Production Support", desc: "কোয়ালিটি কন্ট্রোল এবং প্রোডাকশন প্রসেস অপ্টিমাইজেশন।" },
    { icon: Lightbulb, title: "Brand Strategy & Positioning", desc: "সঠিক অডিয়েন্সের কাছে সঠিক মেসেজ পৌঁছানোর গাইডলাইন।" },
    { icon: Paintbrush, title: "Branding & Graphics Design", desc: "প্রিমিয়াম ভিজ্যুয়াল আইডেন্টিটি ও প্রফেশনাল ডিজাইন।" },
    { icon: Share2, title: "Content Planning & Social Media", desc: "এনগেজিং কন্টেন্ট এবং ধারাবাহিক সোশ্যাল মিডিয়া ম্যানেজমেন্ট।" },
    { icon: Megaphone, title: "Facebook & Google Ads", desc: "ডেটা-ড্রিভেন এবং আরওআই (ROI) ফোকাসড অ্যাড ক্যাম্পেইন।" },
    { icon: Globe, title: "Website & Landing Page Development", desc: "ফাস্ট, রেস্পন্সিভ এবং কনভার্শন-অপ্টিমাইজড ওয়েব সলিউশন।" },
    { icon: Bot, title: "AI & Business Automation", desc: "ম্যানুয়াল কাজ কমিয়ে অটোমেটেড ওয়ার্কফ্লো তৈরি।" },
    { icon: HeadphonesIcon, title: "Customer Service", desc: "দ্রুত ও প্রফেশনাল কাস্টমার রেসপন্স সিস্টেম।" },
    { icon: ShoppingCart, title: "Order Management", desc: "অর্ডার রিসিভ থেকে ডেলিভারি পর্যন্ত স্মুথ ট্র্যাকিং।" },
    { icon: Wrench, title: "After-Sales Support", desc: "ডেলিভারি পরবর্তী কাস্টমার এক্সপেরিয়েন্স ম্যানেজমেন্ট।" },
    { icon: HeartHandshake, title: "Customer Retention", desc: "লয়াল কাস্টমার বেস তৈরি ও রিপিট সেলস বৃদ্ধি।" },
    { icon: Network, title: "Team & Operational Structure", desc: "সঠিক লোকবল ও সিস্টেমের মাধ্যমে অপারেশন পরিচালনা।" },
    { icon: LineChart, title: "Reporting & Growth Optimisation", desc: "অ্যাকশনেবল ডেটা এবং রেগুলার পারফরম্যান্স রিভিউ।" }
  ];

  return (
    <Section bg="white" id="services">
      <Container>
        <SectionHeading 
          title="Production থেকে Growth—এক জায়গা থেকে।" 
          centered 
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-5 md:p-6 rounded-[24px] bg-bg-warm transition-all duration-300 shadow-sm hover:shadow-card border-l-4 hover:bg-primary ${index % 2 === 0 ? 'border-primary' : 'border-accent'}`}
            >
              <div className="mb-4">
                <p className={`text-[10px] font-bold mb-2 uppercase tracking-widest group-hover:text-white transition-colors ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                  Nukta Core Service
                </p>
                <service.icon className="w-8 h-8 text-charcoal group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-charcoal group-hover:text-white transition-colors mb-2 font-bengali">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/80 transition-colors font-bengali text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
