import React, { useState } from "react";
import profile from "../../assets/Reviews/Shakthi.jpg"
import ravi from "../../assets/Reviews/ravi.jpg"
import ammu from "../../assets/Reviews/ammu3.jpg"
import yamu from "../../assets/Reviews/yamu1.jpg"
import shalini from "../../assets/Reviews/shalini1.jpg"
import shakthi from "../../assets/Reviews/Shakthi.jpg"
import Star from "../../@UI/Star"
function CustomerReviews() {
  const [activeTab, setActiveTab] = useState('all');
  const Review = [
    {
      id:1,
      img:ravi,
      name:"Ravi",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id:2,
      img:profile,
      name:"Lakshmi",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id:3,
      img:ammu,
      name:"Amudha",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id:4,
      img:yamu,
      name:"Yamuna",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id:5,
      img:shalini,
      name:"Shalini",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id:6,
      img:shakthi,
      name:"Shakthi",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    
  ]

  const Published=[
    {
      id:1,
      img:ammu,
      name:"Amudha",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id:2,
      img:yamu,
      name:"Yamuna",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
  ];

  const Pending=[
    {
      id:1,
      img:shalini,
      name:"Shalini",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
    {
      id:2,
      img:shakthi,
      name:"Shakthi",
      date:"Mar 15, 2025",
      time:"10.50 AM",
      vehicle:"SUV - Toyota RAV4",
      rev:"I have used this rental service for almost a year. The vehicles are always clean and well-maintained"
    },
  ];

  const Content = () => {
    switch (activeTab) {
      case 'all':
        return <div>
           <div className="flex justify-between">
            <div className="flex gap-3 ml-4">
              <form>
                <input className="mt-1 size-4 ml-5 border-2" type="checkbox"/>
              </form>
              <span className="">0 Selected</span>
              </div>
              <div className="flex gap-5 mr-2">
             <button className=" text-white w-[150px] h-[32px] bg-blue-600  rounded-lg">Publish Selected</button>
                <button className=" text-white w-[150px] h-[32px] bg-blue-600 rounded-lg">Publish Deleted</button>
              </div>
            </div>
            <div className=" mt-3 border rounded-2xl mx-3 min-h-screen">
            <div className="flex justify-evenly border-b-2 bg-gray-100 rounded-t-2xl">
              <div className="mt-4  flex justify-around mb-4">
                <span className="mr-28">Customer</span>
                <span className="">Vehicle type</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-[250px] mb-4">
                <span className="">Review</span>
                <span>Action</span>
              </div>
            </div>

          {Review.map((items)=>(
            <>
            <div className="flex justify-between gap-5 " key={items.id}>
            <form>
              <input className="mt-10 size-4 ml-5 border-2" type="checkbox"/>
            </form>

            <img className="mt-6 w-[60px] h-[60px] rounded-2xl object-cover" src={items.img} alt="" />

            <div className="mt-4 grid grid-cols-1 w-[150px]">
              <span >{items.name}</span>
              <span className="">{items.date}</span>
              <span>{items.time}</span>              
            </div>

            <span className="mt-8">{items.vehicle}</span>

            <div className="mx-8 mt-5 w-[450px]">
              <div className="flex gap-3 ">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
              </div>
              <p className="mt-1">{items.rev}</p>
            </div>
            
            <div className="items-center flex gap-5 mr-6  "> 
              <div className=" bg-gray-200 border w-8 h-8 rounded-full   text-center">

              <i className="mt-[5px] text-center text-gray-500 fa-solid fa-check   "></i>            


              </div>
              <div className="  bg-gray-200 border w-8 h-8 rounded-full    text-center">
              <i className="mt-[5px] text-blue-500 fa-solid fa-pen-to-square"></i>


              </div>
              <div className=" bg-gray-200 border w-8 h-8 rounded-full    text-center">

              <i className="mt-[5px] text-red-500 fa-solid fa-trash"></i>

              </div>
            </div>
          </div>
          <hr className="mt-2 h-px bg-gray-300 border-0 dark:bg-gray-300"/>
          </>
          ))}          
        </div>
          
        </div>;
        
      case 'published':
        return <div>
           <div className="flex justify-between">
            <div className="flex gap-3">
              <form>
                <input className="mt-1 size-4 ml-5 border-2" type="checkbox"/>
              </form>
              <span className="">0 Selected</span>
              </div>
              <div className="flex gap-5 mr-2">
             <button className=" text-white w-[150px] h-[32px] bg-blue-600  rounded-lg">Publish Selected</button>
                <button className=" text-white w-[150px] h-[32px] bg-blue-600 rounded-lg">Publish Deleted</button>
              </div>
            </div>
            <div className=" mt-3 border rounded-2xl mx-3 min-h-screen">
            <div className="flex justify-evenly border-b-2 bg-gray-100 rounded-t-2xl">
              <div className="mt-4  flex justify-around mb-4">
                <span className="mr-28">Customer</span>
                <span className="mr-28">Vehicle type</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-[250px] mb-4">
                <span className="">Review</span>
                <span>Action</span>
              </div>
            </div>

          {Published.map((items)=>(
            <>
            <div className="flex justify-between gap-5 " key={items.id}>
            <form>
              <input className="mt-10 size-4 ml-5 border-2" type="checkbox"/>
            </form>

            <img className="mt-6 w-[60px] h-[60px] rounded-2xl" src={items.img} alt="" />

            <div className="mt-4 grid grid-cols-1 w-[150px]">
              <span >{items.name}</span>
              <span className="">{items.date}</span>
              <span>{items.time}</span>              
            </div>

            <span className="mt-8">{items.vehicle}</span>

            <div className="mx-8 mt-5 w-[450px]">
              <div className="flex gap-3 ">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
              </div>
              <p className="mt-1">{items.rev}</p>
            </div>
            
            <div className="items-center grid grid-cols-3 gap-5 mr-6 ">              
            <div className=" bg-gray-200 border w-8 h-8 rounded-full   text-center">

<i className="mt-[5px] text-center text-gray-500 fa-solid fa-check   "></i>            


</div>
<div className="  bg-gray-200 border w-8 h-8 rounded-full    text-center">
<i className="mt-[5px] text-blue-500 fa-solid fa-pen-to-square"></i>


</div>
<div className=" bg-gray-200 border w-8 h-8 rounded-full    text-center">

<i className="mt-[5px] text-red-500 fa-solid fa-trash"></i>

</div>
            </div>
          </div>
          <hr className="mt-2 h-px bg-gray-300 border-0 dark:bg-gray-300"/>
          </>
          ))}          
        </div>
          
        </div>;

        
      case 'pending':
        return <div>
        <div className="flex justify-between">
         <div className="flex gap-3">
           <form>
             <input className="mt-1 size-4 ml-5 border-2" type="checkbox"/>
           </form>
           <span className="">0 Selected</span>
           </div>
           <div className="flex gap-5 mr-2">
             <button className=" text-white w-[150px] h-[32px] bg-blue-600  rounded-lg">Publish Selected</button>
             <button className=" text-white w-[150px] h-[32px] bg-blue-600 rounded-lg">Publish Deleted</button>
           </div>
         </div>
         <div className=" mt-3 border rounded-2xl mx-3 min-h-screen">
         <div className="flex justify-evenly border-b-2 bg-gray-100 rounded-t-2xl">
           <div className="mt-4  flex justify-around mb-4">
             <span className="mr-28">Customer</span>
             <span className="mr-28">Vehicle type</span>
           </div>
           <div className="mt-4 grid grid-cols-2 gap-[250px] mb-4">
             <span className="">Review</span>
             <span>Action</span>
           </div>
         </div>

       {Pending.map((items)=>(
         <>
         <div className="flex justify-between gap-5 " key={items.id}>
         <form>
           <input className="mt-10 size-4 ml-5 border-2" type="checkbox"/>
         </form>

         <img className="mt-6 w-[60px] h-[60px] rounded-2xl" src={items.img} alt="" />

         <div className="mt-4 grid grid-cols-1 w-[150px]">
           <span >{items.name}</span>
           <span className="">{items.date}</span>
           <span>{items.time}</span>              
         </div>

         <span className="mt-8">{items.vehicle}</span>

         <div className="mx-8 mt-5 w-[450px]">
           <div className="flex gap-3 ">
             <Star/>
             <Star/>
             <Star/>
             <Star/>
             <Star/>
           </div>
           <p className="mt-1">{items.rev}</p>
         </div>
         
         <div className="items-center grid grid-cols-3 gap-5 mr-6 ">              
         <div className=" bg-gray-200 border w-8 h-8 rounded-full   text-center">

<i className="mt-[5px] text-center text-gray-500 fa-solid fa-check   "></i>            


</div>
<div className="  bg-gray-200 border w-8 h-8 rounded-full    text-center">
<i className="mt-[5px] text-blue-500 fa-solid fa-pen-to-square"></i>


</div>
<div className=" bg-gray-200 border w-8 h-8 rounded-full    text-center">

<i className="mt-[5px] text-red-500 fa-solid fa-trash"></i>

</div>
         </div>
       </div>
       <hr className="mt-2 h-px bg-gray-300 border-0 dark:bg-gray-300"/>
       </>
       ))}          
     </div>
       
        </div>;
      case 'deleted':
        return <div>Deleted Reviews</div>;
        
      default:
        return null;
    }
  };

  const tabClass = (tab) =>
    `px-4 py-2 rounded-t-lg cursor-pointer ${
      activeTab === tab
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`;


  

  return (
    <>    
      <div className="bg-white min-h-screen">
        <div className=" flex justify-between">
          <span className="flex mt-4 mx-2 text-lg font-bold">Customer Reviews</span>
          <div className=" mr-2 border-2 rounded-lg mt-4 flex gap-2 text-lg ">
              <i className="m-2 mt-4 fa-solid fa-calendar"></i>
              <div className="mr-2 grid grid-cols-1">
                <span className="text-gray-500">Date Range</span>
                <span>March-1 to April-31, 2025</span>
              </div>              
          </div>           
        </div>

        <div className="mt-3 mx-3 ">
          
           <div className="flex space-x-2 border-b border-gray-300">
            <div onClick={() => setActiveTab('all')} className={tabClass('all')}>
              All Reviews
            </div>
            <div onClick={() => setActiveTab('published')} className={tabClass('published')}>
              Published
            </div>
            <div onClick={() => setActiveTab('pending')} className={tabClass('pending')}>
              Pending
            </div>
            <div onClick={() => setActiveTab('deleted')} className={tabClass('deleted')}>
              Deleted
            </div>
          </div>
          <div className="p-6 bg-white border border-t-0 border-gray-300 rounded-b-lg shadow">
            {Content()}
          </div>
        </div>        
      </div>
    </>
  );
}
export default CustomerReviews;
