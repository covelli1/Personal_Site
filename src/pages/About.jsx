import SectionHeading from '../Components/SectionHeading';

export default function About() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading>About</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              I'm a software engineer with experience building internal tools, monitoring dashboards,
              and data infrastructure at biotech companies. I enjoy turning complex problems into
              clean, maintainable solutions that teams actually rely on.
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
  );
}
