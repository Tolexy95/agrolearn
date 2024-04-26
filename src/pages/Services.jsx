import React from "react";
import agroServiveImg from "../assets/agrohiveservice1.jpg";
import { IoMdCheckmark } from "react-icons/io";
import consultancyService from "../assets/agrohive-consultancyservice.jpg";
import AgroskillUp from "../assets/agrohive-service-skilluptraining.jpg";
import AgricfoodSupport from "../assets/agrohive-supportservice.jpg";
import { PiPottedPlantThin } from "react-icons/pi";
import { FaTractor } from "react-icons/fa";
import { GrCubes } from "react-icons/gr";
import serviceFruit from "../assets/agrohive-service-fruit.jpg";
import gardenMan from "../assets/agrohive-service-garden.jpg";
import soilTester from "../assets/agrohive-service-workforcemgt.jpg";
import { GiFruitBowl } from "react-icons/gi";


const ServicesPage = () => {

  const serviceArray = [
    {
      imgUrl: serviceFruit,
      iconA: PiPottedPlantThin,
      title: "Accelerate for Agribusinesses",
      description:
        "Through Agccelerate for agribusinesses, we offer tailored virtual courses, in-person training and farm set-up solutions to agri-food business owners, managers or investors in Africa and the diaspora. Our goal is to assist you with the training and support you need in making the best agri-food business investment, management and growth decisions",
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
    {
      imgUrl: AgroskillUp,
      iconD: FaTractor,
      title: "Agroskill-up Training",
      description:
        "AgroHive offers Agroskill-up training for agriculture graduates, undergraduates and entry-level agrifood employees, seeking to upskill, get sustainable jobs or internship placements. Our Agroskill-up training with an introduction of digital skill modules in all courses focuses mostly on Agrifood business management, Agriculture value chain development, Agri-product sales & marketing, Agri-finance and Employee branding.",
    },

    {
      imgUrl: AgricfoodSupport,
      iconE: PiPottedPlantThin,
      title: "Agrifood Business Support Service",
      description:
        "We have designed HR and agrifood business support services to make agri-food businesses more rewarding for Africans and investors regardless of their location. This is of great importance to us because we understand the challenges Africans and investors in the diaspora encounter while trying to build sustainable agri-food businesses in Africa.",
    },

    {
      imgUrl: consultancyService,
      iconF: GrCubes,
      title: "Extension & Consultancy Services",
      description:
        "We offer top-notch extension services to agri-food businesses across Africa. Our goal is to help agri-food businesses and smallholder farmers access timely information and expert support services which is vital in making informed agri-food business decisions. We also help clients with premium agri-food business market research, agri-food business plans and feasibility research.",
    },
  ];

  return (
    <div className="">
      <h1 className="text-[38px] font-bold pb-24 text-[#255946] text-center">
        OUR SERVICES
      </h1>
      <div className="flex flex-col lg:flex-row lg:mx-20 mx-1 lg:space-x-10 pb-20">
        <div className="flex-1 ml-2 mb-10">
          <h2 className="text-left text-[#9EA5A2] font-bold pb-3">
            WHAT WE’RE OFFERING
          </h2>

          <h1 className="text-left text-[#255946] leading-[40px] text-[38px] font-bold pb-8">
            Training, Staff Hiring & Workforce Management
          </h1>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
            Select a service from our range of diverse premium agricultural
            solutions that meets your agri-food business growth needs. We offer
            well-tailored solutions from blended upskilling training, staff
            outsourcing, workforce management, farm set-up solutions and
            extension services.
          </p>
          <div className="flex items-center gap-5 pb-5">
            <IoMdCheckmark className="text-white bg-green-500 rounded-full w-[40px] h-[40px] p-1" />
            <p className="text-[#255946] text-[18px]">Hire the best Agro talents</p>
          </div>
          <div className="flex items-center gap-5">
            <IoMdCheckmark className="text-white bg-green-500 rounded-full w-[40px] h-[40px] p-1" />
            <p className="text-[#255946] text-[18px]">
              Get the best training as an Agro expert
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-lg"
            src={agroServiveImg}
            alt="agricServiceman"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10">
        {serviceArray.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl mb-4 hover:border-b-4 border-green-600">
            <div className="">
              <img src={card.imgUrl} alt="" className="w-full pb-10 rounded-md" />
              <div className="relative">
                {card.iconA && (
                  <card.iconA className="w-24 h-24 p-2 right-24 mb-10 -top-[90px] border-8 border-white absolute bg-[#49A760] hover:bg-green-500 rounded-full text-white md:right-32 lg:right-44" />
                )}
    
                {card.iconB && (
                  <card.iconB className="w-24 h-24 p-2 right-24 mb-10 -top-[90px] border-8 border-white absolute bg-[#49A760] hover:bg-green-500 rounded-full text-white md:right-32 lg:right-44"/>
                )}
                {card.iconC && (
                  <card.iconC className="w-24 h-24 p-2 right-24 mb-10 -top-[90px] border-8 border-white absolute bg-[#49A760] hover:bg-green-500 rounded-full text-white md:right-32 lg:right-44"/>
                )}
                    {card.iconD && (
                  <card.iconD className="w-24 h-24 p-2 right-24 -top-[90px]  mb-10 border-8 border-white absolute bg-[#49A760] hover:bg-green-500 rounded-full text-white md:right-32 lg:right-40" />
                )}
                {card.iconE && (
                  <card.iconE className="w-24 h-24 p-2 right-24 -top-[90px] mb-10  border-8 border-white absolute bg-[#49A760] hover:bg-green-500 rounded-full text-white md:right-32 lg:right-40"/>
                )}
                {card.iconF && (
                  <card.iconF className="w-24 h-24 p-2 right-24 -top-[90px] mb-10 border-8 border-white absolute md:right-32 md:bottom-[330px] lg:right-40 lg:bottom-[250px] bg-[#49A760] hover:bg-green-500 rounded-full text-white"/>
                )}
                <h1 className="text-xl text-[24px] text-center px-[36px] text-[#176300]">{card.title}</h1>
                <p className="text-[#6E7673] mt-2 px-[36px] leading-7 pb-8 text-[15px] text-center">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
