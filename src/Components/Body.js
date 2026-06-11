import React from "react";

import 'animate.css'


function Body(props) {
    const emoji = require("emoji-dictionary");
    let body_text_color = null


    if(props.season === "summer") {
        body_text_color = "text-black"
    }


    return (
        <div className="pt-20 ">

            <div className="flex flex-col items-center overflow-hidden">
                <div className="flex text-center justify-center font-mono text-3xl pb-7 font-semibold animate__animated animate__zoomIn animate__delay-1s">

                    {props.greeting}
                </div>

                <div className="flex text-center justify-center  pb-7 animate__animated animate__fadeInDown animate__delay-1s">
                    <img src="./bitmoji_edit.png"  width={300} height={300}></img> 
                </div>

                <div className="flex text-center justify-center font-mono text-3xl pb-7 font-semibold animate__animated animate__fadeInUp animate__delay-1s">
                    
                    Hey, I'm Vincent {emoji.getUnicode("boy")}{emoji.getUnicode("v")}
                </div>

                

                <div className="flex text-center justify-center font-mono font-extrabold text-5xl pb-7 w-2/5 animate__animated animate__bounceInUp animate__delay-1s">
                    Continuously learning and building software.
                </div>

                <div className="flex text-center justify-center font-mono text-2xl pb-8 max-w-3xl font-semibold animate__animated animate__fadeInUp animate__delay-1s">
                    Currently open to new opportunities
                </div>

                <div className="flex text-center justify-center font-mono pb-12 animate__animated animate__fadeInUp animate__delay-1s">
                    <a href="https://www.linkedin.com/in/vincentvannguyen/" target="_blank" className="mr-5 font-semibold font-mono border-4 border-black hover:text-white hover:bg-black p-3 text-xl">CONNECT WITH ME</a>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="font-mono text-5xl pb-8 underline font-semibold flex text-center justify-center animate__animated animate__fadeIn animate__delay-2s">
                    SKILLS
                </div>

                <section className="text-black body-font pb-10">
                    <div className="container mx-auto px-5 py-12 bg-amber-50 shadow-2xl rounded-md bg-opacity-70 animate__animated animate__fadeIn animate__delay-2s">
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
                <div className="font-mono text-5xl pb-8 underline font-semibold flex text-center justify-center animate__animated animate__fadeIn animate__delay-2s">
                    PROJECTS
                </div>
                
                <section className="text-black body-font pb-10">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-amber-50 shadow-2xl rounded-md bg-opacity-70">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate__animated animate__fadeInLeft animate__delay-2s">
                            <a href="https://kerry-charting.vercel.app/" target="_blank">
                                <img className="object-cover object-center rounded" alt="Derm Chart app" src="./charting_app.png"/>
                            </a>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate__animated animate__fadeInRight animate__delay-2s">
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
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate__animated animate__fadeInLeft animate__delay-2s">
                            <a href="https://vincent1-crm.vercel.app/" target="_blank">
                                <img className="object-cover object-center rounded" alt="Job CRM app" src="./job_crm.png"/>
                            </a>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate__animated animate__fadeInRight animate__delay-2s">
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