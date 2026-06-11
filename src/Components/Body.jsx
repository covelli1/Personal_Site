import React from "react";

const resumeUrl = `${import.meta.env.BASE_URL}Vincent_Resume_2026.pdf`;

function Body() {
    return (
        <div>

            {/* Hero */}
            <section id="home" className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-teal-400 font-semibold text-lg tracking-widest uppercase mb-4">
                        Software Engineer
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                            Vincent Nguyen
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                        Building tools that make a difference — Python, TypeScript, React
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
                            Download Resume ↓
                        </a>
                    </div>
                </div>
            </section>

            <div className="flex flex-col">
                <div className="font-mono text-5xl pb-8 underline font-semibold flex text-center justify-center">
                    SKILLS
                </div>

                <section className="text-black body-font pb-10">
                    <div className="container mx-auto px-5 py-12 bg-amber-50 shadow-2xl rounded-md bg-opacity-70">
                        <div className="flex flex-wrap justify-center gap-10 text-center font-mono">
                            <div>
                                <p className="font-extrabold text-lg mb-2">Languages</p>
                                <p className="font-semibold">Python · TypeScript · JavaScript · SQL</p>
                            </div>
                            <div>
                                <p className="font-extrabold text-lg mb-2">Frameworks</p>
                                <p className="font-semibold">Flask · React · Pandas</p>
                            </div>
                            <div>
                                <p className="font-extrabold text-lg mb-2">Technologies</p>
                                <p className="font-semibold">Node.js · PostgreSQL · Docker · AWS · Cypress · Git · REST APIs</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex flex-col">
                <div className="font-mono text-5xl pb-8 underline font-semibold flex text-center justify-center">
                    PROJECTS
                </div>

                <section className="text-black body-font pb-10">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-amber-50 shadow-2xl rounded-md bg-opacity-70">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <a href="https://kerry-charting.vercel.app/" target="_blank">
                                <img className="object-cover object-center rounded" alt="Derm Chart app" src="./charting_app.png"/>
                            </a>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black hover:bg-blue-300 p-3">
                                <a href="https://kerry-charting.vercel.app/" target="_blank">
                                    DERM CHART
                                </a>
                            </h1>
                            <p className="mb-8 leading-relaxed text-black font-semibold">
                                ● AI-powered clinical documentation assistant for dermatology that formats free-text provider notes into structured output using LLM tooling
                                <br/>
                                ● Features dot phrase shortcuts for common terms and strict PHI de-identification guardrails to protect patient privacy
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-black body-font pb-10">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-amber-50 shadow-2xl rounded-md bg-opacity-70">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <a href="https://vincent1-crm.vercel.app/" target="_blank">
                                <img className="object-cover object-center rounded" alt="Job CRM app" src="./job_crm.png"/>
                            </a>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black hover:bg-green-300 p-3">
                                <a href="https://vincent1-crm.vercel.app/" target="_blank">
                                    JOB CRM
                                </a>
                            </h1>
                            <p className="mb-8 leading-relaxed text-black font-semibold">
                                ● Full-stack recruitment management platform that tracks job applications through a visual pipeline from Saved to Offer
                                <br/>
                                ● Includes company and contact management, follow-up scheduling, and a real-time activity dashboard
                            </p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Body;
