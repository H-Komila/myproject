import React from 'react'
import Oo from './images/ooo.png'
import Kk from './images/kk.png'
import Kp from './images/pp.png'
import Kr from './images/rr.png'
import Ks from './images/ss.png'
import Kt from './images/tt.png'
import "../../App.css";


const Human = () => {
    return (
        <div className='relative top-[150px] sm:top-[100px] '>
            <div className="container max-w-[1200px] mx-auto px-4">
                <div>
                    <ul className='flex flex-col md:flex-row items-center justify-between mb-10'>
                        <li className='mb-10 md:mb-0 md:w-1/2'>
                            <h1 className='text-[48px] md:text-[38px] sm:text-[36px] text-gray-950 font-[600]'>
                               We serve clients <br /> with ground <br /> breaking solutions
                            </h1>
                            <p className='text-[18px] md:text-[16px] sm:text-[14px] text-gray-500 font-[500] my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
                            </p>
                            <button className='px-6 py-3 md:px-8 md:py-4 bg-orange-500 rounded-full text-white font-bold text-base md:text-lg shadow-xl
                                hover:bg-orange-100 hover:text-gray-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1'>
                                Work With Us
                            </button>
                        </li>
                        <li className=''>
    <span className='absolute rounded-tl-3xl rounded-bl-3xl w-[150px] sm:w-[120px] h-[362px] sm:h-[527px] bg-orange-500 opacity-80'></span>
    <img className='rounded-3xl w-full md:w-[500px] sm:w-[300px] ' src={Oo} alt="" />
</li>
                    </ul>



                    <ul className='flex flex-col md:flex-row items-center justify-between mb-10'>

                         <li className=''>
    
    <img className='rounded-3xl w-full md:w-[500px] sm:w-[300px] ' src={Kk} alt="" />
</li>
                        <li className='mb-10 md:mb-0 md:w-1/2'>
                            <h1 className='text-[54px] md:text-[48px] sm:text-[36px] text-gray-950 font-[600]'>
                                Business strategy
                            </h1>
                            <p className='text-[18px] md:text-[16px] sm:text-[14px] text-gray-500 font-[500] my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
                            </p>
                        </li>
                       
                    </ul>



                    <ul className='flex flex-col md:flex-row items-center justify-between mb-10'>
                        <li className='mb-10 md:mb-0 md:w-1/2'>
                            <h1 className='text-[48px] md:text-[38px] sm:text-[36px] text-gray-950 font-[600]'>
                               Risk assessment
                               </h1>
                            <p className='text-[18px] md:text-[16px] sm:text-[14px] text-gray-500 font-[500] my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
                            </p>
                    
                        </li>
                        <li className=''>
    
    <img className='rounded-3xl w-full md:w-[500px] sm:w-[300px] ' src={Kp} alt="" />
</li>
                    </ul>



                    <ul className='flex flex-col md:flex-row items-center justify-between mb-10'>

                        <li className=''>
    
    <img className='rounded-3xl w-full md:w-[500px] sm:w-[300px] ' src={Ks} alt="" />
</li>
                        <li className='mb-10 md:mb-0 md:w-1/2'>
                            <h1 className='text-[48px] md:text-[38px] sm:text-[36px] text-gray-950 font-[600]'>
                               Risk assessment
                            </h1>
                            <p className='text-[18px] md:text-[16px] sm:text-[14px] text-gray-500 font-[500] my-4'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
                            </p>
                            </li>
                    </ul>



                    <ul className='flex flex-col md:flex-row items-center justify-between mb-10'>
                        <li className='mb-10 md:mb-0 md:w-1/2'>
                            <h1 className='text-[48px] md:text-[38px] sm:text-[36px] text-gray-950 font-[600]'>
                                Artificial intelligence
                            </h1>
                            <p className='text-[18px] md:text-[16px] sm:text-[14px] text-gray-500 font-[500] my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
                            </p>
                           
                        </li>
                        <li className=''>
    
    <img className='rounded-3xl w-full md:w-[500px] sm:w-[300px] ' src={Kr} alt="" />
</li>
                    </ul>



                    <ul className='flex flex-col md:flex-row items-center justify-between mb-10'>

                        <li className=''>
    <img className='rounded-3xl w-full md:w-[500px] sm:w-[300px] ' src={Kt} alt="" />
</li>
                        <li className='mb-10 md:mb-0 md:w-1/2'>
                            <h1 className='text-[48px] md:text-[38px] sm:text-[36px] text-gray-950 font-[600]'>
                                Smart Contracts
                            </h1>
                            <p className='text-[18px] md:text-[16px] sm:text-[14px] text-gray-500 font-[500] my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
                            </p>
                           
                        </li>
    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Human
