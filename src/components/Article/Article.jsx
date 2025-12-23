import React from 'react'
import Opa from './images/opa.png'

const Article = () => {
  return (
    <>
       <article className='relative top-30'>
          <div className='container max-w-[1200px] mx-auto px-4'>
            <div className='article__container'>
                <ul className='article__list flex justify-between items-center'>
                  <li className='article__item'>
                      <h1 className='text-[58px] font-bold text-indigo-900 mb-5 '>We value human, <br /> organizational, and <br /> operational  <br />intelligence, not just <br /> artificial</h1>
                      <p className='text-[20px] font-[700] text-gray-400 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.</p>
                      <button className='p-5 m-5
                                       bg-orange-500 
                                       rounded-full
                                       text-white
                                       font-[700]
                                       text-[18px]
                                       shadow-xl
                                       hover:bg-orange-100
                                       hover:text-gray-500
                                       transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1'>Work With Us</button>
                  </li>
                  <li>
                      <img className='w-[500px] transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1' src={Opa} alt="" />
                  </li>
                </ul>
            </div>
          </div>
       </article>
    </>
  )
}

export default Article