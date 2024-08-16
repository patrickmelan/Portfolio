import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

const Contact = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const templateParams = {
		from_name: name,
		message: message,
		from_email: email
	}

	const serviceId = 'service_1v3snof';
	const publicKey = 'FP7E91fnhgZ1pIeek';
	const templateId = 'template_rm9vqbu';
	

	function sendEmail(e){
		e.preventDefault();

		emailjs.send(serviceId, templateId, templateParams, publicKey)
		.then(
			() => {
				console.log('SUCCESS!');
				confetti({
					particleCount: 300,
					spread: 250,
					origin: { y: 0.65 },
					disableForReducedMotion: true
				})
				setEmail('');
				setMessage('');
				setName('');
			},
			(error) => {
				console.log('FAILED...', error.text);
			},
		);
	};


	return (
		<div className="h-screen pb-4 md:pb-0 flex items-center justify-center">
			<div className="w-full max-w-md p-8 rounded-lg shadow-md">
				<h2 className="mb-4 text-4xl font-mono text-turqoise text-center">Contact Me</h2>
				<form action="#" onSubmit={sendEmail} className="space-y-8">
					<div>
						<label htmlFor="email" className="block mb-2 text-sm font-medium">Name</label>
						<input type="text" value={name} onChange={(e) => {setName(e.target.value)}} id="email" className="shadow-sm bg-blue border-turqoise border-[1px] rounded-lg text-white text-sm block w-full p-2.5" placeholder="What's your name?" required />
					</div>
					<div>
						<label htmlFor="subject" className="block mb-2 text-sm font-medium">Email</label>
						<input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} id="subject" className="block p-3 w-full text-sm bg-blue border-turqoise border-[1px] rounded-lg text-white shadow-sm" placeholder="What's your email?" required />
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
						<textarea id="message" value={message} onChange={(e) => {setMessage(e.target.value)}} rows="6" className="block p-2.5 w-full text-sm bg-blue border-turqoise border-[1px] rounded-lg text-white shadow-sm" placeholder="Type message here...   "></textarea>
					</div>
					<button type="submit" onClick={() => sendEmail} className="py-3 px-5 text-sm w-full font-medium text-center text-white border-turqoise border-[1px] rounded-lg sm:w-full hover:bg-turqoise hover:text-blue duration-500">Send message</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;