import PMLogo from "../images/PMLogo";
import { HashLink as Link } from "react-router-hash-link";

export default function Nav() {


    return (
        <div className="hidden sm:block">
            <div className="navbar bg-blue w-full px-4 pt-2">
                <div className="flex-1 pl-1">
                    <a href="#"><PMLogo /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-white ">
                        <li><Link to="#about" smooth className="hover:text-turqoise duration-500 font-mono">About Me</Link></li>
                        {/*<li><Link to="#pricing" smooth className="hover:text-turqoise duration-500 font-mono">Pricing</Link></li>*/}
                        <li><Link to="#contact" smooth className="hover:text-turqoise duration-500 font-mono">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}