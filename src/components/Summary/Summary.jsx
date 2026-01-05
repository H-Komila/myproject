import React from 'react'
import Kkkk from './images/kkkkkk.png'
import Qqqq from './images/qqqq.png'
import { FaRegCirclePlay } from "react-icons/fa6"

const Summary = () => {
  return (
    <section className="mt-[150px] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-4">
        <ul className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <li className="w-full lg:w-1/2 animate-fade-in-right">
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-neutral-900 mb-6">
              Finsweet was a dream to work with
            </h1>

            <p className="text-[16px] md:text-[18px] font-medium text-gray-600 mb-8">
              Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
              Pellentesque a arcu vitae diam dapibus mattis vel vel orci.
            </p>

            <div className="flex items-center gap-6">
              <img src={Kkkk} alt="" className="w-14 h-14 rounded-full" />
              <div>
                <h3 className="font-semibold text-[18px] text-blue-950">
                  Chikelu Neo
                </h3>
                <p className="font-semibold text-[14px] text-orange-500">
                  CEO at MazeAI
                </p>
              </div>
            </div>
          </li>

        
          <li
            className="w-full lg:w-1/2 h-[260px] sm:h-[350px] lg:h-[500px]
            rounded-2xl bg-cover bg-center relative group overflow-hidden
            animate-fade-in-left"
            style={{ backgroundImage: `url(${Qqqq})` }}
          >
           
            <div className="absolute inset-0 bg-black/30"></div>

            
            <div
              className="absolute bottom-6 left-6 flex items-center gap-4 z-10
              transition-all duration-500 group-hover:translate-y-[-6px]"
            >
              <div
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center
                text-orange-600 transition-all duration-500
                group-hover:rotate-90 group-hover:scale-110"
              >
                <FaRegCirclePlay className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-[18px] text-orange-400">
                Play Video
              </h3>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Summary
