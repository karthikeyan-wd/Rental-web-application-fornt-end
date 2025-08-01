import { useState } from "react";
// import { Myvehicles } from '../../Db/Wish';
import UserNavbar from "./UserNavbar";

// import Addvehicle from "./AddVehicles";

const Myvehicle = () => {
  const [data, setData] = useState(Myvehicles);
  const [selectedStates, setSelectedStates] = useState({});
  const [Show, SetShow] = useState(false);
  
  const toadd = () => {
    SetShow(true);
  };
  
  const Close = () => {
    SetShow(false); 
  };

  const toggleAvailability = (index) => {
    setSelectedStates((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
    <UserNavbar/>
      <div className="bg-[#F5F5F5] w-full h-full overflow-y-auto">
        <div className="flex justify-between items-start pt-3 ml-8 mr-8">
          <span className="font-semibold text-lg md:text-2xl tracking-[1px]">Wishlist</span>
          <span className="font-bold text-lg cursor-pointer">X</span>
        </div>

        

        <div className="mt-6 px-4 md:px-8">
            
          {data.map((items, i) => (
            <div key={i} className="bg-white mb-4 rounded-2xl shadow-[0px_4px_11px_8px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-red-400">
                
              <div className="p-4 flex md:p-6 md:flex-row gap-6">
              
                <div className="w-full md:w-[200px]">
                  <img 
                    src={items.img} 
                    alt={items.Name}
                    className="w-full h-[180px] object-cover rounded-xl" 
                  />
                </div>
                
                
                <div className="flex">
                  
                  <div className="flex justify-start mb-3">
                    {/* <div className="border border-[#FF4545] bg-[#FF4545] w-[120px]"></div> */}
                  </div>
                  
                 
                  <div className=" mb-4 mt-11">
                    <div>
                      <p className="text-gray-500 text-sm">{items.Brand}</p>
                      <h3 className="text-gray-800 font-bold text-xl">{items.Name}</h3>
                      <div className="flex items-center mt-2">
                        <span className={`inline-block text-xs px-2 py-1 rounded mr-2  ${
                          items.Status === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {items.Status}
                        </span>
                        <span className="text-sm text-gray-600 text-nowrap ">{items.Unit}</span>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className=" gap-4 mb-4 mt-9 ml-10">
                    <div className="flex items-center gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">Transmission</p>
                        <p className="text-gray-800 font-medium">{items.Gear}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500">Capacity</p>
                        <p className="text-gray-800 font-medium">{items.Capacity}</p>
                      </div>
                    </div>
                  </div>
                  
                 
                  <div className="mt-20">
                    {/* <hr className="h-px my-4 bg-[#F5EEDC] border-2 border-[#F5EEDC]" /> */}
                    <div className=" ml-[700px]">
                      <div className="flex items-baseline gap-1">
                        <i className="fa-solid fa-indian-rupee-sign text-lg text-gray-700"></i>
                        <span className="text-xl font-bold text-gray-800">{items.Price}</span>
                        <span className="text-sm text-gray-500">/days</span>
                        
                      </div>
                      <div className="mt-10 ml-40">
                        <button className="rounded-lg hover:bg-red-600 px-4 bg-red-500 text-white py-1">Remove</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Myvehicle;