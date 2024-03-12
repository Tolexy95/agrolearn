import React from 'react'
import HeroSection2 from '../component/LandingPage/HeroSection2';
import Hr from '../component/LandingPage/Hr';
import FeatureSection from '../component/LandingPage/Feature';
import FounderSection from '../component/LandingPage/FounderSection';
import ProjectSlide from '../component/LandingPage/ProjectSlide';

const Home = () => {
  return (
    <div className=''>
      <HeroSection2 />
     <FeatureSection/>
       <Hr/>
       <FounderSection/>
       <ProjectSlide/>
    </div>

  )
}

export default Home

