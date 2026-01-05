import React from 'react'
import Rasm from './image/image.png'

const Local = () => {
  return (
    <section className="mb-20">
      <div className="container max-w-[1200px] mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="lg:w-1/2">
            <h1 className="text-[32px] md:text-[48px] font-[700] mb-5 leading-tight">
              We want to get local <br />
              identification in every <br />
              corner of the world in <br />
              this era of global citizenship.
            </h1>

            <p className="text-[16px] md:text-[18px] text-neutral-600 font-[500]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur sit amet eros blandit, hendrerit elit et, mattis purus.
            </p>
          </div>

         
          <div className="lg:w-1/2 relative group">
            <div className="
  hidden lg:block
  absolute -top-8 -right-8
  w-[250px] h-[250px]
  bg-orange-600 rounded-3xl opacity-60
  group-hover:scale-110
  transition duration-500
"></div>


            
            <img
              src={Rasm}
              alt=""
              className="
                relative 
                z-10
                rounded-3xl
                group-hover:scale-105 
                transition duration-500
              "
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Local
