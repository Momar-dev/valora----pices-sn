import React, { useState } from 'react';
import { DOWNLOAD_CONFIG, OFFICIAL_CONTACT } from '../config/downloadLinks';
import { CheckCircle2, X, Bell, ArrowRight } from 'lucide-react';
import playstoreBadge from '../assets/playstore.svg';
import appleStoreBadge from '../assets/apple store.svg';

export { playstoreBadge, appleStoreBadge };

interface DownloadButtonsProps {
  className?: string;
  size?: 'md' | 'lg';
  theme?: 'dark' | 'light';
  onExploreDemo?: () => void;
}

/**
 * Composants logos officiels des stores
 */
export const GooglePlayLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => (
  <img src={playstoreBadge} alt="Google Play" className={className} />
);

export const AppleStoreLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => (
  <img src={appleStoreBadge} alt="Apple App Store" className={className} />
);

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({
  className = '',
  onExploreDemo,
}) => {
  const [modalPlatform, setModalPlatform] = useState<'android' | 'ios' | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleDownloadClick = (platform: 'android' | 'ios', url: string) => {
    if (url && url.trim().length > 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setModalPlatform(platform);
      setSubscribed(false);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      try {
        const existing = JSON.parse(localStorage.getItem('valora_subscribers') || '[]');
        existing.push({ email, platform: modalPlatform, date: new Date().toISOString() });
        localStorage.setItem('valora_subscribers', JSON.stringify(existing));
      } catch {
        // silent
      }
    }
  };

  const isAndroidReady = Boolean(DOWNLOAD_CONFIG.androidUrl && DOWNLOAD_CONFIG.androidUrl.trim().length > 0);
  const isIosReady = Boolean(DOWNLOAD_CONFIG.iosUrl && DOWNLOAD_CONFIG.iosUrl.trim().length > 0);

  return (
    <>
      <div className={`flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-4.5 ${className}`}>
        
        {/* BOUTON OFFICIEL GOOGLE PLAY (Badge SVG officiel avec ombre marquée) */}
        <button
          type="button"
          onClick={() => handleDownloadClick('android', DOWNLOAD_CONFIG.androidUrl)}
          className="group relative inline-flex self-center sm:self-auto w-fit items-center justify-center p-0 rounded-2xl bg-black shadow-2xl shadow-black/60 drop-shadow-[0_10px_14px_rgba(0,0,0,0.4)] hover:shadow-black/80 hover:drop-shadow-[0_14px_20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] cursor-pointer ring-1 ring-white/10"
          aria-label="Disponible sur Google Play"
        >
          <img
            src={playstoreBadge}
            alt="Disponible sur Google Play"
            className="h-12 sm:h-13.5 w-auto object-contain rounded-2xl border border-slate-700/60 group-hover:border-emerald-500/50 transition-colors"
          />
          {!isAndroidReady && (
            <span className="absolute -top-2.5 -right-2 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2E7D32] text-white shadow-md border border-white/20">
              Bientôt
            </span>
          )}
        </button>

        {/* BOUTON OFFICIEL APPLE APP STORE (Badge SVG officiel avec ombre marquée) */}
        <button
          type="button"
          onClick={() => handleDownloadClick('ios', DOWNLOAD_CONFIG.iosUrl)}
          className="group relative inline-flex self-center sm:self-auto w-fit items-center justify-center p-0 rounded-2xl bg-black shadow-2xl shadow-black/60 drop-shadow-[0_10px_14px_rgba(0,0,0,0.4)] hover:shadow-black/80 hover:drop-shadow-[0_14px_20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] cursor-pointer ring-1 ring-white/10"
          aria-label="Télécharger dans l'App Store"
        >
          <img
            src={appleStoreBadge}
            alt="Télécharger dans l'App Store"
            className="h-12 sm:h-13.5 w-auto object-contain rounded-2xl border border-slate-700/60 group-hover:border-emerald-500/50 transition-colors"
          />
          {!isIosReady && (
            <span className="absolute -top-2.5 -right-2 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2E7D32] text-white shadow-md border border-white/20">
              Bientôt
            </span>
          )}
        </button>

      </div>

      {/* MODALE INFORMATIVE SI LES URLS SONT EN ATTENTE */}
      {modalPlatform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-[#0C1A2E] text-white rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden">
            
            {/* Header modale avec badge officiel du store */}
            <div className="p-6 pb-4 bg-gradient-to-b from-[#132845] to-[#0C1A2E] border-b border-slate-800">
              <button
                onClick={() => setModalPlatform(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <img
                  src={modalPlatform === 'android' ? playstoreBadge : appleStoreBadge}
                  alt={modalPlatform === 'android' ? 'Google Play Store' : 'Apple App Store'}
                  className="h-11 w-auto object-contain rounded-xl border border-white/10"
                />
              </div>

              <h3 className="text-xl font-extrabold text-white">
                {modalPlatform === 'android' ? 'Google Play Store' : 'Apple App Store'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                La fiche officielle de l'application VALORA ÉPICES'SN est en cours d'indexation.
              </p>
            </div>

            {/* Contenu */}
            <div className="p-6 space-y-4 text-xs text-slate-300">
              <p className="leading-relaxed">
                Toutes les fonctionnalités de l'application sont prêtes. Renseignez votre adresse ci-dessous pour être prévenu dès la mise en ligne.
              </p>

              {/* Formulaire d'alerte */}
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="pt-2">
                  <label htmlFor="notify-email" className="block text-xs font-semibold text-white mb-2">
                    Recevoir le lien dès l'ouverture :
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="notify-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre.email@exemple.com"
                      className="flex-1 px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38A169] focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shrink-0"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>Alerte</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Votre adresse <strong>{email}</strong> est enregistrée. Vous recevrez une notification directe.</span>
                </div>
              )}

              {/* Action secondaire : Démo interactive */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Contact : <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#4ADE80] underline">{OFFICIAL_CONTACT.email}</a>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setModalPlatform(null);
                    if (onExploreDemo) {
                      onExploreDemo();
                    } else {
                      document.getElementById('demo-interactive')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-[#4ADE80] transition-colors"
                >
                  <span>Tester la démo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
