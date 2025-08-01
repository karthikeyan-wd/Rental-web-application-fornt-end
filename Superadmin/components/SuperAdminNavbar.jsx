import React, { useState, useEffect } from "react";
import profileImg from "../../assets/admin_profile_img.png";
import profile from "../../assets/profile.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiBell, FiSettings, FiSearch } from "react-icons/fi";
import { Link, useLocation,useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const S_A_navbar = ({ setOpenSidebar }) => {
  const navigate = useNavigate()
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [GetData, setGetData] = useState([]);
  const location = useLocation();
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".profile-menu") &&
        !event.target.closest(".profile-trigger")
      ) {
        setProfileDropdown(false);
      }
      if (
        !event.target.closest(".notification-menu") &&
        !event.target.closest(".notification-trigger")
      ) {
        setNotificationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, text: "New user registration", time: "5 min ago" },
    { id: 2, text: "New shop request", time: "1 hour ago" },
    { id: 3, text: "System update completed", time: "3 hours ago" },
  ];

  const id = Cookies.get('id')

  console.log(id);
  const getData = async (id) => {
    await axios
      .get(`${app}superloginGet/` + (id))
      .then((response) => {
        const Data = response.data;
        setGetData(Data[0]);
      });
  };
const [LoginAuth]= useState(id)

    const Logout=()=>{
      console.log("!")
      
       const keys = Object.keys(Cookies.get());
  console.log(keys,"COOKIES ");

  for (let i = 0; i < keys.length; i++) {
    Cookies.remove(keys[i]);
  }

  navigate("/AdminLogin");
};
  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  console.log(GetData);

  return (
    <div className="px-5 py-3 flex justify-between items-center md:px-6 md:py-3 bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="lg:text-xl font-semibold text-gray-800 cursor-pointer">
        Super Admin Dashboard
      </div>

      <div className="flex items-center gap-4">
        <div className="border rounded-lg bg-white w-[45px] h-[40px] flex justify-center items-center text-[20px] hover:bg-gray-100 transition-colors cursor-pointer">
          <FiSearch className="text-gray-600" />
        </div>

        <div className="border rounded-lg bg-white w-[45px] h-[40px] flex justify-center items-center text-[20px] hover:bg-gray-100 transition-colors cursor-pointer">
          <FiSettings className="text-gray-600" />
        </div>

        <div className="relative">
          <div
            className="notification-trigger cursor-pointer border rounded-lg bg-white w-[45px] h-[40px] flex justify-center items-center text-[20px] hover:bg-gray-100 transition-colors relative"
            onClick={() => setNotificationDropdown(!notificationDropdown)}
          >
            <FiBell className="text-gray-600 text-lg" />
            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full animate-pulse bg-red-500 ring-1 ring-white" />
          </div>

          {notificationDropdown && (
            <div className="notification-menu absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
              <div className="px-4 py-2 font-medium border-b border-gray-200">
                <span>Notifications</span>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {notification.text}
                    </div>
                    <div className="text-xs text-gray-500">
                      {notification.time}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 text-sm font-medium text-center text-blue-600 border-t border-gray-200 hover:bg-gray-50">
                <Link to="/all-notifications">View all notifications</Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <div
            className="profile-trigger flex items-center cursor-pointer"
            onClick={() => setProfileDropdown(!profileDropdown)}
          >
            <div className="border rounded-lg bg-white w-[45px] h-[40px] flex justify-center items-center overflow-hidden">
              <img src={profile} alt="" className="w-8 h-8 object-cover" />
            </div>
            <div className=" grid-cols-1 ml-2 hidden md:block">
              {GetData ? (
                <div className="grid grid-col-1">
                  <span className="font-Outfit font-bold tracking-wide text-sm">
                    {GetData.name}
                  </span>

                  <span className="tracking-wider font-Outfit text-xs text-gray-600">
                    {GetData.email}
                  </span>
                </div>
              ) : (
                <>
                  <span className="font-Outfit font-bold tracking-wide text-sm">
                    Admin
                  </span>

                  <span className="tracking-wider font-Outfit text-xs text-gray-600">
                    AdminMail
                  </span>
                </>
              )}
            </div>
          </div>

          {profileDropdown && (
            <div className="profile-menu absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
              <div className="px-4 py-3 border-b border-gray-200">
                <span className="block text-sm text-gray-900 font-medium">
                {GetData.name}
                </span>
                <span className="block text-sm text-gray-500 truncate">
                {GetData.email}
                </span>
              </div>
              <ul>
                <li>
                  <Link
                    to="Profile-info"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="Settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin-log"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Add Admin role
                  </Link>
                </li>
                <li className="border-t border-gray-100">
                    <button onClick={()=>Logout()} className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Sign out
                    </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <HiMenuAlt3
          size={24}
          className="cursor-pointer"
          onClick={() => setOpenSidebar(true)}
        />
      </div>
    </div>
  );
};

export default S_A_navbar;
