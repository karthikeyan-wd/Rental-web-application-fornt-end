import { useState } from "react"
import loc from "../../assets/Testo/location.png"
import men from "../../assets/Testo/men.jpg"
import men1 from "../../assets/Testo/men2.jpg"
import women from "../../assets/Testo/women1.jpg"
import {Tests} from "../../Db/Test"

function Test() {

    const [data]=useState(Tests)


    return (
        <>
            <div className=" lg:mx-6 mb-3 mt-[70px] font-main bg-[#F5F5F5] ">
                
                <div className="ml-[55px] lg:mt-3 lg:mb-7 lg:ml-6 flex justify-center lg:justify-between   py-3   ">
                    <div className="lg:ms-[410px] text-[30px] lg:text-nowrap font-bold mt-9">
                        <span className="text-center ">What Our Happy Customers Says</span>
                    </div>
                   
                </div>

                <div className=" font-main grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-[70px] ">
{
    data.map((items,id)=>(

<div  key={id}>

<div  className="w-[330px] h-[380px] md:w-[320px] md:h-[380px]  lg:w-[330px] lg:h-[380px]   rounded-xl shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)]  relative mb-20 ms-3 lg:ms-7 border-l-[6px] border-[#FF0000] ">
                        <div className=" mx-  rounded-full w-[160px] h-[160px] border-2 border-[#FF0000] absolute left-20 -top-12">
                            <div className=" rounded-full w-[140px] h-[140px]  mx-[11.5px] my-3.5 items-center">
                                <img className="rounded-full w-[130px] h-[130px]" src={items.img} alt="" />
                            </div>
                        </div>
                        <div className=" relative top-28 mt-3 ">

                            <div className="flex items-center justify-center gap-3 ">

                                <svg className="w-4 h-4 text-[#FF0000] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-[#FF0000] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-[#FF0000] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-[#FF0000] ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>

                            </div>

                            <div className="mt-3 text-center font-bold text-[15px]">
                                <span>{items.Name}</span>
                            </div>

                            <div className="flex justify-center gap-2 mt-1">
                                <div className="mt-1">
                                    <img src={loc} alt="" width="20px"/>
                                </div>
                                <span>{items.location}</span>
                            </div>

                            <div className=" mt-3 ml-5 pb-3 mb-4 w-[280px] text-center ">
                                <span>{items.Des}</span>
                            </div>
                        </div>
                    </div>


</div>

    ))
}
                 

                   
                </div> 
                <div className=" flex justify-center">
                <button type="button" className="mt-5 ml-10 md:mt[-40px] lg:mt-[-19px] md:mb-[70px] lg:mb-[20px] lg:block text-white bg-[#FF0000] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-24">View All</button>
                </div>

            </div>
        </>
    )
}

export default Test