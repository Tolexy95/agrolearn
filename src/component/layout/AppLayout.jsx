import React, { useContext } from "react";
import Header from "../LandingPage/Header";
import { Outlet, useLocation } from "react-router-dom";
import { SideBarContext } from "../../context/SideBarProvider";
import ModalLayout from "./ModalLayout";
import Footer from "../LandingPage/Footer";
import ScrollButton from "../scroll/ScrollButton";
import NavBar from "../CoursesPage/Navbar";

function AppLayout() {
  const { isNavOpen } = useContext(SideBarContext);
  const location = useLocation();

  const isCoursesPage = location.pathname.includes("/courses");

  return (
    <div className="relative max-w-[2000px] mx-auto dark:bg-[#fff]">
      {isCoursesPage ? <NavBar /> : <Header />}
      <Outlet />
      <ScrollButton />
      <ModalLayout />
      {isNavOpen && (
        <div className="fixed top-0 left-0  w-full h-full bg-[#176300] opacity-50 flex lg:hidden"></div>
      )}
      <Footer />
    </div>
  );
}

export default AppLayout;
