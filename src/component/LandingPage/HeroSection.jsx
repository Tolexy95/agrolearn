import React, { useContext } from 'react';
import CustomButton from '../Button/CustomButton';
import { SideBarContext } from '../../context/SideBarProvider';

const HeroSection = () => {
    const { isNavOpen } = useContext(SideBarContext);
    return (
        <div className="relative mt-3 font-inter " style={{ zIndex: isNavOpen ? -1 : 'auto' }}>
            <div
                className="bg-heroImage bg-no-repeat bg-center bg-cover h-screen"
            ></div>
            <div className="absolute inset-0 bg-white opacity-35"></div>
            <div className="absolute top-1/3 left-10 transform -translate-y-1/2 text-white max-w-[500px]">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[rgb(23,99,0)] leading-10">
                        Digital Agriculture Training For Africa 
                    </h1>
                </div>
                <div>
                    <p className="text-lg md:text-xl mb-8 text-[rgb(33,145,0)] font-semibold">
                    We are&nbsp; preparing the food producers of Africa to fight hunger and food insecurity with knowledge of digital tools and agri-food business management skills.
                    </p>
                </div>

                {/* Custom button */}
                <div className='max-w-48'>
                <CustomButton
                labelText =" Explore Courses"
                className="bg-[rgb(46,125,50)] text-white font-bold text-base"
                />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
