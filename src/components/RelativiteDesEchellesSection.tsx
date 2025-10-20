import React from 'react';

export default function RelativiteDesEchellesSection() {
  return (
    <section id="relativite" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-indigo-900/40"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            La Relativité des Échelles
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            L'univers possède une cinquième dimension : l'échelle, où chaque niveau du réel se relie par un tissu unique d'espace-temps-d'échelle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative z-10">
          <div>
            <h3 className="text-3xl font-orbitron font-bold text-white mb-6">Le Tissu d'Espace-Temps d'Échelle</h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Ce tissu n'est pas une simple toile géométrique, mais une structure dynamique qui s'étire, 
              se contracte et se redéfinit sans cesse sous l'effet de la masse, de l'énergie, de la vitesse et de la courbure.
            </p>
            <p className="text-gray-200 leading-relaxed">
              C'est cette dynamique qui permet de comprendre simultanément les singularités, 
              le refroidissement des étoiles à neutrons, et l'expansion apparente de l'univers.
            </p>
          </div>
          <div className="futuristic-card p-8 rounded-2xl border-indigo-500/30 hover:border-indigo-400/50">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl"></div>
            <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4 relative z-10">Concept Clé</h4>
            <p className="text-gray-200 leading-relaxed relative z-10">
              Imaginons une règle universelle tendue entre l'infiniment petit et l'infiniment grand, 
              sur laquelle chaque réalité trouve sa place. C'est cette règle, et la manière dont elle 
              s'étire localement, qui constitue le cœur de la théorie.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="futuristic-card p-8 rounded-2xl border-green-500/30 hover:border-green-400/50">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/15 to-emerald-800/15 rounded-2xl"></div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4 relative z-10">La Règle Universelle</h3>
            <p className="text-gray-200 leading-relaxed mb-4 relative z-10">
              Cette règle s'étire en permanence vers l'infiniment petit. Son étirement continu n'est pas 
              une expansion externe de l'espace, mais une dilatation interne de l'échelle.
            </p>
            <p className="text-green-300 font-medium relative z-10">
              L'univers n'est pas en expansion vers l'extérieur : il s'étire de l'intérieur, 
              redessinant sans cesse sa propre règle.
            </p>
          </div>

          <div className="futuristic-card p-8 rounded-2xl border-orange-500/30 hover:border-orange-400/50">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/15 to-yellow-800/15 rounded-2xl"></div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4 relative z-10">Les Règles Locales</h3>
            <p className="text-gray-200 leading-relaxed mb-4 relative z-10">
              Chaque corps influe sur sa portion de règle. Il existe une infinité de règles locales, 
              imbriquées les unes dans les autres, comme des instruments accordés différemment.
            </p>
            <p className="text-yellow-300 font-medium relative z-10">
              L'univers devient une toile de tensions d'échelle entremêlées, où règle globale 
              et règles locales dialoguent en permanence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}