import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EnigmesSection from './components/EnigmesSection';
import RelativiteDesEchellesSection from './components/RelativiteDesEchellesSection';
import ParadoxesSection from './components/ParadoxesSection';
import EtoilesQuantiquesSection from './components/EtoilesQuantiquesSection';
import VisualizationSection from './components/VisualizationSection';
import FormulasSection from './components/FormulasSection';
import CitationsSection from './components/CitationsSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'enigmes', 'relativite', 'paradoxes', 'etoiles', 'visualisation', 'formules', 'citations'];
    const handleScroll = () => {
      const sections = ['hero', 'enigmes', 'relativite', 'paradoxes', 'etoiles', 'formules', 'citations'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <EnigmesSection />
      <RelativiteDesEchellesSection />
      <ParadoxesSection />
      <EtoilesQuantiquesSection />
      <VisualizationSection />
      <FormulasSection />
      <CitationsSection />
      <Footer />
    </div>
  );
}

export default App;