import React from "react";
import logo from "../../assets/sidebarLogo.png";
import { FaHome } from "react-icons/fa";
import { BsFillPeopleFill, BsPeople } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        // background: "rgb(129,82,203)",
        background:"radial-gradient(circle, rgba(129,82,203,1) 50%, rgba(146,95,226,1) 66%, rgba(184,147,241,1) 100%)",
      }}
      className="sidebar h-[95%] w-1/5   flex flex-col items-center m-4  rounded-3xl p-2"
    >
      <img src={logo} alt="sidebarlogo" className="w-36 m-5" />

      <div className="flex flex-col gap-3 mt-5">
      <NavLink 
        to="/main"
      >
        <span className="flex text-white gap-2">
          <TiHomeOutline className="text-4xl" /> 
          <h2>Dashboard</h2>
        </span>
      </NavLink>

      {/* All Students Link */}
      <NavLink 
         
        to="/main/students"
      >
        <span className="flex text-white gap-2">
          <BsPeople className="text-4xl" /> 
          <h2>All Students</h2>
        </span>
      </NavLink>

        <NavLink 

        to={'/main/profile'}>
        
        <span className="flex text-white gap-2">
          <PiStudent className="text-4xl" /> <h2>Profile</h2>
        </span>
        </NavLink>
        <NavLink to={'/'}>
        <span className="flex text-white gap-2">
          <FiLogOut className="text-4xl" /> <h2>Log Out</h2>
        </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
