import React, { useContext } from "react";
import { SideBarContext } from "../../context/SideBarProvider";


const FounderSection = () => {
    const { isNavOpen } = useContext(SideBarContext);
    return (
        <div className ={`${isNavOpen ? '' : 'bg-[#f6f5f283] h-screen lg:mt-[-80px]'}`}>
     <h1>Welcome</h1>
        </div>
    )
}

export default FounderSection