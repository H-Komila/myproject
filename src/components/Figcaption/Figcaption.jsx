import React from 'react'
import Image from './images/image.png'

const Figcaption = () => {
  return (
    <section className="mt-[100px] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <ul className="flex flex-col lg:flex-row items-center rounded-2xl overflow-hidden shadow-lg">

          {/* IMAGE */}
          <li className="w-full lg:w-1/2 group overflow-hidden">
            <img
              src={Image}
              alt=""
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover 
              transition-transform duration-700 group-hover:scale-110"
            />
          </li>

          {/* CONTENT */}
          <li
            className="w-full lg:w-1/2 bg-orange-500 p-8 md:p-12 lg:p-16 
            h-auto lg:h-[500px] flex flex-col justify-center
            animate-fade-in-right"
          >
            <h1
              className="text-[28px] md:text-[36px] lg:text-[48px] 
              font-semibold text-white mb-6 leading-tight"
            >
              Energy of a start-up combined with 30 years of experience.
            </h1>

            <button
              className="w-fit px-6 py-3 bg-white text-orange-500 
              rounded-2xl font-semibold text-[16px]
              transition-all duration-300
              hover:bg-orange-100 hover:scale-105"
            >
              See Job Vacancies
            </button>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Figcaption
