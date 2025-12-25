import React from 'react'
import { Link } from 'react-router-dom'
import Logojon from './images/logojon.svg'
import {FaYoutube,FaInstagram,FaTwitter,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-blue-900 p-[50px] mt-[100px]'>
      <div className='container max-w-[1200px] mx-auto px-4'>
        <div>
          <ul className='flex justify-between'>

           
            <li className='flex-1  '>
              <Link to={'/'}><img className='w-36 mb-5 mx-auto md:mx-0' src={Logojon} alt="Logo" /></Link>
              <h1 className='text-[28px] md:text-[36px] text-white font-[600] mb-5 text-center md:text-left'>Bespoke software <br /> solutions</h1>
              <span className='flex justify-center md:justify-start items-center gap-5 mb-10 md:mb-40'>
                <FaFacebook className="text-blue-600 text-[30px] hover:scale-110 transition-transform duration-300" />
                <FaYoutube className="text-red-600 text-[30px] hover:scale-110 transition-transform duration-300" />
                <FaInstagram className="text-pink-500 text-[30px] hover:scale-110 transition-transform duration-300" />
                <FaTwitter className="text-sky-500 text-[30px] hover:scale-110 transition-transform duration-300" />
              </span>
              <p className='text-lg text-white font-[500] text-center md:text-left'>© All rights reserved – Finsweet</p>
            </li>

           
            <li className='flex-1 relative left-10 '>
              <h1 className='text-[20px] text-white font-[600] mb-4'>Company</h1>
              <Link to={'/'}><p className='text-[16px] text-white font-[500] mb-4 hover:text-orange-400 transition-colors duration-300'>About Us</p></Link>
              <Link to={'/'}><p className='text-[16px] text-white font-[500] mb-4 hover:text-orange-400 transition-colors duration-300'>Careers</p></Link>
              <Link to={'/'}><p className='text-[16px] text-white font-[500] mb-4 hover:text-orange-400 transition-colors duration-300'>Services</p></Link>
              <Link to={'/'}><p className='text-[16px] text-white font-[500] mb-4 hover:text-orange-400 transition-colors duration-300'>Blog</p></Link>
            </li>

         
            <li className='flex-1 text-center md:text-left'>
              <h1 className='text-[20px] text-white font-[600] mb-4'>Connect</h1>
              <Link to={'/'}><p className='text-[16px] text-white font-[500] mb-4 hover:text-orange-400 transition-colors duration-300'>hi@finsweet.com</p></Link>
              <Link to={'/'}><p className='text-[16px] text-white font-[500] mb-4 hover:text-orange-400 transition-colors duration-300'>+(123) 456-7890</p></Link>
            </li>

          
            <li className='flex-1 text-center md:text-left'>
              <form action="">
                <h1 className='text-[20px] text-white font-[600] mb-4'>Join Newsletter</h1>
                <input className='w-full md:w-[300px] h-10 rounded-3xl p-5 mb-5 text-gray-800' type="email" placeholder='Type email here' required />
                <br />
                <button className='p-2.5 text-[16px] font-[600] bg-orange-500 rounded-full mb-5 w-full md:w-auto transition-transform duration-300 hover:scale-105'>
                  Subscribe
                </button>
                <span className='flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-4'>
                  <p className='text-[16px] text-white font-[500] hover:text-orange-400 transition-colors duration-300'>Privacy Policy</p>
                  <p className='text-[16px] text-white font-[500] hover:text-orange-400 transition-colors duration-300'>Terms & Conditions</p>
                </span>
              </form>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
