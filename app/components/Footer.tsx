import Image from 'next/image';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Disclosure */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
            <Logo />
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] italic">DIVULGATION D&apos;AFFILIATION</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Plateforme Centrale opère comme un comparateur indépendant. Des rémunérations affiliées peuvent être perçues auprès des opérateurs mentionnés ici. Ces partenariats peuvent influer sur le classement des enseignes, sans toutefois altérer la neutralité de nos évaluations issues de tests concrets.
              </p>
              <div className="px-3 py-1 rounded bg-slate-900 border border-cyan-900/30 inline-block w-fit">
                 <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Contenu Publicitaire</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors">Accueil</Link>
              <Link href="/#brands" className="text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors">Marques</Link>
              <Link href="/#guide" className="text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors">Guide</Link>
              <Link href="/#about" className="text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors">À Propos</Link>
            </nav>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">Légal</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors">Confidentialité</Link>
              <Link href="/terms" className="text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors">Conditions</Link>
              <Link href="/cookies" className="text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors">Cookies</Link>
            </nav>
          </div>
        </div>

        {/* Responsible Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 py-10 border-y border-slate-900 mb-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
          <Image src="/18+.png" alt="18+" width={36} height={36} className="object-contain" />
          <Image src="/anj.webp" alt="ANJ" width={70} height={25} className="object-contain" />
          <Image src="/mediateur.webp" alt="Médiateur des Plateformes" width={80} height={30} className="object-contain" />
          <Image src="/begambleaware.webp" alt="BeGambleAware" width={110} height={25} className="object-contain" />
          <Image src="/joueurs.webp" alt="Joueurs Info Service" width={90} height={35} className="object-contain" />
        </div>

        <div className="text-center">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">
            © {currentYear} PLATEFORMECENTRALE.COM • TOUS DROITS RÉSERVÉS
          </p>
        </div>
      </div>
    </footer>
  );
};
