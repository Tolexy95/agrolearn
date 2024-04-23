import React from "react";
import icon1 from "../../assets/farmerIcon.png";


const FeatureSection = () => {

  const cards = [
    {
      title: "Staff Hiring",
      description: "What We Do",
      imageUrl: icon1,
    },
    {
      title: "Staff Training",
      description: "What We Do",
      imageUrl: icon1,
    },
    {
      title: "Workforce Management",
      description: "What We Do",
      imageUrl: icon1,
    },
  ];

  return (
    <div className="bg-blue-800 dark:bg-white">
      <div className='bg-blue-800 dark:bg-white w-full'>
        <img src="https://www.agrohive.co/assets/images/icons/about-2-bg-1.png" alt="" className="absolute lg:left-[35%] lg:top-[10%] md:top-[5.5%] md:left-0 top-[9.8%] -z-20"/>
      </div>
      
      <div className='bg-blue-800 dark:bg-white flex flex-col lg:flex-row gap-8 px-5 md:px-12 font-sora w-full mt-10 mb-20'>
        {cards.map((card, index) => (
          <div key={index} className="bg-white  hover:bg-[#49a760] rounded-lg flex gap-10 py-12 px-10 items-center justify-center w-full hover:text-[#fff]" style={{boxShadow: '0px 10px 60px 0px rgba(0, 0, 0, 0.3)' }} >
            <div className="">
              <p className='text-sm uppercase font-semibold tracking-widest'>{card.description}</p>
              <h3 className='font-semibold mt-6 text-xl'>{card.title}</h3>
            </div>
            <div className='max-w-24'>
              <img src={card.imageUrl} alt="" className="object-cover text-[#255946]" />
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}

export default FeatureSection;
