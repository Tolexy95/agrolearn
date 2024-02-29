import React, {useContext} from 'react'
import Header from '../component/LandingPage/Header' 
import HeroSection from '../component/LandingPage/HeroSection'
import { SideBarContext } from '../context/SideBarProvider'


const Home = () => {
  const { isNavOpen} = useContext(SideBarContext);
  return (
   <div className=''>
     {isNavOpen && ( // Show overlay only when navigation menu is open
          <div className="absolute inset-0  opacity-80 -z-50 bg-[#176300] lg:hidden"></div>
        )}
   <Header/>
   <HeroSection/>
   </div>
  )
}

export default Home

