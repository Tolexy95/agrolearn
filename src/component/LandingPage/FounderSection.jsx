import React, { useContext, useState } from "react";
import { SideBarContext } from "../../context/SideBarProvider";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GrFormClose } from "react-icons/gr";
import headpic from '../../assets/Chiamaka.jpg';
import house from '../../assets/bgimageagro.png';
import headpic2 from '../../assets/emmanuel-ezejiugo.jpg';

const FounderSection = () => {
    const { isNavOpen } = useContext(SideBarContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        { src: headpic, text: " Chiamaka Ndukwu", additionalText: "Co-founder & CEO" },
        { src: headpic2, text: "Emmanuel Ezejiugo", additionalText: "Co-founder & COO" },
    ];

    return (
        <div className={`${isNavOpen ? '' : 'bg-[#f6f5f283] lg:mt-[-80px] bg-[#f6f5f2] '}`}>
            <div className="pt-8 flex flex-col lg:flex-row">
                <div className="lg:ml-10 mt-10">
                    <h1 className="text-3xl lg:text-4xl px-8 pb-4 text-[#255946] font-bold">Note From Our Founder</h1>
                    <p className="px-8 text-[#6e7673] lg:px-8 lg:w-[500px] leading-8">Recently, Africa has witnessed an increase in the number of agri-food businesses being launched daily to meet the insatiable food demands of Africans and the globe at large. Despite the growing number of agri-food businesses across the continent, data has shown that hundreds of agri-food businesses shut down operations daily across Africa due to low revenue and poor productivity.
                        <button className="btn ml-5 text-blue-500" onClick={() => setIsModalOpen(true)}>Read more</button>
                    </p>
                </div>

                <div className="hidden md:flex justify-center items-center">
                    {images.map((image, index) => (
                        <div key={index} className="mx-auto mr-8 relative z-10">
                            <img className="rounded-md mt-5" style={{ width: '300px', height: '300px' }} src={image.src} alt={`Slide ${index}`} />
                            <div className="text-center mt-2 text-[#176300] font-bold text-lg">{image.text}</div>
                            <div className="text-center mt-2 text-[#176300]">{image.additionalText}</div> {/* Always display additional text */}
                        </div>
                    ))}
                </div>

                <Carousel className="mx-auto md:hidden" autoPlay interval={10000} infiniteLoop showThumbs={false} showStatus={false}>
                    {images.map((image, index) => (
                        <div key={index} className=" justify-center items-center">
                            <img className="rounded-md mt-5" style={{ width: '300px', height: '300px' }} src={image.src} alt={`Slide ${index}`} />
                            <div className="text-center mt-2 text-[#176300] font-bold text-lg">{image.text}</div>
                            <div className="text-center mt-2 text-black text-sm font-bold">{image.additionalText}</div> {/* Always display additional text */}
                        </div>
                    ))}
                </Carousel>
            </div>

            {isModalOpen && (
                <div className="fixed top-24 left-10 w-[full] h-[full] bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8 max-w-screen-lg">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2">
                            <GrFormClose className="text-2xl" />
                        </button>
                        <h3 className="font-bold text-lg">Founder's Note</h3>
                        <div className="modal-action py-4 text-base leading-relaxed">
                            <p>
                                Recently, Africa has witnessed an increase in the number of agri-food businesses being launched daily to meet the insatiable food demands of Africans and the globe at large. Despite the growing number of agri-food businesses across the continent, data has shown that hundreds of agri-food businesses shut down operations daily across Africa due to low revenue and poor productivity. Prior to launching AgroHive in 2016, we conducted research to identify the major contributor to poor productivity and profitability of agri-food businesses across the continent and it was disheartening to discover that the lack of updated agronomic knowledge and access to well skilled agriculture talents has affected the productivity and profitability of agri-food businesses even much more than access to finance.
                                AgroHive was founded with the goal of bridging the wide skills gap existing in the agricultural value chain, which is negatively contributing to lower grade agricultural production in Africa, leading to hunger and malnutrition.
                                With operations launching in Imo state, Nigeria, and now across multiple cities across Africa, We are excited to mention that AgroHive has given agri-food businesses an opportunity to confidently increase their productivity and profitability through its training, human resource and workforce management solutions.
                                We are also proud of the opportunities we have given to thousands of African youths and women in agriculture to upskill, access sustainable agri-food job opportunities and accelerate their careers in the agri-food sector. We aren’t just stopping with supporting agri-food businesses and talents to easily get trained, upskill and hire expert talents, we are working on digitizing all aspects of agriculture training, talent recruitment and workforce management to enable key players in the sector across Africa to conveniently access growth solutions for their agri-food businesses.
                                Replace Founders Picture with the one in the link.
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
                    </div>
                </div>
            )}
            <div>
                <img src={house} className="object-fit" alt="" />
            </div>
        </div>
    );
}

export default FounderSection;
