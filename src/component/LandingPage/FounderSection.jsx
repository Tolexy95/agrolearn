import React from "react";
import headpic from '../../assets/Chiamaka.jpg';
import { useDispatch } from "react-redux";
import { MODAL_BODY_TYPES } from "../../utils/globalConstant";
import { openModal } from "../../redux/features/modalSlice";
import house from '../../assets/bgimageagro.png';
import { NavLink } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


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
    <div className={`lg:-mt-12 mt-12 bg-[#f6f5f2] shadow-lg  font-inter '}`} style={{ boxShadow: '0px 10px 60px 0px rgba(0, 0, 0, 0.3)' }}>
      <div className="flex flex-col lg:flex-row justify-between gap-20 px-5 md:px-12 lg:py-16">

        <div className="flex-1">
          <h1 className="text-2xl lg:text-4xl text-[#255946] font-bold mb-3 lg:mt-0 font-sora mt-5" >Note From Our Founder</h1>
          <p className="text-[#6e7673] text-[18px] tracking-wide" style={{ lineHeight: '2' }}>Recently, Africa has witnessed an increase in the number of agri-food businesses being launched daily to meet the insatiable food demands of Africans and the globe at large. Despite the growing number of agri-food businesses across the continent, data has shown that hundreds of agri-food businesses shut down operations daily across Africa due to low revenue and poor productivity.
            <button className=" text-blue-500 border-none outline-none" onClick={openExportModal}>...<span className="ml-1">Read more</span></button>
          </p>
        </div>

        <div className="Founder Section">
          <div className="relative">
            <img className="rounded-md w-full"
              src={headpic}
              alt="founder picture"
            />

            <div className="absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center hover:bg-[#17630031] opacity-0 hover:opacity-100 hover:bg-opacity-95">
              <div className="flex gap-4 md:mt-80 mt-40">
                <div className="w-11 h-11 rounded-full bg-white hover:bg-[#00cc3c] hover:text-white flex items-center justify-center text-[#00cc3c]">
                  <NavLink to="https://www.linkedin.com/in/chiamaka-ndukwu/">
                    <FaLinkedinIn className="w-4 h-4" />
                  </NavLink>
                </div>

                <div className="w-11 h-11 rounded-full bg-white hover:bg-[#00cc3c] hover:text-white flex items-center justify-center text-[#00cc3c]">
                  <NavLink to="https://www.youtube.com/channel/UCCH8--Svxf2TO7TLDWdP3Kg">
                    <AiOutlineTwitter className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-center mt-5  text-[#176300] font-bold text-2xl"  >Chiamaka Ndukwu</h2>
          <p className="text-center text-base  text-[#176300] font-sora">Founder & CEO</p>
        </div>
      </div>

      <div className="lg:-mt-48 lg:-ml-10" >
        <img src={house} className="-z-30" alt="background Image" />
      </div>
    </div>
  );
}

export default FounderSection;
