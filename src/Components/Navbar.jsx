import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi"

const Navbar = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Pricing',
      path: '/pricing'
    },
    {
      name: 'Training',
      path: '/training'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  const [navColor, setNavColor] = useState(false)

  const handleNavColor = () => {
    if (window.scrollY > 10) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }

  const handleNavClick = () => setNav(false)

  window.addEventListener('scroll', handleNavColor)

  return (
    <div className={`h-20 z-10 fixed top-0 left-0 w-full transition-all duration-300 ${navColor ? 'bg-black bg-opacity-80' : ''}`}>
      <div className="px-8 flex justify-between items-center h-full">
        <div className='z-10'>
          <h1 className='text-3xl font-bold text-white'><Link to='/'>GLX TRVL</Link></h1>
        </div>
        <ul className="sm:flex hidden">
          {navLinks.map((navLink, i) => (
            <li key={i} className="mx-2 text-white">
              <Link to={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      
        {/* Mobile Nav */}
        <ul className={`flex fixed w-3/4 flex-col right-0 top-0 items-center 
        justify-center h-full gap-10 bg-black bg-opacity-70 transition-all sm:hidden ${nav ? 'translate-x-0 drop-shadow-xg' : 'translate-x-full'} `}>
          {navLinks.map((navLink, i) => (
            <li key={i} className="mx-2 text-white">
              <Link to={navLink.path} onClick={handleNavClick}>{navLink.name}</Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden z-10 cursor-pointer' onClick={handleNav}>
          {
          nav ? <HiOutlineX className='text-white text-3xl' />
          : 
          <AiOutlineMenu  className='text-white text-3xl' />
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar