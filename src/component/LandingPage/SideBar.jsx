import React, { useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { SideBarContext } from "../../context/SideBarProvider";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Button from "../Button/CustomButton";
import { ButtonSize, ButtonState } from "../Button/ButtonStyles";

const SideBar = () => {
    const { isNavOpen, setIsNavOpen } = useContext(SideBarContext);

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsNavOpen]);

    return (
        <div ref={sidebarRef} className={`mobile-sidebar fixed top-0 -right-full w-72 md:w-96 h-full bg-[#1f4e3d]  lg:hidden ${isNavOpen ? "open" : ""}`}>
            <div className="flex justify-end p-3">
                <button className="border-none  text-white cursor-pointer bg-transparent text-2xl" onClick={() => setIsNavOpen(false)}>
                    <IoMdClose />
                </button>
            </div>
            <div className="flex flex-col justify-between h-[90%] md:[90%]">
                <div>
                    <ul className="p-2 list-none sidebar-menu text-white">
                        <li>
                            <NavLink to="/" onClick={() => setIsNavOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={() => setIsNavOpen(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service" onClick={() => setIsNavOpen(false)}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/partner" onClick={() => setIsNavOpen(false)}>Our Partners</NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses" onClick={() => setIsNavOpen(false)}>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={() => setIsNavOpen(false)}>Contact</NavLink>
                        </li>
                    </ul>

                    <div className="flex justify-center mt-4">
                        <Button
                            value='Visit Portal'
                            size={ButtonSize.lg}
                            variant={ButtonState.PRIMARY}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 text-[#b5c3be] px-4">
                    <div className="flex items-center gap-4 ">
                        <div className="icon flex items-center justify-center">
                            <BsEnvelope className="text-white" />
                        </div>
                        <h6>info@agrohive.co</h6>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="icon  flex items-center justify-center">
                            <FiPhoneCall className="text-white" />
                        </div>
                        <h6>666 888 0000</h6>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="">
                            <select className="w-full border-none p-0 outline-none bg-transparent text-sm">
                                <option value="">English</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <NavLink to="https://www.instagram.com/agro_hive/">
                                <AiOutlineInstagram className="w-5 h-5" />
                            </NavLink>
                            <NavLink to="https://www.youtube.com/channel/UCCH8--Svxf2TO7TLDWdP3Kg">
                                <BsYoutube className="w-5 h-5" />
                            </NavLink>
                            <NavLink to="https://www.facebook.com/agrohive?_rdc=1&_rdr">
                                <FaFacebook className="w-5 h-5" />
                            </NavLink>

                            <NavLink to="https://www.linkedin.com/company/agrohive/">
                                <CiLinkedin className="w-5 h-5" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .mobile-sidebar {
                    animation: slideInLeft 0.5s forwards;
                
                }

                @keyframes slideInLeft {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                @keyframes slideOutLeft {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }

                .mobile-sidebar.open {
                    right: 0;
                    z-index:1000;
                }

                .sidebar-menu li {
                    padding: 10px;
                }

                .sidebar-menu li {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .icon {
                    width: 30px;
                     height: 30px;
                     border-radius: 50%;
                    background-color: #00cc3c;
                }
            `}</style>
        </div>
    );
};

export default SideBar;
