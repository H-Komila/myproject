import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Rasmjon from './images/11.png'
import Rasmxon from './images/12.png'
import Rasmbek from './images/13.png'

const Sidebar = () => {
  return (
    <>
      <div className='mt-[150px]'>
        <div className='container max-w-[1200px] mx-auto px-4'>
          <div>

       
            <div className='mb-10'>
              <h1 className='w-full md:w-[600px] text-[32px] md:text-[48px] text-slate-950 font-semibold mb-5 text-center md:text-left'>
                Latest Blog & News
              </h1>
            </div>

         
            <ul className='flex flex-col md:flex-row justify-between gap-8'>
              
          
              <li className='bg-white p-4 rounded-lg shadow-md w-full md:w-[350px] h-[450px]
              transition-all duration-300 hover:-translate-y-3 hover:shadow-xl'>
                <img
                  src={Rasmjon}
                  alt="Business strategy"
                  className='w-full h-[230px] mb-4 object-cover rounded-md transition-transform duration-300 hover:scale-105'
                />
                <h2 className='text-xl font-semibold mb-2'>
                  Why you have to digitalize in <br /> 2021
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
                  src={Rasmxon}
                  alt="Business strategy"
                  className='w-full h-[230px] mb-4 object-cover rounded-md transition-transform duration-300 hover:scale-105'
                />
                <h2 className='text-xl font-semibold mb-2'>
                  Our internal process and longerm vision
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
                  src={Rasmbek}
                  alt="Business strategy"
                  className='w-full h-[230px] mb-4 object-cover rounded-md transition-transform duration-300 hover:scale-105'
                />
                <h2 className='text-xl font-semibold mb-2'>
                  Helping the next generation of leaders
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
      </div>
    </>
  )
}

export default Sidebar
