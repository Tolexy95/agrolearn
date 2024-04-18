import React from 'react';
import Button from '../Button/CustomButton';
import { ButtonSize, ButtonState } from '../Button/ButtonStyles';

const HeroSection = () => {
    return (
        <div className="relative font-inter">
            <div
                className="bg-heroImage bg-no-repeat md:bg-center bg-cover h-screen"
            ></div>
            <div className="absolute inset-0 bg-white opacity-35"></div>
            <div className="absolute top-[40%] md:top-[30%] lg:top-1/3 lg:left-10 transform -translate-y-1/2 text-white lg:max-w-[600px] p-8">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[rgba(23,99,0)]" style={{ lineHeight: '1.3' }} >
                        Digital Agriculture Training For Africa
                    </h1>
                </div>
                <div>
                    <p className="text-lg  mb-8 text-[rgb(33,145,0)] font-bold" >
                        We are&nbsp; preparing the food producers of Africa to fight hunger and food insecurity with knowledge of digital tools and agri-food business management skills.
                    </p>
                </div>

                <Button
                    value='Explore Courses'
                    size={ButtonSize.lg}
                    variant={ButtonState.PRIMARY}
                // onClick={handleShowAllPosts}
                />
            </div>
        </div>
    );
};

export default HeroSection;
