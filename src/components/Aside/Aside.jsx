import React from 'react'
import Opasi from './images/opasi.png'
import Haaa from './images/haaa.png'

const Aside = () => {
  return (
    <aside className='mt-20 h-auto'>
      <div className='container max-w-[1200px] mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-10'>


          <div className='lg:w-1/2'>
            <h1 className='text-[36px] md:text-[48px] text-blue-950 font-[600] mb-5'>
              The energy of a start-up combined with 30 years of experience.
            </h1>
            <p className='text-[16px] md:text-[18px] text-gray-500 font-[500] mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
            </p>

            <div className='flex flex-col md:flex-row gap-6'>
              <div className='p-4 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500'>
                <h1 className='text-[32px] md:text-[38px] text-orange-600 font-[700] mb-2'>15+</h1>
                <h2 className='text-[20px] md:text-[24px] text-blue-950 font-[600] mb-2'>Awards received</h2>
                <p className='text-[16px] md:text-[18px] text-gray-500 font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
              </div>

              <div className='p-4 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500'>
                <h1 className='text-[32px] md:text-[38px] text-orange-600 font-[700] mb-2'>500+</h1>
                <h2 className='text-[20px] md:text-[24px] text-blue-950 font-[600] mb-2'>Clients served</h2>
                <p className='text-[16px] md:text-[18px] text-gray-500 font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
              </div>
            </div>
          </div>


          <div className='lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0'>
            <div className='hidden lg:block
                  w-[200px] h-[630px]
                  bg-orange-400 bg-opacity-60
                  rounded-bl-3xl rounded-tl-3xl
                  absolute right-0
                  transition-all duration-500'>
            </div>

            <img
              className='max-w-[400px] md:max-w-[600px] lg:max-w-[600px] 
               rounded-3xl 
               transition-transform duration-500 hover:scale-105'
              src={Opasi}
              alt="Opasi"
            />
          </div>


        </div>
      </div>
    </aside>
  )
}

export default Aside
