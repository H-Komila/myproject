import React from 'react'
import Opa from './images/opa.png'

const Article = () => {
  return (
    <article className='relative py-12 lg:py-24 top-[50px]'>
      <div className='container max-w-[1200px] mx-auto px-4'>

        <ul className='flex flex-col lg:flex-row justify-between items-center gap-10'>

          <li className='lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-5 leading-snug'>
              We value human, <br /> organizational, and <br /> operational <br /> intelligence, not just <br /> artificial
            </h1>
            <p className='text-base md:text-lg font-semibold text-gray-400 mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.
            </p>
            <button className='px-6 py-3 md:px-8 md:py-4 bg-orange-500 rounded-full text-white font-bold text-base md:text-lg shadow-xl
                               hover:bg-orange-100 hover:text-gray-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1'>
              Work With Us
            </button>
          </li>

          
          <li className='relative lg:w-1/2 flex justify-center items-center'>
           
            <div className='w-[100px] md:w-[180px] h-[260px] md:h-[600px] rounded-tl-3xl rounded-bl-3xl bg-orange-400 bg-opacity-70 absolute left-0  lg:right-0 transition-transform duration-500 hover:scale-105'></div>
            <img className='w-[250px] md:w-[600px] rounded-3xl transition-transform duration-500 hover:scale-105 hover:-translate-y-2' src={Opa} alt="" />
          </li>

        </ul>
      </div>
    </article>
  )
}

export default Article
