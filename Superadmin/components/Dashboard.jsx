import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Doughnut from "./Doughnut";
import RevenueChart from "./RevenueChart";
import Popular from "./Popular";
import Arrow from "../../assets/Arrow.png";
import { bookings } from "../../Db/Users";
// import Add_Booking from "./Add_Booking";
import {
  Users,
  Car,
  ClipboardList,
  AlertCircle,
  Plus,
  Search,
  Bell,
  
} from "lucide-react";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  

  const formatDate = () => {
    return currentTime.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const itemsDetails = [
    {
      id: 1,
      icon: <Users size={24} />,
      count: "10,000",
      title: "Total Users",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      icon: <Car size={24} />,
      count: "600",
      title: "Total Vehicles",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      id: 3,
      icon: <ClipboardList size={24} />,
      count: "8,000",
      title: "Vehicles Rented",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      id: 4,
      icon: <AlertCircle size={24} />,
      count: "10",
      title: "Shop Reports",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  const activities = [
    {
      id: 1,
      type: "booking",
      icon: <Car size={18} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "New booking - Toyota Camry",
      description: "Karthi booked for 3 days",
      time: "15 minutes ago"
    },
    {
      id: 2,
      type: "return",
      icon: <ClipboardList size={18} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Vehicle returned - Honda CR-V",
      description: "Sarah Williams returned after 5 days",
      time: "2 hours ago"
    },
    {
      id: 3,
      type: "maintenance",
      icon: <AlertCircle size={18} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "Maintenance required - Ford F-150",
      description: "Scheduled for maintenance check",
      time: "5 hours ago"
    },
    {
      id: 4,
      type: "user",
      icon: <Users size={18} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "New customer registered",
      description: "Michael Garcia created an account",
      time: "1 day ago"
    },
    {
      id: 5,
      type: "booking",
      icon: <Car size={18} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "New booking - Shift",
      description: "Thamizh booked for 3 days",
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 font-Open">
            <span className="text-gray-500">Home</span>
            <img src={Arrow} className="w-[10px] h-[10px]" alt="arrow" />
            <span className="font-bold text-blue-600 text-[20px]">
              Shop Admin Dashboard
            </span>
          </div>

          <div className="flex items-center gap-4">
            

            

            <div className="text-right">
              <p className="text-sm text-gray-700">{formatDate()}</p>
              <p className="text-xs text-gray-500">
                {currentTime.toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {itemsDetails.map((items) => (
            <div
              key={items.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5"
            >
              <div className="flex justify-between items-start">
                <div
                  className={`${items.bgColor} ${items.textColor} p-3 rounded-lg`}
                >
                  {items.icon}
                </div>
                <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {items.count}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{items.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-5 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Revenue Overview
              </h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-lg text-sm bg-blue-600 text-white">
                  Monthly
                </button>
                <button className="px-3 py-1 rounded-lg text-sm text-gray-500 hover:bg-gray-100">
                  Yearly
                </button>
              </div>
            </div>
            <RevenueChart />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className=" items-center mb-6 text-center">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
               Aprroval Form
              </h2>
              
            </div>
            <div className="ml-7">

            <Doughnut />

            </div>
          </div>
        </div>

       


        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Popular Vehicles
              </h2>
              <button onClick={()=>toadd()} className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
              View All
        </button>
                
           
            </div>
            <Popular/>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activities
        </h2>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
          >
            <div className={`${activity.iconBg} ${activity.iconColor} p-2 rounded-lg`}>
              {activity.icon}
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                {activity.title}
              </p>
              <p className="text-gray-500 text-sm">
                {activity.description}
              </p>
              <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

          
        </div>
      </div>
   
  );
};

export default Dashboard;