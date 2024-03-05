import React, { useContext } from "react";
import Header from "./LandingPage/Header";
import { Outlet } from "react-router-dom";
import { SideBarContext } from "../context/SideBarProvider";

function Layout() {
//   const { isNavOpen } = useContext(SideBarContext);

  return (
    <>
      <Header />
      <Outlet />
      {/* {isNavOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#176300] opacity-50 flex lg:hidden"></div>
      )} */}
    </>
  );
}

export default Layout;
