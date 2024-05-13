import React from 'react'
import serviceFruit from "../assets/agrohive-service-fruit.jpg";
import gardenMan from "../assets/agrohive-service-garden.jpg";
import soilTester from "../assets/agrohive-service-workforcemgt.jpg";
import { PiPottedPlantThin } from "react-icons/pi";
import { FaTractor } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

const Service1 = () => {

    const serviceArray = [
        {
          imgUrl: serviceFruit,
          iconA: PiPottedPlantThin,
          title: "Accelerate for Agribusinesses",
          description:
            "Through Accelerate for agribusinesses, we offer tailored virtual courses, in-person training and farm set-up solutions to agri-food business owners, managers or investors in Africa and the diaspora. Our goal is to assist you with the training and support you need in making the best agri-food business investment, management and growth decisions",
        },
    
        {
          imgUrl: gardenMan,
          iconB: FaTractor,
          title: "Workforce Hiring",
          description:
            "We assist agrifood businesses to hire agricultural workforce and consultants. Our agricultural talents are well trained with industry relevant curriculum and tools to prepare them to optimally manage your agrifood business and farm set-up needs. Our expert consultants have years of experience in the agricultural sector.",
        },
    
        {
          imgUrl: soilTester,
          iconC: GiFruitBowl,
          title: "Workforce Management & Performance Tracking",
          description:
            "Through our digital staff performance tracking solution, we are helping agri-food businesses cut down their workforce management costs by 50%, reduce poor workforce performance, theft and inaccurate data collection. Agri-food businesses can now easily manage and track their workforce performance.",
        },
      ];

  return (
    <div>
       <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10">
        {serviceArray.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl mb-4 hover:border-b-4 border-green-600">
            <div className="">
              <img src={card.imgUrl} alt="" className="w-full pb-10 rounded-md" />
              <div className="relative">
                {card.iconA && (
                  <card.iconA className="w-24 h-24 p-2 right-24 mb-10 bottom-[420px] border-8 border-white absolute md:right-32 md:bottom-[300px] lg:right-40 lg:bottom-[225px] bg-[#49A760] hover:bg-green-500 rounded-full text-white" />
                )}
                {card.iconB && (
                  <card.iconB className="w-24 h-24 p-2 right-24 mb-10 bottom-[328px] border-8 border-white absolute md:right-32 md:bottom-[240px] lg:right-40 lg:bottom-[225px] bg-[#49A760] hover:bg-green-500 rounded-full text-white"/>
                )}
                {card.iconC && (
                  <card.iconC className="w-24 h-24 p-2 right-24 mb-10 bottom-[412px] border-8 border-white absolute md:right-32 md:bottom-[270px] lg:right-40 lg:bottom-[250px] bg-[#49A760] hover:bg-green-500 rounded-full text-white"/>
                )}
                <h1 className="text-xl text-[24px] text-center px-[36px] text-[#176300]">{card.title}</h1>
                <p className="text-[#6E7673] mt-2 px-[36px] leading-7 pb-8 text-[15px] text-center">{card.description}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service1
