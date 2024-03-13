import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
import { SideBarContext } from '../../context/SideBarProvider';
import { openModal } from '../../redux/features/modalSlice';
import { useDispatch } from 'react-redux';
import { MODAL_BODY_TYPES } from '../../utils/globalConstant';



const ProjectSlide = () => {
  const dispatch = useDispatch();
  const { isNavOpen } = useContext(SideBarContext);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Media query for mobile screens
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // Media query for tablet screens
  // const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 2559 }); // Media query for desktop screens
  const isLargerDesktop = useMediaQuery({ minWidth: 2560 }); // Media query for larger desktop screens
  

  const openExportModal = () => {
    dispatch(
      openModal({
        bodyType: MODAL_BODY_TYPES.PROJECT_MODAL,
      })
    );
};
  

  
  const projectData = [
    {
      number: 1,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-uganda-1-2.jpg",
      title: "AgroHive Project Uganda",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"                                                
    },

    {
      number: 2,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-liberia-1-1.jpg",
      title: "AgroHive Project Liberia",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
    },
    {
      number: 3,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-uganda-1-1.jpg",
      title: "AgroHive Project Uganda",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
    },
    {
      number: 4,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-1.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
    },
    {
      number: 5,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-2.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
    },
    {
      number: 6,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-3.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
    },
    {
      number: 7,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-4.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
    },
    {
      number: 8,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-5.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
    },
    {
      number: 9,
      imageUrl: "https://www.agrohive.co/assets/images/projects/agrohive-project-nigeria-1-6.jpg",
      title: "AgroHive Project Nigeria",
      content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" 
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
    <div className="lg:px-10 px-5 mb-40 lg:pl-24">
      <Slider {...settingsToUse}>
        {projectData.map((project, index) => (
          <div key={index} className="w-full relative">
            <img src={project.imageUrl} alt={project.title} className='rounded-md' style={{ zIndex: isNavOpen ? -1 : 'auto' }} />
            <div className="absolute top-0 left-0 bottom-0 right-0 lg:w-11/12 h-full flex justify-center items-center bg-primary bg-opacity-50 opacity-0  hover:opacity-100 rounded-md transition duration-500 ease-out hover:ease-in">
              <div className='flex flex-col gap-4 mt-16'>
              <h3 className="text-white font-bold text-2xl">{project.title}</h3>
              <button onClick={() => openExportModal(project)} className='text-white border-b-2 w-32 pb-1 border-[#00cc3d9a] hover:border-white hover:text-[#00cc3d9a] text-lg font-semibold font-sora'>Read more</button>
              </div>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlide;
