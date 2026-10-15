import React, { useState } from 'react';
import valoraLogoImg from '../assets/VALORA Agricultural Logo Badge.png';
import { 
  Camera, 
  Image as ImageIcon, 
  Lightbulb, 
  Check, 
  ArrowRight, 
  GraduationCap, 
  Layers, 
  Calculator, 
  ShoppingBag, 
  Play, 
  FileText, 
  CheckCircle2, 
  Package,
  Store,
  Building2,
  Utensils,
  Globe,
  Home,
  BookOpen,
  BarChart3,
  User,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Thermometer,
  Hourglass,
  Filter,
  Boxes,
  ArrowDown,
  Lock,
  Coins
} from 'lucide-react';

type ScreenKey = 'scanner' | 'products' | 'fabrication' | 'formation' | 'calculator' | 'commercialisation';

export const AppScreensShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('scanner');
  
  // États de l'écran fabrication
  const [fabTab, setFabTab] = useState<'diagramme' | 'parametres' | 'conservation'>('diagramme');

  // États de l'espace formation
  const [formationTab, setFormationTab] = useState<'modules' | 'video' | 'documents' | 'quiz'>('modules');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  // Simulateur de coûts interactif
  const [mangueQty, setMangueQty] = useState(68);
  const [manguePrice, setManguePrice] = useState(600);
  const [sucreQty, setSucreQty] = useState(5);
  const [sucrePrice, setSucrePrice] = useState(600);
  const [producedUnits, setProducedUnits] = useState(20);
  const [marginCoef, setMarginCoef] = useState(1.5);
  const [isSaved, setIsSaved] = useState(false);

  const costMangue = mangueQty * manguePrice;
  const costSucre = sucreQty * sucrePrice;
  const totalCost = costMangue + costSucre;
  const unitCost = producedUnits > 0 ? Math.round(totalCost / producedUnits) : 0;
  const recommendedPrice = Math.round(unitCost * marginCoef);

  const screens = [
    {
      id: 'scanner' as ScreenKey,
      title: '01. Identification Photo',
      subtitle: 'Scanner intelligent et fiche matière première',
      icon: Camera,
    },
    {
      id: 'products' as ScreenKey,
      title: '02. Produits Dérivés',
      subtitle: '3 fiches gratuites + catalogue Premium',
      icon: Layers,
    },
    {
      id: 'fabrication' as ScreenKey,
      title: '03. Fiche & Diagramme',
      subtitle: 'Diagramme réel en 9 étapes (Freemium)',
      icon: Boxes,
    },
    {
      id: 'formation' as ScreenKey,
      title: '04. Modules & Quiz',
      subtitle: '1 point = 1 500 FCFA (Wave & OM)',
      icon: GraduationCap,
    },
    {
      id: 'calculator' as ScreenKey,
      title: '05. Calcul des Coûts',
      subtitle: 'Gestion des intrants et prix de vente',
      icon: Calculator,
    },
    {
      id: 'commercialisation' as ScreenKey,
      title: '06. Commercialisation',
      subtitle: 'Emballages PET 1L et 5 circuits de vente',
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="demo-interactive" className="py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F0FDF4]/40 text-[#0A192F] relative overflow-hidden border-y border-slate-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section lumineux */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] text-xs font-bold mb-4 shadow-2xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>Écrans réels de l'application</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight">
            Explorez l'expérience mobile VALORA
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Chaque écran reproduit fidèlement l'interface de l'application : de la détection de la matière première au champ jusqu'à la rentabilité chiffrée de votre projet.
          </p>
        </div>

        {/* Grille de sélection des écrans (Segmented tabs responsives) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10 sm:mb-12">
          {screens.map((s) => {
            const Icon = s.icon;
            const isActive = activeScreen === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveScreen(s.id)}
                className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 flex flex-col gap-1.5 sm:gap-2 border cursor-pointer ${
                  isActive
                    ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#4ADE80]' : 'text-[#2E7D32]'}`} />
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                    Vue
                  </span>
                </div>
                <div className="font-bold text-xs leading-snug">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Présentation Smartphone Lumineux & Panneau explicatif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* SMARTPHONE MOBILE HAUTE FIDÉLITÉ (TOUS ÉCRANS) */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-[#0A192F] rounded-[44px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl border-[5px] sm:border-[6px] border-[#0A192F] ring-1 ring-slate-900/10 relative">
              
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end pr-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60"></div>
              </div>

              {/* Écran smartphone blanc pur ultra-lisible */}
              <div className="w-full bg-[#FFFFFF] rounded-[34px] sm:rounded-[38px] overflow-hidden min-h-[580px] max-h-[640px] flex flex-col text-slate-900 text-xs border border-slate-200 select-none">
                
                {/* Barre système */}
                <div className="h-7 bg-white px-5 sm:px-6 pt-2 flex justify-between items-center text-[10px] text-slate-500 font-semibold shrink-0">
                  <span>16:50</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono">4G</span>
                    <span className="font-mono">100%</span>
                  </div>
                </div>

                {/* Header d'application */}
                <div className="px-4 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <img src={valoraLogoImg} alt="Logo VALORA ÉPICES'SN" className="w-6 h-6 object-contain drop-shadow-2xs" />
                    <span className="font-black text-[#0A192F] text-xs tracking-tight">VALORA</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#2E7D32] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    ÉPICES'SN
                  </span>
                </div>

                {/* CORPS DE L'ÉCRAN ACTIF */}
                <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3 bg-slate-50/50">
                  
                  {/* --- VUE 1 : SCANNER ET IDENTIFICATION --- */}
                  {activeScreen === 'scanner' && (
                    <div className="space-y-3 animate-fade-in text-left">
                      <div>
                        <h4 className="font-extrabold text-sm text-[#0A192F]">Identifier la matière première</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Prenez une photo de votre matière première pour découvrir les produits réalisables.
                        </p>
                      </div>

                      {/* Cadre caméra avec coins de cadrage */}
                      <div className="relative aspect-square max-w-[220px] mx-auto rounded-2xl bg-[#081426] overflow-hidden flex items-center justify-center border-2 border-dashed border-[#2E7D32]">
                        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#4ADE80]"></div>
                        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#4ADE80]"></div>
                        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#4ADE80]"></div>
                        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#4ADE80]"></div>

                        <div className="text-center p-3">
                          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-yellow-300 shadow-md flex items-center justify-center text-white mb-2">
                            <Package className="w-9 h-9" />
                          </div>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded-full">
                            Mangue détectée
                          </span>
                        </div>
                      </div>

                      {/* Boutons réels Galerie & Conseils */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center font-bold text-[11px] text-slate-700 flex items-center justify-center gap-1.5 shadow-2xs">
                          <ImageIcon className="w-4 h-4 text-[#2E7D32]" />
                          <span>Galerie</span>
                        </div>
                        <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center font-bold text-[11px] text-slate-700 flex items-center justify-center gap-1.5 shadow-2xs">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span>Conseils</span>
                        </div>
                      </div>

                      {/* Fiche résultat */}
                      <div className="p-3.5 bg-white rounded-2xl border border-emerald-200 shadow-2xs space-y-2 text-left">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#2E7D32] flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                          <div>
                            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Matière première identifiée</div>
                            <div className="font-black text-sm text-[#0A192F]">Mangue <span className="font-normal italic text-slate-500 text-[11px]">(Mangifera indica)</span></div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[10px] text-slate-600">
                          <p className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>Riche en vitamine C, provitamine A et fibres alimentaires.</span>
                          </p>
                          <p className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>Période de pleine récolte : <strong>décembre à mai</strong>.</span>
                          </p>
                          <p className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>Apporte de puissants antioxydants protecteurs.</span>
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveScreen('products')}
                          className="w-full mt-2 py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white font-bold rounded-xl text-center transition-colors shadow-xs"
                        >
                          Voir les 6 produits possibles
                        </button>
                      </div>
                    </div>
                  )}

                  {/* --- VUE 2 : PRODUITS DÉRIVÉS --- */}
                  {/* --- VUE 2 : PRODUITS DÉRIVÉS (FREEMIUM 3 GRATUITS & PREMIUM) --- */}
                  {activeScreen === 'products' && (
                    <div className="space-y-2.5 animate-fade-in text-left">
                      <div className="flex items-center justify-between">
                        <h4 className="font-extrabold text-sm text-[#0A192F]">Produits recommandés</h4>
                        <span className="text-[10px] text-[#2E7D32] font-bold bg-emerald-50 px-2 py-0.5 rounded-md">Mangue</span>
                      </div>
                      
                      {/* Bannière Freemium */}
                      <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-200 text-[10px] text-emerald-900 flex items-center justify-between">
                        <span className="font-bold">Formule Freemium : 3 diagrammes offerts</span>
                        <span className="text-[9px] bg-[#2E7D32] text-white font-black px-1.5 py-0.5 rounded">3/3 Gratuits</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-0.5">
                        {[
                          { name: 'Jus de mangue', icon: Package, time: '9 étapes', isFree: true, badge: 'Gratuit (1/3)' },
                          { name: 'Confiture de mangue', icon: Boxes, time: 'Cuisson contrôlée', isFree: true, badge: 'Gratuit (2/3)' },
                          { name: 'Mangue séchée', icon: Layers, time: 'Séchage solaire', isFree: true, badge: 'Gratuit (3/3)' },
                          { name: 'Purée de mangue', icon: Filter, time: 'Pulpage & tamis', isFree: false, badge: 'Premium' },
                          { name: 'Nectar de mangue', icon: Package, time: 'Pasteurisé', isFree: false, badge: 'Premium' },
                          { name: 'Poudre de mangue', icon: Sparkles, time: 'Broyage fin', isFree: false, badge: 'Premium' },
                        ].map((p, idx) => {
                          const IconComp = p.icon;
                          return (
                            <div
                              key={idx}
                              onClick={() => setActiveScreen('fabrication')}
                              className={`p-2.5 bg-white rounded-2xl border transition-all shadow-2xs hover:shadow-xs group cursor-pointer relative ${
                                p.isFree ? 'border-slate-200 hover:border-[#2E7D32]' : 'border-amber-200/80 bg-amber-50/20'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                                  p.isFree ? 'bg-emerald-50 text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white' : 'bg-amber-100 text-amber-800'
                                }`}>
                                  <IconComp className="w-3.5 h-3.5" />
                                </div>
                                <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full ${
                                  p.isFree ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900 flex items-center gap-0.5'
                                }`}>
                                  {!p.isFree && <Lock className="w-2.5 h-2.5 text-amber-700" />}
                                  {p.badge}
                                </span>
                              </div>
                              <div className="font-bold text-xs text-slate-800 group-hover:text-[#2E7D32] leading-snug">
                                {p.name}
                              </div>
                              <div className="text-[10px] text-slate-400 mt-0.5">
                                {p.time}
                              </div>
                              <div className="mt-2 text-[9px] font-bold text-[#2E7D32] flex items-center justify-between">
                                <span>{p.isFree ? 'Voir diagramme' : 'Débloquer'}</span>
                                <ChevronRight className="w-3 h-3" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* --- VUE 3 : FICHE TECHNIQUE & DIAGRAMME RÉEL (CONFORME CAPTURE CLIENT) --- */}
                  {activeScreen === 'fabrication' && (
                    <div className="space-y-2.5 animate-fade-in text-left">
                      {/* Barre supérieure avec flèche retour et titre */}
                      <div className="flex items-center justify-between pb-1">
                        <button
                          type="button"
                          onClick={() => setActiveScreen('products')}
                          className="inline-flex items-center gap-1.5 text-slate-800 hover:text-[#2E7D32] transition-colors cursor-pointer"
                        >
                          <span className="text-sm font-black">←</span>
                          <h4 className="font-black text-sm text-[#0A192F]">Jus de mangue</h4>
                        </button>
                        <span className="text-[9px] font-extrabold text-[#2E7D32] bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                          Gratuit (1/3)
                        </span>
                      </div>

                      {/* 3 Onglets réels du client avec souligné vert */}
                      <div className="flex items-center justify-between border-b border-slate-200 text-xs font-bold px-1">
                        <button
                          type="button"
                          onClick={() => setFabTab('diagramme')}
                          className={`pb-2 transition-all cursor-pointer ${
                            fabTab === 'diagramme'
                              ? 'text-[#2E7D32] font-black border-b-2 border-[#2E7D32]'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          Fabrication
                        </button>
                        <button
                          type="button"
                          onClick={() => setFabTab('parametres')}
                          className={`pb-2 transition-all cursor-pointer ${
                            fabTab === 'parametres'
                              ? 'text-[#2E7D32] font-black border-b-2 border-[#2E7D32]'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          Paramètres
                        </button>
                        <button
                          type="button"
                          onClick={() => setFabTab('conservation')}
                          className={`pb-2 transition-all cursor-pointer ${
                            fabTab === 'conservation'
                              ? 'text-[#2E7D32] font-black border-b-2 border-[#2E7D32]'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          Conservation
                        </button>
                      </div>

                      {/* Sous-contenu 1 : Diagramme de fabrication réel (Copie exacte capture WhatsApp) */}
                      {fabTab === 'diagramme' && (
                        <div className="space-y-1.5 pt-0.5">
                          <div className="flex items-center justify-between">
                            <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight">
                              Diagramme de fabrication
                            </h5>
                            <span className="text-[9px] font-bold text-[#2E7D32] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">
                              Standard BPH
                            </span>
                          </div>

                          {/* Liste verticale des cartes à bordure verte avec flèches ↓ exactes */}
                          <div className="space-y-1 max-h-[350px] overflow-y-auto pr-1 py-1">
                            {[
                              'Réception des mangues',
                              'Tri et lavage',
                              'Épluchage et découpe',
                              'Extraction / Pulpage',
                              'Filtration',
                              'Pasteurisation (95°C)',
                              'Conditionnement',
                              'Refroidissement',
                              'Étiquetage et stockage'
                            ].map((step, idx, arr) => (
                              <React.Fragment key={idx}>
                                <div className="w-full py-2 px-3 rounded-2xl bg-white border-2 border-[#2E7D32] shadow-2xs text-center font-bold text-xs text-slate-800 hover:bg-emerald-50/20 transition-colors">
                                  {step}
                                </div>
                                {idx < arr.length - 1 && (
                                  <div className="flex justify-center py-0.5">
                                    <ArrowDown className="w-3.5 h-3.5 text-[#2E7D32] stroke-[2.5]" />
                                  </div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>

                          <div className="p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-[10px] text-slate-600 text-center">
                            <strong className="text-slate-800">Modèle Freemium :</strong> 3 premiers diagrammes offerts à l'inscription, formule Premium pour l'ensemble du catalogue.
                          </div>
                        </div>
                      )}

                      {/* Sous-contenu 2 : Paramètres */}
                      {fabTab === 'parametres' && (
                        <div className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-3 text-[11px]">
                          <div className="flex items-start gap-2.5">
                            <Thermometer className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 text-[10px] block font-semibold uppercase">Température de pasteurisation</span>
                              <strong className="text-[#0A192F] text-xs">95 °C</strong>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <Hourglass className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 text-[10px] block font-semibold uppercase">Durée de pasteurisation</span>
                              <strong className="text-[#0A192F] text-xs">2 à 3 minutes</strong>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <Filter className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 text-[10px] block font-semibold uppercase">Filtration</span>
                              <strong className="text-[#0A192F] text-xs">Tamis fin, retrait des fibres</strong>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <Package className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 text-[10px] block font-semibold uppercase">Conditionnement</span>
                              <strong className="text-[#0A192F] text-xs">Bouteille PET 1L, remplissage à chaud</strong>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Sous-contenu 3 : Conservation */}
                      {fabTab === 'conservation' && (
                        <div className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-2.5 text-[11px] text-slate-700">
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>À conserver à l'abri de la lumière et de la chaleur excessive.</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>Bouteille fermée : plusieurs mois à température ambiante.</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>Après ouverture : à conserver au frais et consommer rapidement.</span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* --- VUE 4 : FORMATION & QUIZ (1 POINT = 1 500 FCFA) --- */}
                  {activeScreen === 'formation' && (
                    <div className="space-y-2.5 animate-fade-in text-left">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-[#2E7D32] uppercase">Filière certifiée</span>
                          <h4 className="font-extrabold text-sm text-[#0A192F]">Jus de mangue</h4>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full font-black">
                          <Coins className="w-3 h-3 text-amber-700" />
                          1 point = 1 500 FCFA
                        </span>
                      </div>

                      {/* Bannière Recharge Wave / Orange Money */}
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-950 flex items-center justify-between">
                        <span>Recharge directe par <strong>Wave / OM</strong></span>
                        <span className="font-bold text-[#2E7D32]">1 pt = 1 module</span>
                      </div>

                      {/* 4 Onglets réels */}
                      <div className="grid grid-cols-4 rounded-xl bg-slate-200/70 p-1 text-[10px] font-bold text-slate-600 text-center">
                        {(['modules', 'video', 'documents', 'quiz'] as const).map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormationTab(t)}
                            className={`py-1.5 rounded-lg capitalize transition-colors ${formationTab === t ? 'bg-white text-[#2E7D32] shadow-2xs' : ''}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      {formationTab === 'modules' && (
                        <div className="space-y-1.5">
                          {[
                            { title: '1. Introduction à la transformation', dur: '10 min', cost: 'Inclus (0 pt)' },
                            { title: '2. Bonnes pratiques d’hygiène', dur: '12 min', cost: '1 pt (1 500 F)' },
                            { title: '3. Extraction et pasteurisation', dur: '15 min', cost: '1 pt (1 500 F)' },
                            { title: '4. Conditionnement et étiquetage', dur: '8 min', cost: '1 pt (1 500 F)' },
                            { title: '5. Gestion qualité et conservation', dur: '10 min', cost: '1 pt (1 500 F)' },
                          ].map((m, idx) => (
                            <div key={idx} className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                              <div className="min-w-0 pr-2">
                                <span className="font-semibold text-slate-800 block truncate">{m.title}</span>
                                <span className="text-[9px] text-slate-400 font-mono">{m.dur}</span>
                              </div>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                                idx === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                              }`}>
                                {m.cost}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {formationTab === 'video' && (
                        <div className="p-3 bg-white rounded-2xl border border-slate-200 text-center space-y-2">
                          <div className="aspect-video bg-[#0A192F] rounded-xl flex items-center justify-center text-white relative">
                            <div className="text-center p-3">
                              <div className="w-10 h-10 rounded-full bg-[#2E7D32] flex items-center justify-center mx-auto mb-1.5 shadow-md">
                                <Play className="w-5 h-5 ml-0.5 text-white" />
                              </div>
                              <span className="text-[10px] text-slate-300 font-medium">Atelier pratique de transformation</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-500 block">Démonstration en laboratoire pilote par ÉPICES'SN.</span>
                        </div>
                      )}

                      {formationTab === 'documents' && (
                        <div className="p-3 bg-white rounded-2xl border border-slate-200 space-y-2">
                          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            <FileText className="w-5 h-5 text-[#2E7D32] shrink-0" />
                            <div className="text-left">
                              <div className="font-bold text-[11px] text-slate-900">Cours normes hygiène.pptx</div>
                              <div className="text-[9px] text-slate-400">Support officiel du centre de formation ÉPICES'SN</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {formationTab === 'quiz' && (
                        <div className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-2.5 text-left">
                          <div className="text-[10px] font-bold text-[#2E7D32] uppercase">Question 1 sur 10</div>
                          <div className="font-extrabold text-xs text-slate-900 leading-snug">
                            Quel est le premier outil de travail en contact direct avec les denrées alimentaires ?
                          </div>
                          <div className="space-y-1.5 pt-1">
                            {[
                              { label: 'Les mains', correct: true },
                              { label: 'Les gants', correct: false },
                              { label: 'Le masque', correct: false },
                              { label: 'La coiffe', correct: false },
                            ].map((opt, idx) => {
                              const isSelected = quizAnswer === idx;
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setQuizAnswer(idx)}
                                  className={`w-full p-2.5 rounded-xl text-left text-[11px] font-semibold border transition-colors flex items-center justify-between ${
                                    isSelected
                                      ? opt.correct
                                        ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                                        : 'bg-red-50 border-red-300 text-red-800'
                                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                  }`}
                                >
                                  <span>{opt.label}</span>
                                  {isSelected && opt.correct && <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />}
                                </button>
                              );
                            })}
                          </div>
                          {quizAnswer === 0 && (
                            <p className="text-[10px] text-emerald-700 bg-emerald-50 p-2 rounded-lg font-medium">
                              Exact. L'hygiène des mains est le point de contrôle sanitaire numéro un.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* --- VUE 5 : CALCULATEUR DE COÛTS (MES PROJETS) --- */}
                  {activeScreen === 'calculator' && (
                    <div className="space-y-3 animate-fade-in text-left">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-[#2E7D32] uppercase">Mes projets</span>
                          <h4 className="font-extrabold text-sm text-[#0A192F]">Calculateur de rentabilité</h4>
                        </div>
                      </div>

                      {/* Intrants réels */}
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 space-y-2.5">
                        <div className="text-[11px] font-bold text-slate-800">Intrants déclarés :</div>
                        
                        <div className="grid grid-cols-3 gap-2 text-[10px]">
                          <div>
                            <span className="text-slate-400 block font-medium">Mangues (kg)</span>
                            <input
                              type="number"
                              value={mangueQty}
                              onChange={(e) => setMangueQty(Number(e.target.value) || 0)}
                              className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-900"
                            />
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Prix unitaire</span>
                            <input
                              type="number"
                              value={manguePrice}
                              onChange={(e) => setManguePrice(Number(e.target.value) || 0)}
                              className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-900"
                            />
                          </div>
                          <div className="text-right">
                            <span className="text-slate-400 block font-medium">Total FCFA</span>
                            <div className="font-bold text-[#0A192F] pt-1.5">
                              {costMangue.toLocaleString('fr-FR')}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-[10px] pt-2 border-t border-slate-100">
                          <div>
                            <span className="text-slate-400 block font-medium">Sucre (kg)</span>
                            <input
                              type="number"
                              value={sucreQty}
                              onChange={(e) => setSucreQty(Number(e.target.value) || 0)}
                              className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-900"
                            />
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Prix unitaire</span>
                            <input
                              type="number"
                              value={sucrePrice}
                              onChange={(e) => setSucrePrice(Number(e.target.value) || 0)}
                              className="w-full p-1.5 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-900"
                            />
                          </div>
                          <div className="text-right">
                            <span className="text-slate-400 block font-medium">Total FCFA</span>
                            <div className="font-bold text-[#0A192F] pt-1.5">
                              {costSucre.toLocaleString('fr-FR')}
                            </div>
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-slate-200 flex justify-between font-extrabold text-xs text-slate-900">
                          <span>Coût de production total :</span>
                          <span className="text-[#2E7D32]">{totalCost.toLocaleString('fr-FR')} FCFA</span>
                        </div>
                      </div>

                      {/* Résultat et prix de vente conseillé */}
                      <div className="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-2 text-[11px]">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 font-medium">Production obtenue :</span>
                          <span className="font-extrabold text-slate-900">{producedUnits} bouteilles</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 font-medium">Coefficient de marge :</span>
                          <span className="font-bold text-slate-900">x {marginCoef}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-500 pt-1.5 border-t border-emerald-100">
                          <span>Prix de revient unitaire :</span>
                          <span className="font-bold text-slate-700">{unitCost.toLocaleString('fr-FR')} FCFA</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-emerald-200 font-black text-xs text-[#0A192F]">
                          <span>Prix de vente conseillé :</span>
                          <span className="text-[#2E7D32] text-sm">{recommendedPrice.toLocaleString('fr-FR')} FCFA</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsSaved(true)}
                        className="w-full py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white font-bold rounded-xl text-center transition-colors shadow-xs"
                      >
                        {isSaved ? 'Enregistré dans le Profil' : 'Enregistrer le projet'}
                      </button>
                    </div>
                  )}

                  {/* --- VUE 6 : COMMERCIALISATION --- */}
                  {activeScreen === 'commercialisation' && (
                    <div className="space-y-3 animate-fade-in text-left">
                      <div>
                        <span className="text-[10px] font-bold text-[#2E7D32] uppercase">Mise en marché</span>
                        <h4 className="font-extrabold text-sm text-[#0A192F]">Emballage et distribution</h4>
                      </div>

                      <div className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-2 text-[11px]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#2E7D32] flex items-center justify-center shrink-0">
                            <Package className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-extrabold text-xs text-slate-900">Bouteille PET 1 Litre</div>
                            <div className="text-[10px] text-slate-400">Format standard certifié</div>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[10px] text-slate-600">
                          <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#2E7D32]" /> <span>Sécurisé et étanche</span></div>
                          <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#2E7D32]" /> <span>Recyclable et économique</span></div>
                          <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#2E7D32]" /> <span>Format apprécié sur les marchés locaux</span></div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold text-slate-800">5 circuits identifiés :</div>
                        {[
                          { title: 'Vente directe', desc: 'Ateliers et marchés de quartier', icon: Store },
                          { title: 'Boutiques et épiceries', desc: 'Commerces de proximité', icon: Building2 },
                          { title: 'Supermarchés', desc: 'Réseaux de grande distribution', icon: ShoppingBag },
                          { title: 'Hôtels et restauration', desc: 'Secteur réceptif de Casamance', icon: Utensils },
                          { title: 'Vente en ligne', desc: 'Commandes via plateformes partenaires', icon: Globe },
                        ].map((c, idx) => {
                          const IconComp = c.icon;
                          return (
                            <div key={idx} className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5 text-[11px] shadow-2xs">
                              <IconComp className="w-4 h-4 text-[#2E7D32] mt-0.5 shrink-0" />
                              <div>
                                <strong className="text-slate-900 block font-bold">{c.title}</strong>
                                <span className="text-[10px] text-slate-500 leading-tight block">{c.desc}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>

                {/* Barre de navigation inférieure */}
                <div className="h-14 bg-white border-t border-slate-200 px-6 flex items-center justify-around text-[9px] font-bold text-slate-500 shrink-0">
                  <div 
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeScreen === 'scanner' ? 'text-[#2E7D32]' : 'text-slate-400'}`} 
                    onClick={() => setActiveScreen('scanner')}
                  >
                    <Home className="w-4 h-4" />
                    <span>Accueil</span>
                  </div>
                  <div 
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeScreen === 'formation' ? 'text-[#2E7D32]' : 'text-slate-400'}`} 
                    onClick={() => setActiveScreen('formation')}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Formations</span>
                  </div>
                  <div 
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeScreen === 'calculator' || activeScreen === 'commercialisation' ? 'text-[#2E7D32]' : 'text-slate-400'}`} 
                    onClick={() => setActiveScreen('calculator')}
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Mes projets</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400">
                    <User className="w-4 h-4" />
                    <span>Profil</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* COLONNE DROITE : EXPLICATION TECHNIQUE & MÉTIER (STYLE LUMINEUX HAUTE LISIBILITÉ) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-7 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
                Fonctionnalité active
              </span>

              {activeScreen === 'scanner' && (
                <>
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    Identification par analyse visuelle
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Détection instantanée au champ des récoltes locales (mangue, anacarde, piment, agrumes) avec indexation botanique et saisonnalité.
                  </p>
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Reconnaissance de l'espèce et de son appellation botanique</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Recommandation automatique des filières de valorisation</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Accessible directement hors connexion internet</span>
                    </div>
                  </div>
                </>
              )}

              {activeScreen === 'products' && (
                <>
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    Filières locales & Modèle Freemium
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vos 3 premiers diagrammes de fabrication sont 100% gratuits à l'inscription (Freemium). Débloquez ensuite l'ensemble du catalogue avec l'accès Premium.
                  </p>
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>3 fiches complètes offertes (ex: Jus, Confiture, Mangue séchée)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Formule Premium pour débloquer purées, nectars, poudres et autres filières</span>
                    </div>
                  </div>
                </>
              )}

              {activeScreen === 'fabrication' && (
                <>
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    Diagramme réel en 9 étapes (Freemium)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Reproduction exacte de l'écran réel de l'application : 9 étapes séquentielles standardisées BPH et paramètres de pasteurisation à 95°C.
                  </p>
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>3 fiches et diagrammes complets 100% gratuits à l'inscription</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Paramètres thermiques stricts : 95 °C pendant 2 à 3 minutes</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Conditionnement à chaud et conservation testée en Casamance</span>
                    </div>
                  </div>
                </>
              )}

              {activeScreen === 'formation' && (
                <>
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    Formation certifiante (1 point = 1 500 FCFA)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Un système de points simple et transparent pour se former : 1 point coûte exactement 1 500 FCFA (paiement Wave & Orange Money) et débloque un module complet avec vidéo, support de cours et quiz officiel.
                  </p>
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Tarif solidaire : 1 500 FCFA par module certifiant</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Vidéos pratiques issues d'ateliers réels en Casamance</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Quiz en 10 questions avec attestation de validation BPH</span>
                    </div>
                  </div>
                </>
              )}

              {activeScreen === 'calculator' && (
                <>
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    Simulateur de rentabilité financière
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Saisie des intrants réels et calcul instantané du coût de revient et du prix de vente conseillé avec application d'un coefficient de marge.
                  </p>
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Exemple : 43 800 FCFA pour 20 bouteilles (prix de revient 2 190 FCFA)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Prix de vente recommandé avec marge 1.5x : 3 285 FCFA</span>
                    </div>
                  </div>
                </>
              )}

              {activeScreen === 'commercialisation' && (
                <>
                  <h3 className="text-2xl font-black text-[#0A192F] tracking-tight">
                    5 circuits de distribution structurés
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Identification des débouchés commerciaux adaptés à chaque filière (vente directe, boutiques, supermarchés, réceptifs hôteliers et digital).
                  </p>
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Recommandation de conditionnement sécurisé et recyclable</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Orientation des flux vers les marchés les plus rémunérateurs</span>
                    </div>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Testé en Casamance</span>
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = screens.findIndex((s) => s.id === activeScreen);
                    const nextIndex = (currentIndex + 1) % screens.length;
                    setActiveScreen(screens[nextIndex].id);
                  }}
                  className="font-bold text-[#2E7D32] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Fonctionnalité suivante</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
