import React from 'react';

export default function FormulasSection() {
  return (
    <section id="formules" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Formules Fondamentales
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Les équations mathématiques qui décrivent le tissu d'espace-temps-d'échelle et ses propriétés dynamiques
          </p>
        </div>

        <div className="space-y-16 relative z-10">
          {/* I. Le Tissu d'Espace-Temps (4D) */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">I. Le Tissu d'Espace-Temps (4D)</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-2xl font-serif text-white">
                  <i>ds</i><sup>2</sup> = <i>g</i><sub>μν</sub>(<i>x</i>)<i>dx</i><sup>μ</sup><i>dx</i><sup>ν</sup>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-purple-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong><i>x</i><sup>μ</sup> = (<i>ct</i>, <i>x</i>, <i>y</i>, <i>z</i>)</strong> : coordonnées espace-temps d'un événement (μ = 0, 1, 2, 3).</li>
                  <li><strong><i>ct</i></strong> : temps exprimé en unités de longueur via <i>c</i> (vitesse de la lumière).</li>
                  <li><strong><i>x</i>, <i>y</i>, <i>z</i></strong> : coordonnées spatiales.</li>
                  <li><strong><i>dx</i><sup>μ</sup></strong> : déplacement infinitésimal dans la direction μ (petit pas de temps/d'espace).</li>
                  <li><strong><i>g</i><sub>μν</sub>(<i>x</i>)</strong> : métrique (tenseur) qui encode la courbure gravitationnelle locale et dicte comment mesurer durées et distances.</li>
                  <li><strong><i>ds</i><sup>2</sup></strong> : intervalle (temps propre/distance propre) réellement mesuré par une horloge/règle idéales.</li>
                </ul>

                <h4 className="text-xl font-semibold text-purple-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  La Relativité Générale décrit la gravité comme géométrie : la matière-énergie modifie <i>g</i><sub>μν</sub>, et donc la manière dont on mesure <i>ds</i><sup>2</sup>. En région "plate" (pas de masse), <i>g</i><sub>μν</sub> est quasi minkowskien et les trajectoires "droites" sont triviales ; près d'une masse, <i>g</i><sub>μν</sub> varie, les horloges se dilatent, les règles se contractent et les trajectoires naturelles (géodésiques) se courbent. Cette base 4D est excellente sur de grandes échelles, mais s'essouffle dans l'infiniment petit ou aux densités extrêmes (singularités). C'est précisément là que la dimension d'échelle intervient dans la suite.
                </p>
              </div>
            </div>
          </div>

          {/* II. Le Tissu d'Espace-Temps-d'Échelle (5D) */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-blue-500/30 hover:border-blue-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-cyan-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">II. Le Tissu d'Espace-Temps-d'Échelle (5D)</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-2xl font-serif text-white">
                  <i>ds</i><sup>2</sup> = <i>g</i><sub>μν</sub>(<i>x</i>, ε)<i>dx</i><sup>μ</sup><i>dx</i><sup>ν</sup> + Σ<sup>2</sup>(<i>x</i>, ε)<i>dε</i><sup>2</sup>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-blue-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>ε</strong> : coordonnée d'échelle (5ᵉ dimension d'échelle, pas une direction spatiale) — un niveau de lecture du réel.</li>
                  <li><strong><i>g</i><sub>μν</sub>(<i>x</i>, ε)</strong> : métrique 4D dépendante de l'échelle (la géométrie ressentie varie selon ε).</li>
                  <li><strong>Σ(<i>x</i>, ε)</strong> : facteur d'échelle (étirement de la "règle" interne quand on change de niveau d'échelle).</li>
                  <li><strong><i>dε</i></strong> : variation de niveau d'échelle (et non "déplacement spatial").</li>
                  <li><strong>Σ<sup>2</sup><i>dε</i><sup>2</sup></strong> : contribution métrique de la profondeur d'échelle ; un même <i>dε</i> "compte" davantage si Σ est grande.</li>
                </ul>

                <h4 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  On ajoute une profondeur interne au tissu : en plus de "où/quand" (4D), on dit "à quelle échelle" on regarde. La géométrie <i>g</i><sub>μν</sub> dépend alors de ε, et l'étirement propre de la règle se mesure par Σ. Les masses, pressions, vitesses et courbure n'agissent plus seulement en 4D : elles modulent aussi l'état d'échelle. C'est ce degré de liberté supplémentaire qui permet à la théorie de relier l'infiniment petit et le très grand, et de régulariser les régimes extrêmes sans singularités.
                </p>
              </div>
            </div>
          </div>

          {/* III. La Tension de la Règle d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-green-500/30 hover:border-green-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-green-800/20 to-emerald-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">III. La Tension de la Règle d'Échelle</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-2xl font-serif text-white">
                  <i>T</i><sub>ε</sub> = <div className="inline-flex flex-col items-center mx-1"><div className="text-lg"><i>dΣ</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-lg"><i>dε</i></div></div>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-green-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong><i>T</i><sub>ε</sub></strong> : tension d'échelle — taux de variation de l'étirement Σ quand le niveau d'échelle ε varie.</li>
                  <li><strong>Σ(<i>x</i>, ε)</strong> : facteur d'échelle (étirement de la règle interne).</li>
                  <li><strong><i>dΣ</i>/<i>dε</i></strong> : dérivée par rapport à la coordonnée d'échelle (et non une direction spatiale).</li>
                </ul>

                <h4 className="text-xl font-semibold text-green-300 mb-3 mt-6">Fonctionnement</h4>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    <i>T</i><sub>ε</sub> mesure la sensibilité de la règle d'échelle aux changements de niveau d'échelle : il peut être positif, nul ou négatif suivant le profil Σ(ε), profil qui est façonné physiquement par l'environnement local (densité ρ, pression <i>p</i>, vitesse <i>v</i>) et la courbure. La loi d'alimentation le long des trajectoires physiques est :
                  </p>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg my-4">
                    <div className="text-center text-lg font-serif text-white">
                      <div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>DΣ</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>Dτ</i></div></div> = κ<sub>m</sub>ρ<i>c</i><sup>2</sup> + κ<sub>p</sub><i>p</i> + κ<sub>k</sub>ρ(γ-1)<i>c</i><sup>2</sup>, γ = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">1</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">√(1-<i>v</i><sup>2</sup>/<i>c</i><sup>2</sup>)</div></div>
                    </div>
                  </div>

                  <p>
                    ce qui relie explicitement la croissance de Σ aux conditions du milieu. Ainsi, ce n'est pas "aller vers l'infiniment petit" qui, en soi, augmente la tension : ce sont les régimes extrêmes (forte ρ, <i>p</i>, <i>v</i>) qui imposent un étirement plus soutenu. <i>T</i><sub>ε</sub> est une tension métrique (élasticité interne du tissu), et son rôle central est de remplacer la rupture (singularité) par un étirement continu dans la dimension d'échelle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IV. Règle Universelle et Règles Locales */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-yellow-500/30 hover:border-yellow-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/20 to-orange-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">IV. Règle Universelle et Règles Locales</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-2xl font-serif text-white">
                  Σ(<i>x</i>, ε) = Σ<sub>U</sub>(ε)Σ<sub>L</sub>(<i>x</i>)
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-yellow-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Σ<sub>U</sub>(ε)</strong> : règle universelle (composante globale, doucement variable à l'échelle cosmique).</li>
                  <li><strong>Σ<sub>L</sub>(<i>x</i>)</strong> : règle locale (dépend du lieu, donc de ρ, <i>p</i>, <i>v</i> et de la courbure locale).</li>
                  <li><strong>Σ(<i>x</i>, ε)</strong> : étirement effectif vu en (<i>x</i>, ε).</li>
                </ul>

                <h4 className="text-xl font-semibold text-yellow-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  L'étirement total factorise en un fond universel et une modulation locale. Σ<sub>U</sub> fixe la tension moyenne du tissu (cosmologie), tandis que Σ<sub>L</sub> encode la réponse locale des régions denses/rapides. C'est cette combinaison qui permet de cohérer les échelles : le global n'écrase pas le local, et le local ne contredit pas le global. Les phénomènes observés (flux thermiques, temps mesurés, redshift métrique) s'interprètent alors comme des effets de mesure avec une règle Σ variable.
                </p>
              </div>
            </div>
          </div>

          {/* V. Gravitation et Déformation d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-red-500/30 hover:border-red-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-pink-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">V. Gravitation et Déformation d'Échelle</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white space-y-2">
                  <div><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">∂Σ(<i>x</i>, ε)</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">∂<i>x</i><sup>μ</sup></div></div> ∝ <i>R</i><sub>μν</sub>(<i>x</i>, ε)<i>u</i><sup>ν</sup></div>
                  <div>∇<sub>μ</sub><span className="mx-1">(</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">∂Σ</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">∂<i>x</i><sup>μ</sup></div></div><span className="mx-1">)</span> = 8π<i>G</i>ρ<sub>ε</sub></div>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-red-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>∂<sub>μ</sub>Σ</strong> : variation de l'étirement selon l'espace-temps (proportionnalité phénoménologique).</li>
                  <li><strong><i>R</i><sub>μν</sub></strong> : tenseur de Ricci (mesure de courbure gravitationnelle).</li>
                  <li><strong><i>u</i><sup>ν</sup></strong> : quadrivitesse (direction du mouvement en 4D).</li>
                  <li><strong>∇<sub>μ</sub></strong> : dérivée covariante (respecte la géométrie courbe).</li>
                  <li><strong>ρ<sub>ε</sub></strong> : densité d'énergie d\'échelle (source interne des variations de Σ).</li>
                  <li><strong><i>G</i></strong> : constante de gravitation.</li>
                </ul>

                <h4 className="text-xl font-semibold text-red-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  La gravité ne courbe pas seulement l'espace-temps : elle tend aussi la règle d'échelle. La première relation lie variation spatiale-temporelle de Σ à la courbure projetée le long du mouvement <i>u</i><sup>ν</sup>. La seconde relation, de type "équation de source", dit que la divergence du gradient de Σ répond à la densité d'énergie d'échelle ρ<sub>ε</sub>. Ensemble, elles décrivent un dialogue : la géométrie influence l'échelle, et la dynamique d'échelle (via ρ<sub>ε</sub>) répond pour maintenir un cadre mesurable sans infinis.
                </p>
              </div>
            </div>
          </div>

          {/* VI. Fin du Paradoxe des Singularités */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-indigo-500/30 hover:border-indigo-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/20 to-purple-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">VI. Fin du Paradoxe des Singularités</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white space-y-2">
                  <div><div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>DΣ</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>Dτ</i></div></div> = κ<sub>m</sub>ρ<i>c</i><sup>2</sup> + κ<sub>p</sub><i>p</i> + κ<sub>k</sub>ρ(γ-1)<i>c</i><sup>2</sup></div>
                  <div>ḡ<sub>μν</sub>(<i>x</i>, ε) = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">1</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">Σ<sup>2</sup>(<i>x</i>, ε)</div></div><i>g</i><sub>μν</sub>(<i>x</i>, ε)</div>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-indigo-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong><i>D</i>/<i>Dτ</i></strong> : dérivée le long de la ligne d'univers (temps propre).</li>
                  <li><strong>ρ</strong> : densité d'énergie ; <strong><i>p</i></strong> : pression ; <strong>γ</strong> : facteur relativiste.</li>
                  <li><strong>κ<sub>m</sub>, κ<sub>p</sub>, κ<sub>k</sub></strong> : coefficients de couplage d'échelle.</li>
                  <li><strong><i>g</i><sub>μν</sub></strong> : métrique "brute" dépendante de ε ; <strong>ḡ<sub>μν</sub></strong> : métrique mesurée (rééchelonnée).</li>
                  <li><strong>1/Σ<sup>2</sup></strong> : facteur de renormalisation métrique.</li>
                </ul>

                <h4 className="text-xl font-semibold text-indigo-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  La première loi montre comment l'étirement croît physiquement avec ρ, <i>p</i>, <i>v</i> (via γ). La seconde définit la métrique effective réellement mesurée : ḡ = <i>g</i>/Σ<sup>2</sup>. Conséquence cruciale : les invariants observables (courbures, densités effectives, durées) se calculent sur ḡ, de sorte qu'ils restent finis même au cœur des régions extrêmes. La "singularité" n'est plus une rupture : c'est un régime d'échelle où la règle est profondément étirée.
                </p>
              </div>
            </div>
          </div>

          {/* VII. Refroidissement des Étoiles à Neutrons */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-cyan-500/30 hover:border-cyan-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/20 to-blue-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">VII. Refroidissement des Étoiles à Neutrons</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white space-y-2">
                  <div><div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>dΣ</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>dr</i></div></div> ∝ ρ(<i>r</i>)</div>
                  <div>Φ<sub>T</sub>(<i>r</i>) = -<i>k</i> <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">1</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">Σ(<i>r</i>)</div></div> <div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>dT</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>dr</i></div></div></div>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-cyan-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong><i>r</i></strong> : rayon (distance au centre de l'étoile).</li>
                  <li><strong>ρ(<i>r</i>)</strong> : densité radiale.</li>
                  <li><strong>Σ(<i>r</i>)</strong> : facteur d'échelle selon <i>r</i>.</li>
                  <li><strong>Φ<sub>T</sub></strong> : flux thermique radial ; <strong><i>T</i></strong> : température ; <strong><i>k</i></strong> : conductivité effective.</li>
                </ul>

                <h4 className="text-xl font-semibold text-cyan-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  La densité croît vers le centre ⇒ Σ varie plus vite (règle plus étirée au cœur). Le facteur 1/Σ(<i>r</i>) freine le flux de chaleur : des couches voisines se retrouvent désaccordées métriquement, ce qui ralentit les échanges thermiques. Le "refroidissement rapide" observé n'est pas une fuite d'énergie, mais un ralentissement des transferts entre couches d'échelle différentes.
                </p>
              </div>
            </div>
          </div>

          {/* VIII. Expansion Cosmique et Glissement d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">VIII. Expansion Cosmique et Glissement d'Échelle</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white space-y-2">
                  <div><div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>dΣ<sub>U</sub></i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>dt</i></div></div> = <i>H</i><sub>ε</sub>Σ<sub>U</sub></div>
                  <div>1 + <i>z</i> = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">Σ<sub>U</sub>(<i>t</i><sub>obs</sub>)</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">Σ<sub>U</sub>(<i>t</i><sub>ém</sub>)</div></div></div>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-purple-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Σ<sub>U</sub></strong> : règle universelle (composante globale de Σ).</li>
                  <li><strong><i>H</i><sub>ε</sub></strong> : taux de glissement d'échelle (analogue de Hubble, mais pour l'échelle).</li>
                  <li><strong><i>z</i></strong> : décalage spectral (redshift) ; <strong><i>t</i><sub>ém</sub>, <i>t</i><sub>obs</sub></strong> : instants d'émission/observation.</li>
                </ul>

                <h4 className="text-xl font-semibold text-purple-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  Si <i>H</i><sub>ε</sub> est quasi constant, Σ<sub>U</sub> croît (exponentiellement si <i>H</i><sub>ε</sub> cte). Le redshift n'est pas dû à un "espace qui gonfle", mais au fait que nous mesurons le photon avec une règle universelle qui a changé entre émission et observation :
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg my-4">
                  <div className="text-center text-lg font-serif text-white">
                    1 + <i>z</i> = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">Σ<sub>U</sub>(<i>t</i><sub>obs</sub>)</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">Σ<sub>U</sub>(<i>t</i><sub>ém</sub>)</div></div>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Plus Σ<sub>U</sub> augmente, plus les longueurs d'onde mesurées apparaissent grandes. C'est une explication métrique du redshift : l'univers se déploie vers son infiniment petit (glissement d'échelle) plutôt qu'il ne s'étend "vers l'extérieur".
                </p>
              </div>
            </div>
          </div>

          {/* IX. Les Étoiles Quantiques : Régimes d'Échelle Extrêmes */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-orange-500/30 hover:border-orange-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-800/20 to-red-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">IX. Les Étoiles Quantiques : Régimes d'Échelle Extrêmes</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white space-y-2">
                  <div><div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>DΣ</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>Dτ</i></div></div> = κ<sub>m</sub>ρ<i>c</i><sup>2</sup> + κ<sub>p</sub><i>p</i> + κ<sub>k</sub>ρ(γ-1)<i>c</i><sup>2</sup></div>
                  <div><i>P</i><sub>ε</sub> = ρ<sub>ε</sub><i>c</i><sup>2</sup> = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">ℏ<i>c</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>L</i><sub>ε</sub><sup>4</sup></div></div></div>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-orange-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>ρ, <i>p</i>, γ</strong> : état interne (densité, pression, relativité des vitesses).</li>
                  <li><strong>κ<sub>m</sub>, κ<sub>p</sub>, κ<sub>k</sub></strong> : couplages d'échelle.</li>
                  <li><strong><i>P</i><sub>ε</sub></strong> : pression d'échelle ; <strong>ρ<sub>ε</sub></strong> : densité d'énergie d'échelle.</li>
                  <li><strong><i>L</i><sub>ε</sub></strong> : longueur d'échelle caractéristique interne.</li>
                  <li><strong>ℏ</strong> : constante de Planck réduite.</li>
                </ul>

                <h4 className="text-xl font-semibold text-orange-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  Lors d'un effondrement, la même loi d'alimentation augmente Σ vers le centre : on lit l'intérieur avec une règle profondément rééchelonnée. L'équation d'état d'échelle <i>P</i><sub>ε</sub> = ℏ<i>c</i>/<i>L</i><sub>ε</sub><sup>4</sup> montre qu'une structure plus fine (petit <i>L</i><sub>ε</sub>) porte une pression d'échelle plus grande, capable d'équilibrer la compression gravitationnelle. On obtient un régime d'échelle stable (étoile "quantique" au sens du régime), sans point singulier, lisible avec ḡ = <i>g</i>/Σ<sup>2</sup>.
                </p>
              </div>
            </div>
          </div>

          {/* X. Le Champ d'Échelle-Temps Unifié */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-pink-500/30 hover:border-pink-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-800/20 to-purple-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">X. Le Champ d'Échelle-Temps Unifié</h3>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white space-y-2">
                  <div><i>G</i><sub>μν</sub>(<i>x</i>, ε) + Λ<sub>ε</sub><i>g</i><sub>μν</sub>(<i>x</i>, ε) = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">8π<i>G</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>c</i><sup>4</sup></div></div><i>T</i><sub>μν</sub>(<i>x</i>, ε)</div>
                  <div>Λ<sub>ε</sub> = <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">1</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">Σ<sup>2</sup>(<i>x</i>, ε)</div></div> <div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>d</i><sup>2</sup>Σ</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm"><i>dε</i><sup>2</sup></div></div></div>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-pink-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong><i>G</i><sub>μν</sub></strong> : tenseur d'Einstein (combinaison de courbures).</li>
                  <li><strong><i>T</i><sub>μν</sub></strong> : tenseur énergie-impulsion (matière, rayonnement, flux).</li>
                  <li><strong>Λ<sub>ε</sub></strong> : terme d'échelle jouant le rôle d'une "constante cosmologique dynamique".</li>
                  <li><strong><i>d</i><sup>2</sup>Σ/<i>dε</i><sup>2</sup></strong> : courbure de la règle le long de l'échelle, pondérée par 1/Σ<sup>2</sup>.</li>
                </ul>

                <h4 className="text-xl font-semibold text-pink-300 mb-3 mt-6">Fonctionnement</h4>
                <p className="leading-relaxed">
                  Cette équation généralise la RG : le terme Λ<sub>ε</sub> provient intrinsèquement de la dynamique d'échelle (courbure de Σ en ε). Si ∂<sub>ε</sub>Σ = 0, alors Λ<sub>ε</sub> = 0 et on retrouve la RG classique. Si Λ<sub>ε</sub> est effectivement constant à grande échelle, on mime la constante cosmologique d'Einstein (interprétée ici comme un cas particulier de la dynamique d'échelle). La cosmologie de fond peut alors être reproduite sans postuler une "expansion matérielle" de l'espace : le glissement d'échelle (via Σ<sub>U</sub>) suffit à expliquer les observables de type distance–redshift.
                </p>
              </div>
            </div>
          </div>

          {/* XI. Principe d'Action du Tissu d'Espace-Temps-d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-teal-500/30 hover:border-teal-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-800/20 to-cyan-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">XI. Principe d'Action du Tissu d'Espace-Temps-d'Échelle</h3>
              
              <p className="text-gray-200 leading-relaxed mb-4">
                Cette formule représente le cœur du modèle.
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                Elle exprime la manière dont le tissu d'espace-temps-d'échelle se structure de lui-même en fonction de sa courbure, de sa tension interne et du contenu énergétique de la matière.
                C'est à partir de ce principe que l'on peut dériver toutes les autres équations de la Relativité des Échelles.
              </p>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white">
                  <i>S</i> = ∫ √<span className="mx-1">-</span><i>g</i> <span className="mx-1">[</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">1</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">16π<i>G</i></div></div> <i>R</i><sub>5</sub> <span className="mx-1">−</span> <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">1</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">2</div></div> <i>g</i><sup><i>AB</i></sup>∂<sub><i>A</i></sub>Σ ∂<sub><i>B</i></sub>Σ <span className="mx-1">−</span> <i>V</i>(Σ) <span className="mx-1">+</span> <i>L</i><sub>matière</sub><span className="mx-1">]</span> <i>d</i><sup>4</sup><i>x</i> <i>dε</i>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-teal-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong><i>S</i></strong> : action totale du tissu d'échelle-temps</li>
                  <li><strong><i>R</i><sub>5</sub></strong> : courbure scalaire de la métrique 5D (tenant compte de la cinquième dimension d'échelle)</li>
                  <li><strong><i>g</i><sup><i>AB</i></sup></strong> : composantes de la métrique 5D</li>
                  <li><strong>∂<sub><i>A</i></sub>Σ</strong> : dérivée du facteur d'échelle par rapport à la coordonnée <i>A</i> (qui peut être temporelle, spatiale ou d'échelle)</li>
                  <li><strong><i>V</i>(Σ)</strong> : potentiel d'échelle interne, représentant la tension naturelle du tissu</li>
                  <li><strong><i>L</i><sub>matière</sub></strong> : lagrangien de la matière et de l'énergie contenues dans le tissu</li>
                  <li><strong>√<span className="mx-1">-</span><i>g</i></strong> : facteur de volume géométrique, assurant la covariance générale</li>
                  <li><strong><i>d</i><sup>4</sup><i>x</i> <i>dε</i></strong> : intégration sur les quatre dimensions d'espace-temps et la cinquième dimension d'échelle</li>
                </ul>

                <h4 className="text-xl font-semibold text-teal-300 mb-3 mt-6">Fonctionnement de la formule</h4>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Cette action décrit comment le tissu d'échelle-temps cherche son état de moindre "énergie géométrique" :
                  </p>
                  <p>
                    Le premier terme <div className="inline-flex flex-col items-center mx-1"><div className="text-sm"><i>R</i><sub>5</sub></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">16π<i>G</i></div></div> relie la géométrie à la gravitation (comme dans la Relativité Générale).
                  </p>
                  <p>
                    Le second terme <span className="mx-1">−</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">1</div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">2</div></div><i>g</i><sup><i>AB</i></sup>∂<sub><i>A</i></sub>Σ∂<sub><i>B</i></sub>Σ décrit la dynamique interne de la règle d'échelle : il introduit une "tension" physique dans la cinquième dimension.
                  </p>
                  <p>
                    Le potentiel <i>V</i>(Σ) fixe une valeur d'équilibre pour la règle d'échelle, maintenant la stabilité du tissu.
                  </p>
                  <p>
                    Enfin, <i>L</i><sub>matière</sub> relie cette géométrie à la matière réelle, de sorte que chaque particule, étoile ou galaxie contribue localement à la courbure et à la tension de la règle.
                  </p>
                  <p>
                    Ce principe d'action unifie ainsi gravitation, tension d'échelle et énergie-matière au sein d'une même formulation géométrique.
                    De lui découlent, par dérivation variationnelle, les équations de champ du tissu 5D et l'équation dynamique du champ d'échelle Σ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* XII. Équation Dynamique du Champ d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-pink-500/30 hover:border-pink-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-800/20 to-purple-800/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-6">XII. Équation Dynamique du Champ d'Échelle</h3>
              
              <p className="text-gray-200 leading-relaxed mb-4">
                Cette équation décrit l'évolution du facteur d'échelle Σ dans la cinquième dimension.
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                Elle montre comment la règle d'échelle se tend, se détend ou s'équilibre sous l'effet de la matière, de la courbure et de sa propre énergie interne.
              </p>
              
              <div className="bg-slate-900/50 p-6 rounded-lg mb-6 overflow-x-auto">
                <div className="text-center text-lg font-serif text-white">
                  □<sub>5</sub>Σ <span className="mx-1">−</span> <div className="inline-flex flex-col items-center mx-1"><div className="text-sm">∂<i>V</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">∂Σ</div></div> = α<i>T</i>(<i>x</i>,ε)
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-semibold text-pink-300 mb-3">Symboles clés</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>□<sub>5</sub></strong> : opérateur d'Alembert 5D, représentant la propagation et la diffusion de l\'étirement du tissu (□<sub>5</sub> = <i>g</i><sup><i>AB</i></sup>∇<sub><i>A</i></sub>∇<sub><i>B</i></sub>)</li>
                  <li><strong>Σ(<i>x</i>,ε)</strong> : facteur d'échelle, champ scalaire décrivant la dilatation interne du tissu</li>
                  <li><strong><i>V</i>(Σ)</strong> : potentiel d'échelle, fonction de stabilisation de la règle (souvent de forme quadratique ou quartique)</li>
                  <li><strong><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">∂<i>V</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">∂Σ</div></div></strong> : force interne d'échelle, qui tend à ramener Σ vers son équilibre</li>
                  <li><strong>α</strong> : constante de couplage entre la matière et la dynamique d'échelle</li>
                  <li><strong><i>T</i>(<i>x</i>,ε)</strong> : trace du tenseur d'énergie-impulsion 5D (matière et énergie contenues dans le tissu)</li>
                </ul>

                <h4 className="text-xl font-semibold text-pink-300 mb-3 mt-6">Fonctionnement de la formule</h4>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    L'équation indique que la variation du facteur d'échelle se propage dans le tissu comme une onde géométrique :
                  </p>
                  <p>
                    Le terme □<sub>5</sub>Σ représente la propagation de la déformation de la règle à travers l'espace, le temps et l'échelle.
                  </p>
                  <p>
                    Le terme <span className="mx-1">−</span><div className="inline-flex flex-col items-center mx-1"><div className="text-sm">∂<i>V</i></div><div className="border-t border-gray-300 w-full"></div><div className="text-sm">∂Σ</div></div> correspond à la force de rappel interne du tissu : il empêche l'étirement de devenir infini et maintient la stabilité métrique.
                  </p>
                  <p>
                    Le terme α<i>T</i>(<i>x</i>,ε) exprime le couplage entre la matière et la règle : plus la densité d'énergie est forte, plus la tension d'échelle s'accroît.
                  </p>
                  <p>
                    Cette équation est le moteur fondamental de la Relativité des Échelles : elle détermine comment la règle universelle se modifie sous l'effet des sources physiques, et comment les variations d'échelle locales et globales se propagent et s'ajustent.
                    Elle englobe les comportements de la gravitation, de la cosmologie et des régimes extrêmes (comme les étoiles quantiques) au sein d'une seule et même dynamique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explication détaillée des symboles */}
        <div className="futuristic-card p-8 md:p-12 rounded-3xl border-emerald-500/30 hover:border-emerald-400/50">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/20 to-teal-800/20 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-8">Explication détaillée des symboles</h3>
            
            <div className="space-y-8">
              {/* 1. Indices et dérivées fondamentales */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">1. Indices et dérivées fondamentales</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200">μ, ν (indices grecs)</strong><br />
                    Ces indices représentent les quatre dimensions classiques de l'espace-temps : une pour le temps (μ=0) et trois pour l'espace (μ=1,2,3). Ils servent à identifier quelle composante d'un vecteur ou d'un tenseur on considère dans un calcul. Dans les équations de la relativité, ils permettent de relier des grandeurs temporelles et spatiales dans une même écriture compacte.
                  </div>
                  <div>
                    <strong className="text-emerald-200">A, B (indices latins majuscules)</strong><br />
                    Ils désignent les cinq dimensions de la Relativité des Échelles : les quatre dimensions d'espace-temps classiques, plus la dimension d'échelle ε. Lorsqu'on voit un A ou un B, cela signifie que la grandeur considérée existe dans le tissu complet, incluant la profondeur d'échelle. Par exemple, <i>g</i><sub>AB</sub> est la métrique totale 5D.
                  </div>
                  <div>
                    <strong className="text-emerald-200">∂<sub>μ</sub> (dérivée partielle)</strong><br />
                    C'est la dérivée ordinaire d'une grandeur par rapport à une coordonnée donnée, ici une dimension d'espace-temps. Elle mesure comment cette grandeur varie lorsqu'on se déplace dans une direction donnée du temps ou de l'espace.
                  </div>
                  <div>
                    <strong className="text-emerald-200">∂<sub>A</sub> (dérivée 5D)</strong><br />
                    Version généralisée de la précédente : elle prend aussi en compte la variation selon la dimension d'échelle ε. Ainsi, ∂<sub>A</sub>Σ mesure comment la règle d'échelle Σ change non seulement dans l'espace-temps, mais aussi lorsqu'on "plonge" plus ou moins profondément dans la dimension d'échelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200">∇<sub>μ</sub> (dérivée covariante 4D)</strong><br />
                    C'est une dérivée qui tient compte de la courbure de l'espace-temps : elle permet de différencier des champs (vecteurs, tenseurs) dans un espace courbe, sans briser la cohérence géométrique. C'est elle qui permet de définir des lois physiques valides même dans un univers déformé par la gravité.
                  </div>
                  <div>
                    <strong className="text-emerald-200">∇<sub>A</sub> (dérivée covariante 5D)</strong><br />
                    Elle fait la même chose, mais dans la géométrie complète d'espace-temps-d'échelle. Elle inclut les connexions dues à la cinquième dimension, donc les variations de la géométrie selon l'échelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200">D/Dτ (dérivée le long du temps propre)</strong><br />
                    Elle décrit comment une grandeur évolue pour un observateur ou une particule qui se déplace dans le tissu. τ est son "temps interne", mesuré par sa propre horloge. C'est la dérivée "vécue" par la matière elle-même.
                  </div>
                  <div>
                    <strong className="text-emerald-200">∝ (proportionnalité)</strong><br />
                    Indique que deux grandeurs varient ensemble, sans forcément préciser la constante exacte qui les relie. On l'utilise souvent quand l'équation exprime une loi qualitative avant d'être calibrée.
                  </div>
                </div>
              </div>

              {/* 2. Coordonnées et grandeurs de mouvement */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">2. Coordonnées et grandeurs de mouvement</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200"><i>x</i><sup>μ</sup> = (<i>ct</i>, <i>x</i>, <i>y</i>, <i>z</i>)</strong><br />
                    Les coordonnées d'un événement dans l'espace-temps. Le terme <i>ct</i> (<i>c</i> multiplié par le temps) met le temps sur la même échelle d'unité que les distances. Ce quadruplet situe tout phénomène dans le "où" et le "quand" de l'univers.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>dx</i><sup>μ</sup></strong><br />
                    Un très petit déplacement dans une direction donnée de l'espace-temps. Il est utilisé pour calculer les intervalles, les vitesses et les courbures locales du tissu.
                  </div>
                  <div>
                    <strong className="text-emerald-200">ε (epsilon)</strong><br />
                    C'est la cinquième coordonnée : la dimension d'échelle. Elle ne décrit ni un lieu ni un instant, mais la "profondeur" à laquelle on observe la réalité. Changer ε revient à "zoomer" dans la structure de l'espace-temps lui-même, comme si la réalité possédait des couches internes, chacune régie par sa propre tension d'échelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>dε</i></strong><br />
                    Petite variation sur cet axe d'échelle. Si on se déplace de <i>dε</i>, on change de niveau d'observation du tissu. Cela représente le passage d'un régime de densité ou de tension d'échelle à un autre.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>r</i></strong><br />
                    Distance radiale à partir d'un centre, souvent utilisée pour les étoiles ou les structures sphériques. C'est la coordonnée qui permet de décrire la variation d'échelle à l'intérieur d'un corps dense (comme une étoile à neutrons).
                  </div>
                  <div>
                    <strong className="text-emerald-200">τ (tau)</strong><br />
                    Temps propre mesuré par un observateur ou une particule. Contrairement au temps coordonné <i>t</i>, τ est la durée réellement vécue dans le référentiel local.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>u</i><sup>ν</sup> (quadrivitesse)</strong><br />
                    Vecteur à quatre composantes décrivant la vitesse d'un objet dans l'espace-temps (et non simplement sa vitesse spatiale). Sa norme est constante : <i>u</i><sub>μ</sub><i>u</i><sup>μ</sup> = -<i>c</i><sup>2</sup>. Il relie mouvement et géométrie.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>v</i></strong><br />
                    La vitesse classique dans l'espace, mesurable dans un référentiel donné. Elle sert à relier le comportement relativiste (via γ) à l'énergie cinétique.
                  </div>
                  <div>
                    <strong className="text-emerald-200">γ = 1 / √(1−<i>v</i>²/<i>c</i>²)</strong><br />
                    Facteur relativiste. Il augmente à mesure qu'on se rapproche de la vitesse de la lumière. Il traduit la dilatation du temps et la contraction des distances ressenties à haute vitesse.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>c</i></strong><br />
                    Constante universelle de la vitesse de la lumière dans le vide (≈ 299 792 458 m/s). Elle relie le temps et l'espace, et fixe la limite supérieure de toute transmission d'information ou d'énergie.
                  </div>
                </div>
              </div>

              {/* 3. Métriques, intervalles et géométries */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">3. Métriques, intervalles et géométries</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200"><i>ds</i><sup>2</sup></strong><br />
                    L'intervalle élémentaire, c'est-à-dire la manière dont on mesure la distance ou la durée entre deux événements dans un espace-temps courbe. Si <i>ds</i><sup>2</sup> est positif, on parle d'un intervalle spatial ; s'il est négatif, d'un intervalle temporel. C'est le cœur de la géométrisation de la physique.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>g</i><sub>μν</sub>(<i>x</i>)</strong><br />
                    La métrique gravitationnelle classique, qui décrit comment la matière courbe l'espace-temps. Elle détermine la manière dont les distances et les temps sont mesurés localement. C'est elle qui fait que la trajectoire "droite" d'une planète devient une orbite autour du Soleil.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>g</i><sub>μν</sub>(<i>x</i>, ε)</strong><br />
                    Version généralisée de la métrique, qui dépend aussi de la profondeur d'échelle ε. Elle permet de décrire comment la géométrie locale se modifie selon la densité ou le régime d'énergie interne du milieu observé. C'est une métrique "vivante", qui s'adapte à la tension interne du tissu.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>g</i><sub>AB</sub></strong><br />
                    Métrique complète 5D, incluant la dimension d'échelle. Elle contient à la fois les effets gravitationnels classiques et les effets d'étirement d'échelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>g</i><sup>AB</sup></strong><br />
                    Inverse de la métrique précédente, utilisé pour remonter les indices et exprimer les équations dans leur forme contravariante. C'est grâce à elle qu'on peut calculer des opérateurs comme le d'Alembertien 5D (□₅).
                  </div>
                  <div>
                    <strong className="text-emerald-200">√−<i>g</i></strong><br />
                    Facteur de volume géométrique. Il représente la manière dont le volume d'un petit "cube" change à cause de la courbure. Il garantit que les intégrales (comme celle de l'action) soient valides dans un univers courbe.
                  </div>
                  <div>
                    <strong className="text-emerald-200">ḡ<sub>μν</sub>(<i>x</i>, ε) = (1/Σ²) <i>g</i><sub>μν</sub>(<i>x</i>, ε)</strong><br />
                    La métrique mesurée : c'est celle que les instruments physiques (règles, horloges) utilisent réellement. Le facteur 1/Σ² rééchelonne la métrique brute, garantissant que les observables restent finis même dans les régions denses. C'est grâce à cette métrique qu'il n'y a plus de singularité : tout devient mesurable.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>R</i>₅</strong><br />
                    Courbure scalaire de la métrique 5D. Elle résume l'état global de la géométrie du tissu d'échelle-temps. Plus <i>R</i>₅ est élevé, plus la géométrie est tendue ou courbée, et plus le tissu porte d'énergie géométrique.
                  </div>
                </div>
              </div>

              {/* 4. Facteur et tension d'échelle */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">4. Facteur et tension d'échelle</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200">Σ(<i>x</i>, ε)</strong><br />
                    Facteur d'échelle : c'est la "règle interne" du tissu. Il mesure à quel point l'espace-temps est étiré ou comprimé dans la dimension d'échelle. Quand Σ augmente, le tissu est sous tension : il s'étire pour accommoder la densité, la pression ou la vitesse du milieu. C'est le cœur dynamique de la Relativité des Échelles.
                  </div>
                  <div>
                    <strong className="text-emerald-200">Σ<sub>U</sub>(ε)</strong><br />
                    Composante universelle de Σ. Elle décrit l'état moyen du tissu à l'échelle cosmique, autrement dit, la "tension de fond" de l'univers tout entier. Elle évolue lentement avec ε et avec le temps cosmique, contrôlant le glissement d'échelle global.
                  </div>
                  <div>
                    <strong className="text-emerald-200">Σ<sub>L</sub>(<i>x</i>)</strong><br />
                    Composante locale du facteur d'échelle. Elle varie d'un point à l'autre selon la matière présente, la gravité et les vitesses locales. Là où la densité est forte, Σ<sub>L</sub> est plus grande : la règle est localement plus tendue.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>T</i><sub>ε</sub> = <i>dΣ</i>/<i>dε</i></strong><br />
                    Tension d'échelle. Elle indique à quelle vitesse la règle s'étire lorsqu'on se déplace le long de la dimension d'échelle. Un <i>T</i><sub>ε</sub> élevé signifie que le tissu réagit fortement aux variations internes — typique des milieux extrêmes comme les cœurs stellaires. Cette tension n'est pas mécanique mais métrique : c'est une élasticité du réel.
                  </div>
                </div>
              </div>

              {/* 5. Densités, pressions et couplages */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">5. Densités, pressions et couplages</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200">ρ (rho)</strong><br />
                    Densité d'énergie de la matière. Elle regroupe la masse et l'énergie interne sous la forme <i>E</i> = ρ<i>c</i><sup>2</sup>. Dans ton modèle, c'est la source première qui alimente la déformation du tissu et l'étirement de la règle d'échelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>p</i> (pression)</strong><br />
                    Pression locale exercée par la matière ou le rayonnement. Elle s'ajoute à la densité pour renforcer la tension d'échelle, car dans un fluide très comprimé, la matière agit aussi comme une source géométrique.
                  </div>
                  <div>
                    <strong className="text-emerald-200">ρ<sub>ε</sub> (rho epsilon)</strong><br />
                    Densité d'énergie d'échelle. C'est une énergie propre à la cinquième dimension : elle mesure combien le tissu d'échelle lui-même stocke d'énergie lorsqu'il se déforme. Elle apparaît dans les équations de source de la tension d'échelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>P</i><sub>ε</sub> (pression d'échelle)</strong><br />
                    Force interne opposée à la compression de la règle. Elle équilibre la gravité dans les régimes extrêmes (par exemple dans les étoiles quantiques) en empêchant la contraction totale. Elle obéit à une loi d'état spécifique : <i>P</i><sub>ε</sub> = ρ<sub>ε</sub><i>c</i><sup>2</sup> = ℏ<i>c</i>/<i>L</i><sub>ε</sub><sup>4</sup>.
                  </div>
                  <div>
                    <strong className="text-emerald-200">κ<sub>m</sub>, κ<sub>p</sub>, κ<sub>k</sub></strong><br />
                    Constantes de couplage d'échelle : elles traduisent la contribution respective de la densité, de la pression et du mouvement relativiste à la croissance de Σ. Ce sont les "coefficients d'élasticité" de la règle universelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200">α (alpha)</strong><br />
                    Constante de couplage matière-échelle. Elle relie la trace du tenseur d'énergie (<i>T</i>) à la dynamique du facteur d'échelle Σ dans l'équation d'onde 5D. En résumé : plus la matière exerce d'énergie-impulsion, plus elle excite le champ Σ.
                  </div>
                </div>
              </div>

              {/* 6. Tenseurs et opérateurs géométriques */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">6. Tenseurs et opérateurs géométriques</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200"><i>R</i><sub>μν</sub>(<i>x</i>, ε)</strong><br />
                    Tenseur de Ricci : il mesure comment l'espace-temps se courbe localement à cause de la matière. Ici, il dépend aussi de ε, car la courbure peut varier selon la tension d'échelle du milieu.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>G</i><sub>μν</sub>(<i>x</i>, ε)</strong><br />
                    Tenseur d'Einstein, combinaison de courbures (<i>G</i><sub>μν</sub> = <i>R</i><sub>μν</sub> − ½<i>R</i><i>g</i><sub>μν</sub>). C'est le lien direct entre la géométrie et l'énergie-impulsion dans la version 5D. Il conserve la même structure que dans la Relativité Générale, mais enrichie par l'effet d'échelle.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>T</i><sub>μν</sub>(<i>x</i>, ε)</strong><br />
                    Tenseur énergie-impulsion : il regroupe toutes les formes d'énergie, de pression et de flux dans l'espace-temps-d'échelle. C'est la "matière" au sens le plus large, incluant les champs, les rayonnements et les tensions internes.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>T</i>(<i>x</i>, ε)</strong><br />
                    Trace du tenseur précédent : <i>T</i> = <i>T</i><sub>A</sub><sup>A</sup>. Elle joue le rôle de source simplifiée pour le champ d'échelle Σ dans l'équation □₅Σ − ∂<i>V</i>/∂Σ = α<i>T</i>.
                  </div>
                  <div>
                    <strong className="text-emerald-200">Λ<sub>ε</sub> (lambda epsilon)</strong><br />
                    Constante cosmologique d'échelle : Λ<sub>ε</sub> = (1/Σ²)<i>d</i>²Σ/<i>dε</i>². C'est la forme dynamique de la constante cosmologique d'Einstein. Au lieu d'être fixée, elle dépend ici de la manière dont la règle Σ se courbe dans la cinquième dimension. Quand Σ cesse d'évoluer, Λ<sub>ε</sub> redevient constante et la Relativité Générale classique est retrouvée.
                  </div>
                  <div>
                    <strong className="text-emerald-200">∇<sub>μ</sub>(∂<sub>μ</sub>Σ) = 8π<i>G</i>ρ<sub>ε</sub></strong><br />
                    Équation source de l'échelle. Elle indique que la divergence du gradient de Σ est produite par la densité d'énergie d'échelle ρ<sub>ε</sub>, exactement comme la gravité classique répond à la densité de matière.
                  </div>
                  <div>
                    <strong className="text-emerald-200">□₅ (box operator)</strong><br />
                    C'est l'opérateur d'onde 5D : □₅ = <i>g</i><sup>AB</sup>∇<sub>A</sub>∇<sub>B</sub>. Il généralise le Laplacien aux géométries courbes et permet de décrire comment la déformation d'échelle se propage à travers tout le tissu d'espace-temps-d'échelle.
                  </div>
                </div>
              </div>

              {/* 7. Énergie, action et potentiels */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">7. Énergie, action et potentiels</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200"><i>S</i></strong><br />
                    Action totale du tissu. C'est le principe fondamental de la théorie : toutes les équations en découlent en cherchant la configuration qui minimise <i>S</i>. En d'autres termes, le tissu "choisit" sa géométrie pour rendre cette action la plus stable possible.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>V</i>(Σ)</strong><br />
                    Potentiel d'échelle. Il décrit l'énergie interne stockée dans la règle Σ lorsqu'elle s'écarte de sa valeur d'équilibre. Ce terme empêche le tissu de se détendre ou de s'étirer à l'infini : il le stabilise.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>L</i><sub>matière</sub> (ou ℒ<sub>matière</sub>)</strong><br />
                    Lagrangien de la matière et des champs. Il contient la physique connue : particules, rayonnement, interactions, etc. C'est grâce à ce terme que la matière "parle" à la géométrie.
                  </div>
                  <div>
                    <strong className="text-emerald-200">∫<i>d</i>⁴<i>x</i> <i>dε</i></strong><br />
                    Intégration sur les quatre dimensions d'espace-temps et sur la dimension d'échelle. Cela revient à sommer toutes les contributions du tissu entier, sur toutes ses profondeurs d'échelle.
                  </div>
                </div>
              </div>

              {/* 8. Grandeurs thermiques et transport d'énergie */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">8. Grandeurs thermiques et transport d'énergie</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200">Φ<sub>T</sub>(<i>r</i>)</strong><br />
                    Flux de chaleur radial. Il mesure combien d'énergie thermique s'échappe d'une couche de matière par unité de surface et de temps. Dans ton modèle, il est freiné par l'étirement d'échelle : plus Σ est grande, plus Φ<sub>T</sub> est ralenti.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>T</i> (température)</strong><br />
                    Énergie thermique moyenne d'un milieu. Elle sert à relier la dynamique d'échelle au comportement observable des étoiles, notamment leur refroidissement apparent.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>k</i> (conductivité)</strong><br />
                    Coefficient qui quantifie la facilité avec laquelle la chaleur se déplace dans le milieu. Dans les régions où Σ est forte, la conductivité effective diminue : le flux thermique ralentit.
                  </div>
                </div>
              </div>

              {/* 9. Cosmologie et glissement d'échelle */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">9. Cosmologie et glissement d'échelle</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200">Σ<sub>U</sub>(<i>t</i>)</strong><br />
                    Valeur de la règle universelle à un instant donné du temps cosmique. Elle décrit comment le tissu global de l'univers s'étire au fil du temps.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>H</i><sub>ε</sub></strong><br />
                    Taux de glissement d'échelle, analogue au paramètre de Hubble mais appliqué à la dynamique interne de la règle d'échelle. Il mesure la vitesse à laquelle la règle universelle Σ<sub>U</sub> change dans le temps.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>z</i> (redshift)</strong><br />
                    Décalage spectral des photons. Ici, il ne vient pas d'un espace qui "s'étire" vers l'extérieur, mais du fait que la règle universelle Σ<sub>U</sub> a changé entre l'émission et l'observation. Les longueurs d'onde nous paraissent plus grandes simplement parce que la règle avec laquelle on mesure a grandi.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>t</i><sub>ém</sub>, <i>t</i><sub>obs</sub></strong><br />
                    Instants d'émission et d\'observation d'un photon. Le rapport entre Σ<sub>U</sub> à ces deux moments donne directement le redshift observé : 1 + <i>z</i> = Σ<sub>U</sub>(<i>t</i><sub>obs</sub>)/Σ<sub>U</sub>(<i>t</i><sub>ém</sub>).
                  </div>
                </div>
              </div>

              {/* 10. Régimes d'échelle extrêmes et quantiques */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">10. Régimes d'échelle extrêmes et quantiques</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200"><i>L</i><sub>ε</sub></strong><br />
                    Longueur d'échelle caractéristique interne. C'est la taille intrinsèque des structures les plus fines du tissu. Plus <i>L</i><sub>ε</sub> est petite, plus le tissu est dense en énergie et plus la pression d'échelle est forte.
                  </div>
                  <div>
                    <strong className="text-emerald-200">ℏ (h-bar)</strong><br />
                    Constante de Planck réduite. Elle introduit la dimension quantique de l'action. Elle montre que la Relativité des Échelles rejoint naturellement la mécanique quantique lorsque la structure du tissu atteint ses profondeurs minimales.
                  </div>
                </div>
              </div>

              {/* 11. Constantes fondamentales */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">11. Constantes fondamentales</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <div>
                    <strong className="text-emerald-200"><i>G</i></strong><br />
                    Constante de gravitation universelle. Elle relie la quantité de matière-énergie à la courbure géométrique de l'espace-temps. C'est le pont entre la masse et la géométrie.
                  </div>
                  <div>
                    <strong className="text-emerald-200"><i>c</i></strong><br />
                    Vitesse de la lumière, déjà citée, mais ici elle a un rôle plus profond : elle relie non seulement le temps et l'espace, mais aussi la tension du tissu (car toute variation d'échelle ou d'énergie s'y réfère).
                  </div>
                </div>
              </div>

              {/* 12. Récapitulatif conceptuel */}
              <div className="bg-slate-800/40 p-6 rounded-xl border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">12. Récapitulatif conceptuel</h4>
                <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
                  <p>Chaque symbole de la Relativité des Échelles ne désigne pas seulement une quantité, mais une facette du tissu universel :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>les <i>x</i><sup>μ</sup> et <i>g</i><sub>μν</sub> définissent l'espace-temps visible ;</li>
                    <li>la coordonnée ε et le facteur Σ définissent la profondeur d'échelle invisible ;</li>
                    <li>les tenseurs <i>G</i><sub>μν</sub> et <i>T</i><sub>μν</sub> assurent le dialogue entre matière et géométrie ;</li>
                    <li>et la tension <i>T</i><sub>ε</sub>, le potentiel <i>V</i>(Σ) et le terme Λ<sub>ε</sub> maintiennent la cohésion interne du réel.</li>
                  </ul>
                  <p className="mt-4">
                    Ensemble, ces symboles forment le langage complet de la Relativité des Échelles, où chaque élément du cosmos — du cœur des étoiles à l'expansion cosmique — se lit comme une variation d'une seule et même règle universelle : Σ(<i>x</i>, ε).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}