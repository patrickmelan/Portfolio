import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram,  } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className=''>
        <div className="flex space-x-6">
            <a target='_blank' href='https://github.com/patrickmelan'><FaGithub className='text-3xl hover:text-turqoise duration-500' /></a>
            <a target='_blank' href='https://www.linkedin.com/in/patrick-melan-723488244/'><FaLinkedin className='text-3xl hover:text-turqoise duration-500' /></a>
            <a target='_blank' href='https://www.instagram.com/patrick_.melan'><FaInstagram className='text-3xl hover:text-turqoise duration-500' /></a>
        </div>
    </div>
  )
}
