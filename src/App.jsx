import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ResumeTemplates from './components/ResumeTemplates';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ImageUpload from './components/ImageUpload';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <ResumeTemplates />
      <Testimonials />
      <ImageUpload />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
