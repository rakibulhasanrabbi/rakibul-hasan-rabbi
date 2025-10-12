
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <Header />
        <div className="space-y-16">
          <About />
          <Education />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
