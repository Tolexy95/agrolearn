import React, {useState } from 'react';
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
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"                                                
    },

    {
      number: 2,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-liberia-1-1.jpg",
      title: "AgroHive Project Liberia",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum qr" 
    },
    {
      number: 3,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-uganda-1-1.jpg",
      title: "AgroHive Project Uganda",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui " 
    },
    {
      number: 4,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-1.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qu" 
    },
    {
      number: 5,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-2.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem " 
    },
    {
      number: 6,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-3.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro r" 
    },
    {
      number: 7,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-4.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam r" 
    },
    {
      number: 8,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-5.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni r" 
    },
    {
      number: 9,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-6.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut r" 
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
      arrows: false,
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
      arrows: false,
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
      arrows: false,
    },
  };

  
  const settingsToUse = isMobile
    ? settings.mobile
    : isTablet
      ? settings.tablet
      : settings.desktop;

      return (
        <div className="lg:px-12 px-5 mb-40 lg:pl-24 mt-6">
          <Slider {...settingsToUse}>
            {projectData.map((project, index) => (
              <div
                key={index}
                className="w-full relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={project.imageUrl} alt={project.title} className="rounded-md"/>
                {hoveredIndex === index && (
                   <div className="absolute top-0 left-0 bottom-0 right-0 lg:w-11/12 h-full flex justify-center items-center bg-gray-900 bg-opacity-85 rounded-md">
                    <div className="max-w-lg p-6">
                      <h3 className="text-2xl text-gray-300 font-bold mb-4">{project.title}</h3>
                      <p className='text-gray-200 text-sm font-sora italic' style={{lineHeight:'2'}}>{project.content}</p>
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
