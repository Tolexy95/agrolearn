import React, { useContext } from 'react';
import HeroSection from '../component/LandingPage/HeroSection';
import { SideBarContext } from '../context/SideBarProvider';
import { PiTelevisionSimple } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import { ImMobile } from "react-icons/im";
import FeatureCourses from '../component/FeatureCourses';
import CourseReview from '../component/CourseReview';


const CoursesPage = () => {
  const { isNavOpen } = useContext(SideBarContext);
  return (
    <div className='dark:mt-20 dark:lg:mt-[108px] mt-28 bg-[#f6f5f283]' style={{ zIndex: isNavOpen ? -1 : 'auto' }}>
      <HeroSection />
      <div className={`py-12 font-inter ${isNavOpen ? '' : 'bg-green-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-green-700 font-sora">WELCOME TO AGROHIVE'S DIGITAL LEARNING PLATFORM</h1>
            <p className="text-lg md:text-xl mb-8 text-black">
              At AgroHive, we offer virtual and in-person training for entry level agricultural graduates, undergraduates, entry to mid level agri-food employees and agri-food business owners. Our training and upskilling courses are focused on key growth topics in agribusiness management, agri-finance, primary production, value addition and agri-product marketing.
            </p>
            <p className="text-lg md:text-xl text-black">
              With an introduction of digital skills development modules in all courses, we are preparing the food producers of Africa to confidently leverage technology in enhancing food security across the continent.
            </p>
          </div>
        </div>
      </div>

    <div className='bg-[#f6f5f283] mb-24'>
      <div className='mx-4 lg:mx-24 flex gap-4 lg:justify-around flex-col md:flex-row lg:flex-row pt-12'>
        <div className='text-center'>
        <PiTelevisionSimple className='h-12 w-12 p-2 mb-8 mx-auto text-[#2E7d32] border-2 border-[#2E7d32] rounded-full'/>
        <h1 className='text-xl font-semibold pb-4 font-sora text-[#2E7d32]'>Expert Pan-African Faculty</h1>
        <p className='mx-0 text-[#000000] font-light font-inter leading-8 text-center'>Learn form experts across Africa with more than 5 years of practical industry experience.</p>
        </div>
        <div className='text-center'>
        <IoIosSettings className='h-12 w-12 p-2 mb-8 mx-auto text-[#2E7d32] border-2 border-[#2E7d32] rounded-full'/>
        <h1 className='text-xl font-semibold pb-4 font-sora text-[#2E7d32]'>Certifications</h1>
        <p className='text-[#000000] font-light font-inter  leading-8 lg:mx-4 text-center'>Receive signed certificates of participation at the end of every training you complete</p>
        </div>
        <div className='text-center'>
        <BsFileEarmarkMusicFill className='h-12 w-12 p-2 mb-8 mx-auto text-[#2E7d32] border-2 border-[#2E7d32] rounded-full'/>
        <h1 className='text-xl font-semibold pb-4 font-sora text-[#2E7d32]'>Top-notch Agriculture Course Curriculum</h1>
        <p className='text-[#000000] font-light font-inter mx-0 lg:mx-6 leading-8 text-center'>Access well researched and updated curriculum by industry experts and academia.</p>
        </div>
      </div>
      </div>
        <FeatureCourses/>
        <CourseReview/>
    </div>
  );
};

export default CoursesPage;