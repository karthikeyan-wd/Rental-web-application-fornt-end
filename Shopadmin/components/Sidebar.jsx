import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUser, FiLogOut, FiHelpCircle } from "react-icons/fi";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import Admin from "../../assets/Profile/Admin.jpg"
import { MdReviews } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";


function Sidebar({ open, setOpen }) {
  const location = useLocation();
  
  const mainMenus = [
    { name: "Dashboard", link: "/shop-admin", icon: MdOutlineDashboard },
    { name: "Bookings", link: "BookingsTable", icon: FiUser },
    { name: "My Vehicles", link: "Myvehicle", icon: FaCarAlt },
    { name: "Customer Reviews", link: "Reviews", icon: MdReviews },
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
          <h6 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">Main Menu</h6>
          <div className="flex flex-col gap-1">
            {mainMenus.map((menu, i) => (
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