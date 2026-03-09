import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col lg:flex-row text-white">
        {/* Sidebar (left or top) */}
        <Header />

        {/* Canvas / main content */}
        <main className="flex-1 bg-neo-bg pt-14 lg:pt-0 lg:pl-64">
          <Hero />
          <About />
          <WorkExperience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
