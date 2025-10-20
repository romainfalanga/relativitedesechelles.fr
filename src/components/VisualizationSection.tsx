import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Zap, Orbit, Telescope, Activity } from 'lucide-react';

export default function VisualizationSection() {
  const [activeVisualization, setActiveVisualization] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [universalTime, setUniversalTime] = useState(0);

  // Animation loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnimating) {
      interval = setInterval(() => {
        setAnimationProgress(prev => prev + 1);
        setUniversalTime(prev => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Calcul du facteur d'échelle basé sur les formules
  const calculateScaleFactor = (mass: number, pressure: number, velocity: number) => {
    const κ_m = 0.5, κ_p = 0.3, κ_k = 0.4;
    const c = 1; // vitesse de la lumière normalisée
    const γ = 1 / Math.sqrt(1 - (velocity * velocity) / (c * c));
    
    // DΣ/Dτ = κ_m ρc² + κ_p p + κ_k ρ (γ−1)c²
    const dSigma = κ_m * mass * c * c + κ_p * pressure + κ_k * mass * (γ - 1) * c * c;
    return 1 + dSigma * 0.3;
  };

  // Calcul des facteurs d'écoulement du temps pour une étoile à neutrons réelle
  // M = 1.4 M☉, R = 12 km
  const calculateNeutronStarTimeDilation = (layerIndex: number, totalLayers: number) => {
    // Compacité : 2GM/(Rc²) ≈ 0.345
    const compactness = 0.345;
    
    // Surface : dτ/dt ≈ √(1 - 0.345) ≈ 0.8096
    const surfaceTimeFactor = Math.sqrt(1 - compactness);
    
    // Centre : dτ/dt ≈ 0.5 * (3 * 0.8096 - 1) ≈ 0.7144
    const centerTimeFactor = 0.5 * (3 * surfaceTimeFactor - 1);
    
    // Interpolation linéaire entre surface et centre
    const ratio = layerIndex / (totalLayers - 1); // 0 = surface, 1 = centre
    const timeFactor = surfaceTimeFactor + ratio * (centerTimeFactor - surfaceTimeFactor);
    
    return {
      timeFactor: timeFactor,
      scaleFactor: 1 / timeFactor // Σ inversement proportionnel à dτ/dt
    };
  };

  // Calcul de la règle universelle
  const calculateUniversalScale = (time: number) => {
    const H_ε = 0.02; // Taux de glissement d'échelle
    return 1 + H_ε * time;
  };

  // Calcul du décalage vers le rouge cosmique
  const calculateRedshift = (timeEmission: number, timeObservation: number) => {
    const Σ_em = calculateUniversalScale(timeEmission);
    const Σ_obs = calculateUniversalScale(timeObservation);
    return (Σ_obs / Σ_em) - 1;
  };

  // Composant pour visualiser une règle d'échelle
  const ScaleRuler = ({ scaleFactor, label, color = "cyan", showGraduations = true, customWidth }: { 
    scaleFactor: number, 
    label: string, 
    color?: string,
    showGraduations?: boolean,
    customWidth?: number
  }) => {
    const divisions = 10;
    const stretchedWidth = customWidth || Math.min(100 + (scaleFactor - 1) * 140, 500);
    
    // Debug logging
    console.log(`ScaleRuler - Label: ${label}, ScaleFactor: ${scaleFactor.toFixed(3)}, Width: ${stretchedWidth.toFixed(0)}`);
    
    return (
      <div className="mb-8">
        <h4 className={`text-lg font-orbitron font-semibold text-${color}-300 mb-4`}>{label}</h4>
        <div className="relative">
          <div 
            className={`h-6 bg-gradient-to-r from-${color}-600 to-${color}-400 rounded transition-all duration-1000 relative`}
            style={{ width: `${stretchedWidth}px` }}
          >
            {showGraduations && Array.from({ length: divisions + 1 }).map((_, i) => (
              <div
                key={i}
                className={`absolute top-0 w-0.5 h-8 bg-${color}-200`}
                style={{ left: `${(i / divisions) * 100}%` }}
              />
            ))}
            {/* Étiquettes numériques */}
            {showGraduations && Array.from({ length: divisions + 1 }).map((_, i) => (
              <div
                key={`label-${i}`}
                className={`absolute top-10 text-xs text-${color}-200 transform -translate-x-1/2`}
                style={{ left: `${(i / divisions) * 100}%` }}
              >
                {i}
              </div>
            ))}
          </div>
          <div className={`mt-12 text-sm text-${color}-200`}>
            Facteur d'échelle Σ = {scaleFactor.toFixed(3)}
          </div>
        </div>
      </div>
    );
  };

  // Composant pour l'effondrement stellaire amélioré
  const StellarCollapseAdvanced = ({ progress }: { progress: number }) => {
    // Données réelles de PSR J0740+6620
    const initialRadius = 12.92; // km - rayon actuel de l'étoile à neutrons
    const schwarzschildRadius = 6.15; // km - rayon de l'horizon des événements
    const stellarMass = 2.08; // masses solaires
    const initialDensity = 4.6e17; // kg/m³ - densité moyenne actuelle
    const finalDensity = 4.3e18; // kg/m³ - densité moyenne dans l'horizon
    
    // Phases de l'effondrement réalistes
    const collapsePhase = progress < 200 ? 'collapse' : progress < 400 ? 'absorption' : 'stable';
    
    // Évolution du rayon de l'étoile : rétrécissement continu et fluide
    let stellarRadius;
    if (progress < 400) {
      // Rétrécissement continu de 12.92 km vers 0 km sur toute la durée
      stellarRadius = initialRadius * Math.max(0, 1 - progress / 400);
    } else {
      stellarRadius = 0; // Complètement absorbée après progress = 400
    }
    
    // Évolution de l'horizon des événements : croissance progressive
    let horizonRadius;
    if (progress < 50) {
      horizonRadius = 0; // Pas encore d'horizon visible
    } else if (progress < 400) {
      // L'horizon grandit progressivement de 0 à sa taille finale
      const horizonProgress = (progress - 50) / 350; // De 0 à 1
      horizonRadius = schwarzschildRadius * horizonProgress;
    } else {
      horizonRadius = schwarzschildRadius; // Horizon final stabilisé
    }
      
    // Calcul de la densité et pression pendant l'effondrement
    let density, pressure;
    if (progress < 200) {
      // Densité augmente énormément pendant l'effondrement
      const compressionFactor = 1 / Math.max(0.1, 1 - progress / 200);
      density = initialDensity * Math.pow(compressionFactor, 3);
      pressure = density * 0.3;
    } else if (progress >= 400) {
      density = finalDensity;
      pressure = finalDensity * 0.3;
    } else {
      // Phase d'absorption
      const transitionProgress = (progress - 200) / 200;
      density = initialDensity + transitionProgress * (finalDensity - initialDensity);
      pressure = density * 0.3;
    }
    
    const velocity = 0.5; // Vitesse constante pour le calcul interne
    
    // Calcul du facteur d'échelle basé sur la densité réelle
    const scaleFactor = calculateScaleFactor(density / 1e17, pressure / 1e17, velocity);
    
    // État de l'effondrement
    let collapseState = "PSR J0740+6620 - Étoile à neutrons stable (R = 12.9 km)";
    if (progress > 20) collapseState = "Perte de support - Début d'effondrement gravitationnel";
    if (progress > 50) collapseState = "Formation de l'horizon des événements (Rs = 6.15 km)";
    if (progress > 150) collapseState = "Étoile rétrécit - Horizon grandit progressivement";
    if (progress > 300) collapseState = "Phase finale - Matière engloutie par l'horizon";
    if (progress > 400) collapseState = "Trou noir de 2.08 M☉ formé - Régime d'échelle invisible (Σ = " + scaleFactor.toFixed(1) + ")";

    // Opacité de l'étoile (devient invisible après absorption)
    const starOpacity = stellarRadius > 0 ? 1 : 0;
    
    // Échelle pour l'affichage (conversion km -> pixels)
    const pixelScale = 15; // 1 km = 15 pixels pour l'affichage

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-96 h-96 bg-slate-900/50 rounded-lg border border-purple-500/30 mb-6">
          {/* Grille d'espace-temps déformée */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Grille de base déformée */}
            {Array.from({ length: 8 }).map((_, i) => {
              const deformation = Math.max(0, 1 - (progress * 0.008));
              const curvature = progress > 100 ? Math.sin((i / 7) * Math.PI) * (progress - 100) * 0.1 : 0;
              return (
                <g key={i}>
                  <line
                    x1={i * 48}
                    y1={0}
                    x2={i * 48 + curvature}
                    y2={384}
                    stroke="rgba(139, 92, 246, 0.2)"
                    strokeWidth="1"
                  />
                  <line
                    x1={0}
                    y1={i * 48}
                    x2={384}
                    y2={i * 48 + curvature}
                    stroke="rgba(139, 92, 246, 0.2)"
                    strokeWidth="1"
                  />
                </g>
              );
            })}
            
            {/* Cercles de courbure */}
            {Array.from({ length: 5 }).map((_, i) => {
              const r = 30 + i * 20;
              const deformation = Math.max(0.3, 1 - progress * 0.005);
              return (
                <circle
                  key={i}
                  cx={192}
                  cy={192}
                  r={r * deformation}
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
              );
            })}
          </svg>

          {/* Horizon des événements */}
          {horizonRadius > 0 && (
            <div
              className="absolute rounded-full border-2 border-red-500 bg-red-900/20 animate-pulse"
              style={{
                width: `${horizonRadius * pixelScale * 2}px`,
                height: `${horizonRadius * pixelScale * 2}px`,
                left: `${192 - horizonRadius * pixelScale}px`,
                top: `${192 - horizonRadius * pixelScale}px`,
              }}
            />
          )}

          {/* Étoile */}
          {stellarRadius > 0 && (
            <div
              className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
              style={{
                width: `${stellarRadius * pixelScale * 2}px`,
                height: `${stellarRadius * pixelScale * 2}px`,
                left: `${192 - stellarRadius * pixelScale}px`,
                top: `${192 - stellarRadius * pixelScale}px`,
                boxShadow: `0 0 ${stellarRadius * pixelScale}px rgba(255, 165, 0, ${starOpacity * 0.6})`,
                opacity: starOpacity,
              }}
            />
          )}

          {/* Informations en temps réel */}
          <div className="absolute top-4 left-4 bg-slate-800/80 p-3 rounded-lg text-xs text-white">
            <div className="mb-1"><strong>État:</strong> {collapseState}</div>
            <div className="mb-1"><strong>Masse:</strong> {stellarMass} M☉</div>
            {stellarRadius > 0 && <div className="mb-1"><strong>Rayon étoile:</strong> {stellarRadius.toFixed(1)} km</div>}
            {horizonRadius > 0 && <div className="mb-1 text-red-300"><strong>Horizon:</strong> {horizonRadius.toFixed(1)} km</div>}
            <div className="mb-1"><strong>Densité:</strong> {(density / 1e17).toFixed(1)} × 10¹⁷ kg/m³</div>
          </div>

          {/* Règle d'échelle au centre */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-xs text-cyan-300 mb-2">Règle d'échelle au centre :</div>
            <div 
              className="h-3 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded transition-all duration-300"
              style={{ width: `${Math.min(scaleFactor * 5, 300)}px` }}
            />
            <div className="text-xs text-cyan-200 mt-1">
              Σ = {scaleFactor.toFixed(1)} 
              {collapsePhase === 'stable' && <span className="text-red-300 ml-2">(Stabilisé - Régime invisible)</span>}
            </div>
          </div>
        </div>

        <div className="text-center max-w-md">
          <div className="text-sm text-gray-300 mb-2">
            Temps: {(progress * 0.1).toFixed(1)}s | 
            Facteur d'échelle: {scaleFactor.toFixed(1)}
          </div>
          <div className="text-xs text-gray-400">
            {progress >= 400 ? 
              "Trou noir de 2.08 M☉ formé : règle d'échelle étirée × " + scaleFactor.toFixed(0) + ". Matière invisible dans ce régime d'échelle." :
              progress >= 300 ?
              "Phase finale : l'étoile (R = " + stellarRadius.toFixed(1) + " km) est engloutie par l'horizon (Rs = " + horizonRadius.toFixed(1) + " km)." :
              progress >= 50 ?
              "Effondrement en cours : étoile R = " + stellarRadius.toFixed(1) + " km, horizon Rs = " + horizonRadius.toFixed(1) + " km." :
              "PSR J0740+6620 s'effondre gravitationnellement de " + initialRadius.toFixed(1) + " km."
            }
          </div>
        </div>
      </div>
    );
  };

  // Composant pour l'étoile à neutrons avec règles par couche
  const NeutronStarWithLayerRulers = () => {
    const layers = 6;
    
    return (
      <div className="flex flex-col items-center">
        <div className="text-center mb-6">
          <h4 className="text-lg font-orbitron font-semibold text-blue-300 mb-2">Étoile à Neutrons Canon</h4>
          <p className="text-sm text-gray-300">M = 1,4 M☉, R = 12 km - Valeurs réelles de dilatation temporelle</p>
        </div>
        <div className="w-full max-w-5xl">
          {/* Étoile à neutrons avec couches séparées */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-80 h-80">
              {/* Cercles concentriques de l'étoile */}
              {Array.from({ length: layers }).map((_, i) => {
                const radius = 140 - i * 20;
                const { timeFactor, scaleFactor } = calculateNeutronStarTimeDilation(i, layers);
                const opacity = 0.8 - i * 0.1;
                
                return (
                  <div
                    key={i}
                    className="absolute rounded-full border-2 flex items-center justify-center"
                    style={{
                      width: `${radius * 2}px`,
                      height: `${radius * 2}px`,
                      left: `${160 - radius}px`,
                      top: `${160 - radius}px`,
                      borderColor: `rgba(59, 130, 246, ${opacity})`,
                      backgroundColor: `rgba(59, 130, 246, ${opacity * 0.1})`,
                    }}
                  >
                    {/* Centre de l'étoile */}
                    {i === layers - 1 && (
                      <div className="text-center">
                        <div className="text-xs text-blue-300">Cœur</div>
                        <div className="text-xs text-red-300">dτ/dt = 0.71</div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Flèches de transfert thermique */}
              {Array.from({ length: layers - 1 }).map((_, i) => {
                const radius = 140 - i * 20;
                const { scaleFactor } = calculateNeutronStarTimeDilation(i, layers);
                
                return (
                  <div 
                    key={`arrow-${i}`}
                    className="absolute flex items-center"
                    style={{ 
                      left: `${160 + radius + 10}px`, 
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                  >
                    <div 
                      className="h-1 bg-red-400 transition-all duration-1000"
                      style={{ 
                        width: `${Math.max(60 - scaleFactor * 20, 10)}px`,
                        opacity: Math.max(0.9 - scaleFactor * 0.05, 0.1)
                      }}
                    />
                    <div className="w-0 h-0 border-l-4 border-l-red-400 border-t-2 border-b-2 border-t-transparent border-b-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Règles d'échelle pour chaque couche - Affichage horizontal séparé */}
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: layers }).map((_, i) => {
              const { timeFactor, scaleFactor } = calculateNeutronStarTimeDilation(i, layers);
              const rulerLength = Math.min(scaleFactor * 80, 200);
              const timeFlow = 1 / scaleFactor;
              
              return (
                <div key={`ruler-${i}`} className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/30">
                  <div className="text-center mb-3">
                    <div className="text-sm font-orbitron font-semibold text-blue-300">
                      Couche {i + 1} {i === layers - 1 ? '(Cœur)' : ''}
                    </div>
                    <div className="text-xs text-gray-400">
                      Rayon: {(12 - i * 2).toFixed(0)} km
                    </div>
                  </div>
                  
                  {/* Règle d'échelle pour cette couche */}
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-blue-300 mb-2">Règle d'échelle locale</div>
                    <div 
                      className="h-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-2 relative"
                      style={{ width: `${rulerLength}px` }}
                    >
                      {/* Graduations */}
                      {Array.from({ length: 6 }).map((_, j) => (
                        <div
                          key={j}
                          className="absolute top-0 w-0.5 h-6 bg-blue-200"
                          style={{ left: `${(j / 5) * 100}%` }}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-blue-200 mb-1">
                      Σ = {scaleFactor.toFixed(1)}
                    </div>
                    <div className="text-xs text-gray-400">
                      dτ/dt = {timeFactor.toFixed(3)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-300 max-w-lg">
          <p className="mb-2">
            Étoile à neutrons réelle : le temps s'écoule ~11,8% plus lentement au centre qu'à la surface.
            Le facteur d'échelle varie de Σ = {calculateNeutronStarTimeDilation(0, layers).scaleFactor.toFixed(2)} (surface) 
            à Σ = {calculateNeutronStarTimeDilation(layers-1, layers).scaleFactor.toFixed(2)} (cœur).
          </p>
          <p className="text-xs text-gray-400">
            Les flèches thermiques raccourcissent vers le centre, illustrant le ralentissement 
            des échanges thermiques dû au gradient d'échelle interne.
          </p>
        </div>
      </div>
    );
  };

  // Composant pour l'expansion cosmique avec voyage de la lumière
  const CosmicExpansionAnimation = ({ time }: { time: number }) => {
    // Simulation de 13.8 milliards d'années en 13.8 secondes (1 seconde = 1 milliard d'années)
    const maxAge = 13.8;
    const universeAge = (time * 0.1) % maxAge;
    
    // Une seule galaxie très lointaine
    const distantGalaxy = {
      distance: 12, // 12 milliards d'années-lumière
      emissionTime: currentUniverseAge - 12,
      name: 'Galaxie Lointaine'
    };
    
    // Règles d'échelle qui s'étirent avec le temps
    const Σ_emission = calculateUniversalScale(distantGalaxy.emissionTime);
    const Σ_current = calculateUniversalScale(universeAge);
    const Σ_final = calculateUniversalScale(maxAge);
    
    const redshift = calculateRedshift(distantGalaxy.emissionTime, maxAge);
    
    // Progression du photon (voyage de la galaxie vers nous)
    const travelTime = Math.max(0, universeAge - distantGalaxy.emissionTime);
    const photonProgress = Math.max(0, Math.min(travelTime / distantGalaxy.distance, 1));
    
    // Couleur du photon basée sur le décalage (plus dramatique)
    const redIntensity = Math.min(redshift * 50, 200);
    const photonColor = `rgb(${255}, ${Math.max(255 - redIntensity, 50)}, ${Math.max(255 - redIntensity, 50)})`;

    return (
      <div className="flex flex-col items-center">
        <div className="w-full max-w-6xl">
          {/* Titre avec temps universel */}
          <div className="text-center mb-6">
            <div className="text-lg font-orbitron font-semibold text-cyan-300 mb-2">
              Expansion : Étirement de la Règle Universelle
            </div>
            <div className="text-sm text-gray-300">
              Âge de l'univers: {universeAge.toFixed(1)} Ga | 1 seconde = 1 milliard d'années
            </div>
          </div>
          
          {/* Visualisation simplifiée avec une galaxie */}
          <div className="flex items-center justify-between mb-8">
            {/* Galaxie émettrice */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 mb-3 mx-auto animate-pulse" />
              <div className="text-sm text-purple-300 mb-1">{distantGalaxy.name}</div>
              <div className="text-xs text-gray-400 mb-4">{distantGalaxy.distance} milliards d'années-lumière</div>
              
              {/* Règle d'échelle à l'émission */}
              <div className="mb-4">
                <div className="text-xs text-gray-300 mb-2">Règle à l'Émission</div>
                <div className="flex justify-center">
                  <div 
                    className="w-4 bg-gradient-to-b from-purple-600 to-purple-400 rounded"
                    style={{ height: `${Σ_emission * 40}px` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Σ = {Σ_emission.toFixed(2)}
                </div>
                <div className="text-xs text-purple-300 mt-1">
                  Il y a {distantGalaxy.distance} Ga
                </div>
              </div>
            </div>
            
            {/* Photon en voyage */}
            <div className="flex-1 relative h-20 mx-8">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-yellow-500 transform -translate-y-1/2" />
              {photonProgress > 0 && (
                <div 
                  className="absolute top-1/2 w-4 h-4 rounded-full animate-pulse transform -translate-y-1/2"
                  style={{ 
                    backgroundColor: photonColor,
                    boxShadow: `0 0 12px ${photonColor}`,
                    left: `${photonProgress * 100}%`,
                    transform: 'translateX(-50%) translateY(-50%)'
                  }}
                />
              )}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-gray-300">
                Voyage : {(photonProgress * 100).toFixed(0)}%
              </div>
            </div>
            
            {/* Notre galaxie réceptrice */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-3 mx-auto" />
              <div className="text-sm text-yellow-300 mb-1">Notre Galaxie</div>
              <div className="text-xs text-gray-400 mb-4">Réceptrice</div>
              
              {/* Règle d'échelle actuelle */}
              <div className="mb-4">
                <div className="text-xs text-gray-300 mb-2">Règle Actuelle</div>
                <div className="flex justify-center">
                  <div 
                    className="w-4 bg-gradient-to-b from-yellow-600 to-yellow-400 rounded"
                    style={{ height: `${Σ_current * 40}px` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Σ = {Σ_current.toFixed(2)}
                </div>
                <div className="text-xs text-yellow-300 mt-1">
                  Âge: {universeAge.toFixed(1)} Ga
                </div>
              </div>
              
              {/* Résultat du décalage */}
              {photonProgress >= 0.95 && (
                <div className="bg-red-900/40 p-3 rounded-lg border border-red-500/30">
                  <div className="text-xs text-red-300 mb-1">Photon reçu</div>
                  <div className="text-xs text-gray-300">z = {redshift.toFixed(2)}</div>
                  <div className="text-xs text-red-400 mt-1">Décalé vers le rouge</div>
                </div>
              )}
            </div>
          </div>

          {/* Explication du phénomène */}
          <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h4 className="text-lg font-orbitron font-semibold text-cyan-300 mb-4 text-center">
              Pourquoi la Lumière Arrive-t-elle Rouge ?
            </h4>
            <div className="text-sm text-gray-200 space-y-3">
              <p>
                <strong className="text-cyan-300">1. Émission :</strong> Le photon est émis quand la règle universelle Σ = {Σ_emission.toFixed(2)}
              </p>
              <p>
                <strong className="text-yellow-300">2. Réception :</strong> Le photon arrive quand la règle universelle Σ = {Σ_final.toFixed(2)}
              </p>
              <p>
                <strong className="text-red-300">3. Décalage :</strong> z = Σ_réception / Σ_émission - 1 = {redshift.toFixed(2)}
              </p>
              <p className="text-purple-300 font-semibold">
                Ce n'est pas l'espace qui s'étend, c'est la règle de mesure de l'univers qui s'étire !
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const visualizations = [
    {
      id: 'scale-ruler',
      title: 'Règle d\'Échelle Dynamique',
      icon: Activity,
      description: 'Comparaison entre la règle universelle et une règle propre modifiable',
      component: () => {
        // Calculs basés sur les vraies valeurs d'étoile à neutrons (M = 1,4 M☉, R = 12 km)
        const compactness = 0.345; // 2GM/(Rc²)
        const surfaceTimeFactor = Math.sqrt(1 - compactness); // ≈ 0.8096
        
        // Facteurs d'échelle : Σ = 1/(dτ/dt)
        const surfaceScaleFactor = 1 / surfaceTimeFactor; // ≈ 1.235
        
        // Synchronisation sur 13.8 Ga : les règles atteignent leur taille max à 13.8 Ga
        const maxAge = 13.8;
        const currentAge = universalTime % maxAge;
        const ageRatio = currentAge / maxAge;
        
        // Calcul des échelles avec croissance jusqu'à 13.8 Ga
        const baseScale = 1 + ageRatio * 2; // Croissance de 1 à 3 sur 13.8 Ga
        const universalScale = baseScale;
        const surfaceScale = baseScale * surfaceScaleFactor;
        
        return (
          <div>
            <div className="mb-8">
              <h4 className="text-lg font-orbitron font-semibold text-purple-300 mb-4 text-center">
                Gradient d'Échelle dans une Étoile à Neutrons (M = 1,4 M☉, R = 12 km)
              </h4>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30">
                <div className="text-sm text-gray-300 text-center space-y-2">
                  <div>Âge de l'univers: {currentAge.toFixed(1)} Ga / {maxAge} Ga</div>
                  <div>Compacité: 2GM/(Rc²) = {compactness}</div>
                  <div>Surface: dτ/dt = {surfaceTimeFactor.toFixed(4)} → Σ = {surfaceScaleFactor.toFixed(3)}</div>
                  <div className="text-xs text-gray-400 mt-3">
                    La règle d'échelle de surface s'étire différemment de la règle universelle
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <ScaleRuler 
                scaleFactor={universalScale} 
                label="Règle Universelle" 
                color="purple" 
              />
              <ScaleRuler 
                scaleFactor={surfaceScale} 
                label="Règle Propre - Surface de l'Étoile à Neutrons" 
                color="cyan" 
              />
              
              {/* Comparaison */}
              <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-500/30">
                <h4 className="text-lg font-orbitron font-semibold text-yellow-300 mb-4">Gradient d'Échelle Interne</h4>
                <div className="text-center text-sm text-gray-200 space-y-2">
                  <div>
                    <strong>Surface/Universelle:</strong> {(surfaceScale / universalScale).toFixed(3)}× 
                    (facteur fixe: {surfaceScaleFactor.toFixed(3)})
                  </div>
                  <div className="text-xs text-gray-400 mt-3">
                    La règle d'échelle de surface est étirée par rapport à la règle universelle 
                    en raison de la forte gravité de l'étoile à neutrons.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    },
    {
      id: 'stellar-collapse',
      title: 'Effondrement Stellaire',
      icon: Zap,
      description: 'Formation d\'un trou noir et étirement extrême de la règle d\'échelle',
      component: () => <StellarCollapseAdvanced progress={animationProgress} />
    }
  ];

  const currentVisualization = visualizations[activeVisualization];

  return (
    <section id="visualisation" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Visualisations de la Relativité des Échelles
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Découvrez visuellement comment la règle d'échelle s'étire et se déforme selon les principes 
            mathématiques de la théorie, transformant notre compréhension de l'univers
          </p>
        </div>

        {/* Navigation des visualisations */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 relative z-10">
          {visualizations.map((viz, index) => {
            const Icon = viz.icon;
            return (
              <button
                key={viz.id}
                onClick={() => setActiveVisualization(index)}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  activeVisualization === index
                    ? 'border-cyan-400 bg-cyan-900/30 shadow-neon'
                    : 'border-gray-600 bg-slate-800/50 hover:border-cyan-500 hover:bg-cyan-900/20'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${
                  activeVisualization === index ? 'text-cyan-300' : 'text-gray-400'
                }`} />
                <h3 className={`font-orbitron font-semibold mb-2 text-sm ${
                  activeVisualization === index ? 'text-cyan-300' : 'text-gray-300'
                }`}>
                  {viz.title}
                </h3>
                <p className="text-xs text-gray-400">{viz.description}</p>
              </button>
            );
          })}
        </div>

        {/* Contrôles d'animation */}
        <div className="flex justify-center space-x-4 mb-12 relative z-10">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-orbitron font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-neon"
          >
            {isAnimating ? <Pause className="mr-2" size={20} /> : <Play className="mr-2" size={20} />}
            {isAnimating ? 'Pause' : 'Animer'}
          </button>
          <button
            onClick={() => {
              setAnimationProgress(0);
              setUniversalTime(0);
              setIsAnimating(false);
            }}
            className="flex items-center px-6 py-3 bg-slate-700 text-white font-orbitron font-semibold rounded-full hover:bg-slate-600 transition-all duration-300"
          >
            <RotateCcw className="mr-2" size={20} />
            Reset
          </button>
        </div>

        {/* Visualisation active */}
        <div className="futuristic-card p-8 md:p-12 rounded-3xl border-cyan-500/30 hover:border-cyan-400/50 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-orbitron font-bold text-cyan-300 mb-6 text-center">
              {currentVisualization.title}
            </h3>
            <p className="text-center text-sm text-gray-300 mb-6">
              {currentVisualization.description}
            </p>
            
            {/* Rendu du composant de visualisation */}
            <div className="mt-8">
              {currentVisualization.component()}
            </div>
            
            <p className="text-center text-xs text-gray-400">
              La physique de la Relativité des Échelles : pas de singularité, mais un étirement continu 
              de la règle d'échelle qui rend la matière invisible dans son nouveau régime d'échelle.
            </p>
          </div>
        </div>

        {/* Explication théorique */}
        <div className="mt-12 futuristic-card p-8 rounded-2xl border-purple-500/30 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20 rounded-2xl"></div>
          <h3 className="text-2xl font-orbitron font-bold text-purple-300 mb-4 relative z-10">
            Principe Fondamental
          </h3>
          <p className="text-gray-200 leading-relaxed relative z-10">
            Ces visualisations illustrent comment le tissu d'espace-temps-d'échelle répond dynamiquement 
            à la présence de masse, d'énergie, de pression et de vitesse. Chaque déformation de la règle 
            d'échelle Σ correspond à une solution mathématique précise des équations de la Relativité des Échelles, 
            révélant l'unité profonde entre l'infiniment petit et l'infiniment grand.
          </p>
        </div>
      </div>
    </section>
  );
}