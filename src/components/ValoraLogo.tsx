import React from 'react';
import valoraLogoImg from '../assets/alpha-valora-logo.jpeg';

export { valoraLogoImg };

interface ValoraLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'badge' | 'horizontal' | 'symbol';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
}

/**
 * Composant Logo Officiel ALPHA VALORA ÉPICES'SN
 */
export const ValoraLogo: React.FC<ValoraLogoProps> = ({
  className = '',
  size = 48,
  variant = 'badge',
  showTagline = true,
  theme = 'light',
}) => {
  const sizeStyle = typeof size === 'number'
    ? { width: size, height: size }
    : { width: size, height: size };

  if (variant === 'badge') {
    return (
      <img
        src={valoraLogoImg}
        alt="Logo officiel ALPHA VALORA ÉPICES'SN"
        className={`object-contain ${className}`}
        style={sizeStyle}
        loading="eager"
      />
    );
  }

  if (variant === 'symbol') {
    return (
      <img
        src={valoraLogoImg}
        alt="Symbole officiel ALPHA VALORA"
        className={`object-contain ${className}`}
        style={sizeStyle}
      />
    );
  }

  // Variant horizontal: logo + texte
  const isDark = theme === 'dark';
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <img
        src={valoraLogoImg}
        alt="Logo officiel ALPHA VALORA ÉPICES'SN"
        className="w-11 h-11 object-contain shrink-0"
      />
      <div className="flex flex-col text-left leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-black tracking-tight text-lg font-sans ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
            ALPHA VALORA
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