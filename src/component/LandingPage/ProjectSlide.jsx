import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlide = () => {
    const settings = {
        dots: true,
        // className: "center",
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Remove the default arrows
      };

  return (
  <div className="lg:px-10 px-5 mb-40 mt-20   lg:pl-24">
    <Slider {...settings}>
    <div className="w-full">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-uganda-1-1.jpg" alt="Agrohive" className='rounded-md'/>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-primary flex justify-end flex-col py-8 px-8 transition-opacity transform translate-y-40 opacity-0">
      <h3>AgroHive Project Uganda</h3>
      </div>
      </div>
     
      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-uganda-1-2.jpg" alt="Agrohive"/>
      </div>
     
      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-liberia-1-1.jpg" alt="Agrohive"/>
      </div>

      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-1.jpg" alt="Agrohive"/>
      </div>

      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-2.jpg" alt="Agrohive"/>
      </div>

      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-3.jpg" alt="Agrohive"/>
      </div>

      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-4.jpg" alt="Agrohive"/>
      </div>

      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-5.jpg" alt="Agrohive"/>
      </div>

      <div className="">
      <img src="https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-6.jpg" alt="Agrohive"/>
      </div>
     
    </Slider>
    </div>
  );
}

export default ProjectSlide;
