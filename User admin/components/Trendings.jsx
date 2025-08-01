import react, { useState } from "react";

import date from "../../assets/Events/Date.png";
import location from "../../assets/Events/location.png";
import { Trends } from "../../Db/Trends";

function Trendings() {
  const [Eventdata, setEventdata] = useState(Trends);

  return (
    <>
      <div className="container">
        <div className="flex mt-3 font-main md:justify-between  lg:justify-between  ">
          <div className="hidden  md:flex md:ml-[20px] lg:flex lg:justify-start  ">
            <h1 className="mt-[-40px] md:mt-4 lg:mt-4 font-bold md:w-[600px] text-[28px] tracking-wider">
              Places To Explore Around  Puducherry
            </h1>
          </div>
          <div className="block md:hidden lg:hidden   ">
            <h1 className=" mx-12 font-bold md:w-[600px] md:ml-[0px] text-[28px] text-center">
              Places To <span>Explore Around </span> <span>Puducherry</span>
            </h1>
          </div>
          
        </div>

        <div className="ml-[0.5px]  flex gap-7 md:gap-20  lg:flex font-main tracking-widest overflow-x-scroll scroll-smooth h-[540px] white scrollbar-hidden overflow-auto">
          {Trends.map((items, id) => (
            <div key={id}>
              <div className="bg-white rounded-lg shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] p-4 w-[350px] h-[320px] lg:w-[500px] lg:h-[410px]  lg:ml-[25px] mt-14">
                <div className="">
                  <div className="relative">
                    <div className="w-full h-[170px] lg:w-[470px] lg:h-[270px] overflow-hidden">
                    
                      <img
                        className="rounded-xl w-full h-full object-cover"
                        src={items.img} loading="lazy"
                        
                      />
                    </div>

                    <div className="text-lg font-bold mt-2 tracking-widest">
                      {items.Title}
                    </div>
                    
                  </div>

                  <div className="font-[5000] flex text-gray-950 mt-2 text-base">
                    <img className="w-5" src={date} alt="date icon" />
                    <div className="ms-2 font-bold">
                      {items.Date}&nbsp;|&nbsp;<span>{items.Time}</span>
                    </div>
                  </div>
                  <div className="flex mt-2 justify-between h-[40px]">
                    <div className="flex">
                      <div className="font-s text-gray-700">
                        <img
                          className="w-5"
                          src={location}
                          alt="location icon"
                        />
                      </div>
                      <div className="font-bold ms-2 text-base text-gray-950">
                        {items.Location}
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-[100px] h-8 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-red-600 mb-20 text-sm"
                      >
                        Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
           
        </div>
        <div className="pt-2 mt-[-120px] md:w-[100px] md:ml-[310px] lg:ml-[750px] flex justify-center  ">
            <button
              type="button"
              className="block  md:block lg:hidden rounded-full border-2 border-gray-700  w-24 h-9 hover:bg-[#FF0000]"
            >
              View All
            </button>
          </div>
      </div>
    </>
  );
}
export default Trendings;
