import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaSearchengin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { HiPhone } from 'react-icons/hi'
  
const Footer = () => {
  return (
    <div className='bg-black text-white py-20 px-10 grid md:grid-cols-2 items-center justify-center gap-10 md:gap-20 z-10'>
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-10">
                <FaSearchengin />
                <div className="content">
                    <h1>123 Acme St.</h1>
                    <h1>Houston Texas</h1>
                </div>
            </div>
            <div className="flex items-center gap-10">
                <HiPhone />
                <h1>1-800-123-456</h1>
            </div>
            <div className="flex items-center gap-10">
                <HiMail />
                <h1>Trips@galaxy.com</h1>
            </div>
        </div>
        <div className="">
            <h1 className='text-2xl font-bold mb-2'>About the company</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam"
            </p>
            <div className="flex items-center justify-center gap-10 mt-10">
                <FaFacebook />
                <FaLinkedinIn />
                <FaTwitter />
            </div>
        </div>
    </div>
  )
}

export default Footer