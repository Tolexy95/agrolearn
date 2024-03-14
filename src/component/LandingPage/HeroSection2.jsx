import React, { useContext } from 'react';
import agric1 from "../../assets/Agric -man.jpg";
import agric2 from "../../assets/agric -man2.jpg";
import { NavLink } from 'react-router-dom';
import { SideBarContext } from '../../context/SideBarProvider';


const HeroSection2 = () => {
  const { isNavOpen } = useContext(SideBarContext);
  return (
    <div className={`flex flex-col md:flex-row p-5 md:p-12 lg:py-20  md:gap-6 lg:gap-5 justify-between font-inter ${isNavOpen ? '' : 'bg-[#f6f5f283]'}`}>

      <div className='md:max-w-72 lg:max-w-[800px]' >
        <h1 className="text-xl lg:text-[2.4rem] text-[#255946] font-sora font-semibold tracking-wide" style={{ lineHeight: '1.2' }}>
          Training, Staff Hiring <br/><span className='lg:ml-48 ml-32'>&</span>  <br/>Workforce Management
        </h1>
        <p className='text-sm italic mt-3 lg:mt-5 text-[#255946be] lg:text-2xl'>Made Easy for
          Agri-Food Businesses</p>

        <p className="text-base mt-8 lg:text-xl lg:w-[600px]  leading-8 tracking-widest">
          Access and hire well trained agricultural workforce that meets your
          agric-food business skills needs.
        </p>

        <div className="hidden md:flex mt-12 md:items-center md:justify-center md:w-[250px] lg:w-[500px]">
          <button className='lg:w-[450px] md:w-[250px]' style={{ zIndex: isNavOpen ? -1 : '0' }}>
            <NavLink href="/portal" className="btn w-full font-semibold text-lg  bg-[#00cc3c] text-white hover:bg-[#176300]">
              Visit Portal
            </NavLink>
          </button>
        </div>
      </div>

      <div className={`flex gap-5 mt-6 md:mt-0`} style={{ zIndex: isNavOpen ? -1 : 'auto' }}>
        <div className="">
          <img src={agric2} alt="" className='' />
        </div>
        <div className="">
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