import React from 'react'
import Nimadir from './images/1.png'
import Nimadi from './images/2.png'
import Nimad from './images/3.png'

const Wrapper = () => {
  return (
    <>
      <div className='bg-blue-100 w-full h-[600px] p-12 md:h-auto'>
        <div className='container max-w-[1200px] mx-auto px-4'>
          <div>

          
            <div className='flex items-center justify-between mb-10 flex-col lg:flex-row gap-6'>
              <h1 className='text-[36px] text-blue-950 font-[600] md:text-[30px] text-center lg:text-left'>
                We are building software solution that solves your business challenges
              </h1>

              <p className='text-[18px] text-gray-500 font-[500] text-center lg:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
              </p>
            </div>

          
            <ul className='flex items-center justify-between flex-col md:flex-row gap-6'>
              
              <li className='w-[350px] h-[280px] p-10 shadow-2xl rounded-3xl bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl'>
                <img className='mb-5 transition-transform duration-300 hover:scale-110' src={Nimadir} alt="" />
                <h1 className='text-[24px] text-blue-950 font-[600] mb-5'>Invoicing</h1>
                <p className='text-[16px] text-gray-500 font-[500] mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                </p>
              </li>

              <li className='w-[350px] h-[280px] p-10 shadow-2xl rounded-3xl bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl'>
                <img className='mb-5 transition-transform duration-300 hover:scale-110' src={Nimadi} alt="" />
                <h1 className='text-[24px] text-blue-950 font-[600] mb-5'>Support</h1>
                <p className='text-[16px] text-gray-500 font-[500] mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                </p>
              </li>

              <li className='w-[350px] h-[280px] p-10 shadow-2xl rounded-3xl bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl'>
                <img className='mb-5 transition-transform duration-300 hover:scale-110' src={Nimad} alt="" />
                <h1 className='text-[24px] text-blue-950 font-[600] mb-5'>Surveying</h1>
                <p className='text-[16px] text-gray-500 font-[500] mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                </p>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Wrapper
