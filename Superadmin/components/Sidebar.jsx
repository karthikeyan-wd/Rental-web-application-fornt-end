import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {  MdOutlineDashboard } from "react-icons/md";
import { FiUser,FiLogOut   } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import logo from "../../assets/logo.png"
import Admin from "../../assets/Profile/Admin.jpg"

import { IoSettingsOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";
import {  IoNotificationsOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { TbBrandBumble, TbManualGearbox } from "react-icons/tb";


function Sidebar({ open, setOpen }) {
  const location = useLocation();
  // const menus = [
  //   { name: "Dashboard", link: "/admin", icon: MdOutlineDashboard },
  //   { name: "Users", link: "Usertable", icon: FiUser },
  //   { name: "Calendar", link: "Calendar", icon: FaCarAlt  },
  //   { name: "Shop OwnerInfo", link: "Ownerinfo", icon: BsShop  },
  //   { name: "CustomerReviews", link: "Reviews", icon: MdReviews   },
  //   { name: "Settings", link: "settings", icon: IoSettingsOutline  },
  //   { name: "Mail", link: "Mail", icon: IoIosMailUnread  },

  // ];
  
    const mainMenus = [
      { name: "Dashboard", link: "/admin", icon: MdOutlineDashboard },

        {name: "Shop OwnerInfo",link: "Ownerinfo",icon: BsShop,
        
      },

      { name: "Vehicle Type", link: "VehicleType ", icon: FaCarAlt },
      { name: "Brand", link: "Brand", icon: TbBrandBumble },
      { name: "Fuel", link: "Fuel", icon: BsFuelPump },
      { name: "Transmission", link: "Transmission", icon: TbManualGearbox },
      { name: "Admin Role", link: "AdminRole", icon: IoNotificationsOutline },
      { name: "Customer Reviews", link: "Reviews", icon: MdReviews },
      { name: "Mail", link: "Mail", icon: IoIosMailUnread  },
      { name: "Notifications", link: "Notifications", icon: IoNotificationsOutline },
    ];
      
    const secondaryMenus = [
      { name: "Settings", link: "Settings", icon: IoSettingsOutline },
      { name: "Logout", link: "/", icon: FiLogOut },
    ];
  
    const isActive = (path) => {
      if (path === "/") return ;
      return location.pathname === path || location.pathname.includes(path);
    };
     const [time, setTime] = useState(new Date());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
     
        return () => clearInterval(timer);
      }, []);
      const formatTime = (date) => {
        return date.toLocaleTimeString();
      };
  
    return (
      <>
        {open && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={() => setOpen(false)}
          ></div>
        )}
  
        <div
          className={`fixed top-0 ${
            open ? "right-0" : "-right-full"
          } md:relative md:left-0 md:right-auto md:block h-full bg-white shadow-lg border-r border-gray-100 text-gray-700 z-40
            w-64 transition-all duration-300 overflow-y-auto`}
        >
          <div className="py-6 px-4 border-b border-gray-100">
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-primary p-2 rounded-lg shadow-md">
                <img src={logo} alt="RentalApp Logo" className="w-6 h-6" />
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800 border-b-2 border-primary">RentalApp</h1>
            </div>
            <div className=" w-[110px] h-7 ml-[40px]">
  
            <p className="text-sm font-main text-center mt-1 bg-primary text-white  rounded-2xl  text-nowrap ">{formatTime(time)}</p> 
  
            </div>
  
          </div>
  
          <div className="mt-6 px-3">
        <h6 className="text-xs font-semibold text-gray-400  mb-4 px-3">
                 Main Menu
                </h6>
  <div className="flex flex-col gap-1">
    {mainMenus.map((menu, i) => (
      <div key={i}>
        <Link
          to={menu.link}
          className={`flex items-center text-sm gap-3.5 font-medium p-3 rounded-lg transition-all duration-200
            ${isActive(menu.link)
              ? 'bg-blue-100 text-blue-700 shadow-sm font-semibold border-l-4 border-blue-700'
              : 'hover:bg-gray-50 hover:text-blue-600'}`}
          onClick={() => setOpen(false)}
        >
          <div className={`${isActive(menu.link) ? 'text-blue-700' : 'text-gray-500'}`}>
            {React.createElement(menu.icon, { size: "20" })}
          </div>
          <h2>{menu.name}</h2>
        </Link>

        {menu.subMenus&& (
          <div className="ml-8 mt-1 flex flex-col gap-1">
            {menu.subMenus.map((sub, j) => (
              <Link
                key={j}
                to={sub.link}
                className={`text-sm p-2 pl-4 rounded-md transition-all duration-200
                  ${isActive(sub.link)
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'hover:bg-gray-50 hover:text-blue-500 text-gray-500'}`}
                onClick={() => setOpen(false)}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

          <div className="mt-8 px-3 pb-6">
            <h6 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">Account</h6>
            <div className="flex flex-col gap-1">
              {secondaryMenus.map((menu, i) => (
                <Link
                  to={menu.link}
                  key={i}
                  className={`flex items-center text-sm gap-3.5 font-medium p-3 rounded-lg transition-all duration-200
                    ${isActive(menu.link) 
                      ? 'bg-blue-100 text-blue-700 shadow-sm font-semibold border-l-4 border-blue-700' 
                      : 'hover:bg-gray-50 hover:text-blue-600'}`}
                  onClick={() => setOpen(false)}
                >
                  <div className={`${isActive(menu.link) ? 'text-blue-700' : 'text-gray-500'}`}>
                    {React.createElement(menu.icon, { size: "20" })}
                  </div>
                  <h2>{menu.name}</h2>
                </Link>
              ))}
            </div>
          </div>
  
          <div className="mt-auto border-t border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                <img src={Admin}/>
              </div>
              <div>
                <h4 className="font-medium text-sm">Shop-Admin</h4>
                <p className="text-xs text-gray-500">Rent Member</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Sidebar;