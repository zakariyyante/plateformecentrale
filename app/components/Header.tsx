'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'CLASSEMENT', href: '/#brands' },
    { name: 'CRITÈRES', href: '/#guide' },
    { name: 'ÉDITION', href: '/#about' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full flex flex-col items-center bg-slate-950">
      <div className="w-full border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center shrink-0">
              <Image 
                src="/18+.png" 
                alt="18+" 
                width={28} 
                height={28} 
                className="object-contain"
              />
            </div>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[12px] font-black text-white hover:text-cyan-400 transition-colors tracking-[0.1em] uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              href="/#contact"
              className="px-6 py-1.5 rounded-full border border-cyan-900/50 text-[10px] font-black text-cyan-400/80 tracking-[0.2em] hover:border-cyan-500 hover:text-cyan-400 transition-all uppercase"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Info Bar */}
      <div className="info-bar">
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500/60 uppercase tracking-[0.15em]">
          <div className="w-3 h-3 rounded-full border border-slate-800 flex items-center justify-center text-[7px] leading-none">i</div>
          INFORMATION COMMERCIALE : GUIDE GRATUIT SOUTENU PAR DES PARTENARIATS AFFILIÉS
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="w-full md:hidden bg-slate-950 border-b border-slate-900 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-black text-white hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-3 rounded-xl border border-cyan-500 text-cyan-400 font-black text-center text-sm tracking-[0.2em] uppercase"
          >
            CONTACT
          </Link>
        </nav>
      )}
    </header>
  );
};
