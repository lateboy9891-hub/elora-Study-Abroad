import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Award, Sparkles, Building2, ExternalLink } from 'lucide-react';

interface CampusItem {
  name: string;
  country: string;
  flag: string;
  countryId: string;
  badge: string;
}

const CAMPUSES: CampusItem[] = [
  { name: 'University of Toronto', country: 'Canada', flag: '🇨🇦', countryId: 'canada', badge: 'Top 25 Global' },
  { name: 'University of Windsor', country: 'Canada', flag: '🇨🇦', countryId: 'canada', badge: 'MAC & Co-op Hotspot' },
  { name: 'University of Greenwich', country: 'UK', flag: '🇬🇧', countryId: 'uk', badge: '£3,000 Scholarships' },
  { name: 'University of Texas at Arlington', country: 'USA', flag: '🇺🇸', countryId: 'usa', badge: 'Tier-1 Research & STEM OPT' },
  { name: 'Coventry University', country: 'UK', flag: '🇬🇧', countryId: 'uk', badge: 'High Visa Success' },
  { name: 'Deakin University', country: 'Australia', flag: '🇦🇺', countryId: 'australia', badge: 'Melbourne & Subclass 485' },
  { name: 'Rhine-Waal University', country: 'Germany', flag: '🇩🇪', countryId: 'germany', badge: '€0 Tuition Free' },
  { name: 'Asia Pacific University (APU)', country: 'Malaysia', flag: '🇲🇾', countryId: 'malaysia', badge: 'UK Dual Degree' },
  { name: 'University of Debrecen', country: 'Hungary', flag: '🇭🇺', countryId: 'hungary', badge: 'WHO Recognized MD' },
  { name: 'Memorial University (MUN)', country: 'Canada', flag: '🇨🇦', countryId: 'canada', badge: 'Most Affordable Canada' },
  { name: 'University of South Florida', country: 'USA', flag: '🇺🇸', countryId: 'usa', badge: 'Top 50 Public' },
  { name: 'National College of Ireland', country: 'Ireland', flag: '🇮🇪', countryId: 'ireland', badge: 'Dublin Tech Silicon Docks' },
  { name: 'York University', country: 'Canada', flag: '🇨🇦', countryId: 'canada', badge: 'Toronto Campus' }
];

export const CampusTicker: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="relative bg-[#0d254c] border-y border-slate-800/90 text-slate-200 overflow-hidden shadow-inner">
      <div className="flex items-center">
        {/* Left Fixed Badge / Anchor */}
        <div className="shrink-0 z-20 bg-[#081F45] px-4 py-3 sm:px-6 border-r border-slate-700/80 flex items-center gap-2 shadow-md">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8B13C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8B13C]"></span>
          </div>
          <Award className="w-4 h-4 text-[#E8B13C] shrink-0" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E8B13C] whitespace-nowrap">
            {lang === 'bn' ? 'টপ অ্যাডমিটেড ক্যাম্পাসেস:' : 'Top Admitted Campuses:'}
          </span>
        </div>

        {/* Continuous Smooth Infinite News Marquee Tape */}
        <div className="flex-1 overflow-hidden relative">
          {/* Subtle gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0d254c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0d254c] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee py-2.5 flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            {/* Render items twice to create seamless infinite loop */}
            {[...CAMPUSES, ...CAMPUSES].map((campus, index) => (
              <Link
                key={`${campus.name}-${index}`}
                to={`/universities?country=${campus.countryId}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#102D58]/80 hover:bg-[#E8B13C] text-slate-200 hover:text-[#081F45] border border-slate-700/60 hover:border-[#E8B13C] transition-all text-xs font-medium group"
              >
                <span>{campus.flag}</span>
                <span className="font-semibold">{campus.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 group-hover:bg-[#081F45]/15 text-slate-300 group-hover:text-[#081F45] font-mono">
                  {campus.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
