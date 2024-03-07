import React from "react";
import icon1 from "../../assets/icon.png";

const FeatureSection = () => {
  const cards = [
    {
      title: "Staff Hiring",
      description: "What We Do",
      imageUrl: icon1,
    },
    {
      title: "Staff Hiring",
      description: "What We Do",
      imageUrl: icon1,
    },
    {
      title: "Staff Hiring",
      description: "What We Do",
      imageUrl: icon1,
    },
  ];

  return (
    <>
      <div className=' -m-10'>
        <img src="https://www.agrohive.co/assets/images/icons/about-2-bg-1.png" alt="" className="absolute left-2" style={{ zIndex: -1 }} />
      </div>
      <div className='flex flex-col lg:flex-row gap-8  px-12 font-sora w-full mt-28 mb-20'>
        
        {cards.map((card, index) => (
          <div key={index} className=" bg-white rounded-lg shadow-xl flex gap-10 py-4 px-10 items-center justify-center w-full" style={{ zIndex: -1 }}>
            <div>
              <p className='text-sm uppercase text-[#6e7673] font-semibold tracking-widest'>{card.description}</p>
              <h3 className='text-[#255946] font-semibold mt-6'>{card.title}</h3>
            </div>
            <div className='max-w-24'>
              <img src={card.imageUrl} alt="" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeatureSection;
