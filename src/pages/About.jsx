import SectionHeading from '../Components/SectionHeading';

export default function About() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
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
