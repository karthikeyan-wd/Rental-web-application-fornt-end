import React, { useState, useEffect } from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlineCarRental } from "react-icons/md";
import { TbTimeDuration10 } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { LiaUserTieSolid } from "react-icons/lia";
import BookingsTable from "./BookingsTable";
const Add_Booking = ({  Close }) => {

  // console.log(Close)
  // const[show,SetShow]=useState(Close)



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
  
  const carBrands = [
    "Audi", "Bentley", "BMW", "Cadillac", "Chrysler", "Dodge", "Ferrari", 
    "Ford", "Honda", "Hyundai", "Jaguar", "Kia", "Mahindra", "Maruti Suzuki", 
    "Mazda", "MG Motor", "Nissan", "Renault", "Skoda", "Tata Motors", 
    "Toyota", "Volkswagen"
  ]
  const Hours=[ "1 Hours ", "2 Hours" ,"6 Hours","12Hours","1 Day","1 Weeks"]
  
  
  const [selectedDate, setSelectedDate] = useState("");

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  

  
 
  return (
    <>
<div>
   <div className='w-auto mx-[200px] mr-4  bg-white  rounded-xl font-sans'>
       
        <div className=" flex justify-end items-center border-b border-black">
        {/* <p className="text-sm font-mono mx-[100px] text-black">{formatTime(time)}</p>  */}

        
        
       

              <button onClick={Close} className="p-2 rounded-full hover:bg-white transition">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                 </svg>
              </button>
        </div>
     
<div className="flex  ">

   <div className=' border-r border-black mx-4 my-[20px]'>

    <label
            htmlFor="name"
            className=" mb-2 gap-3  text-lg flex font-thin text-black dark:text-white"
          > <MdOutlineCarRental className="size-8 text-primary" />

     Booking Id :
        </label>
        
        <input type="text" placeholder="RENT-APP001" className='  mx-10 my-[20px]  border block border-gray-300 text-gray-900 text-sm rounded-md  w-[350px] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white' />
        

       

    <div className=" h-[180px]">
        <label className="flex gap-3 my-[40px] text-black font-thin  mb-2 text-lg">
        <HiOutlineCalendarDateRange className="size-8 text-primary" /> Booking Date:
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleChange}
          className=" border block mx-10 my-[20px] border-gray-300 text-gray-500 text-sm rounded-md  w-[350px] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        {selectedDate && (
          <p className=" text-green-600 mt-[-10px] font-extralight mx-11">
            Selected Date: {selectedDate}
          </p>
        )}
   </div>
       
    


   <label className=" flex gap-3 my-[-30px] text-black font-thin  mb-2 text-lg">
   <TbBrandBlogger className="size-8 text-primary" />
   vehicle brand:
        </label>
        <select name="brand" className=' mx-10 border block border-gray-300 text-gray-900 text-sm rounded-md w-[350px] p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
            
            {
                
                carBrands.map((items,id)=>(
                    <option key={id} value="brand">{items}</option>

                ))
            
            }
             
        </select>
 </div>


 <div className="mx-1 my-[20px]">

 <label 
          htmlFor="name"
          className=" flex gap-3  text-lg font-thin text-black dark:text-white">
          <LiaUserTieSolid className="size-8 text-primary"  /> Client Name : </label>
        <input type="text" placeholder=" ENTER CLIENT NAME" className='  mx-10 my-[20px] border block border-gray-300 text-gray-900 text-sm rounded-md  w-[350px] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white' />



        <label
            htmlFor="name"
            className="flex gap-3 mb-2 my-[40px]   text-lg font-thin text-black dark:text-white"
          >
        <TbTimeDuration10 className="size-8 text-primary"/> Rental Plan :
        </label>
        <select name="brand" className=' mx-10 border block border-gray-300 text-gray-900 text-sm rounded-md w-[350px] p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
            
            {
                
                Hours.map((items)=>(
                    <option value="brand">{items}</option>

                ))
            
            }
             
        </select>
        <label
            htmlFor="name"
            className="flex gap-3 mb-2 my-[50px]   text-lg font-thin text-black dark:text-white"
          >
        <GiTakeMyMoney className="size-8 text-primary" /> Payment :
        </label>

        <select name="plan" className='  mx-10  border block border-gray-300 text-gray-900 text-sm rounded-md  w-[350px] p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
             <option value="payment">Paid</option>
             <option value="payment">pending</option>
            
        </select>


 </div>
   </div>
   <label className="flex gap-3 text-black font-thin mb-2 text-lg mx-4 ">
   <BsCalendar2Date className="size-7 text-primary" /> Booking Date:
        </label>
   <div className=" my-[10px] mx-11  items-center flex">

        <input
          type="date"
          value={selectedDate}
          onChange={handleChange}
          className=" border block border-gray-300 text-gray-900 text-sm rounded-md  w-[350px] mx-3 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        
        <p className="mx-6">to</p>
       <input
          type="date"
          value={selectedDate}
          onChange={handleChange}
          className=" border block  border-gray-300 text-gray-900 text-sm rounded-md mx-6 w-[350px] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
       
        

</div>
<div className=" flex  mx-[60px] gap-11">
        {selectedDate && (
          <p className=" text-green-600 font-thin ">
            Selected Date: {selectedDate}
          </p>
        )}
         {selectedDate && (
          <p className=" text-green-600 mx-[210px] font-thin">
            Selected Date: {selectedDate}
          </p>
        )}
        </div>
        <div className="flex justify-end mr-12 mt-2">
        <button className="border border-blue-200  rounded-lg h-11 w-[130px] bg-primary text-center font-semibold text-white" type="onclick">
            Submit

        </button>
        </div>
       
  </div>
    
    
     
       
    </div>
  
    </>
  
  );
};

export default Add_Booking;