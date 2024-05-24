import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiStickGrenade } from "react-icons/gi";
import { SiPodcastindex } from "react-icons/si";
import { IoChatbubblesSharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdSwitchVideo } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
 
const FeatureCourses = () => {
  return (
    <div className="md:mx-24">
      <h1 className="text-[#2E7d32] text-4xl font-sora pb-12 font-bold tracking-wider text-center">
        Our Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <BsFillPeopleFill className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            PAN-AFRICAN FACULTY
          </h1>
          <p className="leading-8 px-1 md:px-4 text-center">
            Learn from AgroHive's accomplished Faculty with an in-depth
            understanding of the African agri-food business landscape .
          </p>
        </div>
 
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <GiStickGrenade className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            CUTTING EDGE CURRICULUM
          </h1>
          <p className="leading-8 px-1 md:px-4 text-center">
            Educate yourself with the top-notch study material designed by the
            EXPERTS
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <SiPodcastindex className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            LIVE CLASSES
          </h1>
          <p className="leading-8 px-1 md:px-4 text-center">
            Learn concepts, practice questions & get your doubts cleared
            instantly in the LIVE Classes.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <IoChatbubblesSharp className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            STUDENT DISCUSSION FORUM
          </h1>
          <p className="leading-8 px-1 md:px-4 text-center">
            Get access to 24*7 Live Discussion group with batchmates &
            faculties.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <CgNotes className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            QUIZ & ASSIGNMENTS
          </h1>
          <p className="leading-8 px-1 md:px-4 text-center">
            Practice chapter-wise Quizzes & solve Assignments to learn and
            revise concepts.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <MdSwitchVideo className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            VIDEO LECTURES
          </h1>
          <p className="leading-8 px-1 md:px-4 md:w-64 text-center">
            Learn through high-quality & easy to understand video lectures.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <HiOutlineBookOpen className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            E-BOOKS AND TEMPLATES
          </h1>
          <p className="leading-8 px-1 md:px-4 md:w-64 text-center">
            Get Important topics & formulas for last-minute revision in the PDF
            format.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <FaLightbulb className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            ALERT & NOTIFICATION
          </h1>
          <p className="leading-8 px-1 md:px-4 md:w-64 text-center">
            Stay up to date & get notified every time the course content is
            updated.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pb-6 mb-6 rounded-lg shadow-lg hover:border-b-4 md:px-2 border-green-600">
          <FaThumbsUp className="text-[#2E7d32] text-7xl pb-6 mx-auto md:mx-0" />
          <h1 className="text-[#2E7d32] font-sora text-xl text-center font-bold pb-3">
            TRUSTED CONTENT
          </h1>
          <p className="leading-8 px-1 md:px-4 md:w-64 text-center">
            Learn from the comprehensive & interactive course content.
          </p>
        </div>
      </div>
    </div>
  );
};
 
 
export default FeatureCourses;
 