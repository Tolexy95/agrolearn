import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled down a certain distance
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        setIsScrolledToTop(false);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


  const scrollToTopSmoothly = () => {
    const scrollStep = -window.scrollY / 1200; // Adjust the divisor for slower scrolling
    const scrollInterval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
        setIsScrolledToTop(true);
      } else {
        clearInterval(scrollInterval);
        setIsScrolledToTop(false);
      }
    }, 30);
  };

  const scrollToTop = () => {
    // Custom function for smooth scrolling
     scrollToTopSmoothly();
  };


  useEffect (() => {
    scrollToTop()
  }, [isScrolledToTop])
  

  return (
    <div>
      {isVisible && (
        <button className="w-11 h-11 rounded-full bg-[#00cc3c] hover:bg-green-700 fixed bottom-5 right-5 " onClick={scrollToTop}>
          {isScrolledToTop ? <IoIosArrowUp className='m-auto text-white text-xl ' /> : <IoIosArrowDown className='m-auto text-white text-xl ' />}
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
