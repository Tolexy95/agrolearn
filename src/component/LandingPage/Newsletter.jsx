import React from "react";
import newsletterImg from "../../assets/newsletterImg.png";

const Newsletter = () => {
  return (
    <div className="dark:bg-[#F5F5F5] dark:text-[#333333] bg-[#F5F5F5] text-[#333333] shadow-2xl h-full">
      <div className="flex flex-col items-center justify-center md:space-x-40 md:flex-row">
        <img
          className="w-[200px] mb-9 pt-10"
          src={newsletterImg}
          alt="newspaper reading"
        />
        <div>
          <h1 className="text-xl font-bold dark:text-[#333333] text-[#333333]">GET OUR WEEKLY</h1>
          <h1 className="text-3xl lg:text-5xl text-[#333333]  font-bold pb-6 tracking-widest">
            NEWSLETTER
          </h1>
          <p className="w-[250px] font-semibold dark:text-[#333333] text-[#333333]">
            Get weekly updates on the newest design stories, case studies and
            tips right in your mailbox.
          </p>
          <h2 className="text-xl font-bold dark:text-[#333333] text-[#333333]">Subscribe Now!</h2>
        </div>
      </div>
      <div className="flex justify-center mt-6 mx-14">
        <input
          className="w-[180px] lg:w-1/3 border bg-white dark:bg-white border-gray-300 p-3 rounded-s-xl"
          type="text"
          placeholder="Email address"
        />
        <button className="w-[150px] px-2 ml-[-20px] bg-[#3CB371] dark:bg-[#2C7744]  text-white lg:w-[200px] rounded-e-xl font-bold tracking-widest">
          SUBSCRIBE
        </button>
      </div>
      <h2 className="text-center pt-8 font-semibold text-gray-300">
        Your email is safe with us, we don't spam
      </h2>
    </div>
  );
};

export default Newsletter;
