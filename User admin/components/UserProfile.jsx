import React, { useState,useEffect } from "react";
import Info from "../../assets/Profile/Interface.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import Cookies from "js-cookie";
import axios from "axios";
import { Userprofile } from "../../Db/UserProfile";
import UserNavbar from "./UserNavbar";
import UserContext from '../../hooks/UseContext';
import Home from "../Pages/Home";

function ProfileInfo() {
  const [show, setshow] = useState(false);
  const [GetData,setGetData]= useState([])
   const id =Cookies.get("id")
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

   useEffect(() => {
    if (!id) {
      console.warn("No user ID.");
      return;
    }
    userData(id);
  }, [id]);
  

  const userData= async(id)=>{

    await axios.get(`${app}userGet/`+ encodeURIComponent(id))
    .then(response =>{
  
      const Data = response.data
      console.log(Data[0].name)
      setGetData(Data[0])
  
      
    
    })
   }
  


   console.log(GetData,"Data")


  return (


    <>
    <UserNavbar/>
 
   
      <div className=" w-full  h-[840px] rounded-2xl border border-gray-200 font-Outfit relative   ">
        <h2 className="mx-6 mt-5 text-center tracking-widest text-[30px] font-extrabold">
          Profile
        </h2>
        
        { GetData && (
          <div className="grid grid-row-3 justify-center ">
            <div className="p-5 mx-6 mb-6 flex items-center justify-evenly mt-5 border border-gray-200 rounded-2xl w-[1000px] h-[130px] bg-white ">

                  <div className="mt-3 w-24 h-24 overflow-hidden  border-gray-200  dark:border-gray-800">
                    {/* <img
                      className=" w-20 h-20 object-cover rounded-full "
                      src={items.img}
                      alt=""
                    /> */}
                  </div>

                    <div className="">
                      <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left tracking-wider">
                        {GetData.name}
                      </h4>
                    </div>

                   
     
                <div onClick={() => setshow(!show)} className="">
                <button className="mx-6 flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                      fill=""
                    ></path>
                  </svg>
                  Edit
                </button>
              </div>

               
            

              
             
            </div>

            <div className="p-5 mx-6 mb-6 w-[1000px] border border-gray-200 rounded-2xl dark:border-gray-800 font-Outfit lg:p-6 bg-white">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h4 className="text-lg font-bold flex gap-1  items-baseline tracking-wider text-gray-800 dark:text-white/90 lg:mb-6">
                  <FaClipboardUser className="size-5 text-green-600 " />  Personal Information
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                    <div>
                      <p className="mb-2 font-bold   text-gray-500 dark:text-gray-400">
                        User Name
                      </p>
                      <p className="font-thin font-Outfit  dark:text-white/90">
                        {GetData.name}
                      </p>
                    </div>

                  
                    <div>
                      <p className="mb-2 font-bold text-gray-500 dark:text-gray-400">
                       Email
                      </p>
                      <p className="font-thin font-Outfit  dark:text-white/90">
                        {GetData.email}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-bold  text-gray-500 dark:text-gray-400">
                       Phone
                      </p>
                      <p className="font-thin font-Outfit  dark:text-white/90">
                        {GetData.phoneNo}
                      </p>
                    </div>

                    
                  </div>
                </div>
                <div className=" mr-[90px] ">
                <img className="h-[270px] w-[320px] " src={Info} width="300px "/>
              </div>
              </div>
              
            </div>

            <div className="p-5 mx-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 bg-white">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                <div>
                  <h4 className="text-lg font-bold flex tracking-wider gap-1 text-gray-800 dark:text-white/90 lg:mb-6">
                  <FaLocationDot className="size-5 text-red-500" />  Address 
                  </h4>
                  <p className="mb-2 font-bold text-gray-500 dark:text-gray-400">
                        {GetData.Address}
                      </p>
                  
                    
                      
                    </div>

                    <div>
                      <p className="mb-2 font-bold text-gray-500 dark:text-gray-400">
                        City/State
                      </p>
                      <p className="font-Outfit font-thin text-gray-800 dark:text-white/90">
                      {GetData.state},{GetData.city}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 font-bold text-gray-500 dark:text-gray-400">
                      Postal Code
                      </p>
                      <p className="font-Outfit font-thin text-gray-800 dark:text-white/90">
                        {GetData.pincode}
                      </p>
                    </div>

                    
                  </div>
                </div>
                {/* <div className="mr-[400px]">
                    <img className="h-[100px] w-[100px]" src={location} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        )}


{show ? (
                <div className=" absolute left-[0px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
                  <div className=" rounded-xl ">
                    <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl  ">
                      <div className="flex justify-evenly">
                        <div className="">
                          <h2 className="text-3xl font-bold font-Caveat mb-4 text-center">
                            Personal Information
                          </h2>
                        </div>
                        <div
                          onClick={() => setshow(!show)}
                          className="cursor-pointer ml-auto text-2xl text-end border w-10 h-10 mx-2 bg-white rounded-full "
                        >
                          <i className="fa-solid fa-xmark text-red-500 mr-[10px] mt-2 "></i>
                        </div>
                      </div>

                      <div className="">
                        <div className="mb-6">
                          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="font-bold">
                                First Name
                              </label>
                              <input
                                type="text"
                                className="w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1"
                              />
                            </div>
                            <div>
                              <label className="font-bold">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1"
                              />
                            </div>
                            <div>
                              <label className="font-bold">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1"
                                placeholder="user@example.com"
                              />
                            </div>
                            <div>
                              <label className=" font-bold">Phone</label>
                              <input
                                type="text"
                                className="w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1"
                                placeholder="+ 09 563 798 46"
                              />
                            </div>
                            {/* <div>
                              <label className=" font-bold">Bio</label>
                              <input
                                type="text"
                                className="w-[600px] border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1"
                              />
                            </div> */}
                          </form>
                        </div>

                        <div className="flex justify-end">
                        
                          <button className="bg-green-400 text-white px-4 py-2 rounded-lg ">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
      </div>
    </>
  );
}

export default ProfileInfo;
