import React, { useContext } from 'react';
import agric1 from "../../assets/Agric -man.jpg";
import agric2 from "../../assets/agric -man2.jpg";
import { NavLink } from 'react-router-dom';
import { SideBarContext } from '../../context/SideBarProvider';


const HeroSection2 = () => {
  const { isNavOpen } = useContext(SideBarContext);
  return (
    <div className={`flex flex-col md:flex-row p-8 md:px-16 md:py-20 md:gap-6 lg:gap-3 justify-between mt-6 font-inter ${isNavOpen ? '' : 'bg-[#f6f5f283]'}`}>

      <div className='md:max-w-72 lg:max-w-[800px] lg:flex-1' >
        <h1 className="text-2xl lg:text-[2.8rem] text-[#255946] font-sora font-semibold leading-loose" style={{ lineHeight: '1.3' }}>
          Training, Staff Hiring <br />and Workforce Management
        </h1>
        <p className='text-sm italic mt-2 lg:mt-5 text-[#255946be] lg:text-2xl'>Made Easy for
          Agri-Food Businesses</p>

        <p className="text-base mt-8 lg:text-xl lg:w-[600px]  leading-8 tracking-widest">
          Access and hire well trained agricultural workforce that meets your
          agric-food business skills needs.
        </p>

        <div className="hidden md:flex mt-12 md:items-center md:justify-center md:w-[250px] lg:w-[500px]">
          <button className='lg:w-[450px] md:w-[250px]  '>
            <NavLink href="/portal" className="btn w-full font-semibold text-lg  bg-[#00cc3c] text-white hover:bg-[#176300]">
              Visit Portal
            </NavLink>
          </button>
        </div>
      </div>

      <div className={`flex gap-5 mt-6 md:mt-0`} style={{ zIndex: isNavOpen ? -1 : 'auto' }}>
        <div className="w-full md:h-[300px]">
          <img src={agric2} alt="" className='h-full w-full object-cover' />
        </div>
        <div className="w-full">
          <img src={agric1} alt="" />
        </div>
      </div>



      <div className="md:hidden mt-16 text-center lg:w-[500px]" style={{ zIndex: isNavOpen ? -1 : 'auto' }}>
        <button className='lg:w-[450px] w-[280px] '>
          <NavLink href="/portal" className="btn text-lg w-full font-semibold  bg-[#00cc3c] text-white hover:bg-[#176300]">
            Visit Portal
          </NavLink>
        </button>
      </div>


    </div>
  );
};

export default HeroSection2;
