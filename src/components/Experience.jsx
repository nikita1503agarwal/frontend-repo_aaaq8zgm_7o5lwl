import React from 'react';
import { Factory, Wrench, Gauge } from 'lucide-react';

const TimelineItem = ({ role, company, period, items }) => (
  <div className="grid grid-cols-[1rem_auto] gap-4">
    <div className="relative">
      <div className="w-3 h-3 rounded-full bg-orange-500 mt-1" />
      <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-slate-700" />
    </div>
    <div className="pb-8">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-semibold text-slate-100">{role}</p>
        <span className="text-slate-400">— {company}</span>
        <span className="ml-auto text-xs text-slate-400">{period}</span>
      </div>
      <ul className="mt-2 list-disc list-inside text-slate-300 text-sm space-y-1">
        {items.map((it, idx) => (<li key={idx}>{it}</li>))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Factory className="h-5 w-5 text-orange-400" />
          <h2 className="text-2xl font-bold text-slate-100">Experience & Achievements</h2>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <TimelineItem
              role="Production Operator"
              company="PT Industri Prima"
              period="2019 - Present"
              items={[
                'Reduced defect rate by 18% through better in-process checks.',
                'Led a shift-wide 5S initiative improving workstation efficiency.',
                'Trained 6 new operators on safety and SOP compliance.',
              ]}
            />
            <TimelineItem
              role="Intern"
              company="PT Mekanika Sejahtera"
              period="2018 - 2019"
              items={[
                'Assisted line setup, tool changes, and quality sampling.',
                'Documented daily outputs and downtime causes for reporting.',
              ]}
            />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Highlights</h3>
            <ul className="mt-4 space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-3"><Wrench className="h-4 w-4 text-orange-400 mt-0.5" /> Implemented preventive maintenance checklist that cut unplanned stoppages by 10%.</li>
              <li className="flex items-start gap-3"><Gauge className="h-4 w-4 text-orange-400 mt-0.5" /> Calibrated gauges and assisted QA in capability studies (Cp/Cpk).</li>
              <li className="flex items-start gap-3"><Wrench className="h-4 w-4 text-orange-400 mt-0.5" /> Supported minor tooling adjustments to maintain tolerance within spec.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
