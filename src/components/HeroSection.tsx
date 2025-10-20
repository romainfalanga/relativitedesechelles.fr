import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up relative z-10">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-bold mb-8 leading-tight">
            <span className="futuristic-gradient block sm:inline">
              <span className="block sm:inline">La Relativité</span>
              <span className="block sm:inline sm:ml-4">des Échelles</span>
            </span>
          </h1>
          <button
            onClick={() => scrollToSection('enigmes')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-orbitron font-semibold rounded-full hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-neon hover:shadow-neon-lg border border-purple-400/30"
          >
            Découvrir la théorie
            <ChevronDown className="ml-2 animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}