'use client';

import Image from 'next/image';
import { track } from '@vercel/analytics';
import { Brand } from '../data/brands';

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
  rank?: number;
}

// Define interface for window with gtag
interface WindowWithGtag extends Window {
  gtag_report_conversion?: (url: string) => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, gclid, rank }) => {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const finalUrl = buildUrl(brand.url, gclid);

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    const win = window as unknown as WindowWithGtag;
    if (typeof window !== 'undefined' && win.gtag_report_conversion) {
      win.gtag_report_conversion(finalUrl);
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-[10px] font-bold text-slate-500">{rating.toFixed(1)} / 10</span>
      </div>
    );
  };

  return (
    <div 
      className="group relative bg-[#0a0a0f] rounded-[2.5rem] p-8 border border-slate-900/50 shadow-2xl max-w-5xl mx-auto w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Section: Logo & Info */}
        <div className="flex flex-col gap-6">
          <div className="relative w-40 h-16">
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              fill 
              className="object-contain object-left"
              sizes="160px"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            {renderStars(brand.rating)}
            
            <div className="flex items-center gap-2">
              {['B', 'P', 'VISA'].map((pay) => (
                <div key={pay} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] font-black text-slate-500 uppercase tracking-tighter italic">
                  {pay}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Bonus */}
        <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
          <div className="flex items-center gap-3">
            <div className="px-2 py-0.5 rounded border border-slate-800 bg-slate-900/50 flex items-center gap-1.5">
               <div className="w-1 h-1 rounded-full bg-cyan-500" />
               <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">VÉRIFIÉ</span>
            </div>
            <div className="px-4 py-1.5 rounded-full border border-cyan-900/30 bg-cyan-950/10">
              <span className="text-[9px] font-black text-cyan-400 tracking-[0.2em] uppercase">BONUS EXCLUSIF</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
            {brand.bonus}
          </h2>
        </div>
      </div>

      {/* Full-width CTA Button */}
      <button 
        onClick={handleCardClick}
        className="mt-10 w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(34,211,238,0.2)] flex items-center justify-center group/btn overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-sm italic">
          DÉCOUVRIR {brand.name}
        </span>
      </button>
    </div>
  );
};
