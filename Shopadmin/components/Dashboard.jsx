import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RevenueChart from "./RevenueChart";
import Popular from "./Popular";
import Arrow from "../../assets/Arrow.png";
import { bookings } from "../../Db/Users";
import {
  Users,
  Car,
  ClipboardList,
  AlertCircle,
  Plus,
  Search,
  Bell,
  TrendingUp,
  ShoppingBag,
  Calendar,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

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
  
  // Upcoming Reservations component to replace Doughnut
  const upcomingReservations = [
    {
      id: 1,
      customerName: "Kavitha R.",
      vehicle: "Toyota Innova",
      startDate: "May 3, 2025",
      days: 5,
      status: "Confirmed"
    },
    {
      id: 2,
      customerName: "Raghav S.",
      vehicle: "Hyundai Creta",
      startDate: "May 4, 2025",
      days: 2,
      status: "Pending"
    },
    {
      id: 3,
      customerName: "Karthiga M.",
      vehicle: "Maruti Swift",
      startDate: "May 5, 2025",
      days: 7,
      status: "Confirmed"
    },{
    id: 4,
    customerName: "Sabitha M.",
    vehicle: "Maruti Swift",
    startDate: "May 7, 2025",
    days: 7,
    status: "Returned"
  },{
    id: 5,
    customerName: "Jenith M.",
    vehicle: "Hyndai ",
    startDate: "May 14, 2025",
    days: 7,
    status: "Pending"
  }
  ];
  
  const getStatusColor = (status) => {
    switch(status) {
      case "Confirmed": 
        return "bg-green-100 text-green-800";
      case "Pending": 
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled": 
        return "bg-red-700 text-red-800";
        case "Returned":
          return "bg-red-500 text-white"
      default: 
        return "bg-gray-100 text-gray-800";
    }
  };

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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming Reservations
              </h2>
              <button className="text-blue-600 text-sm hover:underline">
                View all
              </button>
            </div>
            
            <div className="space-y-4">
              {upcomingReservations.map((reservation) => (
                <div key={reservation.id} className="border-b border-gray-100 pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-gray-800">{reservation.customerName}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(reservation.status)}`}>
                      {reservation.status}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-1">
                    <Car size={14} className="mr-1" /> 
                    {reservation.vehicle}
                  </div>
                  <div className="flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" /> 
                      {reservation.startDate}
                    </div>
                    <div className="flex items-center">
                      <ClipboardList size={14} className="mr-1" /> 
                      {reservation.days} days
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-blue-100 transition">
              <Plus size={16} className="mr-1" /> Add New Reservation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Popular Vehicles
              </h2>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
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
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
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
    </div>
  );
};

export default Dashboard;