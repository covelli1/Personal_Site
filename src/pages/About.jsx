import SectionHeading from '../Components/SectionHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const facts = [
  { icon: faLocationDot,   label: 'Location',   value: 'San Francisco, CA' },
  { icon: faGraduationCap, label: 'Education',  value: 'UC Irvine — B.S. Computer Science' },
  { icon: faBriefcase,     label: 'Status',     value: 'Open to new opportunities' },
];

export default function About() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading>About</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Full Stack Software Engineer based in San Francisco with experience building internal tools, AI powered applications, and scalable web platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Over the past few years, I've worked closely with scientists, stakeholders, and engineering teams to develop products that improve workflows and solve real world problems. My experience spans everything from monitoring dashboards and data infrastructure to AI driven tools that help users work more efficiently.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy turning complex ideas into simple, intuitive software and am most energized when building products from concept to production. My primary stack includes React, TypeScript, Python, FastAPI, Flask, PostgreSQL, and Docker.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Outside of software, you'll usually find me in the gym, exploring new hiking trails, watching basketball, or continuously learning new technologies. I believe growth comes from staying curious, taking on new challenges, and always finding ways to improve both professionally and personally.
            </p>
          </div>

          <div className="bg-navy-light border border-white/10 rounded-xl p-8 flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-gray-500">At a Glance</p>
            {facts.map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-teal-400/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={icon} className="text-teal-400 text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-gray-200 text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
