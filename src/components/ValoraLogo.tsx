import React from 'react';
import valoraLogoImg from '../assets/VALORA Agricultural Logo Badge.png';

export { valoraLogoImg };

interface ValoraLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'badge' | 'horizontal' | 'symbol';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
}

/**
 * Composant Logo Officiel VALORA ÉPICES'SN
 * Préserve intégralement la forme d'origine (squircle authentique) sans rognage circulaire artificiel.
 */
export const ValoraLogo: React.FC<ValoraLogoProps> = ({
  className = '',
  size = 48,
  variant = 'badge',
  showTagline = true,
  theme = 'light',
}) => {
  if (variant === 'badge') {
    return (
      <img
        src={valoraLogoImg}
        alt="Logo officiel VALORA ÉPICES'SN"
        width={typeof size === 'number' ? size : undefined}
        height={typeof size === 'number' ? size : undefined}
        className={`object-contain drop-shadow-sm ${className}`}
        style={typeof size === 'string' ? { width: size, height: size } : undefined}
        loading="eager"
      />
    );
  }

  if (variant === 'symbol') {
    return (
      <img
        src={valoraLogoImg}
        alt="Symbole officiel VALORA"
        width={typeof size === 'number' ? size : undefined}
        height={typeof size === 'number' ? size : undefined}
        className={`object-contain drop-shadow-sm ${className}`}
        style={typeof size === 'string' ? { width: size, height: size } : undefined}
      />
    );
  }

  // Variant horizontal: Official badge + brand name & tagline
  const isDark = theme === 'dark';
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <img
        src={valoraLogoImg}
        alt="Logo officiel VALORA ÉPICES'SN"
        className="w-11 h-11 object-contain shrink-0 drop-shadow-sm"
      />
      <div className="flex flex-col text-left leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-black tracking-tight text-lg font-sans ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
            VALORA
          </span>
          <span className="text-xs font-bold tracking-wider text-[#2E7D32]">
            ÉPICES'SN
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] font-semibold text-[#D97736] tracking-wide">
            Valoriser. Transformer. Entreprendre.
          </span>
        )}
      </div>
    </div>
  );
};
