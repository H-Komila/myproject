import React from 'react'
import Opa from './images/opa.png'

const Article = () => {
  return (
    <article className='relative top-24'>
      <div className='container max-w-[1200px] mx-auto px-4'>
        <div className='article__container'>
          <ul className='article__list flex flex-col lg:flex-row justify-between items-center gap-10'>

       
            <li className='article__item lg:w-1/2'>
              <h1 className='text-[36px] md:text-[48px] lg:text-[58px] font-bold text-indigo-900 mb-5 leading-[1.2]'>
                We value human, <br /> organizational, and <br /> operational <br /> intelligence, not just <br /> artificial
              </h1>
              <p className='text-[16px] md:text-[18px] font-[700] text-gray-400 mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.
              </p>
              <button className='p-4 md:p-5
                                m-5
                                bg-orange-500 
                                rounded-full
                                text-white
                                font-[700]
                                text-[16px] md:text-[18px]
                                shadow-xl
                                hover:bg-orange-100
                                hover:text-gray-500
                                transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1'>Work With Us</button>
            </li>

          
            <li className='relative lg:w-1/2 flex justify-center items-center'>
              <div className='w-[150px] md:w-[200px] h-[500px] md:h-[599px] rounded-tr-3xl rounded-br-3xl bg-orange-400 absolute bg-opacity-70 left-0 lg:left-auto lg:right-0 transition-transform duration-500 hover:scale-105'></div>
              <img className='w-[300px] md:w-[600px] rounded-3xl transition-transform duration-500 hover:scale-105 hover:-translate-y-2' src={Opa} alt="Illustration" />
            </li>

          </ul>
        </div>
      </div>
    </article>
  )
}

export default Article
