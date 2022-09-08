import React from 'react'
import Hero from '../Components/Hero'

import moon from '../assets/moon.jpg'

const Training = () => {
  return (
    <div>
        <Hero heading="TRAINING" desc="Pre-Flight & In-Flight Training." />
        <div className='bg-black grid grid-cols-1 lg:grid-cols-2 py-20 md:py-5'>
            <div className='text-white flex flex-col text-start justify-center items-center gap-5 w-4/5 m-auto h-full'>
                <h1 className='text-3xl font-bold md:text-5xl'>Training</h1>
                <p className='text-center'>
                    Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.
                </p>
                <button className='border self-center py-3 px-4'>
                    CONTACT
                </button>
            </div>
            <div>
                <div className='w-[90%] m-auto md:w-[50%]'>
                    <img src={moon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training