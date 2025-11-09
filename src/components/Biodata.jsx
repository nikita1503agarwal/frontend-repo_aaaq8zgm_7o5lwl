import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, Star, ShieldCheck } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-800/70 border border-slate-700 text-slate-200 px-3 py-1 text-xs font-medium">{children}</span>
);

const Biodata = () => {
  return (
    <section id="bio" className="relative isolate bg-slate-950">
      <div className="absolute inset-0 -skew-y-2 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950/95" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-slate-100 font-semibold text-lg">Contact</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-orange-400" /> <a href="mailto:aliahmad@example.com" className="hover:text-white">aliahmad@example.com</a></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-orange-400" /> <a href="tel:+620000000000" className="hover:text-white">+62 000-0000-000</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-orange-400" /> <span>Bekasi, West Java, Indonesia</span></div>
            </div>

            <h3 className="mt-8 text-slate-100 font-semibold text-lg">Education</h3>
            <div className="mt-4 space-y-2 text-slate-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-200">Diploma in Industrial Engineering</p>
                  <p className="text-sm text-slate-400">Politeknik XYZ</p>
                </div>
                <span className="text-xs text-slate-400">2016 - 2019</span>
              </div>
            </div>

            <h3 className="mt-8 text-slate-100 font-semibold text-lg">Certifications</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange-400" /> Occupational Safety & Health (K3)</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange-400" /> ISO 9001:2015 Quality Management</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange-400" /> 5S Workplace Organization</li>
            </ul>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-bold text-slate-100">Biodata</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-300">
              <div>
                <p className="text-slate-400 text-sm">Full Name</p>
                <p className="font-medium text-slate-100">Ali Ahmad Furkonudin</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Date of Birth</p>
                <p className="font-medium text-slate-100">January 12, 1997</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Address</p>
                <p className="font-medium text-slate-100">Bekasi, West Java, Indonesia</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Role</p>
                <p className="font-medium text-slate-100">Production Operator</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-slate-100">Professional Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'CNC Machine Operation',
                  'Quality Inspection',
                  'Preventive Maintenance',
                  'Lean Manufacturing',
                  '5S Implementation',
                  'Root Cause Analysis',
                  'PPE & Safety Compliance',
                  'Team Collaboration',
                ].map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-slate-100">Work Experience</h3>
              <div className="mt-4 space-y-5">
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-slate-100">Production Operator — PT Industri Prima</p>
                    <span className="text-xs text-slate-400">2019 - Present</span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
                    <li>Operate and monitor CNC/lathe machines with high precision.</li>
                    <li>Perform in-process inspections to meet ISO 9001 standards.</li>
                    <li>Collaborate with quality and maintenance teams to reduce downtime.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-slate-100">Intern — PT Mekanika Sejahtera</p>
                    <span className="text-xs text-slate-400">2018 - 2019</span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
                    <li>Assisted in setting up production lines and conducted quality checks.</li>
                    <li>Supported 5S and Kaizen initiatives to improve productivity.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-slate-100">Key Strengths</h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: 'Precision', desc: 'Detail-oriented operation and measurement', icon: <Star className="h-4 w-4 text-orange-400" /> },
                  { title: 'Discipline', desc: 'On-time, procedure-focused execution', icon: <ShieldCheck className="h-4 w-4 text-orange-400" /> },
                  { title: 'Teamwork', desc: 'Collaborates across production & quality', icon: <Star className="h-4 w-4 text-orange-400" /> },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <div className="flex items-center gap-2 text-slate-100 font-medium">{item.icon}{item.title}</div>
                    <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodata;
