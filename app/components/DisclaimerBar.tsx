import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const DisclaimerBar: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 border-y border-slate-800 py-6 px-4 my-8 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex items-center gap-4 shrink-0">
          <Image src="/18+.png" alt="18+" width={40} height={40} className="object-contain" />
          <span className="font-black text-white uppercase tracking-tighter text-lg italic">Interdit aux -18 ans.</span>
        </div>
        
        <p className="text-xs md:text-sm text-slate-400 max-w-4xl font-medium leading-relaxed uppercase">
          LES PLATEFORMES ET LES OFFRES PEUVENT ÊTRE DANGEREUX : PERTES D&apos;ARGENT, CONFLITS FAMILIAUX, ADDICTION... 
          RETROUVEZ NOS CONSEILS SUR <Link href="https://www.joueurs-info-service.fr/" className="text-cyan-400 hover:underline font-bold">JOUEURS-INFO-SERVICE.FR</Link> 
          OU AU <span className="text-white font-black italic">09 74 75 13 13</span> (APPEL NON SURTAXÉ).
        </p>
      </div>
    </div>
  );
};
