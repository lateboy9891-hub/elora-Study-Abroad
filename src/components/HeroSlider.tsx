import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { SafeImage } from './SafeImage';

export interface SlideData {
  id: string;
  image: string;
  badge: string;
  title: string;
  titleBn: string;
  subtitle: string;
  subtitleBn: string;
  location: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 'canada',
    image: 'https://images.unsplash.com/photo-1519832979-6fa011b87665?auto=format&fit=crop&w=1200&q=80',
    badge: '🍁 Canada & North America',
    title: 'Top Canadian Universities & Colleges',
    titleBn: 'কানাডার শীর্ষ পাবলিক বিশ্ববিদ্যালয় ও কলেজ',
    subtitle: 'Post-Graduation Work Permit (PGWP) & Co-op internships across Toronto, Vancouver & Ontario',
    subtitleBn: 'টরন্টো, ভ্যাঙ্কুভার ও ওন্টারিওতে পিজিডব্লিউপি ও কো-অপ ইন্টার্নশিপ সুবিধা',
    location: 'Toronto & Vancouver, Canada'
  },
  {
    id: 'uk',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    badge: '🇬🇧 UK & Russell Group',
    title: 'World-Renowned British Campuses',
    titleBn: 'যুক্তরাজ্যের ঐতিহ্যবাহী ও আধুনিক বিশ্ববিদ্যালয়',
    subtitle: '1-Year Master’s, 2-Year Graduate Route Work Visa, and Chevening / Commonwealth scholarships',
    subtitleBn: '১ বছরের মাস্টার্স, ২ বছরের গ্র্যাজুয়েট রুট ওয়ার্ক ভিসা ও স্কলারশিপ',
    location: 'London & Manchester, UK'
  },
  {
    id: 'australia',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    badge: '🇦🇺 Australia & Group of Eight',
    title: 'Cutting-Edge Research & Lifestyle',
    titleBn: 'অস্ট্রেলিয়ার গ্রুপ অব এইট বিশ্ববিদ্যালয়সমূহ',
    subtitle: 'High minimum wage, Subclass 485 Temporary Graduate Visa, and ESOS legal protection',
    subtitleBn: 'সাবক্লাস ৪৮৫ পোস্ট-স্টাডি ওয়ার্ক ভিসা এবং উন্নত জীবনমান',
    location: 'Sydney & Melbourne, Australia'
  },
  {
    id: 'graduation',
    image: '/images/graduation_celebration_1792003840507.jpg',
    badge: '🎓 Bangladeshi Student Success',
    title: 'From Dhaka to Global Graduation',
    titleBn: 'ঢাকা থেকে বিশ্বমঞ্চে সমাবর্তন গৌরব',
    subtitle: 'Over 1,200+ Bangladeshi students guided successfully into accredited global institutions',
    subtitleBn: '১,২০০+ বাংলাদেশি শিক্ষার্থীকে বৈশ্বিক শিক্ষাঙ্গনে সফল পদার্পণ',
    location: 'Elora Alumni Worldwide'
  }
];

export const HeroSlider: React.FC<{ lang: 'en' | 'bn' }> = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] group bg-[#081F45]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding Images */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isActive
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
          >
            <SafeImage
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-700"
              fallbackSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081F45]/95 via-[#081F45]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081F45]/50 to-transparent" />
          </div>
        );
      })}

      {/* Floating Interactive Badge Top-Left */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-[#081F45]/85 backdrop-blur-md text-xs font-semibold text-[#E8B13C] border border-[#E8B13C]/30 shadow-md flex items-center gap-1.5 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{HERO_SLIDES[currentSlide].badge}</span>
        </span>
      </div>

      {/* Floating Trust Indicator Top-Right */}
      <div className="absolute top-4 right-4 z-20">
        <div className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 flex items-center gap-1 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Verified</span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#081F45]/70 hover:bg-[#E8B13C] hover:text-[#081F45] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#081F45]/70 hover:bg-[#E8B13C] hover:text-[#081F45] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Content Card Bottom */}
      <div className="absolute bottom-3 left-3 right-3 z-20 p-3.5 sm:p-4 bg-white/95 backdrop-blur-md rounded-xl text-[#081F45] shadow-xl border border-white/50">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{lang === 'bn' ? HERO_SLIDES[currentSlide].titleBn : HERO_SLIDES[currentSlide].title}</span>
          </div>
          <span className="text-[10px] font-medium text-slate-500 flex items-center gap-0.5">
            <MapPin className="w-3 h-3 text-[#E8B13C]" />
            {HERO_SLIDES[currentSlide].location}
          </span>
        </div>
        <p className="text-xs text-slate-600 font-medium line-clamp-1">
          {lang === 'bn' ? HERO_SLIDES[currentSlide].subtitleBn : HERO_SLIDES[currentSlide].subtitle}
        </p>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-2.5 pt-2 border-t border-slate-200/80">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-6 bg-[#081F45]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
