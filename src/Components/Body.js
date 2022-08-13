import React from "react";


function Body() {
    const emoji = require("emoji-dictionary");


    return (
        <div className="pt-20">

            <div class="flex flex-col items-center">
            <div className="flex text-center justify-center font-mono text-3xl pb-7">
                    
                    HOPE YOU'RE HAVING A GREAT SUMMER!
                </div>

                <div className="flex text-center justify-center  pb-7">
                    <img src="./bitmoji_edit.png"  width={300} height={300}></img> 
                </div>

                <div className="flex text-center justify-center font-mono text-3xl pb-7">
                    
                    Hey, I'm Vincent {emoji.getUnicode("boy")}{emoji.getUnicode("v")}
                </div>

                

                <div className="flex text-center justify-center font-mono font-extrabold text-5xl pb-7 w-2/5"> 
                    Continously learning and building software.
                </div>

                <div className="flex text-center justify-center font-mono text-2xl pb-8 max-w-3xl"> 
                    Currently at Kingston Technology {emoji.getUnicode("floppy_disk")}{emoji.getUnicode("space_invader")}
                </div>

                <div className="flex text-center justify-center font-mono pb-8">
                    <a href="https://www.linkedin.com/in/vincentvannguyen/" target="_blank" class="mr-5  font-mono border-2 border-black hover:text-white hover:bg-black p-3">CONNECT WITH ME</a>
                </div>
            </div>

            

        </div>
    )

}

export default Body;