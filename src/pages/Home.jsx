import React from 'react'
import HeroSection2 from '../component/LandingPage/HeroSection2';
import Hr from '../component/LandingPage/Hr';
import FeatureSection from '../component/LandingPage/Feature';
import FounderSection from '../component/LandingPage/FounderSection';
import ProjectSlide from '../component/LandingPage/ProjectSlide';
import African from '../component/LandingPage/African';
import Footer from '../component/LandingPage/Footer';

const Home = () => {
  return (
    <div className=''>
      <HeroSection2 />
     <FeatureSection/>
       <Hr/>
       <FounderSection/>
       <ProjectSlide/>
       <African/>
       <Footer/>
    </div>

  )
}

export default Home

