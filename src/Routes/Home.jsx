import React from 'react'
import spaceVideo from '../assets/space.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-full object-contain'>
        <video autoPlay loop muted className='h-full w-full fixed object-cover z-[-1]'>
            <source src={spaceVideo} type='video/mp4' />
        </video>
        <div className='absolute top-[40vh] w-full h-full text-center z-[2] bg-transparent text-white md:top-[30vh] lg:top[20vh]'>
            <h1 className='text-[4rem] font-bold md:text-[6rem] lg:text-[8rem]'>Galaxy. Travel.</h1>
            <p className='text-[1.5rem] text-gray-400'>World's first civilian space travel.</p>
            <div className='mt-[2rem] grid grid-cols-2 items-center justify-center gap-10 w-4/5 m-auto md:w-[50%] lg:w-[30%]'>
                <Link to='/training' className='bg-black py-3 px-1 bg-opacity-80 cursor-pointer'>Training</Link>
                <Link to='/contact' className='cursor-pointer py-3 px-1 bg-gray-600 bg-opacity-80'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Home