import React from 'react'
import consultancyService from "../assets/agrohive-consultancyservice.jpg";
import AgroskillUp from "../assets/agrohive-service-skilluptraining.jpg";
import AgricfoodSupport from "../assets/agrohive-supportservice.jpg";
import { PiPottedPlantThin } from "react-icons/pi";
import { FaTractor } from "react-icons/fa";
import { GrCubes } from "react-icons/gr";

const Service2 = () => {
   
    const serviceArray = [
        {
          imgUrl: AgroskillUp,
          iconA: FaTractor,
          title: "Agroskill-up Training",
          description:
            "AgroHive offers Agroskill-up training for agriculture graduates, undergraduates and entry-level agrifood employees, seeking to upskill, get sustainable jobs or internship placements. Our Agroskill-up training with an introduction of digital skill modules in all courses focuses mostly on Agrifood business management, Agriculture value chain development, Agri-product sales & marketing, Agri-finance and Employee branding.",
        },
    
        {
          imgUrl: AgricfoodSupport,
          iconB: PiPottedPlantThin,
          title: "Agrifood Business Support Service",
          description:
            "We have designed HR and agrifood business support services to make agri-food businesses more rewarding for Africans and investors regardless of their location. This is of great importance to us because we understand the challenges Africans and investors in the diaspora encounter while trying to build sustainable agri-food businesses in Africa.",
        },
    
        {
          imgUrl: consultancyService,
          iconC: GrCubes,
          title: "Extension & Consultancy Services",
          description:
            "We offer top-notch extension services to agri-food businesses across Africa. Our goal is to help agri-food businesses and smallholder farmers access timely information and expert support services which is vital in making informed agri-food business decisions. We also help clients with premium agri-food business market research, agri-food business plans and feasibility research.",
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
                  <card.iconA className="w-24 h-24 p-2 right-24 mb-10 bottom-[470px] border-8 border-white absolute md:right-32 md:bottom-[330px] lg:right-40 lg:bottom-[275px] bg-[#49A760] hover:bg-green-500 rounded-full text-white" />
                )}
                {card.iconB && (
                  <card.iconB className="w-24 h-24 p-2 right-24 mb-10 bottom-[420px] border-8 border-white absolute md:right-32 md:bottom-[305px] lg:right-40 lg:bottom-[245px] bg-[#49A760] hover:bg-green-500 rounded-full text-white"/>
                )}
                {card.iconC && (
                  <card.iconC className="w-24 h-24 p-2 right-24 mb-10 bottom-[442px] border-8 border-white absolute md:right-32 md:bottom-[330px] lg:right-40 lg:bottom-[250px] bg-[#49A760] hover:bg-green-500 rounded-full text-white"/>
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

export default Service2
