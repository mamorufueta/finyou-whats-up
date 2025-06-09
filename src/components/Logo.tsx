
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-finyou-teal to-finyou-neon rounded-lg flex items-center justify-center">
          <span className="text-white font-sora font-bold text-sm">F</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-finyou-neon rounded-full animate-pulse"></div>
      </div>
      {showText && (
        <span className="font-sora font-bold text-xl gradient-text">
          Finyou
        </span>
      )}
    </div>
  );
};

export default Logo;
