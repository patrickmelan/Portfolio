import MeImg from "../images/MeImg";
import { HashLink as Link } from "react-router-hash-link";

export default function About() {
	return (
		<div id="about" className="flex flex-col md:flex-row justify-center mt-16 md:mt-0 px-4 font-radio w-full h-screen overflow-none">
			<div className="flex w-full md:w-2/5 justify-center text-center">
				<div className="flex flex-col w-full items-center">
					<div className="py-4">
						<p className="text-turqoise text-2xl font-mono">About Me</p>
					</div>
					<div className="w-full md:w-4/5 text-wrap overflow-hidden break text-left h-full text-gray-400">
						<p>Hello! My name is Patrick Melan and I am a web developer and designer. I began programming at the start of COVID in February 2020 with the basics of Python. Since then, I have taken numerous high school classes(oh yeah, I'm in high school, too) that have helped me cement the principles of programming. In my time outside of school, I take great pride in building web apps and websites. I like to consider myself proficient in React, but, when I build your website, you can be the judge of that :)</p>
						<p className="pt-4">This year, I will be a senior in high school and I want to put an emphasis on my coding abilities. I want to challenge myself by using more advanced techniques that will improve my code logic, readability, and efficiency. Doing this will not only improve my work for clients, but it will help me become a better programmer in general. </p>
						<p className="pt-4">Speaking of building websites, I can build your website! If you are in need of a website for yourself or a business, please don't hesitate to reach out via the contact form (<Link to="#contact" smooth className="underline underline-offset-4 text-turqoise">click me</Link>) and we can schedule a call and discuss your visions and ideas!</p>
					</div>
				</div>
			</div>
			<div className=" w-full hidden md:flex md:w-2/5 items-center justify-center mt-8 md:mt-0">
				<div className="h-3/4">
					<MeImg />
				</div>
			</div>
		</div>
	);
}