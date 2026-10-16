import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS, Testimonial } from '../data/testimonials';
import { SafeImage } from './SafeImage';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ShieldCheck,
  GraduationCap,
  MapPin,
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';

export const TestimonialCarousel: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Swipe / Drag gesture tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);

  // Filtered stories
  const filteredStories = TESTIMONIALS.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Canada') return item.countryId === 'canada';
    if (selectedFilter === 'UK') return item.countryId === 'uk';
    if (selectedFilter === 'USA') return item.countryId === 'usa';
    if (selectedFilter === 'Australia') return item.countryId === 'australia';
    if (selectedFilter === 'Europe & Asia') {
      return ['germany', 'malaysia', 'hungary'].includes(item.countryId);
    }
    return true;
  });

  const totalItems = filteredStories.length;

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedFilter]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused || totalItems <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalItems, handleNext]);

  // Touch Swipe Handlers (Mobile / Tablet)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> Next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  // Mouse Drag Handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const distance = dragStartX.current - e.clientX;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
    }
    setIsPaused(false);
  };

  return (
    <section className="py-16 md:py-24 bg-[#081F45] text-white relative overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8B13C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#102D58]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102D58] border border-slate-700 text-xs font-semibold text-[#E8B13C] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'বাস্তব সাফল্য ও সততা' : 'Real Student Success Stories'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {lang === 'bn'
                ? 'বাংলাদেশি শিক্ষার্থীদের বৈশ্বিক সাফল্যের গল্প'
                : 'From Bangladesh to Global Universities'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {lang === 'bn'
                ? 'ঢাকা, চট্টগ্রাম, সিলেট ও রাজশাহী থেকে হাজারো শিক্ষার্থী সঠিক দিকনির্দেশনা ও স্বচ্ছতায় তাঁদের স্বপ্নের দেশে পদার্পণ করেছেন।'
                : 'Verified reviews and visa journeys of students who trusted our ethical advisory in Dhaka & Toronto.'}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-xl bg-[#102D58] hover:bg-[#E8B13C] hover:text-[#081F45] text-white flex items-center justify-center transition-all border border-slate-700/80 active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next story"
              className="w-10 h-10 rounded-xl bg-[#102D58] hover:bg-[#E8B13C] hover:text-[#081F45] text-white flex items-center justify-center transition-all border border-slate-700/80 active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {['All', 'Canada', 'UK', 'USA', 'Australia', 'Europe & Asia'].map((filterName) => (
            <button
              key={filterName}
              onClick={() => setSelectedFilter(filterName)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === filterName
                  ? 'bg-[#E8B13C] text-[#081F45] shadow-md font-bold'
                  : 'bg-[#102D58]/80 text-slate-300 hover:bg-[#102D58] hover:text-white border border-slate-700/60'
              }`}
            >
              {filterName === 'All'
                ? lang === 'bn' ? 'সকল গল্প (৭টি)' : 'All Stories (7)'
                : filterName}
            </button>
          ))}
          <span className="text-[11px] text-slate-400 ml-auto hidden sm:inline-flex items-center gap-1 font-mono">
            <span>Swipe or click arrows</span>
          </span>
        </div>

        {/* Carousel Container */}
        <div
          className="relative cursor-grab active:cursor-grabbing overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsPaused(true)}
        >
          {/* Track with CSS Translation */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {filteredStories.map((item) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-1 sm:px-2"
              >
                <div className="bg-[#102D58]/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm shadow-xl flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle Background Quote Icon */}
                  <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-20 h-20 text-white/5 pointer-events-none" />

                  <div>
                    {/* Top Status & Verification Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>{lang === 'bn' ? item.visaStatusBn : item.visaStatus}</span>
                      </div>

                      <div className="flex items-center gap-1 text-[#E8B13C]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#E8B13C]" />
                        ))}
                      </div>
                    </div>

                    {/* Achievement / Highlight Banner */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E8B13C]/15 border border-[#E8B13C]/30 text-[#E8B13C] text-xs font-semibold mb-5">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>{lang === 'bn' ? item.highlightBn : item.highlight}</span>
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="text-base sm:text-lg md:text-xl text-slate-100 font-medium leading-relaxed italic mb-8">
                      "{lang === 'bn' ? item.reviewBn : item.reviewEn}"
                    </blockquote>
                  </div>

                  {/* Student Profile & Destination Info */}
                  <div className="pt-6 border-t border-slate-700/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left: Avatar & Name */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#E8B13C] shrink-0 shadow-md">
                        <SafeImage
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 bg-[#081F45] text-xs px-1 rounded-tl">
                          {item.countryFlag}
                        </div>
                      </div>

                      <div>
                        <div className="text-base font-bold text-white flex items-center gap-2">
                          <span>{lang === 'bn' ? item.nameBn : item.name}</span>
                          <span className="text-xs text-slate-400 font-normal">
                            ({item.intake})
                          </span>
                        </div>
                        <div className="text-xs text-[#E8B13C] font-medium flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{lang === 'bn' ? item.hometownBn : item.hometown}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Enrolled University & Degree */}
                    <div className="sm:text-right bg-[#081F45]/60 sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-slate-700/50">
                      <div className="text-xs font-semibold text-white flex items-center sm:justify-end gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#E8B13C]" />
                        <span>{lang === 'bn' ? item.universityBn : item.university}</span>
                      </div>
                      <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                        {lang === 'bn' ? item.programBn : item.program}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filteredStories.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIndex === currentIndex
                  ? 'w-8 bg-[#E8B13C]'
                  : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Bangladesh Student Assistance Guarantee Strip */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#102D58]/60 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-slate-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              {lang === 'bn'
                ? 'শতভাগ স্বচ্ছতা: ফাইল প্রসেসিংয়ে কোনো প্রকার নকল ডকুমেন্ট বা ভুয়া অঙ্গীকার করা হয় না।'
                : 'Ethical Promise: Zero fake bank statements or fraudulent documentation. Pure compliance.'}
            </span>
          </div>

          <a
            href="#consultation-section"
            className="whitespace-nowrap px-4 py-2 bg-[#E8B13C] hover:bg-[#dba129] text-[#081F45] font-bold rounded-xl transition-all shadow-xs"
          >
            {lang === 'bn' ? 'আপনার প্রোফাইল মূল্যায়ন করুন' : 'Evaluate Your Profile'}
          </a>
        </div>
      </div>
    </section>
  );
};
