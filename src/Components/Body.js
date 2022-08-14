import React from "react";

import 'animate.css'


function Body(props) {
    const emoji = require("emoji-dictionary");
    let body_text_color = null


    if(props.season === "summer") {
        body_text_color = "text-black"
    }


    return (
        <div className="pt-20">

            <div className="flex flex-col items-center">
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
                    Continously learning and building software.
                </div>

                <div className="flex text-center justify-center font-mono text-2xl pb-8 max-w-3xl font-semibold animate__animated animate__fadeInLeft animate__delay-2s"> 
                    Currently at Kingston Technology {emoji.getUnicode("floppy_disk")}{emoji.getUnicode("space_invader")}
                </div>

                <div className="flex text-center justify-center font-mono pb-8 animate__animated animate__fadeInLeft animate__delay-2s">
                    <a href="https://www.linkedin.com/in/vincentvannguyen/" target="_blank" className="mr-5 font-semibold font-mono border-4 border-black hover:text-white hover:bg-black p-3 text-xl">CONNECT WITH ME</a>
                </div>
            </div>

            

        </div>
    )

}

export default Body;