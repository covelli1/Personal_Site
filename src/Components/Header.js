import React from "react";

import "@fortawesome/fontawesome-svg-core";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return(
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="hover:bg-orange-300 p-3">
                <FontAwesomeIcon icon={faEnvelope} inverse/>
                <a href="mailto:vincent.nguyen3325@gmail.com" class="mr-5 text-white pl-3 font-mono ">VINCENT.NGUYEN3325@GMAIL.COM</a>
            </div>
            
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="https://www.linkedin.com/in/vincentvannguyen/" target="_blank" class="mr-5 hover:text-gray-900 font-mono hover:bg-green-300 p-3 text-white">LINKEDIN</a>
            <a href="https://github.com/covelli1" target="_blank" class="mr-5 hover:text-gray-900 font-mono hover:bg-amber-300 p-3 text-white">GITHUB</a>

            </nav>
            
        </div>
        </header>
    )
}

export default Header;