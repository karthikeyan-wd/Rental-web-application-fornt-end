import React from "react";
import { PopularVehicles } from "../../Db/PopularVehicles";

function Popular() {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col space-y-6">
        {PopularVehicles.map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 border-primary border-l-[8px]  rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center"
          >
            <div className="w-[33%] pr-4">
              <img 
                src={item.logo} 
                className="w-full  object-cover rounded-md" 
              />
            </div>
            <div className="w-2/3 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.span1}</p>
              <p className="text-gray-500">{item.span2}</p>
              <p className="mt-4 text-gray-800">{item.span3}</p>
              <p className="text-gray-500">{item.span4}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;