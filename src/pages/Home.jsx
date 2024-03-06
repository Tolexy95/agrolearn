import React from 'react'
import NavBar from '../component/LandingPage/Navbar';
import HeroSection from '../component/LandingPage/HeroSection';
import Footer from '../component/LandingPage/Footer';
import HeroSection2 from '../component/LandingPage/HeroSection2';
// import { useContext } from 'react';
// import { SideBarContext} from '../component/LandingPage/SideBar'



const Home = () => {
  // const { isNavOpen} = useContext(SideBarContext);
  return (
    <div>
      <NavBar/>
      <HeroSection2/>
      <HeroSection/>
      <div className="bg-green-50 py-12 font-inter">
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
    <Footer/>
    </div>
    
  )
}

export default Home

