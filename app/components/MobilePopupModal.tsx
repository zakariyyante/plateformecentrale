'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Brand } from '../data/brands';
import { BrandCard } from './BrandCard';
import { Logo } from './Logo';

interface MobilePopupModalProps {
  brands: Brand[];
  gclid?: string;
}

export const MobilePopupModal: React.FC<MobilePopupModalProps> = ({ brands, gclid }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show if gclid is present and there are mobile-friendly brands
    if (gclid && brands.some(b => b.isMobile)) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Prevent scrolling on the body when modal is open
        document.body.style.overflow = 'hidden';
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [gclid, brands]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in zoom-in duration-300">
      <div className="min-h-screen flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-slate-800 p-4 flex justify-between items-center">
          <Logo />
          <button 
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = 'unset';
            }}
            className="p-2 text-slate-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">
              OFFRES MOBILES EXCLUSIVES
            </h2>
            <p className="text-slate-400 text-sm font-medium">Sélectionnées spécialement pour vous</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {mobileBrands.map((brand, i) => (
              <BrandCard key={brand.id} brand={brand} gclid={gclid} rank={i + 1} />
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <h3 className="text-white font-black mb-6 uppercase text-xs tracking-[0.3em] italic">Pourquoi choisir ces plateformes ?</h3>
            <ul className="text-left text-sm text-slate-400 space-y-4 font-medium">
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">✦</span>
                Payouts instantanés sur mobile
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">✦</span>
                Interface optimisée iOS/Android
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">✦</span>
                Bonus spéciaux premier dépôt
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer (Mini) */}
        <div className="p-8 bg-slate-950 border-t border-slate-900 text-center">
          <p className="text-[8px] text-slate-700 uppercase tracking-[0.4em] mb-4 font-black">
            PLATEFORMECENTRALE.COM
          </p>
          <div className="flex justify-center grayscale opacity-30">
            <Image src="/18+.png" alt="18+" width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
};
