import React, { useState, useEffect } from "react";
import icon1 from "../../assets/farmerIcon.png";

const dataArray = [
  { icon: icon1, number: 10, description: "African countries" },
  { icon: icon1, number: 100, description: "Talent outsourced" },
  { icon: icon1, number: 5000, description: "Talent trained" },
  { icon: icon1, number: 7500, description: "Agibusinesses supported" },
];

const African = () => {
  const [displayedNumbers, setDisplayedNumbers] = useState(dataArray.map(item => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedNumbers(prevNumbers => 
        prevNumbers.map((number, index) => {
          const targetNumber = dataArray[index].number;
          const step = Math.ceil(targetNumber / 50); // Adjust speed here
          return number + step <= targetNumber ? number + step : targetNumber;
        })
      );
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F6F5F2]  mx-5 rounded-md py-12 grid grid-col lg:grid-cols-4 md:grid-cols-2 gap-x-4"> 
      {dataArray.map((item, index) => (
        <div
          key={index}
          className={`mb-10 flex flex-col ${
            index !== dataArray.length - 1 && "lg:border-r border-gray-300 md:lg:border-r md:border-gray-300"
          }`}
        >
          <img className="mx-auto bg-[#49a760] w-28 rounded-md p-8 pb-6 hover:bg-[#00cc3c] " src={item.icon} alt="" />
          <p className="text-3xl text-center pt-5 text-[#176300] font-bold pb-8 font-handlee">
            {displayedNumbers[index].toLocaleString()}
            {displayedNumbers[index] >= 100 && "+"}
          </p>
          <p className="text-center text-[#6e7673] pb-12 font-raleway">{item.description}</p>
          {index !== dataArray.length - 1 && <hr className="bg-gray-300 h-1 md:hidden"/>}
        </div>
      ))}
    </div>
  );
};

export default African;




