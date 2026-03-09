import React from 'react';

export const About = () => {
  return (
    <section id="about" className="lg:min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="col-span-1 lg:col-span-7 bg-neo-surface p-8 sm:p-12 rounded-sm neon-outline space-y-6">
            <h2 className="text-4xl sm:text-5xl font-display text-neo-magenta tracking-tight">About</h2>
            <p className="mt-4 text-neo-gray text-base sm:text-lg leading-relaxed font-light">Passionate and self-motivated BCA final-year student seeking an entry-level Web Developer position to apply my Full Stack development skills in the MERN stack. Committed to building efficient, scalable, and user-centric web applications while contributing to team success and continuously enhancing my technical expertise in a professional IT environment.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="p-4 bg-black/20 rounded-sm border border-white/6">
                <div className="text-xs text-neo-cyan font-mono">Location</div>
                <div className="font-semibold mt-1">Surat, Gujarat</div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-5">
            <div className="p-8 bg-neo-surface rounded-sm border border-white/6 space-y-6">
              <div className="text-xs text-neo-cyan uppercase font-mono">Education</div>

              <h3 className="mt-4 font-display text-md">Vidhya kunj hindi vidhyalaya </h3>
              <h4 className="mt-1 text-neo-gray text-sm">10th HSC Board</h4>
              <h4 className=" text-neo-gray text-sm">2021</h4>

              <h3 className="mt-4 font-display text-md">Vidhya kunj hindi vidhyalaya </h3>
              <h4 className="mt-1 text-neo-gray text-sm">12th HSC Board</h4>
              <h4 className=" text-neo-gray text-sm">2023</h4>

              <h3 className="mt-4 font-display text-md">VIVEKANAND COLLEGE</h3>
              <h4 className="mt-1 text-neo-gray text-sm">Bachelor of Computer Applications</h4>
              <h4 className=" text-neo-gray text-sm">2023 - 2026 (Expected)</h4>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
