import React, { useState } from 'react';
import { PageTab, Course, GalleryItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { EnrollmentModal } from './components/EnrollmentModal';
import { GalleryModal } from './components/GalleryModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { IntroAnimation } from './components/IntroAnimation';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { TechnicalSupportPage } from './pages/TechnicalSupportPage';
import { ContactPage } from './pages/ContactPage';

import { GALLERY_ITEMS } from './data/galleryData';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentTab, setCurrentTab] = useState<PageTab>('inicio');
  
  // Modals state
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [enrollmentDefaultCourse, setEnrollmentDefaultCourse] = useState<string | undefined>(undefined);
  
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<Course | null>(null);

  const handleOpenEnrollment = (courseName?: string) => {
    setEnrollmentDefaultCourse(courseName);
    setIsEnrollmentOpen(true);
  };

  const handleSelectGalleryItem = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourseDetail(course);
  };

  const handlePrevGalleryItem = () => {
    if (!selectedGalleryItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedGalleryItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedGalleryItem(GALLERY_ITEMS[prevIndex]);
  };

  const handleNextGalleryItem = () => {
    if (!selectedGalleryItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedGalleryItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedGalleryItem(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07152d] font-sans antialiased text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      
      {/* 6-Second High-Tech Automation & Electrical Intro Animation */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Fixed Master Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenEnrollment={handleOpenEnrollment}
      />

      {/* Main Dynamic View */}
      <main className="flex-1 w-full">
        {currentTab === 'inicio' && (
          <HomePage
            setCurrentTab={setCurrentTab}
            onOpenEnrollment={handleOpenEnrollment}
            onSelectCourse={handleSelectCourse}
            onSelectGalleryItem={handleSelectGalleryItem}
          />
        )}

        {currentTab === 'cursos' && (
          <CoursesPage
            setCurrentTab={setCurrentTab}
            onOpenEnrollment={handleOpenEnrollment}
            onSelectCourse={handleSelectCourse}
          />
        )}

        {currentTab === 'sobre' && (
          <AboutPage
            setCurrentTab={setCurrentTab}
            onOpenEnrollment={handleOpenEnrollment}
          />
        )}

        {currentTab === 'galeria' && (
          <GalleryPage
            setCurrentTab={setCurrentTab}
            onOpenEnrollment={handleOpenEnrollment}
            onSelectGalleryItem={handleSelectGalleryItem}
          />
        )}

        {currentTab === 'apoio' && (
          <TechnicalSupportPage
            setCurrentTab={setCurrentTab}
            onOpenEnrollment={handleOpenEnrollment}
          />
        )}

        {currentTab === 'contato' && (
          <ContactPage
            setCurrentTab={setCurrentTab}
            onOpenEnrollment={handleOpenEnrollment}
          />
        )}
      </main>

      {/* Master Footer */}
      <Footer
        setCurrentTab={setCurrentTab}
        onOpenEnrollment={handleOpenEnrollment}
      />

      {/* AI Assistant Floating Widget (with direct WhatsApp & Instagram redirects) */}
      <AIAssistantWidget
        onOpenEnrollment={handleOpenEnrollment}
      />

      {/* Global Modals */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        defaultCourseName={enrollmentDefaultCourse}
      />

      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onPrev={handlePrevGalleryItem}
        onNext={handleNextGalleryItem}
        onEnroll={(courseName) => handleOpenEnrollment(courseName)}
      />

      <CourseDetailModal
        course={selectedCourseDetail}
        onClose={() => setSelectedCourseDetail(null)}
        onEnroll={(courseTitle) => handleOpenEnrollment(courseTitle)}
      />

    </div>
  );
}
