import React from 'react';
import agric1 from "../../assets/Agric -man.jpg";
import agric2 from "../../assets/agric -man2.jpg";
import Button from '../Button/CustomButton';
import { ButtonSize, ButtonState } from '../Button/ButtonStyles';



const HeroSection2 = () => {
  return (
    <div className={`flex flex-col md:flex-row p-5 md:p-12 lg:py-20  md:gap-6 lg:gap-5 justify-between font-inter bg-[#f6f5f283] mt-20`}>

      <div className='md:max-w-72 lg:max-w-[800px]' >
        <h1 className="text-2xl lg:text-[2.8rem] text-[#255946] font-sora font-semibold leading-loose" style={{ lineHeight: '1.3' }}>
          Training, Staff Hiring <br />and Workforce Management
        </h1>
        <p className='text-sm italic mt-3 lg:mt-5 text-[#255946be] lg:text-2xl'>Made Easy for
          Agri-Food Businesses</p>

        <p className="text-base mt-8 lg:text-xl lg:w-[600px]  leading-8 tracking-widest">
          Access and hire well trained agricultural workforce that meets your
          agric-food business skills needs.
        </p>

        <div className="hidden md:flex mt-12 lg:w-[500px]">
          <Button
            value='Visit Portal'
            size={ButtonSize.lg}
            variant={ButtonState.PRIMARY}
          />
        </div>
      </div>

      <div className={`flex gap-5 mt-6 md:mt-0`}>
        <div className="">
          <img src={agric2} alt="" className='' />
        </div>
        <div className="">
          <img src={agric1} alt="" />
        </div>
      </div>


      <div className="md:hidden mt-16 text-center lg:w-[500px]">
        <Button
          value='Visit Portal'
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
        />
      </div>



    </div>
  );
};

export default HeroSection2;