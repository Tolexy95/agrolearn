import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';


const ProjectSlide = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Media query for mobile screens
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // Media query for tablet screens
  const isLargerDesktop = useMediaQuery({ minWidth: 2560 }); // Media query for larger desktop screens
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const projectData = [
    {
      number: 1,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-uganda-1-2.jpg",
      title: "AgroHive Project Uganda",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"
    },

    {
      number: 2,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-liberia-1-1.jpg",
      title: "AgroHive Project Liberia",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum qr"
    },
    {
      number: 3,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-uganda-1-1.jpg",
      title: "AgroHive Project Uganda",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
    },
    {
      number: 4,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-1.jpg",
      title: "AgroHive Project Nigeria",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qu"
    },
    {
      number: 5,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-2.jpg",
      title: "AgroHive Project Nigeria",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem "
    },
    {
      number: 6,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-3.jpg",
      title: "AgroHive Project Nigeria",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro r"
    },
    {
      number: 7,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-4.jpg",
      title: "AgroHive Project Nigeria",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam r"
    },
    {
      number: 8,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-5.jpg",
      title: "AgroHive Project Nigeria",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni r"
    },
    {
      number: 9,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-6.jpg",
      title: "AgroHive Project Nigeria",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut r"
    },
  ];

  const settings = {
    mobile: {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      customPaging: i => (
        <div className="mt-4">
          <div className="custom-dots" />
        </div>
        ),
    },
    tablet: {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 2,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      customPaging: i => (
        <div className="mt-4">
          <div className="custom-dots" />
        </div>
        ),
    },
    desktop: {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: isLargerDesktop ? 4 : 3,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      customPaging: i => (
        <div className="mt-8">
          <div className="custom-dots" />
        </div>
        ),
    },
  };


  const settingsToUse = isMobile
    ? settings.mobile
    : isTablet
      ? settings.tablet
      : settings.desktop;

  return (
    <div className="mt-12 px-5 lg:px-8">
      <h1 className='text-[#255946] font-sora text-4xl text-center mb-8 font-semibold capitalize'>Latest Project lists</h1>
      <Slider {...settingsToUse}
      
        nextArrow={
          <div className=''>
            <div className="hidden lg:flex">
              <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
              </svg>
            </div>
          </div>
        }
        prevArrow={
          <div className=''>
          <div className="lg:-ml-2 hidden lg:flex">
              <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
              </svg>
            </div>
            </div>
        }
      >
                  
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative md:px-3 px-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={project.imageUrl} alt={project.title} className="rounded-md w-full" />

            {hoveredIndex === index && (
              <div className="absolute top-0 left-0 bottom-0 right-0 h-full mx-3 flex justify-center items-center bg-gray-900 bg-opacity-85 rounded-md">
                <div className="max-w-lg p-6">
                  <h3 className="text-2xl text-gray-300 font-bold mb-4">{project.title}</h3>
                  <p className='text-gray-200 text-sm font-sora italic' style={{ lineHeight: '2' }}>{project.content}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default ProjectSlide;
