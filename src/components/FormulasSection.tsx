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
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🌍 Définition classique</h4>
              <p>
                La Relativité Générale décrit la gravitation comme une courbure du tissu d'espace-temps.
                Ce tissu est une métrique à quatre dimensions :
              </p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>ds² = g<sub>μν</sub>(x) dx<sup>μ</sup> dx<sup>ν</sup></code>
              </p>
              <p>
                où <code>x<sup>μ</sup> = (ct, x, y, z)</code> sont les coordonnées espace-temps et <code>g<sub>μν</sub></code> la métrique gravitationnelle.
                La masse et l'énergie déforment ce tissu, modifiant la manière dont la lumière et le temps s\'écoulent.
              </p>
              <p>
                Mais cette vision à quatre dimensions montre ses limites à l'approche de l'infiniment petit ou dans les régions de densité extrême, où les équations classiques cessent d'être valides.
              </p>
            </div>
          </div>

          {/* Section II: Le Tissu d'Espace-Temps-d'Échelle (5D) */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-blue-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-purple-300 mb-6 relative z-10">II. Le Tissu d'Espace-Temps-d'Échelle (5D)</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🌀 Extension à la cinquième dimension : l'échelle</h4>
              <p>
                La Relativité des Échelles ajoute une cinquième dimension, l'échelle <code>ε</code>, qui mesure la profondeur d'étirement interne du réel.
                Le tissu devient un espace-temps-d'échelle à cinq dimensions :
              </p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>ds² = g<sub>μν</sub>(x, ε) dx<sup>μ</sup> dx<sup>ν</sup> + Σ²(x, ε) dε²</code>
              </p>
              <p>
                <code>g<sub>μν</sub>(x, ε)</code> décrit la géométrie de l'espace-temps dépendante de l\'échelle,
              </p>
              <p>
                <code>ε</code> est la coordonnée d'échelle,
              </p>
              <p>
                <code>Σ(x, ε)</code> est le facteur d'échelle, qui exprime la tension ou l'élasticité du tissu dans la dimension d'échelle.
              </p>
              <p>
                Le passage du 4D au 5D ne crée pas un espace "au-dessus" du nôtre, mais une profondeur interne au tissu : une dimension cachée où se régule la continuité entre les échelles.
              </p>
            </div>
          </div>

          {/* Section III: La Tension de la Règle d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-green-500/30 hover:border-green-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 to-purple-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-green-300 mb-6 relative z-10">III. La Tension de la Règle d'Échelle</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">⚖️ Définition</h4>
              <p>
                Le facteur d'échelle <code>Σ</code> varie avec la coordonnée d'échelle <code>ε</code>.
                Sa variation définit la tension d'échelle, c\'est-à-dire l'intensité de l\'étirement du tissu :
              </p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>T<sub>ε</sub> = dΣ / dε</code>
              </p>
              <p>
                Cette tension traduit la manière dont la règle d'échelle se déforme sous l'effet de la masse, de l'énergie, de la vitesse et de la courbure.
                Plus ces grandeurs sont fortes, plus la règle d'échelle s'étire.
              </p>
            </div>
          </div>

          {/* Section IV: Règle Universelle et Règles Locales */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-orange-500/30 hover:border-orange-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-orange-300 mb-6 relative z-10">IV. Règle Universelle et Règles Locales</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🌐 Relation entre le global et le local</h4>
              <p>
                Le facteur d'échelle peut se décomposer en une partie universelle et une partie locale :
              </p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>Σ(x, ε) = Σ<sub>U</sub>(ε) Σ<sub>L</sub>(x)</code>
              </p>
              <p>
                <code>Σ<sub>U</sub>(ε)</code> : la règle universelle, qui définit la tension moyenne du tissu à l'échelle cosmique,
              </p>
              <p>
                <code>Σ<sub>L</sub>(x)</code> : la règle locale, propre à chaque région de densité.
              </p>
              <p>
                Chaque corps influe sur sa portion de règle locale, mais toutes restent liées à la règle universelle, comme des cordes vibrantes accordées sur un même fondamental.
                L'univers devient ainsi un réseau de tensions d'échelle entremêlées où global et local dialoguent en permanence.
              </p>
            </div>
          </div>

          {/* Section V: Gravitation et Déformation d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-red-500/30 hover:border-red-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-800/40 to-orange-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-red-300 mb-6 relative z-10">V. Gravitation et Déformation d'Échelle</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🪶 Couplage entre la courbure et la métrique d'échelle</h4>
              <p>
                La déformation du tissu d'échelle dépend directement de la courbure de l'espace-temps classique :
              </p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>∂Σ(x, ε) / ∂x<sup>μ</sup> ∝ R<sub>μν</sub>(x, ε) u<sup>ν</sup></code>
              </p>
              <p>
                La masse et l'énergie créent de la courbure ; cette courbure engendre une tension dans la règle d'échelle.
                Autrement dit, la gravité ne se manifeste pas seulement par la géométrie, mais aussi par une élasticité interne du tissu.
              </p>
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4 mt-8">⚙️ Équilibre local d'échelle</h4>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>∇<sub>μ</sub> (∂Σ / ∂x<sup>μ</sup>) = 8πG ρ<sub>ε</sub></code>
              </p>
              <p>
                Cette équation exprime le lien entre la variation d'échelle et la densité d'énergie d'échelle <code>ρ<sub>ε</sub></code>.
                Elle est l'équivalent, dans la cinquième dimension, de l'équation d'Einstein en quatre dimensions.
              </p>
            </div>
          </div>

          {/* Section VI: Fin du Paradoxe des Singularités */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-blue-500/30 hover:border-blue-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-red-800/40 to-red-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-blue-300 mb-6 relative z-10">VI. Fin du Paradoxe des Singularités</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🌌 Étirement continu du tissu : plus d'infini, plus de rupture</h4>
              <p>
                Dans la Relativité des Échelles, il n'existe pas de singularité.
                Ce que la Relativité Générale interprétait comme un "point infini" est en réalité un étirement continu de la règle d'échelle, produit par la masse, la pression et la vitesse interne de la matière.
              </p>
              <p>La loi d'étirement s'écrit :</p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>DΣ / Dτ = κ<sub>m</sub> ρc² + κ<sub>p</sub> p + κ<sub>k</sub> ρ (γ-1)c²</code>
              </p>
              <p>où :</p>
              <p><code>ρ</code> est la densité d'énergie locale,</p>
              <p><code>p</code> la pression,</p>
              <p><code>γ = 1/√(1-v²/c²)</code> le facteur relativiste,</p>
              <p><code>κ<sub>m</sub>, κ<sub>p</sub>, κ<sub>k</sub></code> sont des constantes de couplage d'échelle.</p>
              <p>
                La règle d'échelle <code>Σ</code> s'étire naturellement avec la densité, la pression et la vitesse : plus un système est extrême, plus la règle s'allonge, sans jamais atteindre de valeur infinie.
              </p>
              <p>La métrique physique, c'est-à-dire celle que nous mesurons effectivement, devient :</p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>ḡ<sub>μν</sub>(x, ε) = (1 / Σ²(x, ε)) g<sub>μν</sub>(x, ε)</code>
              </p>
              <p>
                Ainsi, les grandeurs géométriques (comme la courbure ou la densité d'énergie) restent toujours finies sur la métrique mesurée.
                L'intérieur d'un trou noir n'est pas une rupture du réel, mais un régime d'étirement extrême, où la matière continue d'exister sur une portion plus profonde du tissu d'échelle.
              </p>
            </div>
          </div>

          {/* Section VII: Refroidissement des Étoiles à Neutrons */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-cyan-500/30 hover:border-cyan-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-blue-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-cyan-300 mb-6 relative z-10">VII. Refroidissement des Étoiles à Neutrons</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🌡️ Gradient interne d'échelle</h4>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>dΣ / dr ∝ ρ(r)</code>
              </p>
              <p>
                La variation d'échelle au sein d'une étoile dépend directement de sa densité.
                Vers le centre, où la matière est plus compacte, la tension d'échelle s'accroît.
              </p>
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4 mt-8">🔥 Flux thermique modifié par la tension d'échelle</h4>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>Φ<sub>T</sub>(r) = -k (1 / Σ(r)) dT / dr</code>
              </p>
              <p>
                Le flux de chaleur est ralenti par l'étirement de la règle : plus <code>Σ(r)</code> est grande, plus les échanges thermiques sont lents.
                Ce que nous observons comme un "refroidissement rapide" est en réalité un ralentissement des échanges internes entre des couches d'échelle désaccordées.
              </p>
            </div>
          </div>

          {/* Section VIII: Expansion Cosmique et Glissement d'Échelle */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/40 to-cyan-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-purple-300 mb-6 relative z-10">VIII. Expansion Cosmique et Glissement d'Échelle</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🌠 Loi d'évolution de la règle universelle</h4>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>dΣ<sub>U</sub> / dt = H<sub>ε</sub> Σ<sub>U</sub></code>
              </p>
              <p>
                L'univers ne s'étend pas vers l'extérieur : sa règle universelle s'étire vers l'infiniment petit.
                Le paramètre <code>H<sub>ε</sub></code> joue un rôle analogue à celui de Hubble, mais il mesure la vitesse du glissement d'échelle interne.
              </p>
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4 mt-8">🌈 Décalage vers le rouge d'origine métrique</h4>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>1 + z = Σ<sub>U</sub>(t<sub>obs</sub>) / Σ<sub>U</sub>(t<sub>ém</sub>)</code>
              </p>
              <p>
                Le décalage spectral ne vient donc pas d'une expansion de l'espace, mais d'un changement de la métrique d'échelle entre le moment d'émission et celui d'observation.
                Les photons sont "étirés" non parce qu'ils traversent un espace qui grandit, mais parce qu'ils sont mesurés dans une règle qui s'est étirée entre-temps.
              </p>
            </div>
          </div>

          {/* Section IX: Les Étoiles Quantiques */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-indigo-500/30 hover:border-indigo-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 to-purple-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-indigo-300 mb-6 relative z-10">IX. Les Étoiles Quantiques : Régimes d'Échelle Extrêmes</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">⚛️ Description générale</h4>
              <p>
                Lorsqu'une étoile s'effondre, sa densité, sa pression et sa vitesse interne deviennent telles que la règle du tissu d'échelle-temps s'étire intensément.
                Toute la masse contenue à l'intérieur de l'horizon des événements continue d'exister dans un régime où la métrique est rééchelonnée par <code>Σ</code>.
              </p>
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4 mt-8">⚙️ Évolution d'échelle pendant l'effondrement</h4>
              <p>L'étirement suit la même loi que pour les régions denses ordinaires :</p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>DΣ / Dτ = κ<sub>m</sub> ρc² + κ<sub>p</sub> p + κ<sub>k</sub> ρ (γ-1)c²</code>
              </p>
              <p>
                Ici encore, plus la densité et la pression augmentent, plus la règle d'échelle s'allonge, rééchelonnant le tissu interne sans rupture.
                Le cœur d'une étoile quantique n'est donc pas un "point" : c'est une zone d'espace-temps où la métrique est profondément dilatée dans la dimension d'échelle.
              </p>
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4 mt-8">💫 État d'équilibre d'échelle</h4>
              <p>
                L'étoile quantique correspond à un régime stable d'étirement où la tension d'échelle équilibre la compression gravitationnelle.
                Elle peut être décrite par une équation d'état d'échelle :
              </p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>P<sub>ε</sub> = ρ<sub>ε</sub>c² = ℏc / L<sub>ε</sub><sup>4</sup></code>
              </p>
              <p>
                Cette loi relie la densité d'énergie d'échelle <code>ρ<sub>ε</sub></code> à une longueur caractéristique <code>L<sub>ε</sub></code> associée à la structure interne du tissu.
                C'est dans ce régime que l\'univers relie naturellement la relativité générale à la physique quantique : le très grand et le très petit se rejoignent dans la même tension de règle.
              </p>
            </div>
          </div>

          {/* Section X: Le Champ d'Échelle-Temps Unifié */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-green-500/30 hover:border-green-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/40 to-indigo-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-green-300 mb-6 relative z-10">X. Le Champ d'Échelle-Temps Unifié</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <h4 className="text-xl font-orbitron font-semibold text-cyan-300 mb-4">🔗 Équation du champ généralisé</h4>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>G<sub>μν</sub>(x, ε) + Λ<sub>ε</sub> g<sub>μν</sub>(x, ε) = (8πG / c<sup>4</sup>) T<sub>μν</sub>(x, ε)</code>
              </p>
              <p>avec :</p>
              <p className="text-center text-lg font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                <code>Λ<sub>ε</sub> = (1 / Σ²(x, ε)) d²Σ / dε²</code>
              </p>
              <p>
                La constante cosmologique devient ici une fonction dynamique de l'échelle.
                Lorsque <code>∂<sub>ε</sub>Σ = 0</code>, la théorie retrouve la Relativité Générale classique : le cas où la règle d'échelle n\'évolue plus.
              </p>
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
                      <td className="py-2 px-4 border-b border-slate-800"><code>x<sup>μ</sup></code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Coordonnées d'espace-temps</td>
                      <td className="py-2 px-4 border-b border-slate-800">4D</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800"><code>ε</code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Coordonnée d'échelle (5ᵉ dimension)</td>
                      <td className="py-2 px-4 border-b border-slate-800">interne</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800"><code>g<sub>μν</sub>(x, ε)</code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Métrique dépendante de l'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">tenseur</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800"><code>Σ(x, ε)</code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Facteur d'échelle (tension du tissu)</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800"><code>T<sub>ε</sub></code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Tension d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800"><code>ρ<sub>ε</sub></code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Densité d'énergie d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800"><code>H<sub>ε</sub></code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Taux de glissement d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-slate-800"><code>Λ<sub>ε</sub></code></td>
                      <td className="py-2 px-4 border-b border-slate-800">Constante cosmologique d'échelle</td>
                      <td className="py-2 px-4 border-b border-slate-800">scalaire</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><code>P<sub>ε</sub></code></td>
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
            <h3 className="text-3xl font-orbitron font-bold text-purple-300 mb-6 relative z-10">🧭 Conclusion</h3>
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