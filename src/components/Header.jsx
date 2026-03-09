import React, { useState } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#work-experience', id: 'work-experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // helper used by mobile nav to close after clicking
  const handleNavClick = (href) => {
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <>
      {/* desktop sidebar */}
      <aside className="hidden lg:flex w-64 min-h-screen bg-neo-surface border-r border-white/6 p-6 flex flex-col gap-8 fixed left-0 top-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-sm bg-black/40 flex items-center justify-center neon-border-cyan">
              <span className="text-xs font-mono text-neo-cyan">Sonal</span>
            </div>
            <div>
              <div className="text-2xl font-display tracking-tight">Magic ✨</div>
              <div className="text-xs text-neo-gray">Web Developer</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-3 mt-6">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-left px-3 py-2 rounded-sm hover:bg-white/2 transition-colors text-white/90 font-semibold"
            >
              <span className="text-sm">{l.label}</span>
            </button>
          ))}
        </nav>

        <div className="space-y-3">
          <a
            href="Documents/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-neo-cyan text-black font-bold rounded-sm justify-center"
          >
            Resume
          </a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full px-3 py-2 rounded-sm border border-white/6 text-sm text-white/80">Top <ArrowUp className="inline-block ml-2" /></button>
        </div>
      </aside>

      {/* mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-neo-surface border-b border-white/6 flex items-center justify-between px-4 py-3 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-black/40 flex items-center justify-center neon-border-cyan">
            <span className="text-xs font-mono text-neo-cyan">SN</span>
          </div>
          <div className="text-lg font-display tracking-tight uppercase">Sonal Saini</div>
        </div>
        <button onClick={() => setMenuOpen((o) => !o)} className="text-white p-2">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* mobile nav dropdown */}
      {menuOpen && (
        <nav className="lg:hidden fixed top-14 left-0 right-0 bg-neo-surface border-b border-white/6 flex flex-col space-y-1 px-4 py-4 z-20 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.href)}
              className="text-left w-full px-4 py-3 rounded-sm hover:bg-white/5 transition-colors text-white/90 font-semibold border-b border-white/5 last:border-0"
            >
              <span className="text-base">{l.label}</span>
            </button>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="/Documents/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 bg-neo-cyan text-black font-bold rounded-sm shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </>
  );
};
