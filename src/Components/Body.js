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
                <div className="flex text-center justify-center font-mono text-5xl pb-7 font-semibold animate__animated animate__zoomIn animate__delay-1s">
                    
                    {props.greeting}
                </div>

                <div className="flex text-center justify-center  pb-7 animate__animated animate__fadeInDown animate__delay-1s">
                    <img src="./bitmoji_edit.png"  width={300} height={300}></img> 
                </div>

                <div className="flex text-center justify-center font-mono text-3xl pb-7 font-semibold animate__animated animate__fadeInUp animate__delay-1s">
                    
                    Hey, I'm Vincent {emoji.getUnicode("boy")}{emoji.getUnicode("v")}
                </div>

                

                <div className="flex text-center justify-center font-mono font-extrabold text-5xl pb-7 w-2/5 animate__animated animate__bounceInUp animate__delay-1s"> 
                    Continously learning and building software.
                </div>

                <div className="flex text-center justify-center font-mono text-2xl pb-8 max-w-3xl font-semibold animate__animated animate__fadeInLeft animate__delay-2s"> 
                    Currently at Kingston Technology {emoji.getUnicode("floppy_disk")}{emoji.getUnicode("space_invader")}
                </div>

                <div className="flex text-center justify-center font-mono pb-12 animate__animated animate__fadeInLeft animate__delay-2s">
                    <a href="https://www.linkedin.com/in/vincentvannguyen/" target="_blank" className="mr-5 font-semibold font-mono border-4 border-black hover:text-white hover:bg-black p-3 text-xl">CONNECT WITH ME</a>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="font-mono text-5xl pb-8 underline font-semibold flex text-center justify-center animate__animated animate__fadeIn animate__delay-3s">
                    PROJECTS
                </div>
                
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate__animated animate__fadeInLeft animate__delay-4s">
                            <a href="https://anime-app-weld.vercel.app/" target="_blank">
                                <img class="object-cover object-center rounded" alt="hero" src="./anime_app.png"/>
                            </a>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate__animated animate__fadeInRight animate__delay-4s">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 hover:bg-red-300 p-3">
                                <a href="https://anime-app-weld.vercel.app/" target="_blank">
                                    ANIME APP
                                </a>
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                ● Created a website where users can create accounts and keep track of the anime they are watching currently
                                <br/>
                                ● Leveraged the use of Firebase for email authentication and Firestore for storing the anime list
                            </p>
                            
                        </div>
                    </div>
                </section>


                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate__animated animate__fadeInLeft animate__delay-5s">
                            <a href="https://weather-46xoqxo2y-covelli1.vercel.app/" target="_blank">
                                <img class="object-cover object-center rounded" alt="hero" src="./weather_app.png"/>
                            </a>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate__animated animate__fadeInRight animate__delay-5s">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 hover:bg-violet-300 p-3">
                                <a href="https://weather-46xoqxo2y-covelli1.vercel.app/" target="_blank">
                                    LEAGUE APP
                                </a>
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                ● Designed a simple React app which allows users to search for the weather status in a certain city/country
                                
                            </p>
                            
                        </div>
                    </div>
                </section>


                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <a href="https://weather-46xoqxo2y-covelli1.vercel.app/" target="_blank">
                                <img class="object-cover object-center rounded" alt="hero" src="./weather_app.png"/>
                            </a>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 hover:bg-blue-300 p-3">
                                <a href="https://weather-46xoqxo2y-covelli1.vercel.app/" target="_blank">
                                    WEATHER APP
                                </a>
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                ● Designed a simple React app which allows users to search for the weather status in a certain city/country
                                
                            </p>
                            
                        </div>
                    </div>
                </section>
            </div>

            

        </div>
    )

}

export default Body;