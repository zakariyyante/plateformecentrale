import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black text-white mb-8 uppercase italic tracking-tighter">Politique de Confidentialité</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6">
        <p>
          Chez Plateforme Centrale, accessible depuis plateformecentrale.com, l&apos;une de nos principales priorités est la confidentialité de nos visiteurs. Ce document de politique de confidentialité contient les types d&apos;informations qui sont collectées et enregistrées par Plateforme Centrale et comment nous les utilisons.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Fichiers Journaux</h2>
        <p>
          Plateforme Centrale suit une procédure standard d&apos;utilisation des fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu&apos;ils visitent des sites Web. Toutes les entreprises d&apos;hébergement le font et cela fait partie des analyses des services d&apos;hébergement. Les informations collectées par les fichiers journaux comprennent les adresses de protocole Internet (IP), le type de navigateur, le fournisseur d&apos;accès Internet (FAI), l&apos;horodatage, les pages de renvoi/sortie et éventuellement le nombre de clics.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cookies et Balises Web</h2>
        <p>
          Comme tout autre site Web, Plateforme Centrale utilise des &quot;cookies&quot;. Ces cookies sont utilisés pour stocker des informations, notamment les préférences des visiteurs, et les pages du site Web auxquelles le visitor a accédé ou qu&apos;il a visitées. Les informations sont utilisées pour optimiser l&apos;expérience des utilisateurs en personnalisant le contenu de notre page Web en fonction du type de navigateur des visiteurs et/ou d&apos;autres informations.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Politiques de Confidentialité des Tiers</h2>
        <p>
          La politique de confidentialité de Plateforme Centrale ne s&apos;applique pas aux autres annonceurs ou sites Web. Ainsi, nous vous conseillons de consulter les politiques de confidentialité respectives de ces serveurs publicitaires tiers pour des informations plus détaillées.
        </p>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href="/" className="text-primary hover:underline font-bold uppercase tracking-widest text-sm">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
