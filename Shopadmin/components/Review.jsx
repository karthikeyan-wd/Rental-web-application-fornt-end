import React from "react";
import profile from "../../assets/Reviews/Shakthi.jpg";
import ravi from "../../assets/Reviews/ravi.jpg";
import ammu from "../../assets/Reviews/ammu3.jpg";
import yamu from "../../assets/Reviews/yamu1.jpg";
import shalini from "../../assets/Reviews/shalini1.jpg";
import shakthi from "../../assets/Reviews/Shakthi.jpg";
import Star from "../../@UI/Star";

function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      img: ravi,
      name: "Ravi",
      date: "Mar 15, 2025",
      time: "10.50 AM",
      vehicle: "SUV - Toyota RAV4",
      rev: "I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id: 2,
      img: profile,
      name: "Lakshmi",
      date: "Mar 15, 2025",
      time: "10.50 AM",
      vehicle: "SUV - Toyota RAV4",
      rev: "I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id: 3,
      img: ammu,
      name: "Amudha",
      date: "Mar 16, 2025",
      time: "10.50 AM",
      vehicle: "SUV - Toyota RAV4",
      rev: "I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id: 4,
      img: yamu,
      name: "Yamuna",
      date: "Mar 17, 2025",
      time: "10.50 AM",
      vehicle: "SUV - Toyota RAV4",
      rev: "I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id: 5,
      img: shalini,
      name: "Shalini",
      date: "Mar 18, 2025",
      time: "10.50 AM",
      vehicle: "SUV - Toyota RAV4",
      rev: "I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id: 6,
      img: shakthi,
      name: "Shakthi",
      date: "Mar 19, 2025",
      time: "10.50 AM",
      vehicle: "SUV - Toyota RAV4",
      rev: "I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
  ];

  return (
    <div className="bg-white min-h-screen p-4">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Customer Reviews</h1>
        <div className="border rounded-lg p-2 flex items-center">
          <i className="fa-solid fa-calendar text-blue-600 mr-2"></i>
          <div>
            <p className="text-xs text-gray-500">Date Range</p>
            <p className="text-sm">March 1 - April 31, 2025</p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="border rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-4 py-3">
          <h2 className="font-medium text-white">All Reviews</h2>
        </div>
        
        {/* Column Headers */}
        <div className="bg-gray-100 px-4 py-3 grid grid-cols-12 text-sm font-medium text-gray-600">
          <div className="col-span-2">Customer</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-3">Vehicle</div>
          <div className="col-span-5">Review</div>
        </div>
        
        {/* Reviews */}
        <div>
          {reviews.map((item) => (
            <div key={item.id} className="border-t px-4 py-3 grid grid-cols-12 hover:bg-gray-50">
              {/* Customer */}
              <div className="col-span-2 flex items-center">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full mr-2 object-cover" 
                />
                <span className="font-medium">{item.name}</span>
              </div>
              
              {/* Date */}
              <div className="col-span-2 flex flex-col justify-center text-sm text-gray-600">
                <div>{item.date}</div>
                <div>{item.time}</div>
              </div>
              
              {/* Vehicle */}
              <div className="col-span-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                  {item.vehicle}
                </span>
              </div>
              
              {/* Review */}
              <div className="col-span-5">
                <div className="flex mb-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="text-sm text-gray-700">{item.rev}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;