import React from "react";
import headpic from '../../assets/Chiamaka.jpg';
import { useDispatch } from "react-redux";
import { MODAL_BODY_TYPES } from "../../utils/globalConstant";
import { openModal } from "../../redux/features/modalSlice";
import house from '../../assets/bgimageagro.png';


const FounderSection = () => {
    const dispatch = useDispatch();
   

    const openExportModal = () => {
        dispatch(
          openModal({
            bodyType: MODAL_BODY_TYPES.FOUNDER_MODAL,
          })
        );
      };

    return (
        <div className={`lg:-mt-44 md:-mt-24 -mt-28 bg-[#f6f5f2]  font-inter '}`} >
            <div className="flex flex-col lg:flex-row justify-between gap-20 px-5 md:px-12 lg:py-16">
              
                <div className="flex-1">
                    <h1 className="text-3xl lg:text-4xl text-[#255946] font-bold mb-5 font-sora" >Note From Our Founder</h1>
                    <p className="text-[#6e7673] text-[18px] tracking-wide" style={{ lineHeight: '2' }}>Recently, Africa has witnessed an increase in the number of agri-food businesses being launched daily to meet the insatiable food demands of Africans and the globe at large. Despite the growing number of agri-food businesses across the continent, data has shown that hundreds of agri-food businesses shut down operations daily across Africa due to low revenue and poor productivity.
                        <button className=" text-blue-500 border-none outline-none" onClick={openExportModal}>...<span className="ml-1">Read more</span></button>
                    </p>
                </div>

               <div className="Founder Section relative">
                <img className="rounded-md w-full" 
                 src={headpic} 
                 alt="founder picture"
                />
                <h2 className="text-center mt-5  text-[#176300] font-bold text-2xl"  >Chiamaka Ndukwu</h2>
                <p className="text-center text-base  text-[#176300] font-sora">Founder & CEO</p>           

                 {/* <div className="absolute top-0 left-0 bottom-0 right-0  h-full flex justify-center items-center bg-gray-900 bg-opacity-85 rounded-md"> </div>      */}
            </div>  
          
            </div>
            
            <div className="lg:-mt-48 lg:-ml-10" >
            <img src={house} className="-z-30" alt="background Image"/>
            </div>     
        </div>
    );
}

export default FounderSection;
