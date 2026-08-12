import React from 'react';
import Image from 'next/image';

export const AboutSection: React.FC = () => {
  return (
    <section id="guide" className="py-24 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
          Notre système d&apos;analyse
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 font-medium">
          Nous appliquons un protocole de notation précis s&apos;appuyant sur plus de 50 critères de sélection afin de vous assurer une expérience optimale.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-800/20 italic group-hover:text-cyan-500/10 transition-colors">01</div>
          <h3 className="text-2xl font-black text-white mb-8 italic uppercase tracking-tighter flex items-center gap-3">
            Audit de performance
          </h3>
          <ul className="space-y-5 text-slate-400 font-medium">
            {[
              'Études détaillées réalisées par des spécialistes du marché',
              'Contrôle permanent des bonus et des offres promotionnelles',
              'Vérification stricte des délais et méthodes de paiement',
              'Audit de la sûreté et du respect du cadre réglementaire ANJ',
              'Protocole de scoring propriétaire Plateforme Centrale'
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-cyan-400 font-bold mt-1.5 text-xs">✦</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-800/20 italic group-hover:text-red-500/10 transition-colors">02</div>
          <h3 className="text-2xl font-black text-white mb-8 italic uppercase tracking-tighter flex items-center gap-3">
            Utilisation responsable
          </h3>
          <p className="text-slate-400 mb-10 leading-relaxed font-medium">
            La sécurité de nos utilisateurs est notre priorité absolue. Nous promouvons uniquement des plateformes qui respectent les normes de sécurité et d&apos;utilisation responsable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a 
              href="https://www.joueurs-info-service.fr/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black text-center transition-all border border-slate-700 uppercase tracking-widest text-xs shadow-xl"
            >
              Aide Immédiate
            </a>
            <div className="flex flex-col justify-center text-center sm:text-left">
              <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black">INFO SERVICE →</span>
              <span className="text-2xl font-black text-white italic">09 74 75 13 13</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
