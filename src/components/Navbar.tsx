import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { EloraLogo } from './EloraLogo';
import { COUNTRIES } from '../data/countries';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  ArrowRight,
  GraduationCap,
  Sparkles,
  PhoneCall,
  Search,
  MessageCircle
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdown, setDestinationsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<any>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDestinationsDropdown(false);
  }, [location.pathname, location.search]);

  // Handle sticky navbar scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Smooth hover handlers for destinations dropdown
  const handleDropdownEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDestinationsDropdown(true);
  };

  const handleDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDestinationsDropdown(false);
    }, 180);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.universities'), path: '/universities' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <EloraLogo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-[#18253B]">
              <Link
                to="/"
                className={`hover:text-[#081F45] transition-colors whitespace-nowrap ${
                  location.pathname === '/' ? 'text-[#081F45] font-semibold' : ''
                }`}
              >
                {t('nav.home')}
              </Link>

              {/* Destinations Dropdown with instant Hover & Click support */}
              <div
                className="relative py-2"
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  onClick={() => setDestinationsDropdown((prev) => !prev)}
                  className={`flex items-center gap-1.5 hover:text-[#081F45] transition-colors whitespace-nowrap ${
                    location.pathname.startsWith('/destinations') || location.pathname.startsWith('/study-in')
                      ? 'text-[#081F45] font-semibold'
                      : ''
                  }`}
                  aria-expanded={destinationsDropdown}
                >
                  <span>{t('nav.destinations')}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      destinationsDropdown ? 'rotate-180 text-[#E8B13C]' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {destinationsDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-3 px-3 animate-in fade-in slide-in-from-top-2 duration-150 z-[110]"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {t('nav.popular_countries')}
                      </span>
                      <Link
                        to="/destinations"
                        onClick={() => setDestinationsDropdown(false)}
                        className="text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] flex items-center gap-1"
                      >
                        {t('nav.all_destinations')}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {COUNTRIES.slice(0, 10).map((country) => (
                        <Link
                          key={country.id}
                          to={`/destinations/${country.id}`}
                          onClick={() => setDestinationsDropdown(false)}
                          className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-base">{country.flag}</span>
                          <span className="text-xs font-medium text-slate-800 group-hover:text-[#081F45]">
                            {lang === 'bn' ? country.nameBn : country.nameEn}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                      <Link
                        to="/destinations"
                        onClick={() => setDestinationsDropdown(false)}
                        className="w-full py-2 px-3 bg-slate-50 hover:bg-[#081F45] hover:text-white rounded-xl text-xs font-semibold text-center text-slate-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>{lang === 'bn' ? 'সকল ১৮টি দেশ দেখুন' : 'Explore All 18 Destinations'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-[#081F45] transition-colors whitespace-nowrap ${
                    location.pathname === link.path ? 'text-[#081F45] font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Zone: Language Switcher, CTA & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher Buttons */}
              <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    lang === 'en'
                      ? 'bg-[#081F45] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('bn')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all font-bangla ${
                    lang === 'bn'
                      ? 'bg-[#081F45] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="বাংলায় পরিবর্তন করুন"
                >
                  বাংলা
                </button>
              </div>

              {/* Free Consultation CTA (Tablet & Desktop) */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#081F45] bg-[#E8B13C] hover:bg-[#dba129] active:bg-[#c99220] rounded-xl transition-all shadow-xs hover:shadow whitespace-nowrap"
              >
                <span>{t('nav.free_consultation')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button - Instant Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#081F45]" /> : <Menu className="w-5 h-5 text-[#081F45]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[99] bg-black/50 backdrop-blur-xs flex flex-col justify-end animate-in fade-in duration-200">
          <div
            className="w-full bg-white rounded-t-3xl shadow-2xl border-t border-slate-200 max-h-[85vh] overflow-y-auto p-6 animate-in slide-in-from-bottom duration-200 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'bn' ? 'মেনু ও নেভিগেশন' : 'Navigation Menu'}
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#081F45] p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {t('nav.home')}
                </Link>

                <Link
                  to="/destinations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#081F45] p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <span>{t('nav.destinations')}</span>
                  <span className="text-[11px] bg-[#E8B13C]/20 text-[#081F45] font-bold px-2 py-0.5 rounded-full">
                    18 Countries
                  </span>
                </Link>

                <Link
                  to="/universities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#081F45] p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {t('nav.universities')}
                </Link>

                <Link
                  to="/courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#081F45] p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {t('nav.courses')}
                </Link>

                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#081F45] p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {t('nav.services')}
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#081F45] p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {t('nav.about')}
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#081F45] p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-xs font-bold text-[#081F45] bg-[#E8B13C] rounded-xl shadow-xs"
              >
                {t('nav.free_consultation')}
              </Link>
              <a
                href="https://wa.me/8801348223630"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-bold text-white bg-[#25D366] rounded-xl shadow-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +8801348223630</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
