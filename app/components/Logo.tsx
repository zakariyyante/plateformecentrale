import React from 'react';
import Image from 'next/image';

export const Logo: React.FC<{ className?: string; type?: 'full' | 'icon' }> = ({ className = "", type = 'full' }) => {
  if (type === 'icon') {
    return (
      <div className={`relative w-10 h-10 ${className}`}>
        <Image 
          src="/logo.png" 
          alt="Plateforme Centrale Icon" 
          fill 
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative h-16 w-64 ${className}`}>
      <Image 
        src="/logo.png" 
        alt="Plateforme Centrale Logo" 
        fill 
        className="object-contain object-left"
        priority
      />
    </div>
  );
};
