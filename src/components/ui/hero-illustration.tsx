import { cn } from '@/lib/utils';
import {
  PackageSearch,
  Paintbrush,
  Megaphone,
  HeadphonesIcon,
  ShoppingCart,
  LineChart,
  Target,
  CheckCircle2,
} from 'lucide-react';

type Status = 'On track' | 'In review' | 'Live' | 'Automated' | 'Done';

const statusStyle: Record<Status, string> = {
  'On track': 'bg-primary-soft text-primary-deep',
  'In review': 'bg-accent-soft text-[#8A6510]',
  Live: 'bg-primary text-white',
  Automated: 'bg-ink text-white',
  Done: 'bg-primary-soft text-primary-deep',
};

const workstreams: { icon: typeof PackageSearch; area: string; task: string; status: Status; progress: number }[] = [
  { icon: PackageSearch, area: 'Production', task: 'Quality check & dispatch', status: 'On track', progress: 72 },
  { icon: Paintbrush, area: 'Branding', task: 'Campaign creatives', status: 'In review', progress: 88 },
  { icon: Megaphone, area: 'Marketing', task: 'Facebook & Google Ads', status: 'Live', progress: 100 },
  { icon: HeadphonesIcon, area: 'Customer Service', task: 'Inbox & follow-up', status: 'Automated', progress: 100 },
  { icon: ShoppingCart, area: 'Orders', task: 'Delivery tracking', status: 'On track', progress: 60 },
  { icon: LineChart, area: 'Reporting', task: 'Weekly founder report', status: 'Done', progress: 100 },
];

/** Decorative product-style illustration of Nukta's connected operations system. */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[520px]', className)} aria-hidden="true">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(11,107,75,0.18),transparent)] blur-2xl" />

      <div className="overflow-hidden rounded-[24px] border border-line bg-white shadow-elevated">
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-line bg-bg-warm/70 px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-text">Operations · This week</span>
          <span className="w-[42px]" />
        </div>

        <ul className="divide-y divide-line">
          {workstreams.map((w) => (
            <li key={w.area} className="flex items-center gap-4 px-5 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-warm text-primary ring-1 ring-line">
                <w.icon className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="truncate text-[13px] font-semibold text-ink">{w.area}</p>
                  <span className={cn('shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold', statusStyle[w.status])}>
                    {w.status}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-xs text-muted-text">{w.task}</p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-primary/80" style={{ width: `${w.progress}%` }} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* founder focus footer */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-ink px-5 py-4 text-white">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            <Target className="h-3.5 w-3.5" /> <span className="whitespace-nowrap">Founder focus</span>
          </div>
          <p className="text-[13px] font-medium text-white/85">Vision · Product · Growth direction</p>
        </div>
      </div>

      {/* floating: report */}
      <div className="absolute -right-3 -top-12 hidden items-center gap-2.5 rounded-full border border-line bg-white py-2 pl-2 pr-4 shadow-card-hover sm:flex md:-right-8">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <span className="text-xs font-semibold text-ink">Weekly report delivered</span>
      </div>
    </div>
  );
}
