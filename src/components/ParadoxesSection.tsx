import React from 'react';

export default function ParadoxesSection() {
  return (
    <section id="paradoxes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-slate-800/40"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            La Clé des Paradoxes
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            En introduisant l'échelle comme variable dynamique, la Relativité des Échelles 
            donne un sens nouveau aux phénomènes que la physique classique ne parvient pas à relier
          </p>
        </div>

        <div className="space-y-12 relative z-10">
          {/* Singularités */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-red-500/30 hover:border-red-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-red-300 mb-6 relative z-10">Fin du Paradoxe des Singularités</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <p className="text-lg">
                Dans ce modèle, la "singularité" n'est plus un point où les lois cessent d'exister, 
                mais l'expression d'un étirement extrême du tissu d'espace-temps-d'échelle.
              </p>
              <p>
                Partout où il existe masse, énergie ou courbure, la règle d'échelle se tend et s'allonge : 
                plus la densité est grande, plus la règle locale se déforme et s'étire.
              </p>
              <p>
                Lorsqu'une étoile massive s'effondre, cette tension s'étire grandement ! 
                Ce que nous appelons "singularité" n'est donc pas un point sans dimension, 
                mais une région où la métrique d'échelle sort de notre domaine de mesure car 
                notre "règle propre" n'est plus calibrée pour voir ce qu'il s'y passe.
              </p>
              <p className="text-red-300 font-medium">
                Le centre du trou noir n'est pas un objet qui s'effondre dans l'infini, 
                mais un décalage de plan d'échelle : la matière poursuit son existence 
                dans un régime d'échelle propre, invisible pour nous mais cohérent dans son référentiel interne.
              </p>
            </div>
          </div>

          {/* Étoiles à neutrons */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-blue-500/30 hover:border-blue-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/40 to-blue-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-blue-300 mb-6 relative z-10">Le Refroidissement des Étoiles à Neutrons</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <p className="text-lg">
                Le refroidissement rapide des étoiles à neutrons trouve ici une explication naturelle.
              </p>
              <p>
                Dans ces astres d'une densité extrême, chaque couche interne est soumise à une tension 
                d'échelle différente : plus on se rapproche du centre, plus la règle d'échelle est étirée 
                par la densité et la gravitation. Ainsi, le tissu d'espace-temps-d'échelle n'est pas uniforme 
                au sein de l'étoile : il se dilate progressivement depuis la surface jusqu'au cœur.
              </p>
              <p>
                Cette variation d'échelle interne crée un décalage de transmission de l'énergie entre les couches. 
                Les zones profondes ne vibrent pas au même rythme métrique que les zones externes : 
                le temps d'échelle y s'écoule différemment, ralentissant les échanges thermiques vers la périphérie.
              </p>
              <p className="text-blue-200 font-medium">
                À mesure qu'on se rapproche du centre et que la densité augmente, cette différence d'échelle 
                s'accentue, et la règle locale s'étire davantage. L'énergie thermique se redéploie sur un tissu 
                d'échelle-temps de plus en plus étiré, créant moins de connexions efficaces entre les couches.
              </p>
              <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <p className="text-blue-100 font-semibold mb-3">Ce que nous percevons comme un refroidissement anormalement rapide n'est donc pas une perte brutale d'énergie, mais :</p>
                <p className="text-blue-200">
                  Un ralentissement de la transmission de chaleur entre des couches d'échelle désaccordées. 
                  Plus la règle d'échelle s'étire vers le centre, moins il y a de connexions efficaces 
                  pour transmettre l'énergie thermique vers la périphérie.
                </p>
              </div>
              <p className="text-yellow-300 font-semibold">
                Ainsi, le refroidissement des étoiles à neutrons n'est pas un mystère thermique, 
                mais une conséquence naturelle de leur structure d'échelle interne.
              </p>
            </div>
          </div>

          {/* Expansion de l'univers */}
          <div className="futuristic-card p-8 md:p-12 rounded-3xl border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 to-purple-700/30 rounded-3xl"></div>
            <h3 className="text-3xl font-orbitron font-bold text-purple-300 mb-6 relative z-10">L'Expansion de l'Univers</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <p className="text-lg text-purple-200 mb-4">
                  Albert Einstein avait une vision profondément harmonieuse de l'univers. Lorsqu'il introduisit 
                  la constante cosmologique pour maintenir un cosmos statique, il exprimait cette intuition 
                  d'un équilibre fondamental. Plus tard, face aux observations de l'expansion, il qualifia 
                  cette constante de "plus grosse erreur" de sa vie.
              </p>
              <p className="text-purple-200 mb-4">
                  Pourtant, la Relativité des Échelles révèle qu'Einstein a toujours eu raison ! Son intuition d'un univers en équilibre était juste. Avec la relativité des échelles, ce n'est pas l'espace qui s'étend, mais notre règle d'échelle qui s'étirent continuellement.
              </p>
              <p>
                Ce que nous prenons pour une expansion de l'espace n'est pas un éloignement matériel, 
                mais un étirement de la règle universelle du tissu d'espace-temps-d'échelle vers l'infiniment petit.
              </p>
              <p>
                À chaque instant, l'univers redéfinit la manière dont il se mesure lui-même : 
                longueurs, durées, masses ne reposent pas sur une métrique fixe, mais sur la tension de la règle d'échelle. 
                Cette tension s'accroît continuellement, provoquant un étirement progressif de la règle 
                qui relie l'infiniment petit à l'infiniment grand.
              </p>
              <p className="text-purple-300 font-medium">
                Autrement dit, le tissu de l'univers ne s'étire pas comme un ballon qui gonfle : 
                c'est sa règle universelle qui s'étire vers l'infiniment petit. 
                L'univers ne grandit pas vers l'extérieur : il s'ouvre vers l'intérieur de lui-même.
              </p>
              <div className="bg-purple-900/40 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                <p className="text-purple-100 font-semibold mb-3">Le décalage vers le rouge expliqué :</p>
                <p className="text-purple-200">
                  Lorsqu'un photon quitte une galaxie lointaine, il est émis sur une portion du tissu 
                  dont la règle d'échelle n'est pas encore aussi étirée qu'aujourd'hui. 
                  Pendant son voyage, la règle universelle poursuit son expansion vers l'infiniment petit ; 
                  lorsque le photon atteint notre référentiel actuel, nous le mesurons à travers une unité 
                  d'échelle beaucoup plus étirée que celle de son point d'origine.
                </p>
              </div>
              <p>
                Nous avons cru que l'espace s'agrandissait, alors que c'est la métrique d'échelle qui glisse 
                sous nos instruments. Chaque observation s'effectue à travers un référentiel d'échelle qui, 
                au fil du temps, se déplace dans la dimension d'échelle puisque la règle de l'univers elle-même s'étire.
              </p>
              <p className="text-yellow-300 font-semibold">
                La Relativité des Échelles corrige l'illusion : l'univers ne se dilate pas vers l'extérieur, 
                il se déploie vers son infiniment petit ; et le rouge des photons n'est pas la trace d'un éloignement, 
                mais le reflet du glissement continu de la métrique d'échelle à travers le temps.
              </p>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
}