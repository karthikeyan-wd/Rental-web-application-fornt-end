import React from "react";
import Shop from "../../assets/Profile/profile.jpg"
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Loader from "../../@UI/loader";
import Ownerinfo from "./Ownerinfo"


const ShopApprovalForm = ({ Close,data, onStatusUpdate  }) => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

    const [loadOwnerInfo,setloadOwnerInfo]=useState(false)
  
  const ShopId = Cookies.get("ShopID")

  const Status=async(num,data)=>{
          
          const ShopID=data.shop_id

    // if(num == 0){
    //   console.log(0)

    // }
    // else if(num == 1){
    //   console.log(1)


    // }
       
        // setloading(true)

    await axios.post(`${app}status/${num}/${ShopID}`)
    .then(response =>{
       if(response.data == "Updated isApproved"){

        onStatusUpdate ()
    }
  })
   
  }

  return (
    <>
  
    <div className="max-w-7xl mx-auto mt-12   ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Shop Approval Request</h1>
            <p className="text-sm text-gray-500 mt-1">Application ID: RNT-2025-04132</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">Pending Review</span> */}
           
            <button  onClick={Close} className="text-gray-400 hover:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-gray-50 p-6 border-r border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Owner Details
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span>Full Name</span>
                </div>
                <p className="text-gray-800 font-medium pl-6">{data.owner_name}</p>
                <div className="h-px bg-gray-200 mt-2"></div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Contact Number</span>
                </div>
                <p className="text-gray-800 font-medium pl-6">{data.phoneNumber}</p>
                <div className="h-[0.2px] bg-gray-200 mt-2"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>Email Address</span>
                </div>
                <p className="text-gray-800 font-medium pl-6">{data.email}</p>
                <div className="h-px bg-gray-200 mt-2"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Residential Address</span>
                </div>
                <p className="text-gray-800 font-medium pl-6">{data.owner_address}</p>
                <div className="h-px bg-gray-200 mt-2"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                  <span>Aadhaar Card Number</span>
                </div>
                <p className="text-gray-800 font-medium pl-6">{data.aadhaarNumber}</p>
                <div className="h-px bg-gray-200 mt-2"></div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  <span>ID Photo</span>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 w-24 h-24 flex items-center justify-center overflow-hidden">
                  <img src="/api/placeholder/100/100" alt="Owner ID" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              Shop Details
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                  <span>Shop Name</span>
                </div>
                <p className="text-gray-800 font-medium pl-6">{data.shop_name}</p>
                <div className="h-px bg-gray-200 mt-2"></div>
              </div>
              
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Shop Address</span>
                </div>
                
                <div className="pl-6 space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Street Address</p>
                    <p className="text-gray-800">{data.shop_address}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">City</p>
                      <p className="text-gray-800">{data.city}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">State</p>
                      <p className="text-gray-800">{data.state}</p>
                    </div>
                    {/* <div>
                      <p className="text-xs text-gray-500">Country</p>
                      <p className="text-gray-800">India</p>
                    </div> */}
                    <div>
                      <p className="text-xs text-gray-500">Pin Code</p>
                      <p className="text-gray-800">{data.pincode}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.48-8.48l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                  <span>GST Number</span>
                </div>
                <p className="text-gray-800 font-medium pl-6">3{data.gst_no}</p>
                <div className="h-px bg-gray-200 mt-2"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.48-8.48l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    <span>Shop License</span>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 w-24 h-24 flex items-center justify-center overflow-hidden">
                    <img src="/api/placeholder/100/100" alt="Shop License" className="object-cover w-full h-full" />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    <span>Shop Images</span>
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 w-16 h-16 flex-shrink-0 overflow-hidden">
                        <img src={Shop} className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-6 bg-gray-50 flex justify-center space-x-4">
          <button onClick={()=>Status(1,data)}  className="px-6 py-2 rounded-lg font-medium bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-colors">
            
                {loadOwnerInfo && <Ownerinfo load={true} />}
            
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Approve
            </span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShopApprovalForm;