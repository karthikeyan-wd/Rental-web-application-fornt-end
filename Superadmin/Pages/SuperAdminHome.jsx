import SuperAdminDashboard from "../../Layouts/SuperAdminDashboard";
import Dashboard from "../components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Usertable from "../components/Usertable"
import Ownerinfo from "../components/Ownerinfo"
import Calendar from "../components/Calendar";
import ProfileInfo from "../components/Profileinfo";
import CustomerReview from "../components/CustomerReview"
import Rentalform from "../components/Rentalform";
import Settings from "../components/Settings";
import Mail from "../components/Mail";
import Notifications from "../components/Notifications";
// import AdminLogin from "../components/AdminLogin";
import VehicleType from "../components/VehicleType"
import Brand from "../components/Brand"
import Fuel from "../components/Fuel"
import Transmission from "../components/Transmission"
import AdminRole from "../components/AdminRole";
function Admin() {
  return (
    <>
    <Routes>


    <Route path="/" element={<SuperAdminDashboard />}>
        <Route index element={<Dashboard />} />
        
        <Route path="/Usertable" element={<Usertable />} />
        <Route path="/Ownerinfo" element={<Ownerinfo />} />
        <Route path="/Reviews" element={<CustomerReview />} />
        

        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Notifications" element={<Notifications/>} />

        <Route path ="/AdminRole" element ={<AdminRole/>}/>
        <Route path="/Profile-info" element={<ProfileInfo />} />
        <Route path="/Mail" element={<Mail/>} />
        <Route path="/VehicleType" element={<VehicleType/>} />
        <Route path="/Brand" element={<Brand/>} />
        <Route path="/Fuel" element={<Fuel/>} />
        <Route path="/Transmission" element={<Transmission/>} />  

      </Route>

    </Routes>
    
      
       
    
    
    </>
   
  );
}

export default Admin;
