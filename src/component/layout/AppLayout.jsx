import React, { useContext } from "react";
import Header from "../LandingPage/Header";
import { Outlet } from "react-router-dom";
import { SideBarContext } from "../../context/SideBarProvider";
import ModalLayout from "./ModalLayout";


function AppLayout() {
  const { isNavOpen } = useContext(SideBarContext);

  return (
    <div className="relative max-w-[2000px] mx-auto">
      <Header />
      <Outlet />
      <ModalLayout/>
      {isNavOpen && (
        <div className="fixed top-0 left-0  w-full h-full bg-[#176300] opacity-50 flex lg:hidden" style={{ zIndex: -1 }}></div>
      )}
    </div>

  );
}

export default AppLayout;
