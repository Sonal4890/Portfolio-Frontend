import React, { useState } from 'react';
import { projects } from '../lib/projects';
import { X } from 'lucide-react';

export const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="lg:min-h-screen py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <h2 className="text-4xl font-display text-neo-cyan mb-16 tracking-tight">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {projects.map((p, i) => {
            // default to full width on mobile, use more complex spans only at lg+
            let span;
            if (i % 5 === 0) {
              span = 'col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2';
            } else if (i % 3 === 0) {
              span = 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1';
            } else {
              span = 'col-span-1 md:col-span-1 lg:col-span-2';
            }
            return (
              <article
                key={p.id}
                className={`relative ${span} bg-neo-surface rounded-sm overflow-hidden border border-white/6 cursor-pointer group w-full`}
                onClick={() => setSelected(p)}
              >
                {/* background image */}
                {p.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                )}
                {/* overlay to ensure readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent lg:opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="relative h-full w-full flex items-end">
                  <div className="p-6 sm:p-8 w-full">
                    <div className="text-[10px] uppercase text-neo-cyan font-mono font-bold tracking-widest bg-black/40 inline-block px-2 py-0.5 rounded-sm mb-2">Project</div>
                    <h3 className="text-xl sm:text-2xl font-display text-white group-hover:text-neo-cyan transition-colors line-clamp-1">{p.title}</h3>
                    <p className="text-sm text-gray mt-2 line-clamp-2 leading-relaxed">{p.description}</p>
                    {p.tech && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {p.tech.map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 bg-black/20 rounded-sm border border-white/6 text-gray">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={() => setSelected(null)}>
            <div className="max-w-3xl w-full bg-neo-surface rounded-sm border border-white/6 p-6" onClick={(e) => e.stopPropagation()}>
              <button className="float-right" onClick={() => setSelected(null)}><X /></button>
              <h3 className="text-2xl font-display text-neo-magenta">{selected.title}</h3>
              <p className="mt-3 text-neo-gray">{selected.description}</p>
              {selected.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-black/20 rounded-sm border border-white/6 text-neo-gray">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {selected.github && (
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="text-neo-cyan underline text-sm">View Repo</a>
                )}
                {selected.githubFrontend && (
                  <a href={selected.githubFrontend} target="_blank" rel="noopener noreferrer" className="text-neo-cyan underline text-sm">Frontend Repo</a>
                )}
                {selected.githubBackend && (
                  <a href={selected.githubBackend} target="_blank" rel="noopener noreferrer" className="text-neo-cyan underline text-sm">Backend Repo</a>
                )}
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="text-neo-cyan underline text-sm">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
