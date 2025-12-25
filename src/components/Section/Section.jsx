import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Nima from './image/nima.png'
import Nim from './image/nim.png'
import Ni from './image/ni.png'

const Section = () => {
  return (
    <section className='mt-[100px] mb-[100px]'>
      <div className='container max-w-[1200px] mx-auto px-4'>
        <div>

   
          <div className='mb-10'>
            <h1 className='w-full md:w-[600px] text-[32px] md:text-[48px] text-slate-950 font-semibold mb-5 text-center md:text-left'>
              We help more than 1500 companies from all sectors
            </h1>
            <p className='w-full md:w-[650px] text-[16px] md:text-[18px] text-gray-600 font-medium text-center md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
            </p>
          </div>

        
          <ul className='flex flex-col md:flex-row justify-between gap-8'>

            <li className='bg-white p-4 rounded-lg shadow-md w-full md:w-[350px] h-[450px]
            transition-all duration-300 hover:-translate-y-3 hover:shadow-xl'>
              <img
                src={Nima}
                alt="Business strategy"
                className='w-full h-[230px] mb-4 object-cover rounded-md transition-transform duration-300 hover:scale-105'
              />
              <h2 className='text-xl font-semibold mb-2'>
                Business strategy
              </h2>
              <p className='text-gray-600 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <Link
                to={"/"}
                className="flex items-center gap-2 text-orange-600 transition-all duration-300 hover:gap-4"
              >
                Learn More <FaArrowRight size={20} />
              </Link>
            </li>

            <li className='bg-white p-4 rounded-lg shadow-md w-full md:w-[350px] h-[450px]
            transition-all duration-300 hover:-translate-y-3 hover:shadow-xl'>
              <img
                src={Nim}
                alt="Business strategy"
                className='w-full h-[230px] mb-4 object-cover rounded-md transition-transform duration-300 hover:scale-105'
              />
              <h2 className='text-xl font-semibold mb-2'>
                Digitalization
              </h2>
              <p className='text-gray-600 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <Link
                to={"/"}
                className="flex items-center gap-2 text-orange-600 transition-all duration-300 hover:gap-4"
              >
                Learn More <FaArrowRight size={20} />
              </Link>
            </li>

            <li className='bg-white p-4 rounded-lg shadow-md w-full md:w-[350px] h-[450px]
            transition-all duration-300 hover:-translate-y-3 hover:shadow-xl'>
              <img
                src={Ni}
                alt="Business strategy"
                className='w-full h-[230px] mb-4 object-cover rounded-md transition-transform duration-300 hover:scale-105'
              />
              <h2 className='text-xl font-semibold mb-2'>
                Risk assessment
              </h2>
              <p className='text-gray-600 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <Link
                to={"/"}
                className="flex items-center gap-2 text-orange-600 transition-all duration-300 hover:gap-4"
              >
                Learn More <FaArrowRight size={20} />
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Section
