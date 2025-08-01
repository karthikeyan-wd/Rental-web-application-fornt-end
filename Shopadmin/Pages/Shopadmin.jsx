import ShopAdminDashboard from "../../Layouts/ShopAdminDashboard";
import Dashboard from "../components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Review from "../components/Review"
import Myvehicle from "../components/Myvehicle"
import Calendar from "../components/Calendar";
import ProfileInfo from "../../Superadmin/components/Profileinfo";
import BookingsTable from "../components/BookingsTable";
import Notifications from "../components/Notifications";
import Help from "../components/Help_Support";
import Settings from "../components/Settings";
import CustomerReviews from "../components/Review";
 
function Shopadmin() {
  return (
    <>
    <Routes>


    <Route path="/" element={<ShopAdminDashboard />}>
        <Route index element={<Dashboard />} />
        
        <Route path="/BookingsTable" element={<BookingsTable />} />
        <Route path="/Myvehicle" element={<Myvehicle />} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Reviews" element={<CustomerReviews/>} />

        <Route path="/Calendar" element={<Review />} />
        <Route path="/Profile-info" element={<ProfileInfo />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Help" element={<Help />} />
      </Route>

    </Routes>
    
      
       
    
    
    </>
   
  );
}

export default Shopadmin;
