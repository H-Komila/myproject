import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/logo.svg'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className='bg-white w-full p-4 shadow-xl fixed left-0 right-0 z-10 overflow-x-hidden'>
        <div className='container max-w-[1200px] mx-auto px-4'>
          <div className='nav__container flex justify-between items-center'>

         
            <Link to={"/"}>
              <img className='w-40' src={Logo} alt="" />
            </Link>

         
            <ul className='hidden md:flex gap-10 items-center'>
              <li className='nav__item relative text-gray-500 font-[500] text-[20px] transition-colors duration-300 hover:text-orange-500
                after:content-[""] after:absolute after:-left-1 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'>
                <Link to={"/"}>About Us</Link>
              </li>

              <li className='nav__item relative text-gray-500 font-[500] text-[20px] transition-colors duration-300 hover:text-orange-500
                after:content-[""] after:absolute after:-left-1 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'>
                <Link to={"/careers"}>Careers</Link>
              </li>

              <li className='nav__item relative text-gray-500 font-[500] text-[20px] transition-colors duration-300 hover:text-orange-500
                after:content-[""] after:absolute after:-left-1 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'>
                <Link to={"/services"}>Services</Link>
              </li>

              <li className='nav__item relative text-gray-500 font-[500] text-[20px] transition-colors duration-300 hover:text-orange-500
                after:content-[""] after:absolute after:-left-1 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'>
                <Link to={"/blog"}>Blog</Link>
              </li>

              <li className='nav__item relative text-gray-500 font-[500] text-[20px] transition-colors duration-300 hover:text-orange-500
                after:content-[""] after:absolute after:-left-1 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'>
                <Link to={"/contact"}>Contact us</Link>
              </li>

              <button className='p-3 bg-orange-100 rounded-full text-orange-500 font-[700] text-[18px] shadow-xl hover:bg-orange-500 hover:text-gray-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1'>
                Clone project
              </button>
            </ul>

            
            <button
              className='md:hidden text-3xl text-orange-500'
              onClick={() => setOpen(!open)}
            >
              {open ? "✖" : "☰"}
            </button>

          </div>
        </div>

        
        <ul
          className={`md:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 flex flex-col gap-6 px-4
          ${open ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}
        >
          <li><Link to={"/"} onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link to={"/careers"} onClick={() => setOpen(false)}>Careers</Link></li>
          <li><Link to={"/services"} onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to={"/blog"} onClick={() => setOpen(false)}>Blog</Link></li>
          <li><Link to={"/contact"} onClick={() => setOpen(false)}>Contact us</Link></li>
          <button className='p-3 bg-orange-100 rounded-full text-orange-500 font-[700] text-[18px] shadow-xl'>
            Clone project
          </button>
        </ul>

      </nav>
    </>
  )
}

export default Nav
