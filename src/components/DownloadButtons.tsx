import React from 'react';
import { DOWNLOAD_CONFIG } from '../config/downloadLinks';
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
}) => {
  const handleDownloadClick = (url: string) => {
    if (url && url.trim().length > 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const isAndroidReady = Boolean(DOWNLOAD_CONFIG.androidUrl && DOWNLOAD_CONFIG.androidUrl.trim().length > 0);
  const isIosReady = Boolean(DOWNLOAD_CONFIG.iosUrl && DOWNLOAD_CONFIG.iosUrl.trim().length > 0);

  return (
    <div className={`flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-4.5 ${className}`}>
      
      {/* BOUTON OFFICIEL GOOGLE PLAY (Badge SVG officiel avec ombre marquée) */}
      <button
        type="button"
        onClick={() => handleDownloadClick(DOWNLOAD_CONFIG.androidUrl)}
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
        onClick={() => handleDownloadClick(DOWNLOAD_CONFIG.iosUrl)}
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
  );
};
