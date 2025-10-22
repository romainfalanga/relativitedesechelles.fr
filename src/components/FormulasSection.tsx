import React from 'react';

export default function FormulasSection() {
  return (
    <section id="formules" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Les Formules Fondamentales de la Relativité des Échelles
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Un cadre mathématique unifiant l'infiniment petit et l'infiniment grand
          </p>
        </div>

        <div className="space-y-12 relative z-10">
          {/* Section I: Le Tissu d'Espace-Temps (4D) */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-indigo-500/30 hover:border-indigo-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-indigo-300 mb-6 relative z-10">I. Le Tissu d'Espace-Temps (4D)</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Cette formule décrit la "règle de mesure" de l'univers quand on ne considère que l'espace et le temps (sans la 5ᵉ dimension d'échelle). 
                Elle constitue le fondement de la Relativité Générale d'Einstein.
              </p>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white">
                  <i>ds</i><sup>2</sup> = <i>g</i><sub>μν</sub>(<i>x</i>) <i>dx</i><sup>μ</sup> <i>dx</i><sup>ν</sup>
                </div>
              </div>
              
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>x</i><sup>μ</sup> = (<i>ct</i>, <i>x</i>, <i>y</i>, <i>z</i>)</strong> : coordonnées d'un événement de l'univers</li>
                <li><strong><i>t</i></strong> : le temps, multiplié par <i>c</i> (vitesse de la lumière) pour l'exprimer dans les mêmes unités que les distances</li>
                <li><strong><i>x</i>, <i>y</i>, <i>z</i></strong> : coordonnées d'espace (position)</li>
                <li><strong><i>dx</i><sup>μ</sup></strong> : très petit déplacement dans la direction μ (petit pas dans le temps ou l'espace)</li>
                <li><strong><i>g</i><sub>μν</sub>(<i>x</i>)</strong> : la métrique, outil qui dit comment mesurer longueurs et durées en tenant compte de la courbure gravitationnelle</li>
                <li><strong><i>ds</i><sup>2</sup></strong> : l'intervalle (temps propre ou distance propre) mesuré par une horloge et une règle idéales</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement de la Formule</h4>
              <p>
                Quand il n'y a pas de masse/énergie, l'espace-temps est "plat" comme une feuille bien plane et mesurer est simple. 
                Mais dès qu'il y a de la matière, la feuille se déforme : les règles et horloges ne se comportent plus comme dans un espace parfaitement plat.
              </p>
              <p>
                Si <i>g</i><sub>μν</sub> change d'un endroit à l'autre (parce qu'on s'approche d'une étoile, d'une planète, etc.), 
                alors les durées et les distances mesurées changent aussi : c'est la gravitation vue non pas comme une force qui "tire", 
                mais comme une géométrie qui s'incurve.
              </p>
              <p>
                Les trajectoires naturelles des objets (y compris la lumière) sont alors les "lignes les plus droites possible" 
                dans cette géométrie courbe : on les appelle géodésiques.
              </p>

              <div className="bg-red-900/40 p-6 rounded-xl border border-red-500/30 backdrop-blur-sm">
                <p className="text-red-200 font-semibold mb-3">Limite :</p>
                <p className="text-red-200">
                  Cette description 4D est superbe pour l'astronomie et la physique classique des grandes échelles, 
                  mais elle s'essouffle dès que l'on touche l'infiniment petit ou des densités extrêmes (cœurs stellaires, trous noirs) : 
                  c'est là que la 5ᵉ dimension d'échelle intervient.
                </p>
              </div>
            </div>
          </div>

          {/* Section II: Le Tissu d'Espace-Temps-d'Échelle (5D) */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-blue-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-purple-300 mb-6 relative z-10">II. Le Tissu d'Espace-Temps-d'Échelle (5D)</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Ici, on ajoute une nouvelle coordonnée : ε, la dimension d'échelle. L'idée est simple mais puissante : 
                en plus de dire où et quand on est (4D), on dit à quel "niveau d'échelle" on regarde la réalité (5ᵉ dimension).
              </p>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white">
                  <i>ds</i><sup>2</sup> = <i>g</i><sub>μν</sub>(<i>x</i>, <i>ε</i>) <i>dx</i><sup>μ</sup> <i>dx</i><sup>ν</sup> + Σ<sup>2</sup>(<i>x</i>, <i>ε</i>) <i>dε</i><sup>2</sup>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>ε</i></strong> : la coordonnée d'échelle (5ᵉ dimension), niveau d'échelle où l'on regarde la réalité</li>
                <li><strong><i>g</i><sub>μν</sub>(<i>x</i>, <i>ε</i>)</strong> : métrique dépendante de l'échelle, la façon de mesurer temps et distances change avec ε</li>
                <li><strong>Σ(<i>x</i>, <i>ε</i>)</strong> : facteur d'échelle, dit à quel point la "règle cosmique" est étirée dans la dimension d'échelle</li>
                <li><strong><i>dε</i></strong> : petit déplacement dans la dimension d'échelle</li>
                <li><strong>Σ<sup>2</sup> <i>dε</i><sup>2</sup></strong> : un petit pas dε compte davantage si Σ est grande (règle très tendue)</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement de la Formule</h4>
              <p>
                Cette dimension ne se balade pas "au-dessus" de l'espace-temps : c'est plutôt une profondeur interne, 
                une façon différente de traverser la réalité. La géométrie n'est pas figée à un seul niveau.
              </p>
              <p>
                Les masses, les pressions et les vitesses modifient ce curseur d'échelle. Le facteur Σ exprime 
                l'intensité de l'étirement du tissu quand on se déplace dans la dimension d'échelle.
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Intuition :</p>
                <p className="text-yellow-200">
                  Si le 4D est une carte, la 5ᵉ dimension ε est comme un curseur de zoom qui n'est pas arbitraire : il est physique. 
                  Beaucoup de paradoxes (singularités, refroidissement des étoiles à neutrons, "expansion" cosmique) deviennent cohérents 
                  quand on reconnaît que la règle elle-même change en profondeur d'échelle.
                </p>
              </div>
            </div>
          </div>

          {/* Section III: La Tension de la Règle d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-green-500/30 hover:border-green-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 to-purple-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-green-300 mb-6 relative z-10">III. La Tension de la Règle d'Échelle</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Cette formule mesure l'intensité de l'étirement de la règle d'échelle. 
                Elle quantifie à quelle vitesse la règle devient plus (ou moins) tendue quand on se déplace dans la 5ᵉ dimension.
              </p>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  <i>T</i><sub>ε</sub> = 
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base"><i>dΣ</i></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>dε</i></div>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>T</i><sub>ε</sub></strong> : tension d'échelle, intensité de l'étirement de la règle</li>
                <li><strong>Σ</strong> : facteur d'échelle qui mesure l'étirement de la règle</li>
                <li><strong><i>dΣ/dε</i></strong> : dérivée de Σ par rapport à ε (le "zoom physique")</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement de la Formule</h4>
              <p>
                Si <i>T</i><sub>ε</sub> &gt; 0 et grand, alors dès qu'on avance un peu dans ε, la règle s'étire beaucoup : 
                certaines régions internes de la matière (étoiles très denses, intérieur des trous noirs) se retrouvent vite 
                dans un régime hautement étiré.
              </p>
              <p>
                Si <i>T</i><sub>ε</sub> est petit, la règle change peu sur l'axe d'échelle : on reste dans un régime doucement variant 
                (typique des zones peu denses).
              </p>
              <p>
                Ce n'est pas une "tension" au sens d'un fil qu'on tire, mais l'analogie est utile : plus la présence de 
                densité/pression/vitesse est forte, plus la règle est "sous tension" et s'étire quand on explore la profondeur d'échelle.
              </p>
            </div>
          </div>

          {/* Section IV: Règle Universelle et Règles Locales */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-orange-500/30 hover:border-orange-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-orange-300 mb-6 relative z-10">IV. Règle Universelle et Règles Locales</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Cette décomposition sépare l'étirement total en une partie universelle (cosmique) et une partie locale (due aux masses environnantes). 
                Elle permet de comprendre comment le global et le local dialoguent dans l'univers.
              </p>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white">
                  Σ(<i>x</i>, <i>ε</i>) = Σ<sub>U</sub>(<i>ε</i>) Σ<sub>L</sub>(<i>x</i>)
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong>Σ(<i>x</i>, <i>ε</i>)</strong> : étirement total du facteur d'échelle</li>
                <li><strong>Σ<sub>U</sub>(<i>ε</i>)</strong> : composante universelle, état "moyen" de la règle partout dans l'univers</li>
                <li><strong>Σ<sub>L</sub>(<i>x</i>)</strong> : composante locale, dépend du lieu et de la densité de matière</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement de la Formule</h4>
              <p>
                La composante universelle Σ<sub>U</sub>(ε) reflète l'état "moyen" de la règle partout dans l'univers, 
                et évolue avec la dimension d'échelle (et, via la cosmologie, avec le temps cosmique). C'est le fond sur lequel tout se joue.
              </p>
              <p>
                La composante locale Σ<sub>L</sub>(<i>x</i>) dépend du lieu. Là où la matière est plus dense, 
                où la pression est forte, où les vitesses sont relativistes, Σ<sub>L</sub> est plus grande : la règle y est davantage étirée.
              </p>
              <p>
                Le produit des deux donne l'étirement effectif vu en un point <i>x</i> et à un niveau ε.
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Intuition :</p>
                <p className="text-yellow-200">
                  Pense à un ruban élastique tendu globalement (Σ<sub>U</sub>), sur lequel des pinces locales (les masses) tirent en plus (Σ<sub>L</sub>). 
                  L'effet total est la combinaison des deux. C'est exactement ce qui rend le cadre cohérent à toutes les échelles : 
                  le global n'écrase pas le local, et le local ne contredit pas le global.
                </p>
              </div>
            </div>
          </div>

          {/* Section V: Gravitation et Déformation d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-red-500/30 hover:border-red-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-800/40 to-orange-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-red-300 mb-6 relative z-10">V. Gravitation et Déformation d'Échelle</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Ces équations établissent le lien fondamental entre la courbure gravitationnelle et la déformation de l'échelle. 
                Elles montrent comment la gravité influence directement la tension de la règle d'échelle.
              </p>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Couplage entre courbure et métrique d'échelle</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">∂Σ(<i>x</i>, <i>ε</i>)</div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base">∂<i>x</i><sup>μ</sup></div>
                  </div>
                  <span className="mx-2">∝</span> <i>R</i><sub>μν</sub>(<i>x</i>, <i>ε</i>) <i>u</i><sup>ν</sup>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong>∂Σ/∂<i>x</i><sup>μ</sup></strong> : comment Σ change quand on se déplace dans l'espace ou le temps</li>
                <li><strong><i>R</i><sub>μν</sub></strong> : mesure de la courbure de l'espace-temps (provoquée par la masse-énergie)</li>
                <li><strong><i>u</i><sup>ν</sup></strong> : quadrivitesse, direction de déplacement dans l'espace-temps</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Équilibre local d'échelle</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  ∇<sub>μ</sub>
                  <span className="mx-1">(</span>
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">∂Σ</div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base">∂<i>x</i><sup>μ</sup></div>
                  </div>
                  <span className="mx-1">)</span>
                  <span className="mx-2">=</span>
                  <span>8π<i>G</i> <i>ρ</i><sub>ε</sub></span>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Supplémentaires</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong>∇<sub>μ</sub></strong> : dérivée "qui respecte" la géométrie courbe (covariante)</li>
                <li><strong><i>ρ</i><sub>ε</sub></strong> : densité d'énergie d'échelle, source interne qui "alimente" les changements d'échelle</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement des Formules</h4>
              <p>
                Là où la gravité courbe fortement l'espace-temps, la règle d'échelle ressent cette courbure et varie spatialement/temporellement. 
                On ne modifie pas que la géométrie : on étire aussi la règle.
              </p>
              <p>
                Si <i>ρ</i><sub>ε</sub> est grande (milieu qui exige beaucoup d'étirement pour rester cohérent), 
                alors l'équation impose que Σ varie suffisamment pour répondre à cette source.
              </p>
              <p>
                Le facteur 8π<i>G</i> rappelle la structure des équations d'Einstein : c'est la version "échelle" de la relation géométrie-source.
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Intuition :</p>
                <p className="text-yellow-200">
                  La gravitation (courbure) et l'échelle (étirement de la règle) se parlent. La courbure influence Σ, 
                  et la dynamique d'échelle (via <i>ρ</i><sub>ε</sub>) répond pour maintenir un cadre mesurable (sans infinis).
                </p>
              </div>
            </div>
          </div>

          {/* Section VI: Fin du Paradoxe des Singularités */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-blue-500/30 hover:border-blue-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-red-800/40 to-red-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-blue-300 mb-6 relative z-10">VI. Fin du Paradoxe des Singularités</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Ces formules montrent comment l'étirement continu du tissu d'échelle élimine les singularités. 
                Au lieu de points infinis, nous obtenons un rééchelonnage continu de la métrique.
              </p>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Loi d'étirement</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center flex-wrap">
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base"><i>DΣ</i></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>Dτ</i></div>
                  </div>
                  <span className="mx-2">=</span>
                  <span><i>κ</i><sub>m</sub> <i>ρc</i><sup>2</sup> + <i>κ</i><sub>p</sub> <i>p</i> + <i>κ</i><sub>k</sub> <i>ρ</i> (<i>γ</i>−1)<i>c</i><sup>2</sup></span>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>D/Dτ</i></strong> : dérivée le long de la trajectoire que suit la matière</li>
                <li><strong><i>ρ</i></strong> : densité d'énergie locale</li>
                <li><strong><i>p</i></strong> : pression du milieu</li>
                <li><strong><i>γ</i> = 1/√(1−<i>v</i><sup>2</sup>/<i>c</i><sup>2</sup>)</strong> : facteur relativiste</li>
                <li><strong><i>κ</i><sub>m</sub>, <i>κ</i><sub>p</sub>, <i>κ</i><sub>k</sub></strong> : constantes de couplage d'échelle</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Métrique physique rééchelonnée</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  <i>ḡ</i><sub>μν</sub>(<i>x</i>, <i>ε</i>) = 
                  <span className="mx-1">(</span>
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">1</div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base">Σ<sup>2</sup>(<i>x</i>, <i>ε</i>)</div>
                  </div>
                  <span className="mx-1">)</span>
                  <i>g</i><sub>μν</sub>(<i>x</i>, <i>ε</i>)
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Supplémentaires</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>ḡ</i><sub>μν</sub></strong> : métrique effectivement mesurée</li>
                <li><strong><i>g</i><sub>μν</sub></strong> : métrique "brute" avant rééchelonnage</li>
                <li><strong>1/Σ<sup>2</sup></strong> : facteur de rééchelonnage qui tempère les grandeurs géométriques</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement des Formules</h4>
              <p>
                Trois contributions font grandir Σ : la densité d'énergie <i>ρc</i><sup>2</sup>, la pression <i>p</i>, 
                et l'énergie cinétique relativiste <i>ρ</i>(<i>γ</i>−1)<i>c</i><sup>2</sup>. Plus le milieu est extrême, plus Σ augmente.
              </p>
              <p>
                La métrique mesurée <i>ḡ</i><sub>μν</sub> se déduit de la métrique "brute" en la rééchelonnant par Σ. 
                Quand Σ grandit (dans les zones denses), les grandeurs géométriques sont "tempérées" par le facteur 1/Σ<sup>2</sup>.
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Résultat :</p>
                <p className="text-yellow-200">
                  Les grandeurs géométriques restent toujours finies sur la métrique mesurée. L'intérieur d'un trou noir n'est pas une rupture du réel, 
                  mais un régime d'étirement extrême, où la matière continue d'exister sur une portion plus profonde du tissu d'échelle.
                </p>
              </div>
            </div>
          </div>

          {/* Section VII: Refroidissement des Étoiles à Neutrons */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-cyan-500/30 hover:border-cyan-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-blue-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-cyan-300 mb-6 relative z-10">VII. Refroidissement des Étoiles à Neutrons</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Ces formules expliquent pourquoi les étoiles à neutrons se refroidissent plus rapidement que prévu : 
                c'est un effet de désaccord entre les couches d'échelle interne.
              </p>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Gradient interne d'échelle</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base"><i>dΣ</i></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>dr</i></div>
                  </div>
                  <span className="mx-2">∝</span> <i>ρ</i>(<i>r</i>)
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>r</i></strong> : distance au centre de l'étoile</li>
                <li><strong><i>ρ</i>(<i>r</i>)</strong> : densité en fonction de la distance au centre</li>
                <li><strong><i>dΣ/dr</i></strong> : variation de l'échelle avec la distance radiale</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Flux thermique modifié</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  Φ<sub>T</sub>(<i>r</i>) = −<i>k</i>
                  <span className="mx-1">(</span>
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">1</div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base">Σ(<i>r</i>)</div>
                  </div>
                  <span className="mx-1">)</span>
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base"><i>dT</i></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>dr</i></div>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Supplémentaires</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong>Φ<sub>T</sub></strong> : flux de chaleur (énergie thermique par unité de surface et de temps)</li>
                <li><strong><i>k</i></strong> : coefficient d'efficacité du transport thermique</li>
                <li><strong><i>dT/dr</i></strong> : gradient de température</li>
                <li><strong>1/Σ(<i>r</i>)</strong> : facteur de freinage du flux thermique</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement des Formules</h4>
              <p>
                La densité <i>ρ</i>(<i>r</i>) augmente fortement quand on s'approche du cœur ; la formule dit : 
                plus <i>ρ</i> est grande, plus Σ varie vite avec <i>r</i>. La règle d'échelle est beaucoup plus étirée au centre que vers la surface.
              </p>
              <p>
                Le flux de chaleur est ralenti par l'étirement de la règle : plus Σ(<i>r</i>) est grande, plus le flux est freiné. 
                Même si le cœur est très chaud, l'énergie met du temps à "passer" vers l'extérieur, car les couches ne "respirent" pas 
                avec la même règle.
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Conséquence :</p>
                <p className="text-yellow-200">
                  Deux couches voisines ne partagent plus le même "tempo" métrique. Elles sont comme désaccordées : l'une vibre "au ralenti" 
                  du point de vue de l'autre. Ce que l'on appelle "refroidissement rapide" n'est pas une perte brute d'énergie ; 
                  c'est que les échanges sont bridés par la structure d'échelle interne.
                </p>
              </div>
            </div>
          </div>

          {/* Section VIII: Expansion Cosmique et Glissement d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/40 to-cyan-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-purple-300 mb-6 relative z-10">VIII. Expansion Cosmique et Glissement d'Échelle</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Ces formules révèlent que l'univers ne s'étend pas vers l'extérieur, mais que sa règle universelle s'étire vers l'infiniment petit. 
                Le décalage vers le rouge s'explique par ce glissement d'échelle.
              </p>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Loi d'évolution de la règle universelle</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base"><i>dΣ</i><sub>U</sub></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>dt</i></div>
                  </div>
                  <span className="mx-2">=</span> <i>H</i><sub>ε</sub> Σ<sub>U</sub>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong>Σ<sub>U</sub></strong> : partie universelle de la règle, concerne tout l'univers</li>
                <li><strong><i>dΣ<sub>U</sub>/dt</i></strong> : vitesse d'évolution de la règle universelle</li>
                <li><strong><i>H</i><sub>ε</sub></strong> : paramètre analogue à Hubble, mesure la vitesse du glissement d'échelle interne</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Décalage vers le rouge d'origine métrique</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  1 + <i>z</i> = 
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">Σ<sub>U</sub>(<i>t</i><sub>obs</sub>)</div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base">Σ<sub>U</sub>(<i>t</i><sub>ém</sub>)</div>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Supplémentaires</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>z</i></strong> : décalage vers le rouge (étirement des raies lumineuses)</li>
                <li><strong><i>t</i><sub>obs</sub></strong> : instant d'observation</li>
                <li><strong><i>t</i><sub>ém</sub></strong> : instant d'émission de la lumière</li>
                <li><strong>1 + <i>z</i></strong> : ratio des règles universelles entre émission et observation</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement des Formules</h4>
              <p>
                La règle universelle augmente proportionnellement à elle-même (si <i>H</i><sub>ε</sub> est constant, 
                la solution est une croissance exponentielle). Au cours du temps cosmique, l'unité d\'échelle avec laquelle 
                l'univers se mesure glisse (s'étire).
              </p>
              <p>
                Le décalage vers le rouge ne vient pas d'une expansion de l'espace, mais d'un changement de la métrique d'échelle 
                entre le moment d'émission et celui d'observation. Les photons sont "étirés" non parce qu'ils traversent un espace qui grandit, 
                mais parce qu'ils sont mesurés dans une règle qui s'est étirée entre-temps.
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Interprétation :</p>
                <p className="text-yellow-200">
                  Ce n'est pas l'espace qui gonfle comme un ballon : c'est la règle qui change. Plus Σ<sub>U</sub> augmente, 
                  plus la lumière nous semble "rougie". C'est une explication métrique du redshift, alignée avec l'idée que l'univers 
                  se déploie vers son infiniment petit (glissement d'échelle), et non qu'il "gonfle" vers l'extérieur.
                </p>
              </div>
            </div>
          </div>

          {/* Section IX: Les Étoiles Quantiques */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-indigo-500/30 hover:border-indigo-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 to-purple-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-indigo-300 mb-6 relative z-10">IX. Les Étoiles Quantiques : Régimes d'Échelle Extrêmes</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Ces formules décrivent les objets les plus extrêmes de l'univers : les étoiles quantiques, 
                où l'étirement d'échelle atteint des valeurs qui relient naturellement relativité et physique quantique.
              </p>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Évolution d'échelle pendant l'effondrement</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center flex-wrap">
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base"><i>DΣ</i></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>Dτ</i></div>
                  </div>
                  <span className="mx-2">=</span>
                  <span><i>κ</i><sub>m</sub> <i>ρc</i><sup>2</sup> + <i>κ</i><sub>p</sub> <i>p</i> + <i>κ</i><sub>k</sub> <i>ρ</i> (<i>γ</i>−1)<i>c</i><sup>2</sup></span>
                </div>
              </div>

              <p>
                Dans un effondrement (une étoile qui se compacte), ces mêmes sources — densité <i>ρ</i>, pression <i>p</i>, 
                vitesse relativiste (via <i>γ</i>) — alimentent l'étirement de la règle à l'intérieur. 
                À mesure qu'on tombe vers le centre, Σ grandit, ce qui signifie : on lit la physique interne avec une règle différente, 
                ajustée à l'extrême.
              </p>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Équation d'état d'échelle</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  <i>P</i><sub>ε</sub> = <i>ρ</i><sub>ε</sub><i>c</i><sup>2</sup> = 
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">ℏ<i>c</i></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>L</i><sub>ε</sub><sup>4</sup></div>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>P</i><sub>ε</sub></strong> : pression d'échelle</li>
                <li><strong><i>ρ</i><sub>ε</sub></strong> : densité d'énergie d'échelle</li>
                <li><strong><i>L</i><sub>ε</sub></strong> : longueur caractéristique de la structure interne</li>
                <li><strong>ℏ</strong> : constante de Planck réduite</li>
                <li><strong>1/<i>L</i><sub>ε</sub><sup>4</sup></strong> : loi d'échelle reliant structure fine et énergie d\'échelle</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement des Formules</h4>
              <p>
                Cette relation lie la pression d'échelle <i>P</i><sub>ε</sub> et la densité d'énergie d'échelle <i>ρ</i><sub>ε</sub> 
                à une longueur caractéristique <i>L</i><sub>ε</sub>. Plus <i>L</i><sub>ε</sub> est petite (structure interne fine), 
                plus l'énergie/pression d'échelle est grande (loi en 1/<i>L</i><sub>ε</sub><sup>4</sup>).
              </p>
              <p>
                C'est comme si la structure interne, en devenant très fine, génère une pression d'échelle qui équilibre 
                la compression gravitationnelle. On obtient alors un régime stable (étoile "quantique" au sens régime d'échelle, 
                pas au sens d'une particule quantique isolée).
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Message clé :</p>
                <p className="text-yellow-200">
                  Le cœur de l'objet n'est pas un "point" (une singularité). C'est une région où la métrique est profondément rééchelonnée. 
                  La matière "continue" d'exister avec une métrique mesurée finie. Plutôt qu'une singularité, l'effondrement débouche 
                  sur un état d'équilibre d'échelle où la règle tendue stabilise l'intérieur.
                </p>
              </div>
            </div>
          </div>

          {/* Section X: Le Champ d'Échelle-Temps Unifié */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-green-500/30 hover:border-green-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/40 to-indigo-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-green-300 mb-6 relative z-10">X. Le Champ d'Échelle-Temps Unifié</h3>
            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
              <p>
                Ces équations généralisent la Relativité Générale en incluant la dynamique d'échelle. 
                Elles montrent comment la géométrie 5D s'équilibre avec le contenu énergétique de l'univers.
              </p>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Équation du champ généralisé</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center flex-wrap">
                  <i>G</i><sub>μν</sub>(<i>x</i>, <i>ε</i>) + Λ<sub>ε</sub> <i>g</i><sub>μν</sub>(<i>x</i>, <i>ε</i>) = 
                  <span className="mx-1">(</span>
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">8π<i>G</i></div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>c</i><sup>4</sup></div>
                  </div>
                  <span className="mx-1">)</span>
                  <i>T</i><sub>μν</sub>(<i>x</i>, <i>ε</i>)
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Clés</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>G</i><sub>μν</sub></strong> : combine les différentes courbures pour donner la géométrie dynamique</li>
                <li><strong><i>T</i><sub>μν</sub></strong> : réunit densités d'énergie, pressions, flux (matière, rayonnement, etc.)</li>
                <li><strong>Λ<sub>ε</sub></strong> : terme cosmologique dépendant de l'échelle (non plus constant)</li>
                <li><strong>8π<i>G</i>/<i>c</i><sup>4</sup></strong> : constante de couplage gravitationnel d'Einstein</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Expression de la constante cosmologique d'échelle</h4>
              <div className="text-center text-xl bg-slate-900/50 p-6 rounded-lg overflow-x-auto">
                <div className="font-serif text-white flex items-center justify-center">
                  Λ<sub>ε</sub> = 
                  <span className="mx-1">(</span>
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base">1</div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base">Σ<sup>2</sup>(<i>x</i>, <i>ε</i>)</div>
                  </div>
                  <span className="mx-1">)</span>
                  <div className="inline-flex flex-col items-center mx-2">
                    <div className="text-base"><i>d</i><sup>2</sup>Σ</div>
                    <div className="border-t border-gray-300 w-full"></div>
                    <div className="text-base"><i>dε</i><sup>2</sup></div>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Symboles Supplémentaires</h4>
              <ul className="space-y-3 text-gray-200">
                <li><strong><i>d</i><sup>2</sup>Σ/<i>dε</i><sup>2</sup></strong> : courbure de la règle (dérivée seconde par rapport à l'échelle)</li>
                <li><strong>1/Σ<sup>2</sup></strong> : pondération par l'étirement de la règle</li>
              </ul>

              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">Fonctionnement des Formules</h4>
              <p>
                C'est l'équilibre général entre la géométrie (y compris l'échelle) et les contenus physiques. 
                Si Λ<sub>ε</sub> change avec ε, la "pression cosmologique" apparente évolue avec la profondeur d'échelle.
              </p>
              <p>
                Si Σ ne varie pas avec ε, <i>d</i><sup>2</sup>Σ/<i>dε</i><sup>2</sup> = 0, donc Λ<sub>ε</sub> = 0. 
                On retombe alors sur la Relativité Générale classique (pas de dynamique d'échelle).
              </p>
              <p>
                Si Σ varie, Λ<sub>ε</sub> devient non nulle et encode la contribution métrique d'échelle à grande échelle (cosmologie) 
                ou en environnements extrêmes (intérieurs compacts).
              </p>

              <div className="bg-yellow-900/40 p-6 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-200 font-semibold mb-3">Intuition :</p>
                <p className="text-yellow-200">
                  Au lieu d'une "énergie sombre" mystérieuse, on a un terme géométrique d'échelle issu de la physique de la règle elle-même. 
                  C'est une manière élégante d'expliquer des effets cosmologiques sans postuler une constante fixe.
                </p>
              </div>
            </div>
          </div>

          {/* Section XI: Grandeurs Fondamentales */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-yellow-500/30 hover:border-yellow-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-yellow-300 mb-6 relative z-10">XI. Grandeurs Fondamentales</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-slate-900/50 rounded-lg text-left text-gray-200">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 border-b border-slate-700">Symbole</th>
                      <th className="py-3 px-4 border-b border-slate-700">Signification</th>
                      <th className="py-3 px-4 border-b border-slate-700">Domaine</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif"><i>x</i><sup>μ</sup></td>
                      <td className="py-2 px-4 border-b border-slate-800">Coordonnées d'espace-temps</td>
                      <td className="py-2 px-4 border-b border-slate-800">4D</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif"><i>ε</i></td>
                      <td className="py-2 px-4 border-b border-slate-800">Coordonnée d'échelle (5ᵉ dimension)</td>
                      <td className="py-2 px-4 border-b border-slate-800">interne</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif"><i>g</i><sub>μν</sub>(<i>x</i>, <i>ε</i>)</td>
                      <td className="py-2 px-4 border-b border-slate-800">Métrique dépendante de l'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">tenseur</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif">Σ(<i>x</i>, <i>ε</i>)</td>
                      <td className="py-2 px-4 border-b border-slate-800">Facteur d'échelle (tension du tissu)</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif"><i>T</i><sub>ε</sub></td>
                      <td className="py-2 px-4 border-b border-slate-800">Tension d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif"><i>ρ</i><sub>ε</sub></td>
                      <td className="py-2 px-4 border-b border-slate-800">Densité d'énergie d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif"><i>H</i><sub>ε</sub></td>
                      <td className="py-2 px-4 border-b border-slate-800">Taux de glissement d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800 font-serif">Λ<sub>ε</sub></td>
                      <td className="py-2 px-4 border-b border-slate-800">Constante cosmologique d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-serif"><i>P</i><sub>ε</sub></td>
                      <td className="py-2 px-4">Pression d'échelle</td>
                      <td className="py-2 px-4">scalaire</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/40 to-yellow-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-purple-300 mb-6 relative z-10">Conclusion</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <p>
                La Relativité des Échelles révèle un univers sans rupture, sans infini, sans frontière.
                Le tissu d'espace-temps-d'échelle s'étire en permanence, répondant à la présence de masse, d'énergie et de mouvement.
                Les trous noirs deviennent des transitions continues d'échelle ; les étoiles à neutrons, des instruments d'accord interne ; et les étoiles quantiques, des régimes d'équilibre où le cosmos relie ses extrêmes.
              </p>
              <p className="text-purple-300 font-semibold">
                L'univers ne grandit pas vers l'extérieur.
                Il se déploie vers son infiniment petit, par la tension vivante de sa propre règle d'échelle.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}