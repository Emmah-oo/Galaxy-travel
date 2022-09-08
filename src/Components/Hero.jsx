import React from 'react'
import heroImg from '../assets/heroImg.jpg'

const Hero = ({heading, desc}) => {
  return (
    <div className='relative'>
    <img src={heroImg} alt="/" className='bg-center bg-no-repeat bg-contain h-[50vh] w-full'/>
        <div className='absolute top-[20vh] text-center w-full'>
            <h1 className='text-white text-4xl font-bold'>{heading}</h1>
            <h2 className='text-white mt-2'>{desc}</h2>
        </div>
    </div>
  )
}

export default Hero