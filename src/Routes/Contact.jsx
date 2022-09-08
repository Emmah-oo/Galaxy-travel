import React from 'react'
import Hero from '../Components/Hero'

const Contact = () => {
  return (
    <div>
        <Hero heading='CONTACT' desc='Contact GLX Travel'/>
        <div className='bg-black text-white py-10'>
            <form className='flex flex-col items-center justify-center gap-5'>
                <div className='flex flex-col gap-2 w-[70%]'>
                    <label htmlFor="Name">Your Name</label>
                    <input type="text" name="text" className='outline-none bg-gray-400' />
                </div>

                <div className='flex flex-col gap-2 w-[70%]'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className='outline-none bg-gray-400' />
                </div>

                <div className='flex flex-col gap-2 w-[70%]'>
                    <label htmlFor="Subject">Subject</label>
                    <input type="text" name="text" className='outline-none bg-gray-400' />
                </div>

                <div className='flex flex-col gap-2 w-[70%]'>
                    <label htmlFor="Details">Details</label>
                    <textarea name="" className='outline-none bg-gray-400' cols="25" rows="10"></textarea>
                </div>
                <input type="submit" value="Submit" className='border py-2 px-6 cursor-pointer' />
            </form>
        </div>
    </div>
  )
}

export default Contact