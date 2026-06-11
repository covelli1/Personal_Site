import SectionHeading from '../Components/SectionHeading';
import { skills } from '../data';

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading>Skills</SectionHeading>
        <div className="bg-navy-light rounded-xl p-8 border border-white/10">
          <div className="flex flex-col gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
