import React from "react";
import picture from "../../assets/two girls.jpg";
import picture2 from "../../assets/paw paw man.jpg";
import { GiPitchfork } from "react-icons/gi";
import Button from "../Button/CustomButton";
import { ButtonSize, ButtonState } from "../Button/ButtonStyles";

const Hr = () => {
  return (
    <>
      <div
        className={`font-inter px-5 md:px-12 mt-12 flex dark:bg-white bg-white flex-col lg:flex-row gap-5 mb-36 lg:gap-11 lg:p-10 relative`}
      >
        <img
          src="https://www.agrohive.co/assets/images/icons/about-bg-icon-1-1.png "
          className="absolute top-[95%] md:top-[90%] lg:top-[70%]  left-0 -z-10"
          alt=""
        /> 

        <div className="md:flex md:relative lg:items-start w-full">
          <div>
            <img src={picture} className="rounded-md lg:ml-12" alt="" />
          </div>

          <div className="md:w-[520px] mt-5 md:mt-0 md:absolute md:top-[75%] md:left-[30%] lg:top-[52%] lg:left-[-38px]">
            <img src={picture2} className="rounded-md" alt="" />
          </div>
        </div>

        <div className="md:px-5  lg:p-24 lg:w-full ">
          <h1
            className="mt-9 font-semibold text-white dark:text-[#6d7471] md:mt-52 lg:mt-0 text-sm mb-3 tracking-[0.2em]"
            style={{ lineHeight: "1.3" }}
          >
            WELCOME TO AGROHIVE
          </h1>

          <h2
            className="text-2xl md:text-[35px] lg:text-[2.8rem] text-[#255946] font-semibold leading-loose"
            style={{ lineHeight: "1.3" }}
          >
            Easy HR staffing for AgriBusinesses
          </h2>

          <p className="mt-6 text-[18px] dark:text-[#5b9e6f]  text-[#81e29e] font-sora italic">
            Africa's first AgriTech human resources and work force management
            company
          </p>
          <div>
            <p
              className="mt-6 text-base dark:text-black text-[#d2d3d3] tracking-widest"
              style={{ lineHeight: "1.9" }}
            >
              We assist thousands of agri-food businesses across Africa to
              upskill, hire & manage skilled and trusted agricultural workforces
              using technology. We know that increasing agricultural
              productivity and profitability starts with easy recruiting and
              managing a team of skilled and trusted agricultural experts.
            </p>

            <p className="mt-5 text-base font-bold text-[#6c757d] mb-10 dark:text-blue-500">
              Our goal is to simplify this process, while you focus on
              increasing your yields.
            </p>
          </div>

          <hr className="text-green-500 text-2xl" />

          <div className="lg:flex lg:flex-row items-center lg:mt-8 mt-4">
            <div className="mt-10 lg:mt-0 flex items-center px-4 gap-4   ">
              <GiPitchfork className="" />
              <p className="text-[#176300] font-semibold text-2xl">
                Agro Experts
              </p>
            </div>

            <div className="mt-6 lg:mt-0 lg:mb-0 mb-10 flex items-center px-4  gap-4">
              <GiPitchfork className="" />
              <p className="text-[#176300] text-2xl font-semibold">
                Professional farmers
              </p>
            </div>
          </div>

          <hr className="mt-3 text-green-500 text-2xl  lg:mt-8 " />

          <div
            className="
                    flex flex-col gap-1 md:flex-row items-center md:gap-5 mt-4 md:mt-7"
          >
            <Button
              value="Hire Experts"
              size={ButtonSize.md}
              variant={ButtonState.PRIMARY}
            />

            <Button
              className={`${ButtonSize ? "w-48 md:w-1/2" : "w-1/2"}`}
              value="Apply as an Expert"
              size={ButtonSize.md}
              variant={ButtonState.OUTLINE}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hr;
