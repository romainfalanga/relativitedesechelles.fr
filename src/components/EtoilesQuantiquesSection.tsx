import React from 'react';

export default function EtoilesQuantiquesSection() {
  return (
    <section id="etoiles" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Les Étoiles Quantiques
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Au croisement de ces phénomènes se trouve un objet nouveau : l'étoile quantique, 
            pivot invisible de la continuité universelle
          </p>
        </div>

        <div className="space-y-12 relative z-10">
          {/* Premier bloc */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-indigo-500/30 hover:border-indigo-400/50">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/20 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-white mb-6 relative z-10">Un Tissu en Perpétuelle Transformation</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <p>
                Au croisement de ces phénomènes se trouve un objet nouveau : l'étoile quantique. 
                Le tissu d'espace-temps d'échelle est continuellement modifié par la masse, l'énergie, 
                la vitesse et la courbure. Dans des conditions extrêmes, comme au cœur d'un trou noir, 
                l'étirement de la règle d'échelle devient proportionnel à la courbure du tissu d'espace-temps 
                par rapport à la masse contenue dans l'horizon des événements. L'étoile quantique représente 
                un état où cette règle est si étirée qu'elle tire vers l'infiniment petit, inaugurant un nouvel équilibre.
              </p>
            </div>
          </div>

          {/* Deuxième bloc */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-blue-900/20 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-white mb-6 relative z-10">Un État d'Équilibre d'Échelle</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <p>
                L'étoile quantique n'est ni une singularité, ni une étoile classique : 
                c'est un état d'équilibre d'échelle où la gravitation, par son influence sur la courbure 
                de l'espace-temps, provoque un étirement extrême de la règle d'échelle, se manifestant 
                comme une dilatation interne. Cependant, l'étoile quantique n'est pas simplement un objet quantique au sens habituel. Sa règle d'échelle est si profondément étirée qu'elle nous projette dans un domaine encore plus "petit" que ce que nous considérons comme quantique à notre échelle de référence. 
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}