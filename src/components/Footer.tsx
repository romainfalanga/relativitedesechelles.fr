import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900/90 backdrop-blur-xl border-t border-purple-500/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h3 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            La Relativité des Échelles
          </h3>
          <p className="text-gray-300 mb-6">
            Un nouveau paradigme pour comprendre l'univers dans toutes ses dimensions
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 - Modèle théorique</span>
          </div>
        </div>
      </div>
    </footer>
  );
}