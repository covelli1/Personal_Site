import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { skills } from '../data';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-teal-400 font-semibold text-lg tracking-widest uppercase mb-4">
          Full Stack Software Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Vincent Nguyen
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-6 max-w-xl mx-auto">
          Building tools that make a difference
        </p>

        <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Skills</p>
        <div className="flex flex-col gap-2 mb-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-wrap justify-center gap-2">
              {items.map(skill => (
                <span
                  key={skill}
                  className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="bg-teal-400 hover:bg-teal-300 text-navy font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            View Projects →
          </a>
          <a
            href="/Vincent_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 hover:border-teal-400 hover:text-teal-400 text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            Download Resume <FontAwesomeIcon icon={faDownload} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
