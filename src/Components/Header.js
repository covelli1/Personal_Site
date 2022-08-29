import React from "react";

import "@fortawesome/fontawesome-svg-core";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'animate.css';

function Header() {
    return(
        <header className="">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center overflow-hidden">
            <div className="hover:bg-orange-300 p-3 animate__animated animate__fadeInLeft">
                <FontAwesomeIcon icon={faEnvelope} className=""/>
                <a href="mailto:vincent.nguyen3325@gmail.com" className="mr-5  pl-3 font-mono text-xl font-semibold">VINCENT.NGUYEN3325@GMAIL.COM</a>
            </div>
            
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center animate__animated animate__fadeInRight">
                <a href="https://www.linkedin.com/in/vincentvannguyen/" target="_blank" className="mr-5 font-semibold hover:text-gray-900 font-mono hover:bg-green-300 p-3 text-xl">LINKEDIN</a>
                <a href="https://github.com/covelli1" target="_blank" className="mr-5 font-semibold hover:text-gray-900 font-mono hover:bg-amber-300 p-3 text-xl">GITHUB</a>

            </nav>
            
        </div>
        </header>
    )
}

export default Header;