import React from 'react'
import { Link } from 'react-router-dom'
import Rasm from './images/1.svg'
import Nimadir from './images/2.svg'
import Xullas from './images/3.svg'
import Odam from './images/4.png'

const Header = () => {
  return (
    <header className='header bg-blue-100 h-[570px] pt-24 pb-10 flex items-center relative top-20'>
      <div className='container max-w-[1200px] mx-auto px-4'>
        <div className='header__container'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div className='header__left lg:w-1/2 text-center lg:text-left'>
              <h1 className='text-[40px] md:text-[58px] leading-[1.1] font-bold text-indigo-900 mb-5'>
                Prosper with our bespoke solutions
              </h1>
              <p className='text-[16px] md:text-[18px] font-[500] text-gray-600 mb-8 max-w-[500px] mx-auto lg:mx-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              
              <div className='flex flex-wrap justify-center lg:justify-start gap-4 mb-10'>
                <button className='px-8 py-4 bg-orange-500 rounded-full text-white font-bold text-[18px] shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105'>
                  See our services
                </button>
                <button className='px-8 py-4 bg-transparent border-2 border-transparent rounded-full text-gray-800 font-bold text-[18px] hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-sm'>
                  See All Services
                </button>
              </div>

              <div className='worked-with'>
                <p className='text-[15px] font-bold text-gray-400 mb-4 uppercase tracking-wider'>Worked with 100+ Companies</p>
                <div className='header__logos flex flex-wrap justify-center lg:justify-start gap-8 opacity-60'>
                  <Link to={"/"}><img className='w-[100px] md:w-[130px] grayscale hover:grayscale-0 transition-alltransition-transform duration-500 ease-in-out hover:scale-105' src={Rasm} alt="Client 1" /></Link>
                  <Link to={"/"}><img className='w-[100px] md:w-[130px] grayscale hover:grayscale-0 transition-alltransition-transform duration-500 ease-in-out hover:scale-105' src={Nimadir} alt="Client 2" /></Link>
                  <Link to={"/"}><img className='w-[100px] md:w-[130px] grayscale hover:grayscale-0 transition-alltransition-transform duration-500 ease-in-out hover:scale-105' src={Xullas} alt="Client 3" /></Link>
                </div>
              </div>
            </div>

        
            <div className='header__right lg:w-1/2 flex justify-center lg:justify-end object-contain transition-transform duration-500 ease-in-out hover:scale-105'>
              <div className='relative'>
                 <div className='w-[600px] h-[300px] rounded-tl-full rounded-tr-full bg-orange-300 relative top-[90px] right-[50px] '></div>
                <img className=' absolute max-w-[500px] md:max-w-[600px] -top-[90px] -left-[100px] lg:max-w-[700px] ' src={Odam} alt="Main Illustration"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header