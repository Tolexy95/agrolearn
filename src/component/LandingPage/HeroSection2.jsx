import React, { useState, useEffect } from 'react';
import agric1 from "../../assets/Agric -man.jpg";
import agric2 from "../../assets/agric -man2.jpg";
import farm from '../../assets/farm.jpg'
const HeroSection2 = () => {

  return (
    <div className="flex p-8">
      <div >
     
        <h1 className=" text-3xl w-[470px] ml-20">
          Training, Staff Hiring and Workforce Management Made Easy for
          Agric-Food Businesses.
        </h1>

        <p className="w-[470px] text-xl ml-20 mt-10">
          Access and hire well trained agricultural workforces that meets your
          agric-food business skills needs.
        </p>
      </div>

      <div className="flex gap-5 ml-24">
        <img src={agric2} alt=""  className="h-[300px]"/>
        <img src={agric1} alt="" />
      </div>

     
    </div>
  );
};

export default HeroSection2;
