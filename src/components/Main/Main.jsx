import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Gruh from "./images/gruh.png"
import Salom from './images/salom.png'

const Main = () => {
  return (
    <>
      <main className='bg-blue-100 w-full p-5 mt-[150px]'>
        <div className='container max-w-[1200px] mx-auto px-4'>
          <div className=''>

         
            <div className='mb-10 flex flex-wrap gap-4 justify-center md:justify-start'>
              <button className='p-3.5 text-[16px] font-[600] shadow-2xl rounded-3xl bg-white text-orange-500 transition-transform duration-300 hover:scale-105'>Business strategy</button>
              <button className='p-3.5 text-[16px] font-[600] shadow-2xl rounded-3xl bg-white text-gray-400 transition-transform duration-300 hover:scale-105'>Digitalization</button>
              <button className='p-3.5 text-[16px] font-[600] shadow-2xl rounded-3xl bg-white text-gray-400 transition-transform duration-300 hover:scale-105'>Risk assessment</button>
            </div>

           
            <ul className='flex flex-col lg:flex-row items-center justify-between gap-8 relative'>
             
              <li className='flex-1'>
                <h1 className='text-[32px] md:text-[48px] text-gray-900 font-[600] mb-5'>
                  Helping clients with research and strategy for their business
                </h1>
                <p className='text-[16px] md:text-[18px] text-gray-400 font-[500] mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque. <br />
                  Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                </p>
                <Link to={"/"} className="flex items-center gap-2 text-orange-600 hover:underline transition-all duration-300">
                  See all services <FaArrowRight size={20} />
                </Link>
              </li>

              
              <li className='flex-1 relative w-full'>
                <div className='absolute w-[120px] md:w-[150px] h-[300px] md:h-[465px] bg-orange-500 bg-opacity-60 rounded-tl-3xl rounded-bl-3xl transition-all duration-500 hover:scale-105'></div>
                <img className='max-w-full md:max-w-[700px] rounded-3xl transition-transform duration-500 hover:scale-105' src={Gruh} alt="" />
              </li>
            </ul>

           
            <img className='hidden md:block absolute md:left-[1000px] lg:left-[1000px] -top-[620px] transition-transform duration-500 hover:translate-y-2' src={Salom} alt="" />

          </div>
        </div>
      </main>
    </>
  )
}

export default Main
