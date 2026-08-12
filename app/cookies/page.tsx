import React from 'react';
import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black text-white mb-8 uppercase italic tracking-tighter">Politique de Cookies</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 font-medium">
        <p>
          Plateforme Centrale utilise des cookies pour améliorer votre expérience de navigation et analyser notre trafic.
        </p>
        
        <h2 className="text-2xl font-black text-white mt-8 mb-4 uppercase italic tracking-tighter">Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site Web. Ils sont largement utilisés pour faire fonctionner les sites Web ou les faire fonctionner plus efficacement.
        </p>

        <h2 className="text-2xl font-black text-white mt-8 mb-4 uppercase italic tracking-tighter">Comment nous utilisons les cookies</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site.</li>
          <li><strong>Cookies analytiques :</strong> Nous aident à comprendre comment les visiteurs interagissent avec le site (Vercel Analytics & Google Analytics).</li>
          <li><strong>Cookies de marketing :</strong> Utilisés pour suivre l&apos;efficacité de nos campagnes publicitaires.</li>
        </ul>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href="/" className="text-cyan-400 hover:underline font-black uppercase tracking-widest text-xs">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
