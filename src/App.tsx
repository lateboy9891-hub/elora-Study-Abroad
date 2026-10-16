import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { CountryDetailPage } from './pages/CountryDetailPage';
import { UniversitiesPage } from './pages/UniversitiesPage';
import { UniversityDetailPage } from './pages/UniversityDetailPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Component that manages scroll position & anchor hash scrolling
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen flex flex-col bg-[#F5F7FB] text-[#18253B]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* Destinations Directory & Detailed Country Guides */}
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/destinations/:slug" element={<CountryDetailPage />} />
              <Route path="/study-in/:slug" element={<CountryDetailPage />} />

              {/* Universities */}
              <Route path="/universities" element={<UniversitiesPage />} />
              <Route path="/universities/:slug" element={<UniversityDetailPage />} />

              {/* Courses */}
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetailPage />} />

              {/* Core Information Pages */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faqs" element={<FaqPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />

              {/* Dynamic slug route for /study-in-canada, /study-in-uk, /canada, etc */}
              <Route path="/:slug" element={<CountryDetailPage />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
