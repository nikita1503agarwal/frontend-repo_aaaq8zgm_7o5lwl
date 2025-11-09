import React from 'react';
import { Award, CheckCircle2, FileDown } from 'lucide-react';

const ProjectCard = ({ title, description, metrics }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
    <div className="flex items-center justify-between">
      <h4 className="text-slate-100 font-semibold">{title}</h4>
      <Award className="h-4 w-4 text-orange-400" />
    </div>
    <p className="mt-2 text-sm text-slate-300">{description}</p>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-lg bg-slate-800/60 border border-slate-700 p-3">
          <p className="text-xs text-slate-400">{m.label}</p>
          <p className="text-slate-100 font-semibold">{m.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-orange-400" />
          <h2 className="text-2xl font-bold text-slate-100">Projects & Achievements</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Defect Reduction Program"
            description="Led a focused quality program for a machining cell to reduce defects using simple poka‑yoke and standardized checks."
            metrics={[
              { label: 'Defect Rate', value: '−18% YoY' },
              { label: 'Output', value: '+12%/shift' },
              { label: 'Audit Score', value: '98/100' },
            ]}
          />
          <ProjectCard
            title="5S Revamp for Line B"
            description="Re‑organized tools, markings, and visual management to cut changeover time and improve safety compliance."
            metrics={[
              { label: 'Changeover', value: '−15% time' },
              { label: 'Safety', value: '0 incidents' },
              { label: 'Utilization', value: '+7%' },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/cv/ali-ahmad-furkonudin-cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-slate-900 font-semibold px-5 py-3 rounded-md"
          >
            <FileDown className="h-4 w-4" /> Download CV
          </a>
          <p className="text-sm text-slate-400">Detailed responsibilities, training, and references included.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
