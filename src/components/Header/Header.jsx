import React from 'react'
import { Link } from 'react-router-dom'
import Rasm from './images/1.svg'
import Nimadir from './images/2.svg'
import Xullas from './images/3.svg'
import Odam from './images/4.png'

const Header = () => {
  return (
    <header className="bg-blue-100 pt-28 pb-16 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-indigo-900 leading-tight mb-6">
              Prosper with our bespoke solutions
            </h1>

            <p className="text-[16px] md:text-[18px] text-gray-600 mb-8 max-w-[520px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <button className="px-8 py-4 bg-orange-500 rounded-full text-white font-semibold text-[16px]
                transition hover:bg-orange-600 hover:scale-105">
                See our services
              </button>

              <button className="px-8 py-4 rounded-full text-gray-800 font-semibold text-[16px]
                hover:bg-white transition hover:scale-105">
                See All Services
              </button>
            </div>

            <p className="text-[14px] font-semibold text-gray-400 uppercase mb-4">
              Worked with 100+ Companies
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
              {[Rasm, Nimadir, Xullas].map((logo, i) => (
                <Link key={i} to="/">
                  <img
                    src={logo}
                    alt="client"
                    className="w-[100px] md:w-[130px] grayscale
                    transition hover:grayscale-0 hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </div>

         
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">

           
            <div className="absolute w-[180px] h-[180px] bg-orange-400 rounded-3xl -left-6 top-10 hidden lg:block"></div>
            <div className="absolute w-[120px] h-[120px] bg-orange-400 rounded-3xl right-10 bottom-16 hidden lg:block"></div>

            <img
              src={Odam}
              alt="person"
              className="relative z-1 w-full max-w-[350px] md:max-w-[500px] lg:max-w-[620px]"
            />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
