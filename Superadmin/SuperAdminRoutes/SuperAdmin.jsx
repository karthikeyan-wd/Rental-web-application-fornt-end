import React, { useEffect, useState } from 'react'
import SuperAdminHome from "../Pages/SuperAdminHome"
const SuperAdmin = () => {
    const[Show,SetShow]=useState(true)
        
        
    useEffect(() => {
        setTimeout(() => {
            SetShow(false);
        }, 800);
      }, []);
  return (
    <div>
        
                {
        
                    Show ?(
        <div className=' mt-[20%]'>
        
        
        
        
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div
            className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
          >
            <div
              className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
          </div>
        </div>
        </div>
                    )
        :
        <SuperAdminHome/>
                }
      
    </div>
  )
}

export default SuperAdmin
