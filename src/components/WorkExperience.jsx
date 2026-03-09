import React from 'react';

export const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Expert Computer Education',
      position: 'Assistant Faculty',
      period: 'March, 2025 - July, 2025',
      description: 'I worked as an Assistant Faculty (IT) intern where I supported classroom teaching and guided students in computer fundamentals',
      highlights: ['C', 'C++', 'Basic Web Developement']
    },
    {
      id: 2,
      company: 'Data Structure And Algorithm',
      position: 'Self-Learning',
      period: 'Ongoing',
      description: 'A comprehensive collection of Data Structures and Algorithms implemented in C++, specifically curated for hackathon success. .',
      highlights: ['C++']
    }
  ];

  return (
    <section id="work-experience" className="lg:min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <h2 className="text-4xl font-display text-neo-cyan mb-16 tracking-tight">Work Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="p-8 sm:p-12 bg-neo-surface rounded-sm border border-white/6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-neo-cyan/30 transition-colors">
              <div className="lg:col-span-1 text-neo-cyan font-mono">
                <div className="text-3xl font-display font-bold">{`0${i + 1}`}</div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-display text-neo-magenta">{exp.company}</h3>
                <p className="text-sm text-neo-cyan mt-1">{exp.position}</p>
                <p className="text-xs text-neo-gray mt-2">{exp.period}</p>
                <p className="text-neo-gray mt-4 text-sm">{exp.description}</p>
              </div>

              <div className="lg:col-span-3">
                <div className="flex flex-wrap gap-3 uppercase">
                  {exp.highlights.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-black/20 rounded-sm border border-white/6 text-neo-gray">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
