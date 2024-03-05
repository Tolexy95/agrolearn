import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import CustomButton from '../Button/CustomButton';
import { Link } from 'react-router-dom';
import WebsiteLogo from "../../assets/AgroHive_logo.png"
import { IoCartSharp } from "react-icons/io5";


const NavBar = () => {
    return (
        <nav className=" px-10 py-4 flex justify-between items-center font-inter">
            {/* Logo */}
            <div className="flex items-center w-40">
                <img src={WebsiteLogo} alt='website Logo' className='object-cover' />
            </div>

            {/* Search Bar */}
            <div className="flex items-center justify-center">
                <div className="flex border-2 hover:border-[#2eaa4f7c]">
                    <input type="text" className="px-4 py-2 w-80 text-black outline-none" placeholder="Search..." />
                    <button className="flex items-center justify-center px-4 border-l">
                        <FaSearch className="w-6 h-6 text-[#2eaa50]" />
                    </button>
                </div>
            </div>


            <div className="flex items-center gap-4">
                <Link to="/courses">Courses </Link>

                {/* Cart Icon */}

                <div className="flex items-center gap-2">
              <Link to="/cart">
                <button
                  type="button"
                  className="flex items-center gap-3"
                >
                  <IoCartSharp className="h-5 w-5" />
                  <span className="text-sm font-bold">0</span>
                </button>
              </Link>
            </div>

                {/* <FaShoppingCart className="mr-4" /> */}
                <div className='w-32'>
                    <CustomButton
                        labelText="Login"
                        className="bg-[#2eaa50] text-white"
                    />
                </div>

            </div>
        </nav>
    );
};

export default NavBar;

