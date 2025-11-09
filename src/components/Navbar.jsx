import React from 'react';
import { User, Briefcase, Award, FileDown } from 'lucide-react';

const Navbar = ({ onDownloadCV }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-slate-100 text-lg">
          Ali Ahmad Furkonudin
        </a>
        <div className="flex items-center gap-1 sm:gap-3 text-slate-200">
          <a href="#bio" className="px-3 py-2 text-sm hover:text-orange-300 transition-colors inline-flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Biodata</span>
          </a>
          <a href="#experience" className="px-3 py-2 text-sm hover:text-orange-300 transition-colors inline-flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:inline">Experience</span>
          </a>
          <a href="#projects" className="px-3 py-2 text-sm hover:text-orange-300 transition-colors inline-flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span className="hidden sm:inline">Achievements</span>
          </a>
          <button onClick={onDownloadCV} className="ml-1 sm:ml-3 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-slate-900 font-medium px-3 py-2 rounded-md text-sm transition-colors">
            <FileDown className="h-4 w-4" />
            <span className="hidden sm:inline">Download CV</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
