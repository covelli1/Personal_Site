import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const resumeUrl = `${import.meta.env.BASE_URL}Vincent_Resume_2026.pdf`;
const baseUrl = import.meta.env.BASE_URL;

const skills = {
  Languages:    ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  Frameworks:   ['Flask', 'React', 'Pandas'],
  Technologies: ['Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Cypress', 'Git', 'REST APIs'],
};

const experience = [
  {
    company: 'Eikon Therapeutics',
    role: 'Software Engineer II',
    period: 'Mar 2025 – Jul 2025',
    bullets: [
      'Built an internal animated content tool and interactive preview app that cut GIF creation time by 70% — adopted by all teams with 120 monthly assets created.',
      'Designed and co-led a 24/7 monitoring dashboard that achieved 99.95% uptime and lowered mean time to resolution by 40%.',
      'Optimized Docker-based deployment workflows, reducing deploy time by 20% and rollback rate by 50%.',
      'Delivered the back end for an ML labeling tool with 6 new API endpoints, supporting ~2,000 images/day with annotation throughput up 60%.',
    ],
  },
  {
    company: 'Eikon Therapeutics',
    role: 'Software Engineer I',
    period: 'Nov 2022 – Mar 2025',
    bullets: [
      'Implemented secure SSO for internal apps with HTTPS and Microsoft Entra/MSAL across dev, alpha, and production environments.',
      'Optimized a real-time data monitor with server-side caching, reducing API volume by ~50% and cutting initial load from ~8s to ~3s.',
      'Built and maintained Cypress end-to-end tests, growing coverage from 0% to ~70% and reducing QA-found regressions by 35%.',
      'Engineered configurable tables, saved views, and SQL full-text search in a React visualization app — reducing key dataset lookup time from ~45s to ~10s.',
    ],
  },
  {
    company: 'Kingston Technology',
    role: 'Programming Analyst',
    period: 'Jul 2021 – Oct 2022',
    bullets: [
      'Partnered with manager to resolve 8–12 bugs per sprint at ~90% first-fix pass rate; regression tests reduced repeat incidents by 25%.',
      'Led full lifecycle development of an internal web app that tracked and expedited malfunction escalations.',
      'Replatformed 3 Lotus Notes apps to a single web stack, lowering maintenance effort by ~20% and removing Notes license dependencies.',
    ],
  },
];

const projects = [
  {
    title: 'Derm Chart',
    href: 'https://kerry-charting.vercel.app/',
    image: `${baseUrl}charting_app.png`,
    alt: 'Derm Chart app',
    bullets: [
      'AI-powered clinical documentation assistant for dermatology that formats free-text provider notes into structured output using LLM tooling.',
      'Features dot phrase shortcuts for common terms and strict PHI de-identification guardrails to protect patient privacy.',
    ],
  },
  {
    title: 'Job CRM',
    href: 'https://vincent1-crm.vercel.app/',
    image: `${baseUrl}job_crm.png`,
    alt: 'Job CRM app',
    bullets: [
      'Full-stack recruitment management platform that tracks job applications through a visual pipeline from Saved to Offer.',
      'Includes company and contact management, follow-up scheduling, and a real-time activity dashboard.',
    ],
  },
];

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
      {children}
      <span className="flex-1 h-px bg-white/10 max-w-xs" />
    </h2>
  );
}

function Body() {
  return (
    <div>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-teal-400 font-semibold text-lg tracking-widest uppercase mb-4">
            Full Stack Software Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Vincent Nguyen
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Building tools that make a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-teal-400 hover:bg-teal-300 text-navy font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              View Projects →
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 hover:border-teal-400 hover:text-teal-400 text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              Download Resume <FontAwesomeIcon icon={faDownload} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>About</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                I'm a software engineer with experience building internal tools, monitoring dashboards, and data infrastructure at biotech companies. I enjoy turning complex problems into clean, maintainable solutions that teams actually rely on.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently open to new opportunities where I can keep building impactful software.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-teal-400 font-bold">▸</span>
                UC Irvine — B.S. Computer Science
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-teal-400 font-bold">▸</span>
                San Francisco, CA
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-teal-400 font-bold">▸</span>
                Open to new opportunities
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/vincentvannguyen/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/covelli1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
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

      {/* Experience */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
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

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
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

    </div>
  );
}

export default Body;
