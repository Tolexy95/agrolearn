import React from "react";
import icon1 from "../../assets/farmerIcon.png";
import { FaTractor } from "react-icons/fa6";
import { PiTreePalm } from "react-icons/pi";


const FeatureSection = () => {

  const cards = [
    {
      title: "Staff Hiring",
      description: "What We Do",
      imageUrl: <img src={icon1} alt="Farmer Icon" className="object-cover text-[#255946]" />,
    },
    {
      title: "Staff Training",
      description: "What We Do",
      imageUrl: <FaTractor size={48} className="text-[#255946]" />,
    },
    {
      title: "Workforce Management",
      description: "What We Do",
      imageUrl: <PiTreePalm size={48} className="text-[#255946]" />,
    },
  ];

  return (
    <div className=" bg-white">
      
        <img src="https://www.agrohive.co/assets/images/icons/about-2-bg-1.png" alt="" className="absolute lg:left-[35%] lg:top-[7%] md:top-[5.5%] md:left-0 top-[9.8%] -z-20"/>
   
      
      <div className='flex flex-col lg:flex-row gap-8 px-5 md:px-12 font-sora w-full mt-10 mb-20'>
        {cards.map((card, index) => (
          <div key={index} className="bg-white  hover:bg-[#49a760] rounded-lg flex gap-40 py-12 px-10 items-center justify-center w-full hover:text-[#fff]" style={{boxShadow: '0px 10px 60px 0px rgba(0, 0, 0, 0.3)' }} >
            <div className="">
              <p className='text-sm uppercase font-semibold tracking-widest'>{card.description}</p>
              <h3 className='font-semibold text-xl w-20'>{card.title}</h3>
            </div>
            <div className='max-w-24'>
             {card.imageUrl}
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}

export default FeatureSection;
