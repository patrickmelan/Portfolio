import { HashLink as Link } from "react-router-hash-link";
import Socials from "./Socials";

export default function Info() {
    return (
        <div className="flex flex-col font-radio w-full pt-8 h-5/6 md:h-screen overflow-none">
            <div id="info" className="flex justify-center w-full pt-8">
                <div className="flex flex-col items-center md:items-start px-4 md:px-0">
                    <p className="font-mono text-xl pl-[6px] text-turqoise">Hello, I'm</p>
                    <h1 className="text-5xl md:text-8xl pt-2 md:pt-4 font-radio">Patrick Melan</h1>
                    <p className="text-xl md:text-6xl pl-1 pt-1 font-mono text-gray-400 py-2">I <span className="">webify</span> your business.</p>
                    
                    <div className="flex w-full md:w-1/2 text-gray-400 py-4 overflow-x-auto">
                        <p className="text-center md:text-left">I am a web developer focused on building amazing websites for my clients. Currently interested in React, but I am always learning!</p>
                    </div>

                    <div className="flex items-center">
                        <Link to="#contact" smooth>
                            <button className="border-turqoise font-mono border-[1px] rounded-lg hover:bg-turqoise hover:text-blue duration-500 p-4 w-full md:w-full">
                                Need a website?
                            </button>
                        </Link>
                        <div className="px-8">
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}