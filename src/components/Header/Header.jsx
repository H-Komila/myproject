import React from 'react'
import { Link } from 'react-router-dom'
import Rasm from './images/1.svg'
import Nimadir from './images/2.svg'
import Xullas from './images/3.svg'
import Odam from './images/4.png'

const Header = () => {
  return (
    <>
        <header className='header bg-blue-100 relative top-22 h-auto'>
            <div className='container max-w-[1200px] mx-auto px-4'>
                <div className='header__container'>
                    <ul className='header__list flex justify-between items-center '>
                        <li className='header__item'>
                            <h1 className='header__title text-[58px] font-bold text-indigo-900 mb-5'>Prosper with our bespoke solutions</h1>
                            <p className=' text-[16px] font-[700] text-gray-600 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />  Suspendisse varius enim in eros elementum tristique</p>
                            
                                <button className='p-5 m-5
                                       bg-orange-500 
                                       rounded-full
                                       text-white
                                       font-[700]
                                       text-[18px]
                                       shadow-xl
                                       hover:bg-orange-100
                                       hover:text-gray-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1'>See our services</button>
                                <button className='p-5 
                                       rounded-full
                                       text-black-500
                                       font-[700]
                                       text-[18px]
                                       shadow-xl
                                       hover:bg-orange-100
                                       hover:text-gray-500
                                       transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1'>See All Services </button><br />
                            <b className=' text-[15px] font-[700] text-gray-300 mb-5'>Worked with 100+ Companies</b>
                            <span className='header__page flex m-5 gap-10'>
                                 <Link to={"/"}><img className='w-[120px]' src={Rasm} alt="" /></Link>
                                 <Link to={"/"}><img className='w-[120px]' src={Nimadir} alt="" /></Link>
                                 <Link to={"/"}><img className='w-[120px]' src={Xullas} alt="" /></Link>

                            </span>
                        </li>
                        <li>
                            <img className='w-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1' src={Odam} alt="" />
                        </li>
                    </ul>
                </div>
            </div>    
        </header>    
    </>
  )
}

export default Header