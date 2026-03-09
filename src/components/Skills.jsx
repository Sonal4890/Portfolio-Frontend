import React from 'react';
import { skillCategories } from '../lib/skills';

export const Skills = () => {
  return (
    <section id="skills" className="lg:min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <h2 className="text-4xl font-display text-neo-cyan mb-16 tracking-tight">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={cat.category} className="p-8 sm:p-10 bg-neo-surface rounded-sm border border-white/6 space-y-4">
              <div className="text-xs text-neo-cyan font-mono font-bold">{`0${i + 1}`}</div>
              <h3 className="text-lg sm:text-xl font-display text-white ">{cat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(s => (
                  <span key={s} className="text-sm px-3 py-1 bg-black/20 rounded-sm border border-white/6 text-neo-gray">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
