import React, { useContext } from "react";
import icon1 from "../../assets/farmerIcon.png";
import { SideBarContext } from "../../context/SideBarProvider";


const FeatureSection = () => {
  const { isNavOpen} = useContext(SideBarContext);

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
    <>
      <div className=' -m-10'>
        <img src="https://www.agrohive.co/assets/images/icons/about-2-bg-1.png" alt="" className="absolute left-2" style={{ zIndex: -1 }} />
      </div>
      
      <div className='flex flex-col lg:flex-row gap-8  px-12 font-sora w-full mt-52 mb-20  '>
        {cards.map((card, index) => (
          <div key={index} className=" bg-white  hover:bg-[#49a760] rounded-lg shadow-xl flex gap-10 py-12 px-10 items-center justify-center w-full hover:text-[#fff]" style={{ zIndex: isNavOpen ? -1 : 0 }} >
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
    </>
  );
}

export default FeatureSection;
