import React from 'react'
import Img1 from "./images/image1.png";
import Img2 from "./images/image2.png";
import Img3 from "./images/image3.png";
import Rasm4 from './images/rasm.png';

const Work = () => {
  const data = [
    { img: Img1 },
    { img: Img2 },
    { img: Img3 },
    { img: Rasm4 },
  ];

  return (
    <section className="">
      <div className="container max-w-[1200px] mx-auto px-4">

       
        <div className="mb-12">
          <h1 className="text-[36px] md:text-[48px] font-[600] mb-5">
            Teamwork is the only <br /> way we work
          </h1>
          <p className="text-gray-500 text-[16px] md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit  et, mattis purus. Vivamus commodo suscipit tellus et <br /> pellentesque.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative h-[520px] rounded-2xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >
             
              <div className="
                absolute inset-0 bg-black/30
                opacity-0 group-hover:opacity-100
                transition duration-500
              "></div>

              
              <div className="
                absolute bottom-0 left-0 w-full
                bg-black rounded-2xl p-6
                translate-y-[120%] opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-500 ease-out
              ">
                <h2 className="text-[14px] text-zinc-400 font-[600] mb-2">
                  Support Assist
                </h2>
                <h3 className="text-[22px] text-white font-[600] mb-2">
                  Selby Stuart
                </h3>
                <p className="text-[14px] text-zinc-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
