import React from 'react';

import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section className="relative pb-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl flex flex-col items-center relative z-10">
        <div className="mb-12 text-center flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-black text-cyan-500 tracking-[0.2em] uppercase">
              RÉSEAU OFFICIEL · PLATEFORME CENTRALE
            </span>
          </div>
          <span className="text-[12px] md:text-sm font-black text-slate-500 tracking-[0.4em] uppercase">
            OBSERVATOIRE FR · ÉDITION 2026
          </span>
        </div>

        <div className="hero-container w-full grid-bg p-8 md:p-20 text-center relative mb-12">
          {/* Logo Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
             <div className="relative w-[800px] h-[800px] rotate-12 translate-x-1/4">
               <Image src="/logo.png" alt="" fill className="object-contain grayscale" />
             </div>
          </div>

          {/* Top glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase italic">
              Comparatif des opérateurs plébiscités
            </h1>

            <p className="max-w-4xl mx-auto text-base md:text-lg text-slate-400/80 mb-12 leading-relaxed font-medium">
              Passez en revue des promotions contrôlées, des enseignes suivies de près et des alternatives plébiscitées en France. Filtrez selon vos critères et repérez l&apos;offre adaptée sans perdre de temps.
            </p>

            <div className="flex flex-col items-center gap-10">
               <div className="text-[10px] font-bold text-slate-600/80 uppercase tracking-[0.3em]">
                 Mise à jour · 12 août 2026
               </div>
               
               <div className="flex items-center justify-center gap-8">
                 <div className="w-10 h-10 rounded-full border border-slate-800/50 flex items-center justify-center text-cyan-400/80 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default">
                   <span className="font-bold text-sm">$</span>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-red-900/50 bg-red-950/10 flex items-center justify-center text-red-500/80 text-[11px] font-black">
                   18+
                 </div>
               </div>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[
            { 
              title: 'Licencié', 
              subtitle: 'Réglementé ANJ', 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-1.382-3.016z" />
                </svg>
              )
            },
            { 
              title: 'Expertise', 
              subtitle: 'Avis Certifiés', 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
            { 
              title: 'Rapidité', 
              subtitle: 'Retraits 24h', 
              icon: (
                <span className="font-bold text-xl">$</span>
              )
            }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 text-left hover:border-cyan-500/30 transition-all group backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-900 flex items-center justify-center text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 shadow-inner">
                {badge.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-base font-black text-white tracking-tight uppercase italic">{badge.title}</h4>
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">{badge.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
