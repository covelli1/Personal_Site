import SectionHeading from '../Components/SectionHeading';
import { projects } from '../data';

export default function Projects() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading>Projects</SectionHeading>
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-navy-light rounded-xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition-colors duration-300 md:flex"
            >
              <div className="md:w-1/2 shrink-0">
                <a href={project.href} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </a>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal-400 transition-colors duration-200"
                  >
                    {project.title}
                  </a>
                </h3>
                <ul className="flex flex-col gap-3 mb-6">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                      <span className="text-teal-400 shrink-0 mt-0.5">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
