import React from 'react'
import Nimadir from './images/1.png'
import Nimadi from './images/2.png'
import Nimad from './images/3.png'

const Wrapper = () => {
  return (
    <div className='bg-blue-100 w-full py-12'>
      <div className='container max-w-[1200px] mx-auto px-4'>

       
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12 gap-6'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-950 text-center lg:text-left'>
            We are building software solution that solves your business challenges
          </h1>
          <p className='text-base md:text-lg text-gray-500 text-center lg:text-left max-w-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
          </p>
        </div>

        
        <ul className='flex flex-col md:flex-row items-center justify-between gap-6'>
        
          <li className='w-full md:w-[350px] h-auto p-8 shadow-2xl rounded-3xl bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl'>
            <img className='mb-5 object-contain transition-transform duration-300 hover:scale-110' src={Nimadir} alt="Invoicing" />
            <h2 className='text-xl md:text-2xl font-semibold text-blue-950 mb-3'>Invoicing</h2>
            <p className='text-sm md:text-base text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
            </p>
          </li>

          
          <li className='w-full md:w-[350px] h-auto p-8 shadow-2xl rounded-3xl bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl'>
            <img className='mb-5 object-contain transition-transform duration-300 hover:scale-110' src={Nimadi} alt="Support" />
            <h2 className='text-xl md:text-2xl font-semibold text-blue-950 mb-3'>Support</h2>
            <p className='text-sm md:text-base text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
            </p>
          </li>

          
          <li className='w-full md:w-[350px] h-auto p-8 shadow-2xl rounded-3xl bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl'>
            <img className='mb-5 object-contain transition-transform duration-300 hover:scale-110' src={Nimad} alt="Surveying" />
            <h2 className='text-xl md:text-2xl font-semibold text-blue-950 mb-3'>Surveying</h2>
            <p className='text-sm md:text-base text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Wrapper
