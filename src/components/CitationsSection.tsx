import React from 'react';

export default function CitationsSection() {
  return (
    <section id="citations" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Références et Fondements Théoriques
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            La Relativité des Échelles s'appuie sur les travaux fondamentaux de la physique moderne
          </p>
        </div>

        <div className="space-y-8 relative z-10">
          {/* Einstein - Relativité Générale */}
          <div className="futuristic-card p-8 md:p-10 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">Albert Einstein (1879-1955)</h3>
              <h4 className="text-lg font-semibold text-purple-300 mb-4">Théorie de la Relativité Générale (1915)</h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                Les équations d'Einstein constituent le fondement de notre compréhension de la gravitation comme courbure de l'espace-temps :
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white">
                  <i>G</i><sub>μν</sub> + Λ<i>g</i><sub>μν</sub> = <span className="mx-2">(</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">8π<i>G</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>c</i><sup>4</sup></div></div><span className="mx-2">)</span><i>T</i><sub>μν</sub>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                La Relativité des Échelles étend cette formulation en ajoutant la dimension d'échelle ε, 
                transformant la métrique classique en un tissu d'espace-temps-d'échelle dynamique.
              </p>
            </div>
          </div>

          {/* Schwarzschild */}
          <div className="futuristic-card p-8 md:p-10 rounded-3xl border-blue-500/30 hover:border-blue-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-cyan-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">Karl Schwarzschild (1873-1916)</h3>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Solution de Schwarzschild (1916)</h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                La métrique de Schwarzschild décrit l'espace-temps autour d'un objet sphérique massif :
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white">
                  <i>ds</i><sup>2</sup> = -<span className="mx-1">(</span>1 - <div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>r</i><sub>s</sub></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>r</i></div></div><span className="mx-1">)</span><i>c</i><sup>2</sup><i>dt</i><sup>2</sup> + <span className="mx-1">(</span>1 - <div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>r</i><sub>s</sub></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>r</i></div></div><span className="mx-1">)</span><sup>-1</sup><i>dr</i><sup>2</sup> + <i>r</i><sup>2</sup><i>dΩ</i><sup>2</sup>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Notre théorie résout le paradoxe de la singularité en r = 0 par l'étirement continu 
                de la règle d'échelle, éliminant les valeurs infinies.
              </p>
            </div>
          </div>

          {/* Hubble */}
          <div className="futuristic-card p-8 md:p-10 rounded-3xl border-green-500/30 hover:border-green-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-green-800/20 to-emerald-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">Edwin Hubble (1889-1953)</h3>
              <h4 className="text-lg font-semibold text-green-300 mb-4">Loi de Hubble-Lemaître (1929)</h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                La relation entre la vitesse de récession des galaxies et leur distance :
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white">
                  <i>v</i> = <i>H</i><sub>0</sub> × <i>d</i>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                La Relativité des Échelles réinterprète cette expansion comme un glissement d'échelle : 
                H<sub>ε</sub> mesure la vitesse d'étirement de la règle universelle vers l'infiniment petit.
              </p>
            </div>
          </div>

          {/* Planck */}
          <div className="futuristic-card p-8 md:p-10 rounded-3xl border-yellow-500/30 hover:border-yellow-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/20 to-orange-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">Max Planck (1858-1947)</h3>
              <h4 className="text-lg font-semibold text-yellow-300 mb-4">Constantes Fondamentales</h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                Les unités de Planck définissent les échelles fondamentales de la physique :
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white space-y-2">
                  <div><i>l</i><sub>P</sub> = √<span className="mx-1">(</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">ℏ<i>G</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>c</i><sup>3</sup></div></div><span className="mx-1">)</span> ≈ 1.6 × 10<sup>-35</sup> m</div>
                  <div><i>t</i><sub>P</sub> = √<span className="mx-1">(</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">ℏ<i>G</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>c</i><sup>5</sup></div></div><span className="mx-1">)</span> ≈ 5.4 × 10<sup>-44</sup> s</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Ces échelles apparaissent naturellement dans notre théorie comme points de référence 
                pour la longueur caractéristique L<sub>ε</sub> du tissu d'échelle.
              </p>
            </div>
          </div>

          {/* Friedmann */}
          <div className="futuristic-card p-8 md:p-10 rounded-3xl border-red-500/30 hover:border-red-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-pink-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">Alexander Friedmann (1888-1925)</h3>
              <h4 className="text-lg font-semibold text-red-300 mb-4">Équations de Friedmann (1922)</h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                Les équations décrivant l'évolution de l'univers homogène et isotrope :
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white">
                  <span className="mx-1">(</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">ȧ</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>a</i></div></div><span className="mx-1">)</span><sup>2</sup> = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">8π<i>G</i>ρ</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">3</div></div> - <div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>kc</i><sup>2</sup></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>a</i><sup>2</sup></div></div> + <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">Λ<i>c</i><sup>2</sup></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">3</div></div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Notre modèle remplace le facteur d'échelle cosmique a(t) par l'évolution 
                de la règle universelle Σ<sub>U</sub>(t), unifiant expansion et structure interne.
              </p>
            </div>
            </div>
          </div>

          {/* Note de remerciement */}
          <div className="futuristic-card p-8 md:p-10 rounded-3xl border-cyan-500/30 hover:border-cyan-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/20 to-teal-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">Remerciements</h3>
              <p className="text-gray-200 leading-relaxed">
                Cette théorie s'appuie sur les fondements solides établis par ces géants de la physique. 
                Leurs travaux constituent les piliers sur lesquels la Relativité des Échelles peut s'élever 
                pour proposer une nouvelle vision unifiée de l'univers.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}