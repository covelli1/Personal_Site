import React from "react";

function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 mt-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">© 2026 Vincent Nguyen</p>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/covelli1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vincentvannguyen/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
