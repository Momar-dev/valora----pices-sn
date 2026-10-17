import React, { useState } from 'react';
import { 
  Camera, 
  Layers, 
  GraduationCap, 
  Calculator, 
  ShoppingBag, 
  CheckCircle2, 
  Check,
  ArrowRight, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles,
  TrendingUp,
  Download,
  Package,
  Boxes,
  Award,
  Store,
  Building2,
  Utensils,
  Globe,
  Sliders,
  ExternalLink,
  Users,
  Sprout,
  HeartHandshake,
  Quote,
  Star,
  Send,
  MessageSquare,
  MapPin,
  Lock,
  Coins,
  Plus
} from 'lucide-react';
import { ValoraLogo, valoraLogoImg } from './components/ValoraLogo';
import { DownloadButtons } from './components/DownloadButtons';
import { AppScreensShowcase } from './components/AppScreensShowcase';
import { OFFICIAL_CONTACT } from './config/downloadLinks';

/**
 * Icône officielle vectorielle TikTok (Seul réseau social officiel de ALPHA VALORA)
 */
const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Formulaire de contact officiel (3 champs) connecté à Web3Forms (valoraappli@gmail.com)
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSubmitting(true);
    setContactError('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '0aa5673d-9774-4c27-a6d9-4be21b47d1d3');
    formData.append('subject', 'Nouveau message reçu depuis le site valoraepicesn.com');
    formData.append('from_name', 'Formulaire de Contact ALPHA VALORA');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setContactSubmitted(true);
        form.reset();
      } else {
        setContactError(data.message || 'Une erreur est survenue lors de l\'envoi.');
      }
    } catch {
      setContactError('Erreur de connexion. Veuillez vérifier votre connexion et réessayer.');
    } finally {
      setContactSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A192F] font-sans flex flex-col selection:bg-[#2E7D32] selection:text-white overflow-x-hidden">
      
      {/* ============================================================
          1. EN-TÊTE / NAVIGATION LUMINEUSE (TOP BAR CONTRACT 2026)
      ============================================================ */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
            
            {/* Zone 1: Brand Mark officiel ALPHA VALORA ÉPICES'SN */}
            <a 
              href="#" 
              className="flex items-center gap-3 sm:gap-3.5 group shrink-0 focus:outline-none"
              aria-label="ALPHA VALORA ÉPICES'SN Accueil"
            >
              <ValoraLogo 
                variant="badge" 
                size={54} 
                className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105" 
              />
              <div className="flex flex-col text-left">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-black tracking-tight text-lg sm:text-xl text-[#0A192F] font-sans">
                    ALPHA VALORA
                  </span>
                  <span className="text-xs font-bold tracking-wider text-[#2E7D32]">
                    ÉPICES'SN
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#D97736] tracking-wide hidden sm:block">
                  Valoriser. Transformer. Entreprendre.
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Textes nets, sans tirets, sans capsules) */}
            <nav className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-slate-600">
              <button 
                type="button" 
                onClick={() => scrollToSection('proposition')} 
                className="hover:text-[#2E7D32] transition-colors whitespace-nowrap cursor-pointer"
              >
                Proposition
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('etapes')} 
                className="hover:text-[#2E7D32] transition-colors whitespace-nowrap cursor-pointer"
              >
                Parcours
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('demo-interactive')} 
                className="hover:text-[#2E7D32] transition-colors whitespace-nowrap cursor-pointer"
              >
                Écrans Réels
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('formation')} 
                className="hover:text-[#2E7D32] transition-colors whitespace-nowrap cursor-pointer"
              >
                Formation
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('calculateur')} 
                className="hover:text-[#2E7D32] transition-colors whitespace-nowrap cursor-pointer"
              >
                Rentabilité
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('tarifs')} 
                className="hover:text-[#2E7D32] transition-colors whitespace-nowrap cursor-pointer"
              >
                Tarifs
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-[#2E7D32] transition-colors whitespace-nowrap cursor-pointer text-[#2E7D32] font-bold"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: CTA Téléchargement & TikTok officiel */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <a
                href={OFFICIAL_CONTACT.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:text-black bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
                title="Compte TikTok officiel ALPHA VALORA ÉPICES'SN"
              >
                <TikTokIcon className="w-4 h-4 text-black" />
                <span className="hidden md:inline">{OFFICIAL_CONTACT.tiktokHandle}</span>
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('telecharger')}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2E7D32] hover:bg-[#256629] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger</span>
              </button>
            </div>

            {/* Bouton Menu Mobile */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#2E7D32] rounded-lg focus:outline-none"
                aria-label="Ouvrir le menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Menu Mobile Responsive */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <button
              type="button"
              onClick={() => scrollToSection('proposition')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#2E7D32]"
            >
              Proposition de valeur
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('etapes')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#2E7D32]"
            >
              Parcours en 4 étapes
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('demo-interactive')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#2E7D32]"
            >
              Écrans réels de l'application
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('formation')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#2E7D32]"
            >
              Formation et Quiz hygiène
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('calculateur')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#2E7D32]"
            >
              Calculateur de coûts
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('tarifs')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#2E7D32]"
            >
              Modèle Freemium & Tarifs
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-sm font-bold text-[#2E7D32] hover:text-[#256629]"
            >
              Formulaire de Contact
            </button>
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <a
                href={OFFICIAL_CONTACT.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <TikTokIcon className="w-4 h-4 text-white" />
                <span>TikTok officiel : {OFFICIAL_CONTACT.tiktokHandle}</span>
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('telecharger')}
                className="w-full py-3 bg-[#2E7D32] text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger sur Android et iPhone</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================
          2. HERO SECTION LUMINEUSE & PREMIUM (LUMIÈRE DE JOUR)
      ============================================================ */}
      <section className="relative pt-7 sm:pt-14 pb-14 sm:pb-24 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]/60 border-b border-slate-200 overflow-hidden">
        
        {/* Halos subtils d'ambiance agricole */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[350px] h-[250px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Colonne Gauche : Pitch & Boutons Officiels */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              
              {/* Badge d'identité officielle */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xs max-w-full mx-auto sm:mx-0">
                <ValoraLogo variant="badge" size={34} className="shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-black text-xs sm:text-sm text-[#0A192F] tracking-tight">
                    ALPHA VALORA ÉPICES'SN
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#D97736]">
                    Valoriser. Transformer. Entreprendre.
                  </span>
                </div>
              </div>

              {/* Titre Principal très clair et lisible */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0A192F] tracking-tight leading-[1.18] sm:leading-[1.12]">
                Valorisez vos récoltes locales en produits finis rentables
              </h1>

              {/* Texte explicatif concis et fidèle */}
              <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto sm:mx-0">
                Dédiée aux <strong className="text-slate-900">femmes et jeunes entrepreneurs agroalimentaires</strong>, ALPHA VALORA combine l'identification par photo des récoltes, les fiches techniques de fabrication standardisées et le calcul précis des coûts et marges de production.
              </p>

              {/* Vrais Boutons de téléchargement Google Play et App Store avec ombre portée */}
              <div className="pt-1 sm:pt-2 space-y-2 sm:space-y-3 flex flex-col items-center sm:items-start w-full">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center sm:text-left">
                  Télécharger sur les plateformes officielles :
                </div>
                <DownloadButtons 
                  theme="dark" 
                  className="w-full justify-center sm:justify-start"
                  onExploreDemo={() => scrollToSection('demo-interactive')} 
                />
              </div>

              {/* Piliers de confiance : Scan Photo, 3 Gratuits (Freemium), 1500 FCFA Formation */}
              <div className="pt-4 sm:pt-6 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left w-full">
                <div className="p-2 sm:p-0 rounded-xl bg-slate-100/70 sm:bg-transparent text-center sm:text-left flex flex-col items-center sm:items-start">
                  <div className="font-black text-sm sm:text-xl text-[#0A192F]">Scan Photo</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-tight">Reconnaissance locale</div>
                </div>
                <div className="p-2 sm:p-0 rounded-xl bg-slate-100/70 sm:bg-transparent text-center sm:text-left flex flex-col items-center sm:items-start">
                  <div className="font-black text-sm sm:text-xl text-[#2E7D32]">3 Gratuits</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-tight">Diagrammes Freemium</div>
                </div>
                <div className="p-2 sm:p-0 rounded-xl bg-slate-100/70 sm:bg-transparent text-center sm:text-left flex flex-col items-center sm:items-start">
                  <div className="font-black text-sm sm:text-xl text-[#D97736]">1 500 FCFA</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-tight">1 point = 1 module</div>
                </div>
              </div>

            </div>

            {/* Colonne Droite : Portrait authentique de l'entrepreneure & Accès direct Démo */}
            <div className="lg:col-span-5 flex justify-center w-full mt-2 lg:mt-0">
              <div className="relative w-full max-w-[420px] rounded-[28px] sm:rounded-[42px] overflow-hidden shadow-xl sm:shadow-2xl border-4 border-white bg-slate-900 group">
                <img 
                  src="/images/hero-entrepreneur.jpg" 
                  alt="Transformatrice agroalimentaire ALPHA VALORA ÉPICES'SN en Casamance" 
                  className="w-full h-72 sm:h-96 lg:h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge Flottant Haut Droite */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-[#0A192F]">Casamance & Sénégal</span>
                </div>

                {/* Bloc d'action Bas */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-2 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="font-black text-xs sm:text-sm text-[#0A192F] tracking-tight">
                        ALPHA VALORA ÉPICES'SN
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-[#2E7D32] leading-tight">
                        Valoriser · Transformer · Entreprendre
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200/60 shadow-2xs">
                      Sur le terrain
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToSection('demo-interactive')}
                    className="w-full py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white font-bold rounded-xl text-[11px] sm:text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Tester la démo des 4 écrans réels</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* LES 4 PILIERS ALPHA VALORA (STYLE ÉPURÉ DU SITE OFFICIEL) */}
          <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left flex flex-col items-center sm:items-start space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2E7D32] flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[#0A192F]">Valorisation locale</h3>
              <p className="text-xs text-slate-500 leading-snug">Matières premières agricoles et produits du terroir sénégalais.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left flex flex-col items-center sm:items-start space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2E7D32] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[#0A192F]">Transformation</h3>
              <p className="text-xs text-slate-500 leading-snug">Des fiches pratiques pour standardiser vos procédés de fabrication.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left flex flex-col items-center sm:items-start space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2E7D32] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[#0A192F]">Accompagnement</h3>
              <p className="text-xs text-slate-500 leading-snug">Renforcez vos compétences et concrétisez vos projets d'atelier.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left flex flex-col items-center sm:items-start space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2E7D32] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[#0A192F]">Commercialisation</h3>
              <p className="text-xs text-slate-500 leading-snug">Maîtrisez vos coûts de revient et accédez à des débouchés fiables.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          3. PROPOSITION DE VALEUR (BENTO GRID LUMINEUSE)
      ============================================================ */}
      <section id="proposition" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
              La valeur ajoutée
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A192F] tracking-tight mt-2">
              Une réponse technologique aux défis du terrain
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              En Casamance et au Sénégal, la saisonnalité des récoltes provoque des pertes massives. ALPHA VALORA apporte les outils pour transformer chaque surplus en opportunité commerciale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Carte Bento 1 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-left space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center font-bold">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0A192F]">
                Zéro perte post-récolte
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Une photo de votre récolte révèle instantanément 6 opportunités de transformation à haute valeur ajoutée (jus, confiture, purée, mangue séchée, nectar et poudre).
              </p>
            </div>

            {/* Carte Bento 2 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-left space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0A192F]">
                Standardisation & Qualité
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modèle Freemium avec <strong>3 diagrammes de fabrication 100% gratuits</strong>, puis formule Premium. Protocoles en 9 étapes, règles de pasteurisation à 95°C et respect des Bonnes Pratiques d'Hygiène (BPH).
              </p>
            </div>

            {/* Carte Bento 3 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-left space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0A192F]">
                Rentabilité garantie
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Calculateur financier intégré : enregistrement des intrants réels, détermination du prix de revient unitaire et calcul du prix de vente recommandé avec marge bénéficiaire.
              </p>
            </div>

          </div>

          {/* BANNIÈRE IMPACT DURABLE AVEC PHOTO ARTISANALE DU TERROIR */}
          <div className="mt-14 rounded-3xl overflow-hidden bg-[#0A192F] text-white border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-5 text-left flex flex-col justify-center">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#4ADE80] bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                  À propos d'ÉPICES'SN & ALPHA VALORA
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Un projet au service d'un impact durable
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                ALPHA VALORA est née d'une conviction : les richesses de notre terroir sénégalais peuvent transformer des vies. En connectant les productrices, transformatrices et jeunes entrepreneurs, nous créons des opportunités concrètes, soutenons l'économie locale et bâtissons un modèle plus inclusif et pérenne.
              </p>
              
              {/* Les 4 compteurs clés inspirés du site officiel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#4ADE80]">+500</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Femmes accompagnées</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">+200</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Jeunes formés</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">+50</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Entreprises partenaires</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Local et durable</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-80 sm:h-96 lg:h-full min-h-[380px] lg:min-h-[460px]">
              <img 
                src="/images/harvest-artisan.jpg" 
                alt="Transformation artisanale et matières premières agricoles au Sénégal" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          4. FONCTIONNEMENT EN 4 ÉTAPES (STYLE CLAIR & NET)
      ============================================================ */}
      <section id="etapes" className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
              Parcours d'usage
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A192F] tracking-tight mt-2">
              Le fonctionnement en 4 étapes
            </h2>
            <p className="mt-2.5 text-sm text-slate-600">
              Un cheminement fluide, directement applicable sur le terrain par les groupements et coopératives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-left space-y-3.5 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-white flex items-center justify-center text-xs font-black">
                01
              </div>
              <h3 className="text-base font-bold text-[#0A192F]">
                Photographier
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prenez une photo de votre matière première au champ ou importez-la depuis votre galerie.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-left space-y-3.5 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center text-xs font-black">
                02
              </div>
              <h3 className="text-base font-bold text-[#0A192F]">
                Identifier
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                L'application identifie la variété, affiche la saisonnalité et les vertus nutritionnelles.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-left space-y-3.5 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#D97736] text-white flex items-center justify-center text-xs font-black">
                03
              </div>
              <h3 className="text-base font-bold text-[#0A192F]">
                Transformer
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                3 diagrammes offerts gratuitement (Freemium), puis accès Premium. Suivez les 9 étapes séquentielles et les paramètres 95°C.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-left space-y-3.5 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center text-xs font-black">
                04
              </div>
              <h3 className="text-base font-bold text-[#0A192F]">
                Chiffrer & Vendre
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculez vos coûts, fixez votre prix conseillé et choisissez parmi les 5 circuits de vente.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          5. DÉMONSTRATION INTERACTIVE DES ÉCRANS RÉELS
      ============================================================ */}
      <AppScreensShowcase />

      {/* ============================================================
          6. FORMATION PROFESSIONNELLE ET QUIZ D'HYGIÈNE
      ============================================================ */}
      <section id="formation" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
                Centre de formation professionnelle
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
                Une pédagogie de terrain validée pour l'entrepreneuriat
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                ALPHA VALORA intègre un parcours certifiant complet élaboré à partir du programme du centre de formation d'ÉPICES'SN :
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A192F]">5 modules progressifs par filière</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Hygiène, extraction, pasteurisation, conditionnement et gestion qualité.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A192F]">Supports officiels téléchargeables</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Fiches techniques et cours PowerPoint sur les normes sanitaires.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A192F]">Quiz interactif de conformité</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Évaluation immédiate des réflexes d'hygiène et de sécurité alimentaire.</p>
                  </div>
                </div>

                {/* Encadré officiel du modèle de tarification de la formation */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200/90 text-left space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Coins className="w-5 h-5 text-amber-700 shrink-0" />
                      <span className="font-extrabold text-xs sm:text-sm text-[#0A192F]">
                        Tarif solidaire : 1 point = 1 500 FCFA
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-slate-900 border border-amber-300 shadow-2xs">
                      <img src="/wave.jfif" alt="Wave" className="w-5 h-5 rounded-md object-contain" />
                      <img src="/orangemoney.png" alt="Orange Money" className="w-5 h-5 rounded-full object-contain" />
                      <span className="text-xs font-black">Wave & Orange Money</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chaque point débloque un module de formation certifiant complet (vidéo en atelier de Casamance, support PPTX et quiz de validation des Bonnes Pratiques d'Hygiène). Recharge simple et directe par mobile money.
                  </p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 space-y-5">
              {/* Photo atelier pratique officiel */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group">
                <img 
                  src="/images/workshop-training.jpg" 
                  alt="Session de formation en atelier de transformation agroalimentaire ÉPICES'SN" 
                  className="w-full h-72 sm:h-88 md:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Formation pratique certifiante</span>
                  <div className="font-extrabold text-base sm:text-lg">Atelier conforme aux Bonnes Pratiques d'Hygiène (BPH)</div>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#0A192F] text-white space-y-5 text-left border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-[#4ADE80]" />
                    <span className="font-bold text-sm text-white">Extrait du Quiz d'Hygiène</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">Q2 / 10</span>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Question officielle :</div>
                  <div className="text-base font-bold text-white leading-snug">
                    « Quand faut-il se laver les mains selon la procédure d'atelier ? »
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700 text-xs text-slate-300">
                      Une seule fois en début de journée
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/60 text-xs text-white font-bold flex items-center justify-between shadow-xs">
                      <span>Après chaque geste sale et avant chaque geste propre</span>
                      <Check className="w-4 h-4 text-[#4ADE80] stroke-[3]" />
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700 text-xs text-slate-300">
                      Uniquement à la sortie de l'atelier
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                  <span>Validation directe des acquis pour l'équipe de production.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          7. CALCUL DES COÛTS & RENTABILITÉ
      ============================================================ */}
      <section id="calculateur" className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
              Sécurité financière
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A192F] tracking-tight mt-2">
              Chiffrage et rentabilité de production
            </h2>
            <p className="mt-2.5 text-sm text-slate-600">
              ALPHA VALORA supprime les incertitudes en calculant automatiquement le prix de revient et la marge nette.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
            
            {/* Colonne Coûts (Optimisée responsive mobile sans collision de texte) */}
            <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5 text-[#2E7D32]" />
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-[#0A192F]">Intrants réels du marché</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Renseignez vos coûts réels d'approvisionnement :
              </p>
              
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                {/* Ligne 1 : Mangues */}
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/80">
                  <div className="flex flex-col text-left min-w-0">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">Mangues fraîches</span>
                    <span className="text-[11px] text-slate-500 font-sans">68 kg @ 600 FCFA/kg</span>
                  </div>
                  <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm whitespace-nowrap shrink-0 text-right">
                    40 800 FCFA
                  </span>
                </div>

                {/* Ligne 2 : Sucre */}
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/80">
                  <div className="flex flex-col text-left min-w-0">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">Sucre raffiné</span>
                    <span className="text-[11px] text-slate-500 font-sans">5 kg @ 600 FCFA/kg</span>
                  </div>
                  <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm whitespace-nowrap shrink-0 text-right">
                    3 000 FCFA
                  </span>
                </div>

                {/* Ligne 3 : Total Coût de production */}
                <div className="flex items-center justify-between gap-2 pt-1 text-[#2E7D32]">
                  <span className="font-extrabold text-xs sm:text-sm">Coût total de production</span>
                  <span className="font-mono font-black text-sm sm:text-base whitespace-nowrap shrink-0 text-right">
                    43 800 FCFA
                  </span>
                </div>
              </div>

              {/* Résultats / Métriques clés */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-600 font-medium">Quantité obtenue :</span>
                  <strong className="text-slate-900 font-bold whitespace-nowrap">20 bouteilles de 1 Litre</strong>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-600 font-medium">Prix de revient unitaire :</span>
                  <strong className="text-slate-900 font-mono font-bold whitespace-nowrap">2 190 FCFA</strong>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-emerald-50/90 border border-emerald-200/90">
                  <span className="text-emerald-950 font-semibold">Prix de vente recommandé (marge x1.5) :</span>
                  <strong className="text-[#2E7D32] font-mono font-black text-sm whitespace-nowrap">3 285 FCFA</strong>
                </div>
              </div>
            </div>

            {/* Colonne Débouchés */}
            <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <Store className="w-5 h-5 text-[#2E7D32]" />
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-[#0A192F]">5 débouchés commerciaux</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Orientation vers les circuits les plus adaptés :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium flex items-center gap-2.5">
                  <Store className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Vente directe atelier</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Boutiques & Épiceries</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Supermarchés</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium flex items-center gap-2.5">
                  <Utensils className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Hôtels & Restaurants</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                <strong>Conditionnement certifié :</strong> Bouteille PET 1L étanche, recyclable et économique.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          8. MODÈLE FREEMIUM & GRILLE COMPARATIVE (0 FCFA vs PREMIUM)
      ============================================================ */}
      <section id="tarifs" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
          
          {/* En-tête de section */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] text-xs font-bold mb-4">
              <Coins className="w-4 h-4" />
              <span>Modèle Freemium & Tarifs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0A192F] tracking-tight">
              Comparez nos formules d'accès
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Démarrez immédiatement sans dépenser un franc avec nos 3 diagrammes de fabrication offerts, puis faites évoluer votre atelier à votre rythme.
            </p>
          </div>

          {/* Grille comparative 2 colonnes avec connecteur central */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch relative">

            {/* CARTE 1 : FORMULE FREEMIUM (0 FCFA) */}
            <div className="p-7 sm:p-9 rounded-[32px] bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between relative">
              <div className="space-y-6">
                
                {/* Badge d'en-tête */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                    Freemium
                  </span>
                  <span className="text-xs font-bold text-slate-400">Sans engagement</span>
                </div>

                {/* Prix 0 FCFA */}
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">0 FCFA</span>
                  </div>
                  <div className="text-xs font-semibold text-[#2E7D32] mt-1">
                    Gratuit pour toujours dès l'inscription
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Idéal pour découvrir l'application, tester le scan photo et lancer vos premières productions artisanales.
                  </p>
                </div>

                {/* Liste des fonctionnalités (Incluses vs Réservées) */}
                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Ce qui est inclus gratuitement :
                  </div>
                  
                  {/* Inclus */}
                  <div className="flex items-start gap-3 text-slate-800 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>3 diagrammes de fabrication complets</strong> offerts à vie (Jus de mangue, Confiture, Mangue séchée)</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-800 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Scan photo</strong> et identification botanique des matières premières locales</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-800 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Simulateur de coûts</strong> et calcul du prix de vente conseillé de base</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-800 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Module 1 découverte</strong> de la formation pratique inclus</span>
                  </div>

                  {/* Verrouillés / Réservés Premium */}
                  <div className="pt-2 space-y-2.5 opacity-60">
                    <div className="flex items-start gap-3 text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-300">
                        <Lock className="w-3 h-3" />
                      </div>
                      <span className="line-through">Catalogue complet des dérivés (purées, nectars, poudres)</span>
                    </div>

                    <div className="flex items-start gap-3 text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-300">
                        <Lock className="w-3 h-3" />
                      </div>
                      <span className="line-through">Modules de formation certifiants (1 pt = 1 500 FCFA)</span>
                    </div>

                    <div className="flex items-start gap-3 text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-300">
                        <Lock className="w-3 h-3" />
                      </div>
                      <span className="line-through">Quiz officiel BPH et attestation de conformité</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bouton CTA Freemium */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => scrollToSection('telecharger')}
                  className="w-full py-3.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0A192F] font-black text-xs sm:text-sm text-center transition-all border border-slate-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#2E7D32]" />
                  <span>Démarrer avec les 3 diagrammes gratuits</span>
                </button>
              </div>
            </div>

            {/* CARTE 2 : FORMULE PREMIUM & FORMATION (DÈS 1 500 FCFA) */}
            <div className="p-7 sm:p-9 rounded-[32px] bg-[#0A192F] text-white border-2 border-[#2E7D32] shadow-2xl hover:shadow-emerald-950/50 transition-all text-left flex flex-col justify-between relative overflow-hidden">

              <div className="space-y-6">
                
                {/* Badge d'en-tête */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-950/80 text-[#4ADE80] border border-emerald-500/40">
                    Premium & Formation
                  </span>
                  <span className="text-xs font-bold text-slate-300">PME & Coopératives</span>
                </div>

                {/* Prix */}
                <div>
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">1 500 FCFA</span>
                    <span className="text-xs font-bold text-slate-300">/ module (1 point)</span>
                  </div>
                  <div className="text-xs font-semibold text-[#4ADE80] mt-2 flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Coins className="w-4 h-4" />
                      <span>Paiement direct :</span>
                    </span>
                    <div className="inline-flex items-center gap-2 bg-white/10 px-2.5 py-1 rounded-xl border border-white/20 shadow-xs">
                      <img src="/wave.jfif" alt="Wave" className="w-6 h-6 rounded-md object-contain" />
                      <span className="text-xs font-black text-white">Wave</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/10 px-2.5 py-1 rounded-xl border border-white/20 shadow-xs">
                      <img src="/orangemoney.png" alt="Orange Money" className="w-6 h-6 rounded-full object-contain" />
                      <span className="text-xs font-black text-white">Orange Money</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Accès complet pour standardiser vos ateliers, former vos équipes et accéder aux réseaux de distribution formels.
                  </p>
                </div>

                {/* Liste des fonctionnalités 100% débloquées */}
                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Tout le Freemium, plus :
                  </div>

                  <div className="flex items-start gap-3 text-slate-100 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Catalogue complet et illimité</strong> de tous les diagrammes (purées, nectars, poudres, piments, anacardes)</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-100 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Barèmes thermiques avancés</strong> : pasteurisation stricte 95°C et conservation testée</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-100 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>5 modules de formation certifiants</strong> (1 point = 1 500 FCFA par module débloqué)</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-100 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Quiz officiel d'évaluation d'hygiène (BPH)</strong> en 10 questions avec attestation</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-100 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Sauvegarde illimitée</strong> de tous vos projets et fiches de coûts d'intrants</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-100 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Mise en relation</strong> avec les 5 circuits de vente (boutiques, hôtels, grande distribution)</span>
                  </div>

                </div>

              </div>

              {/* Bouton CTA Premium */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => scrollToSection('telecharger')}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#2E7D32] to-[#256629] hover:from-[#256629] hover:to-[#1E5222] text-white font-black text-xs sm:text-sm text-center transition-all shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Débloquer l'accès complet sur l'application</span>
                </button>
              </div>

            </div>

          </div>

          {/* Bandeau de réassurance paiement Mobile Money */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <ShieldCheck className="w-5 h-5 text-[#2E7D32] shrink-0" />
              <span>
                <strong>Paiement 100% sécurisé et local :</strong> Rechargez vos points de formation en quelques secondes par Wave ou Orange Money sans carte bancaire requise.
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center sm:justify-end">
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-sky-50 text-sky-950 border border-sky-200 shadow-sm hover:shadow transition-shadow">
                <img src="/wave.jfif" alt="Wave Sénégal" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain shadow-xs" />
                <div className="text-left">
                  <span className="text-[10px] font-bold text-sky-700 block uppercase tracking-wider">Mobile Money</span>
                  <span className="text-sm sm:text-base font-black text-sky-950">Wave</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-orange-50 text-orange-950 border border-orange-200 shadow-sm hover:shadow transition-shadow">
                <img src="/orangemoney.png" alt="Orange Money Sénégal" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain shadow-xs" />
                <div className="text-left">
                  <span className="text-[10px] font-bold text-orange-700 block uppercase tracking-wider">Mobile Money</span>
                  <span className="text-sm sm:text-base font-black text-orange-950">Orange Money</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          9. APPEL À L'ACTION FINAL (TÉLÉCHARGEMENT)
      ============================================================ */}
      <section id="telecharger" className="py-20 sm:py-24 bg-[#0A192F] text-white text-center relative overflow-hidden">
        
        {/* Glow discret */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10 space-y-8">
          
          {/* Logo officiel dans son carré blanc arrondi pour un contraste maximal */}
          <div className="flex justify-center">
            <div className="p-3.5 sm:p-4 bg-white rounded-3xl shadow-2xl inline-flex items-center justify-center border border-white/20 transition-transform hover:scale-105 duration-300">
              <ValoraLogo variant="badge" size={84} />
            </div>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4ADE80]">
              Application mobile
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Prenez part à la valorisation agroalimentaire avec ALPHA VALORA
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mx-auto">
              Téléchargez l'application sur votre smartphone ou explorez la démo interactive des fonctionnalités.
            </p>
          </div>

          {/* Vrais boutons officiels Google Play & App Store (centrés sur mobile) */}
          <div className="flex justify-center pt-2">
            <DownloadButtons 
              theme="dark" 
              className="justify-center"
              onExploreDemo={() => scrollToSection('demo-interactive')} 
            />
          </div>

        </div>
      </section>

      {/* ============================================================
          10. FORMULAIRE DE CONTACT OFFICIEL (3 CHAMPS : EMAIL, NUMÉRO, MESSAGE)
      ============================================================ */}
      <section id="contact" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-4 lg:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] text-xs font-bold mb-3.5">
              <Mail className="w-4 h-4" />
              <span>Formulaire officiel de contact</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
              Laissez-nous un message
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Vos demandes et questions sont transmises directement à l'équipe sur <strong className="text-slate-900">valoraappli@gmail.com</strong>.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-sm text-left">
            {contactSubmitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#2E7D32] text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-lg font-black text-emerald-950">
                  Message envoyé avec succès !
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Votre message a bien été transmis à <strong className="font-mono">valoraappli@gmail.com</strong>. Nous vous recontacterons très rapidement.
                </p>
                <button
                  type="button"
                  onClick={() => setContactSubmitted(false)}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#2E7D32] bg-white border border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Champ 1 : Adresse Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                    1. Votre Adresse Email <span className="text-[#2E7D32]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="votre.email@exemple.com"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all shadow-2xs"
                  />
                </div>

                {/* Champ 2 : Numéro de Téléphone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                    2. Numéro de Téléphone (WhatsApp ou Mobile) <span className="text-[#2E7D32]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+221 77 123 45 67"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all shadow-2xs"
                  />
                </div>

                {/* Champ 3 : Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                    3. Votre Message <span className="text-[#2E7D32]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Posez votre question sur l'application, les diagrammes ou la formation..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all shadow-2xs resize-none"
                  />
                </div>

                {contactError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    {contactError}
                  </div>
                )}

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#2E7D32] hover:bg-[#256629] disabled:opacity-60 text-white font-black text-xs sm:text-sm text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{contactSubmitting ? 'Transmission en cours...' : 'Envoyer le message'}</span>
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ============================================================
          11. PIED DE PAGE AVEC COORDONNÉES OFFICIELLES & TIKTOK
      ============================================================ */}
      <footer className="bg-white text-slate-600 py-12 sm:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Bloc Logo & Identité : Logo grand format sans carré blanc, centré sur mobile */}
            <div className="md:col-span-6 space-y-3.5 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3.5 justify-center md:justify-start">
                <ValoraLogo 
                  variant="badge" 
                  size={58} 
                  className="w-14 h-14 sm:w-16 sm:h-16 shrink-0" 
                />
                <div className="flex flex-col text-left">
                  <span className="font-black text-xl text-[#0A192F] tracking-tight">
                    ALPHA VALORA ÉPICES'SN
                  </span>
                  <span className="text-xs font-semibold text-[#D97736]">
                    Valoriser. Transformer. Entreprendre.
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left">
                Application mobile d'accompagnement en valorisation des matières premières agricoles, formation aux techniques de transformation et préparation de projets agroalimentaires.
              </p>
            </div>

            {/* Coordonnées officielles + Seul Réseau Social Officiel : TikTok */}
            <div className="md:col-span-6 space-y-3.5 text-center md:text-right flex flex-col items-center md:items-end">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Coordonnées officielles de contact
              </div>
              
              <div className="space-y-2.5 text-sm flex flex-col items-center md:items-end">
                <div>
                  <a 
                    href={`mailto:${OFFICIAL_CONTACT.email}`} 
                    className="inline-flex items-center md:flex-row-reverse gap-2 text-slate-800 hover:text-[#2E7D32] transition-colors font-semibold"
                  >
                    <Mail className="w-4 h-4 text-[#2E7D32]" />
                    <span>{OFFICIAL_CONTACT.email}</span>
                  </a>
                </div>
                <div>
                  <a 
                    href={`tel:${OFFICIAL_CONTACT.phoneTel}`} 
                    className="inline-flex items-center md:flex-row-reverse gap-2 text-slate-800 hover:text-[#2E7D32] transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4 text-[#2E7D32]" />
                    <span>{OFFICIAL_CONTACT.phoneDisplay}</span>
                  </a>
                </div>
                {/* SEUL RÉSEAU SOCIAL OFFICIEL : TIK TOK */}
                <div className="pt-1">
                  <a 
                    href={OFFICIAL_CONTACT.tiktokUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center md:flex-row-reverse gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm hover:shadow group"
                  >
                    <TikTokIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    <span>TikTok officiel : {OFFICIAL_CONTACT.tiktokHandle}</span>
                  </a>
                </div>
              </div>

              <div className="text-xs text-slate-400 pt-1 text-center md:text-right w-full">
                Bignona, Casamance, Sénégal
              </div>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
            <div className="text-center sm:text-left w-full sm:w-auto">
              © {new Date().getFullYear()} ALPHA VALORA ÉPICES'SN (<span className="text-slate-700 font-semibold">valoraepicesn.com</span>). Tous droits réservés.
            </div>
            <div className="flex items-center justify-center gap-4 text-slate-500 w-full sm:w-auto">
              <span>Sénégal</span>
              <span>·</span>
              <span>Agroalimentaire & Entrepreneuriat</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
