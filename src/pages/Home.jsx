import React from 'react'
import HeroSection2 from '../component/LandingPage/HeroSection2';
import icon1 from "../assets/icon.png"


const Home = () => {
  return (
    <div className=''>
      <HeroSection2 />
      <div className=''>
         <img src="https://www.agrohive.co/assets/images/icons/about-2-bg-1.png" alt="" className="absolute left-2 top-[66%]" style={{ zIndex: -1 }}/>  
      </div>
       <div className='flex flex-col md:flex-row gap-8  px-10 font-sora w-full mt-28 mb-20' >
      <div className=" bg-white rounded-lg shadow-xl w-full flex items-center justify-center gap-10 py-10  hover:bg-[#49a760] cursor-pointer" style={{ zIndex: -1 }}>
            <div>
              <p className='text-sm uppercase text-[#6e7673] hover:text-white font-semibold tracking-widest'>What We Do</p>
              <h3 className='text-[#255946] font-semibold mt-6 hover:text-[#f8f9fa]'>Staff <br /> Hiring</h3>
            </div>
            <div className='max-w-24'>
              <img src={icon1} alt="" className="object-cover" />
            </div>
        </div>

        <div className=" bg-white rounded-lg shadow-xl flex gap-10 py-4 px-10 items-center justify-center w-full" style={{ zIndex: -1 }}>
          <div>
            <p className='text-sm uppercase text-[#6e7673] font-semibold tracking-widest'>What We Do</p>
            <h3 className='text-[#255946] font-semibold mt-6'>Staff <br /> Hiring</h3>
          </div>
          <div className='max-w-24'>
            <img src={icon1} alt="" className="object-cover" />
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-xl flex gap-10 py-4 px-10 items-center justify-center w-full" style={{ zIndex: -1 }}>
          <div>
            <p className='text-sm uppercase text-[#6e7673] font-semibold tracking-widest'>What We Do</p>
            <h3 className='text-[#255946] font-semibold mt-6'>Staff <br /> Hiring</h3>
          </div>
          <div className='max-w-24'>
            <img src={icon1} alt="" className="object-cover" />
          </div>
        </div>

      </div> 
    </div>

  )
}

export default Home

