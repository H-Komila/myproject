import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Energiy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <div className='py-12 lg:py-24'>
      <div className='container max-w-[1200px] mx-auto px-4'>
        <div>
      
          <span className='flex flex-col lg:flex-row justify-between gap-4 mb-8'>
            <h1 className='text-[36px] md:text-[42px] lg:text-[48px] text-slate-950 font-[600]'>
              The energy of a start-up combined with 30 years of experience
            </h1>
            <p className='text-[16px] md:text-[18px] text-gray-500 font-[500] mt-4 lg:mt-0 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
            </p>
          </span>


          <ul ref={ref} className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-6'>
          
            <li className='w-full md:w-[48%] lg:w-[23%] h-auto p-4 bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300'>
              <h1 className='text-[36px] text-orange-500 font-[800] mb-2'>
                {inView ? <CountUp end={15} duration={2} /> : 0}+
              </h1>
              <h2 className='text-[24px] text-neutral-950 font-[600] mb-2'>Awards received</h2>
              <p className='text-[16px] text-gray-600 font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </li>

      
            <li className='w-full md:w-[48%] lg:w-[23%] h-auto p-4 bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300'>
              <h1 className='text-[36px] text-orange-500 font-[800] mb-2'>
                {inView ? <CountUp end={500} duration={2} /> : 0}+
              </h1>
              <h2 className='text-[24px] text-neutral-950 font-[600] mb-2'>Clients served</h2>
              <p className='text-[16px] text-gray-600 font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </li>

    
            <li className='w-full md:w-[48%] lg:w-[23%] h-auto p-4 bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300'>
              <h1 className='text-[36px] text-orange-500 font-[800] mb-2'>
                {inView ? <CountUp end={34} duration={2} /> : 0}
              </h1>
              <h2 className='text-[24px] text-neutral-950 font-[600] mb-2'>Employees</h2>
              <p className='text-[16px] text-gray-600 font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </li>

        
            <li className='w-full md:w-[48%] lg:w-[23%] h-auto p-4 bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300'>
              <h1 className='text-[36px] text-orange-500 font-[800] mb-2'>
                {inView ? <CountUp end={130} duration={2} /> : 0}+
              </h1>
              <h2 className='text-[24px] text-neutral-950 font-[600] mb-2'>Custom solutions</h2>
              <p className='text-[16px] text-gray-600 font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Energiy
