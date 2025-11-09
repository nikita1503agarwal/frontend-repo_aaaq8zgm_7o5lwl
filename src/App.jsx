import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Biodata from './components/Biodata';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const handleDownloadCV = () => {
    // Fallback: navigate to CV path. Also supported via Projects section button.
    window.location.href = '/cv/ali-ahmad-furkonudin-cv.pdf';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar onDownloadCV={handleDownloadCV} />
      <main className="pt-16">
        <Hero />
        <Biodata />
        <Experience />
        <Projects />
        <footer className="bg-slate-950 border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400">
            © {new Date().getFullYear()} Ali Ahmad Furkonudin — Precision and Dedication.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
