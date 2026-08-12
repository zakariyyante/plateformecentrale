import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black text-white mb-8 uppercase italic tracking-tighter">Conditions d&apos;Utilisation</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6">
        <p>
          Bienvenue sur Plateforme Centrale ! Ces conditions générales décrivent les règles et règlements relatifs à l&apos;utilisation du site Web de Plateforme Centrale, situé à l&apos;adresse plateformecentrale.com.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Acceptation des Conditions</h2>
        <p>
          En accédant à ce site Web, nous supposons que vous acceptez ces conditions générales. Ne continuez pas à utiliser Plateforme Centrale si vous n&apos;acceptez pas de prendre toutes les conditions générales énoncées sur cette page.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Licence</h2>
        <p>
          Sauf indication contraire, Plateforme Centrale et/ou ses concédants de licence détiennent les droits de propriété intellectuelle pour tout le matériel sur Plateforme Centrale. Tous les droits de propriété intellectuelle sont réservés.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Avis de Non-responsabilité</h2>
        <p>
          Dans la mesure maximale permise par la loi applicable, nous excluons toutes les représentations, garanties et conditions relatives à notre site Web et à l&apos;utilisation de ce site Web. Rien dans cet avis de non-responsabilité ne pourra :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>limiter ou exclure notre ou votre responsabilité en cas de décès ou de blessure corporelle ;</li>
          <li>limiter ou exclure notre ou votre responsabilité en cas de fraude ou de fausse déclaration frauduleuse ;</li>
          <li>limiter l&apos;une de nos ou de vos responsabilités d&apos;une manière qui n&apos;est pas autorisée par la loi applicable.</li>
        </ul>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href="/" className="text-primary hover:underline font-bold uppercase tracking-widest text-sm">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
