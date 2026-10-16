import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { SafeImage } from '../components/SafeImage';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { HeroSlider } from '../components/HeroSlider';
import { CampusTicker } from '../components/CampusTicker';
import { StudentJourney } from '../components/StudentJourney';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { LeadConsultationForm } from '../components/LeadConsultationForm';
import { COUNTRIES } from '../data/countries';
import { UNIVERSITIES } from '../data/universities';
import { COURSES } from '../data/courses';
import { SERVICES } from '../data/services';
import { FAQS } from '../data/faqs';
import { COMPANY_INFO } from '../data/company';
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Building2,
  GraduationCap,
  ShieldCheck,
  Compass,
  MapPin,
  MessageCircle,
  ExternalLink,
  BookOpen,
  Sparkles,
  Award,
  Layers,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Search,
  Phone,
  Clock,
  Send
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  // Quick Search state
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/universities?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/universities');
    }
  };

  // Top 6 featured destinations
  const featuredCountries = COUNTRIES.slice(0, 6);

  // University sliding filter tab state
  const [uniCountryTab, setUniCountryTab] = useState<string>('All');
  const uniScrollRef = useRef<HTMLDivElement>(null);

  const filteredSpotlightUnis = UNIVERSITIES.filter((uni) => {
    if (uniCountryTab === 'All') return true;
    if (uniCountryTab === 'Canada') return uni.countryId === 'canada';
    if (uniCountryTab === 'UK') return uni.countryId === 'uk';
    if (uniCountryTab === 'USA') return uni.countryId === 'usa';
    if (uniCountryTab === 'Australia') return uni.countryId === 'australia';
    if (uniCountryTab === 'Germany') return uni.countryId === 'germany';
    if (uniCountryTab === 'Malaysia') return uni.countryId === 'malaysia';
    return true;
  });

  const scrollUnis = (direction: 'left' | 'right') => {
    if (uniScrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      uniScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Expanded High-Demand Subject Categories
  const subjectList = [
    'Computer Science & AI',
    'Medicine & Healthcare',
    'Data Science & Analytics',
    'Business & MBA',
    'Mechanical & Robotics',
    'Finance & FinTech',
    'Biotechnology & Pharmacy'
  ];
  const [activeSubject, setActiveSubject] = useState<string>('Computer Science & AI');

  const filteredPrograms = COURSES.filter((c) => {
    const cat = c.subjectCategory.toLowerCase();
    if (activeSubject === 'Computer Science & AI') {
      return (
        cat.includes('computer') ||
        cat.includes('software') ||
        cat.includes('artificial') ||
        cat.includes('ai') ||
        cat.includes('cyber')
      );
    }
    if (activeSubject === 'Medicine & Healthcare') {
      return (
        cat.includes('medicine') ||
        cat.includes('health') ||
        cat.includes('dental') ||
        cat.includes('biomedical')
      );
    }
    if (activeSubject === 'Data Science & Analytics') {
      return (
        cat.includes('data') ||
        cat.includes('analytics') ||
        cat.includes('informatics')
      );
    }
    if (activeSubject === 'Business & MBA') {
      return (
        cat.includes('business') ||
        cat.includes('mba') ||
        cat.includes('management')
      );
    }
    if (activeSubject === 'Mechanical & Robotics') {
      return (
        cat.includes('mechanical') ||
        cat.includes('robotics') ||
        cat.includes('electrical') ||
        cat.includes('engineering')
      );
    }
    if (activeSubject === 'Finance & FinTech') {
      return (
        cat.includes('finance') ||
        cat.includes('fintech') ||
        cat.includes('accounting')
      );
    }
    if (activeSubject === 'Biotechnology & Pharmacy') {
      return (
        cat.includes('biotech') ||
        cat.includes('pharmacy') ||
        cat.includes('biochemical') ||
        cat.includes('science')
      );
    }
    return cat === activeSubject.toLowerCase();
  }).slice(0, 4);

  // FAQ Accordion State (Only questions shown by default)
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <SEOHead
        title="DREAM • EXPLORE • ACHIEVE"
        description="Explore accredited universities, discover your ideal course, and prepare your study visa with trusted guidance from Elora Study Abroad."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#081F45] text-white pt-10 pb-16 md:py-20 lg:py-24">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081F45] via-[#102D58] to-[#081F45] opacity-95" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8B13C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102D58] border border-slate-700/60 text-xs font-semibold text-[#E8B13C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('brand.tagline')}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('hero.title')}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  to="/destinations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#081F45] bg-[#E8B13C] hover:bg-[#dba129] active:bg-[#c99220] rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <span>{t('hero.btn_destinations')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/universities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#102D58] hover:bg-[#183d73] border border-slate-600/60 rounded-xl transition-all"
                >
                  <Building2 className="w-4 h-4 text-[#E8B13C]" />
                  <span>{t('hero.btn_universities')}</span>
                </Link>

                <Link
                  to="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-slate-700 rounded-xl transition-all"
                >
                  <BookOpen className="w-4 h-4 text-[#E8B13C]" />
                  <span>{lang === 'bn' ? 'কোর্স খুঁজুন (৫০০+)' : 'Explore Courses (500+)'}</span>
                </Link>

                <a
                  href="#consultation-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#E8B13C] hover:text-white bg-transparent hover:bg-white/5 border border-[#E8B13C]/40 rounded-xl transition-all"
                >
                  <span>{t('hero.btn_consultation')}</span>
                </a>
              </div>

              {/* Key Highlights with Smooth Count-Up Animation (0 to Target) */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-700/50 text-left">
                <AnimatedCounter
                  end={18}
                  duration={1600}
                  label={lang === 'bn' ? 'স্টাডি ডেস্টিনেশন' : 'Study Destinations'}
                  sublabel={lang === 'bn' ? 'উত্তর আমেরিকা ও ইউরোপ' : 'Verified global routes'}
                />
                <AnimatedCounter
                  end={500}
                  suffix="+"
                  duration={1800}
                  label={lang === 'bn' ? 'যাচাইকৃত প্রোগ্রাম' : 'Verified Programs'}
                  sublabel={lang === 'bn' ? 'ব্যাচেলর, মাস্টার্স ও পিএইচডি' : 'STEM, Business & Medicine'}
                />
                <AnimatedCounter
                  end={2}
                  suffix=" Global"
                  duration={1400}
                  label={lang === 'bn' ? 'গ্লোবাল অফিস' : 'Global Offices'}
                  sublabel={lang === 'bn' ? 'ঢাকা ও টরন্টো' : 'Dhaka & Toronto'}
                />
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  duration={2000}
                  label={lang === 'bn' ? 'সততা ও স্বচ্ছতা' : 'Honest Guidance'}
                  sublabel={lang === 'bn' ? 'কোনো গোপন ফি নেই' : 'Ethical student advisory'}
                />
              </div>
            </div>

            {/* Right Column: Hero Visual Asset with Interactive Sliding Gallery */}
            <div className="lg:col-span-5 relative">
              <HeroSlider lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* Instant University & Degree Quick Search Bar (Homepage Search Feature) */}
      <section className="relative z-30 -mt-6 sm:-mt-8 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 backdrop-blur-md">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'bn'
                    ? 'বিশ্ববিদ্যালয় বা কোর্স সার্চ করুন... (উদা: Windsor, Greenwich, CS, Medicine)'
                    : 'Search universities, countries, or degrees... (e.g. Windsor, Greenwich, CS, Medicine)'
                }
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] text-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#081F45] hover:bg-[#102D58] active:bg-[#061836] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm whitespace-nowrap"
            >
              <Search className="w-4 h-4 text-[#E8B13C]" />
              <span>{lang === 'bn' ? 'অনুসন্ধান করুন' : 'Search Directory'}</span>
            </button>
          </form>

          {/* Quick Filter Tags */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium mr-1">
              {lang === 'bn' ? 'দ্রুত খুঁজুন:' : 'Popular:'}
            </span>
            {[
              { label: 'Canada 🇨🇦', id: 'canada' },
              { label: 'UK 🇬🇧', id: 'uk' },
              { label: 'USA 🇺🇸', id: 'usa' },
              { label: 'Australia 🇦🇺', id: 'australia' },
              { label: 'Germany 🇩🇪', id: 'germany' },
              { label: 'Computer Science', search: 'Computer Science' },
              { label: 'Medicine', search: 'Medicine' }
            ].map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => {
                  if (chip.id) navigate(`/universities?country=${chip.id}`);
                  else if (chip.search) navigate(`/universities?search=${encodeURIComponent(chip.search)}`);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#E8B13C]/20 hover:text-[#081F45] text-slate-700 transition-colors font-medium text-[11px]"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS SMOOTH NEWS TICKER MARQUEE for Top Admitted Campuses */}
      <div className="mt-8">
        <CampusTicker />
      </div>

      {/* Trust Highlights Section */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <Globe2 className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.countries_count')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.countries_desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <Building2 className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.verified_unis')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.verified_desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <MapPin className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.dual_offices')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.dual_desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.honest_guidance')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.honest_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Study Destinations (With Mobile Swipeable Rail + Desktop Grid) */}
      <section className="py-16 md:py-24 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                Explore Destinations
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] mt-1.5">
                {lang === 'bn' ? 'শীর্ষ উচ্চশিক্ষা গন্তব্যসমূহ' : 'Popular Study Destinations'}
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                {lang === 'bn'
                  ? '১৮টি শীর্ষ দেশের মানসম্মত শিক্ষাব্যবস্থা, ডিগ্রি ও ভিসা নিয়মাবলী সম্পর্কে জানুন।'
                  : 'Discover verified academic criteria, post-study work rights, and living estimates across our 18 destinations.'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 sm:hidden">👈 Swipe cards 👉</span>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#081F45] hover:text-[#E8B13C] transition-colors"
              >
                <span>{t('nav.all_destinations')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Destination Cards: Swipeable Horizontal Rail on Mobile, Grid on Desktop */}
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
            {featuredCountries.map((country) => (
              <div
                key={country.id}
                className="w-[84vw] sm:w-[350px] shrink-0 snap-center md:w-auto md:shrink group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Clickable Image to Country Guide */}
                  <Link to={`/destinations/${country.id}`} className="block relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <SafeImage
                      src={country.heroImage}
                      alt={`Study in ${country.nameEn}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-xs flex items-center gap-1.5">
                      <span>{country.flag}</span>
                      <span>{country.region}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#081F45]/80 text-white text-[10px] font-mono">
                      {country.currency.split('•')[0]}
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Link to={`/destinations/${country.id}`}>
                        <h3 className="text-xl font-bold text-[#081F45] group-hover:text-[#102D58] transition-colors">
                          {lang === 'bn' ? country.nameBn : country.nameEn}
                        </h3>
                      </Link>
                      <span className="text-xs text-slate-500 font-mono">
                        {country.capital}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {lang === 'bn' ? country.overviewBn : country.overviewEn}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-500 pt-3 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <span>Intakes:</span>
                        <span className="font-medium text-slate-700">{country.intakesEn.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Currency:</span>
                        <span className="font-medium text-slate-700">{country.currency.split('•')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dual Action Buttons: Guide & Universities (Filter directly for this country) */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                  <Link
                    to={`/destinations/${country.id}`}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-[11px] font-semibold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{lang === 'bn' ? 'গাইড ও ভিসা' : 'Guide & Visa'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <Link
                    to={`/universities?country=${country.id}`}
                    className="py-2.5 px-3 bg-[#E8B13C]/15 hover:bg-[#E8B13C] text-[#081F45] rounded-xl text-[11px] font-semibold text-center transition-colors flex items-center justify-center gap-1 font-bold"
                  >
                    <Building2 className="w-3 h-3 text-[#081F45]" />
                    <span>{lang === 'bn' ? 'বিশ্ববিদ্যালয়' : 'Universities'}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDED High-Demand Programs & Degree Finder Showcase */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                Degree Finder
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] mt-1.5">
                {lang === 'bn' ? 'উচ্চ চাহিদাসম্পন্ন ডিগ্রি ও প্রোগ্রাম' : 'High-Demand Programs & Degrees'}
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                {lang === 'bn'
                  ? 'কম্পিউটার সায়েন্স, এআই, মেডিসিন, ডেটা সায়েন্স ও ফিনটেক—সেরা বৈশ্বিক ডিগ্রি সরাসরি অন্বেষণ করুন।'
                  : 'Explore industry-aligned undergraduate and postgraduate programs offering direct post-study employment routes.'}
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#081F45] text-white rounded-xl text-xs font-semibold hover:bg-[#102D58] transition-colors self-start md:self-auto"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#E8B13C]" />
              <span>{lang === 'bn' ? 'সকল ৫০০+ প্রোগ্রাম দেখুন' : 'Explore All 500+ Programs'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Expanded Subject Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
            {subjectList.map((subj) => (
              <button
                key={subj}
                onClick={() => setActiveSubject(subj)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeSubject === subj
                    ? 'bg-[#081F45] text-white shadow-sm font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>

          {/* Program Cards Grid (Mobile Swipeable Rail) */}
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
            {filteredPrograms.map((course) => (
              <div
                key={course.id}
                className="w-[80vw] sm:w-[300px] shrink-0 snap-center md:w-auto md:shrink bg-[#F5F7FB] rounded-2xl p-5 border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-semibold text-[10px]">
                      {course.degreeLevel}
                    </span>
                    <span className="text-slate-500 font-medium text-[11px] flex items-center gap-1">
                      <Globe2 className="w-3 h-3" />
                      {course.countryName}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#081F45] text-sm hover:text-[#102D58] line-clamp-2">
                    <Link to={`/courses/${course.id}`}>
                      {lang === 'bn' ? course.nameBn : course.name}
                    </Link>
                  </h3>

                  <div className="text-xs text-slate-600 flex items-center gap-1.5 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-[#E8B13C] shrink-0" />
                    <span className="font-medium line-clamp-1">{course.universityName}</span>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed pt-1">
                    {lang === 'bn' ? course.overviewBn : course.overviewEn}
                  </p>

                  <div className="text-[11px] text-slate-700 font-semibold pt-2 border-t border-slate-200/60">
                    <span>Tuition: </span>
                    <span className="text-[#081F45]">{course.tuitionEn}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to={`/courses/${course.id}`}
                    className="w-full py-2 px-3 bg-white hover:bg-[#081F45] hover:text-white text-[#081F45] border border-slate-200 rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{t('common.view_details')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Roadmap Section */}
      <StudentJourney />

      {/* CURATED TOP UNIVERSITIES WITH SLIDING CAROUSEL CONTROLS & COUNTRY TABS */}
      <section className="py-16 md:py-24 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                World-Class Campuses
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] mt-1.5">
                {lang === 'bn' ? 'শীর্ষস্থানীয় বিশ্ববিদ্যালয়সমূহ' : 'Curated Top Universities'}
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                {lang === 'bn'
                  ? 'গবেষণা, সুযোগ-সুবিধা ও বাংলাদেশি শিক্ষার্থীদের পছন্দের ভিত্তিতে যাচাইকৃত বিশ্ববিদ্যালয়সমূহ স্লাইড করে দেখুন।'
                  : 'Slide and explore verified admission guidance, tuition estimates, and programs for world-renowned institutions.'}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={() => scrollUnis('left')}
                aria-label="Slide universities left"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#081F45] hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollUnis('right')}
                aria-label="Slide universities right"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#081F45] hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <Link
                to="/universities"
                className="ml-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#081F45] hover:text-[#E8B13C] transition-colors"
              >
                <span>{lang === 'bn' ? 'সকল বিশ্ববিদ্যালয়' : 'View All'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Country Tabs for University Section */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
            {['All', 'Canada', 'UK', 'USA', 'Australia', 'Germany', 'Malaysia'].map((tab) => (
              <button
                key={tab}
                onClick={() => setUniCountryTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                  uniCountryTab === tab
                    ? 'bg-[#081F45] text-white shadow-sm font-bold'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Smooth Sliding University Track */}
          <div
            ref={uniScrollRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 pb-4"
          >
            {filteredSpotlightUnis.map((uni) => (
              <div
                key={uni.id}
                className="w-[84vw] sm:w-[360px] shrink-0 snap-start group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <Link to={`/universities/${uni.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <SafeImage
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#081F45]/90 text-white text-[11px] font-semibold">
                      {uni.countryName}
                    </div>
                  </Link>

                  <div className="p-5">
                    <div className="text-xs font-medium text-slate-500 mb-1">{uni.city}</div>
                    <Link to={`/universities/${uni.slug}`}>
                      <h3 className="text-base font-bold text-[#081F45] group-hover:text-[#102D58] transition-colors mb-2 leading-snug line-clamp-1">
                        {lang === 'bn' ? uni.nameBn : uni.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {lang === 'bn' ? uni.overviewBn : uni.overviewEn}
                    </p>

                    <div className="text-[11px] text-slate-500 space-y-1">
                      <div>
                        <span className="font-semibold text-slate-700">English: </span>
                        <span>{uni.englishRequirementsEn.slice(0, 35)}...</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Tuition: </span>
                        <span className="font-medium text-slate-900">{uni.tuitionRangeEn}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/universities/${uni.slug}`}
                    className="w-full py-2 px-3 bg-slate-100 hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{t('common.view_details')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Banner */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                Comprehensive Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] leading-tight">
                {lang === 'bn'
                  ? 'আপনার লক্ষ্য অর্জনে আমাদের নিবেদিত সেবাসমূহ'
                  : 'Tailored Services for Every Step of Your Global Journey'}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'বিশ্ববিদ্যালয় নির্বাচন, কোর্স বাছাই, এসওপি নির্দেশনা, ভিসা ডকুমেন্টেশন এবং প্রি-ডিপার্চার প্রস্তুতি—প্রতিটি ধাপে আমরা দিচ্ছি সঠিক পথনির্দেশ।'
                  : 'From personalized university matching to rigorous documentation guidance, our advisors stand beside you with complete integrity.'}
              </p>

              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#081F45] hover:bg-[#102D58] rounded-xl transition-colors shadow-xs"
                >
                  <span>{lang === 'bn' ? 'সকল ৯টি সেবা দেখুন' : 'Explore All 9 Services'}</span>
                  <ArrowRight className="w-4 h-4 text-[#E8B13C]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.slice(0, 4).map((srv) => (
                <div
                  key={srv.id}
                  className="p-5 rounded-2xl bg-[#F5F7FB] border border-slate-200/80 hover:border-[#081F45]/30 hover:bg-white transition-all shadow-xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#081F45] text-white flex items-center justify-center mb-3">
                    <GraduationCap className="w-4 h-4 text-[#E8B13C]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#081F45] mb-1.5">
                    {lang === 'bn' ? srv.titleBn : srv.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'bn' ? srv.shortDescBn : srv.shortDescEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Swipeable Testimonials Carousel - Bangladeshi Student Success Stories */}
      <TestimonialCarousel />

      {/* Free Student Consultation Form Section (WITH HIGHLIGHTED OFFICE CARDS) */}
      <section id="consultation-section" className="py-16 md:py-24 bg-[#081F45] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#081F45] via-[#102D58] to-[#081F45] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column Information with HIGHLIGHTED OFFICE CARDS */}
            <div className="lg:col-span-5 text-white space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                {lang === 'bn'
                  ? 'আপনার বিদেশে উচ্চশিক্ষার স্বপ্ন পূরণ করুন'
                  : 'Begin Your Free Consultation Today'}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'bn'
                  ? 'আমাদের অভিজ্ঞ কাউন্সেলরদের সাথে ঢাকা ও টরন্টো অফিসে সরাসরি বা অনলাইনে কথা বলুন এবং শতভাগ সৎ পরামর্শ নিন।'
                  : 'Submit your inquiry to schedule a free 1-on-1 session with our education consultants in Dhaka or Toronto.'}
              </p>

              {/* HIGHLIGHTED OFFICE ADDRESSES */}
              <div className="space-y-4 pt-2">
                {/* Dhaka Office Card */}
                <div className="p-4 rounded-2xl bg-[#102D58] border-2 border-[#E8B13C]/40 shadow-lg hover:border-[#E8B13C] transition-all">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/60">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🇧🇩</span>
                      <span className="font-bold text-white text-sm">
                        {lang === 'bn' ? 'ঢাকা কর্পোরেট অফিস' : 'Dhaka Corporate Office'}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#E8B13C] text-[#081F45]">
                      Bangladesh HQ
                    </span>
                  </div>
                  <div className="text-xs space-y-2 text-slate-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#E8B13C] shrink-0 mt-0.5" />
                      <span>{COMPANY_INFO.offices[0].address}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#E8B13C]" />
                        <a
                          href={`tel:${COMPANY_INFO.offices[0].phone}`}
                          className="font-mono text-white hover:text-[#E8B13C] font-semibold"
                        >
                          {COMPANY_INFO.offices[0].phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>10:00 AM – 7:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toronto Office Card */}
                <div className="p-4 rounded-2xl bg-[#102D58] border-2 border-slate-600/60 shadow-lg hover:border-[#E8B13C]/80 transition-all">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/60">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🇨🇦</span>
                      <span className="font-bold text-white text-sm">
                        {lang === 'bn' ? 'টরন্টো গ্লোবাল অফিস' : 'Toronto Global Office'}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Canada Liaison
                    </span>
                  </div>
                  <div className="text-xs space-y-2 text-slate-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#E8B13C] shrink-0 mt-0.5" />
                      <span>{COMPANY_INFO.offices[1].address}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#E8B13C]" />
                        <a
                          href={`tel:${COMPANY_INFO.offices[1].phone}`}
                          className="font-mono text-white hover:text-[#E8B13C] font-semibold"
                        >
                          {COMPANY_INFO.offices[1].phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>EST Time Zone</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('common.chat_whatsapp')}</span>
                </a>
                <span className="text-xs text-slate-400 font-medium">
                  {lang === 'bn' ? 'সরাসরি কাউন্সেলরের সাথে কথা বলুন' : 'Direct advisory with counselor'}
                </span>
              </div>
            </div>

            {/* Right Column Consultation Form */}
            <div className="lg:col-span-7">
              <LeadConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS - INTERACTIVE ACCORDION (Only questions shown by default) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#081F45] mt-1.5">
              {lang === 'bn' ? 'সাধারণ জিজ্ঞাসাসমূহ' : 'Clear Answers to Student Queries'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {lang === 'bn'
                ? 'প্রশ্নের ওপর ক্লিক করে বিস্তারিত উত্তর জানুন।'
                : 'Click on any question below to reveal the verified response.'}
            </p>
          </div>

          {/* Interactive Accordion Items */}
          <div className="space-y-3">
            {FAQS.slice(0, 6).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all bg-[#F5F7FB]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#081F45]">
                      {lang === 'bn' ? faq.questionBn : faq.questionEn}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#081F45] text-white rotate-180' : 'bg-white text-slate-500 border border-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Expandable Content */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in slide-in-from-top-1 duration-150">
                      {lang === 'bn' ? faq.answerBn : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] transition-colors"
            >
              <span>{lang === 'bn' ? 'সকল প্রশ্নোত্তর দেখুন' : 'View All Frequently Asked Questions'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
