import React from 'react';
import { Zap, Orbit, Telescope } from 'lucide-react';

export default function EnigmesSection() {
  return (
    <section id="enigmes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Les Énigmes de la Physique Contemporaine
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Trois mystères fondamentaux révèlent les limites de notre compréhension actuelle de l'univers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="futuristic-card p-8 rounded-2xl border-red-500/30 hover:border-red-400/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl"></div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-600/30 rounded-full mr-4 group-hover:bg-red-500/40 transition-colors duration-300 relative z-10">
                <Zap className="text-red-400 group-hover:text-red-300" size={32} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white relative z-10">Singularités</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4 relative z-10">
              Selon la Relativité Générale, l'effondrement d'une étoile massive crée un trou noir avec en son centre un point de densité infinie.
            </p>
            <p className="text-gray-300 text-sm relative z-10">
              Mais un "infini" physique n'a aucun sens concret : c'est une rupture du modèle.
            </p>
          </div>

          <div className="futuristic-card p-8 rounded-2xl border-blue-500/30 hover:border-blue-400/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-2xl"></div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600/30 rounded-full mr-4 group-hover:bg-blue-500/40 transition-colors duration-300 relative z-10">
                <Orbit className="text-blue-400 group-hover:text-blue-300" size={32} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white relative z-10">Étoiles à Neutrons</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4 relative z-10">
              Ces résidus d'étoiles se refroidissent beaucoup plus rapidement que ne le prédisent nos modèles.
            </p>
            <p className="text-gray-300 text-sm relative z-10">
              Qu'est-ce qui pourrait expliquer cela ?
            </p>
          </div>

          <div className="futuristic-card p-8 rounded-2xl border-purple-500/30 hover:border-purple-400/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-2xl"></div>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-600/30 rounded-full mr-4 group-hover:bg-purple-500/40 transition-colors duration-300 relative z-10">
                <Telescope className="text-purple-400 group-hover:text-purple-300" size={32} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white relative z-10">Expansion Cosmique</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4 relative z-10">
              L'univers s'étend à une vitesse croissante, poussé par une mystérieuse "énergie sombre".
            </p>
            <p className="text-gray-300 text-sm relative z-10">
              Et si ce n'était pas l'espace qui s'étirait, mais notre échelle de référence ?
            </p>
          </div>
        </div>

        <div className="mt-16 text-center relative z-10">
          <p className="text-xl text-cyan-300 font-semibold">
            Ces trois énigmes ont un point commun : elles naissent d'une incompréhension du rapport entre les échelles.
          </p>
        </div>
      </div>
    </section>
  );
}