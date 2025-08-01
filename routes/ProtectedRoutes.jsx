import React, { useEffect } from 'react'
import { useState,createContext,useContext } from 'react'
import { Outlet ,Navigate,useLocation} from 'react-router-dom'
import Loding from "../@UI/loader"
import Cookies from "js-cookie";
  

// const MyContext = createContext();

// export  const Authentication=()=> {
//     return (  
//         <MyContext.Provider value={Auth}>
//             <ProtectedRoutes />
//         </MyContext.Provider>
//     );
// }

export const ProtectedRoutes = () => {

  // const Token = Cookies.get("Token")

  const [Auth,setAuth]=useState(null)
 const location = useLocation();
  useEffect(()=>{
  // const Token = Cookies.get("userId")
  const Admin_Token= Cookies.get("AdminToken")
  const ShopAdminToken = Cookies.get("ShopAdminToken")
const Token = Cookies.get("Token")
    if(Admin_Token !=null || ShopAdminToken !=null ||Token !=  null){
      setAuth(true)
    }
    else{
      setAuth(false)
    }
  },[location])


      if (Auth === null) {
    return (
      <div>
        <Loding />
      </div>
    )
  }

  if (Auth) {
    return <Outlet />
  }
const path = location.pathname.toLowerCase()

if (path.startsWith("/admin")) {
  return <Navigate to="/AdminLogin" replace />
}

if (path.startsWith("/shop-admin")) {
  return <Navigate to="/ShopAdminLogin" replace />
}
else return <Navigate to = "/login" replace/>

}



export default ProtectedRoutes;



        