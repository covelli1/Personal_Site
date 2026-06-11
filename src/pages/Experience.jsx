import SectionHeading from '../Components/SectionHeading';
import { experience } from '../data';

export default function Experience() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col gap-6">
          {experience.map((job, i) => (
            <div
              key={i}
              className="bg-navy-light rounded-xl p-8 border border-white/10 border-l-4 border-l-teal-400"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-1">
                <div>
                  <h3 className="text-lg font-bold text-white">{job.company}</h3>
                  <p className="text-teal-400 font-medium text-sm">{job.role}</p>
                </div>
                <p className="text-gray-400 text-sm shrink-0">{job.period}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className="text-teal-400 shrink-0 mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
