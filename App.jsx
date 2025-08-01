import Home from "./User admin/Pages/Home";
import Login from "./User admin/components/Login"
import Signup from "./User admin/components/Register"
import SuperAdminHome from "./Superadmin/SuperAdminRoutes/SuperAdmin"
import Event from "../src/User admin/components/Events"
import Shopadmin from "./Shopadmin/Pages/Shopadmin"
import "./css/index.css";
import { BrowserRouter as Router, Route, Routes, UNSAFE_ErrorResponseImpl } from "react-router-dom";
import CardDetails from "./User admin/components/CardDetails";
import UserAdmin from "./User admin/User-routes/UserAdmin"
import Rentalform from "./User admin/components/Rentalform";
import UserData from "./userData";
import  ProtectedRoutes from "./routes/ProtectedRoutes"
import AdminLogin from "./Superadmin/components/AdminLogin";
import UserProfile from "./User admin/components/UserProfile"
import Confirmation from "./User admin/components/Confirmation"
import ShopAdminLogin from "./Shopadmin/components/ShopAdminLogin"
import WishList from "./User admin/components/Wishlist"
import CompleteCards from "./User admin/components/CompleteCards";
import CompleteLatest from "./User admin/components/CompleteLatest"
import BookingConfirmation from "./User admin/components/BookingConfirmation"
import Customer from "./User admin/components/Customer" 
import MyBookings from  "./User admin/components/booking"
import Forgot  from "./Uitilites/Forgot"

function App() {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  console.log(app,"env") 
  // console.log(BackendApi,"asdfasdf")
  return (
    <>
      <Router>
      <Routes>
       

        <Route path="/" element={<UserAdmin />} />  

        <Route path="/home" element={<UserAdmin />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/ShopAdminLogin" element={<ShopAdminLogin />} />

       
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/confirm" element={<Confirmation />} />
        <Route path="/RentalForm" element={<Rentalform />} />
        <Route path="/WishList" element={<WishList/>} />

        
        <Route path="/CompleteCard" element={<CompleteCards/>} />
        <Route path="/CompleteLatestCard" element={<CompleteLatest/>} />
        <Route path = "/Customer" element = {<Customer/>} />


      
        <Route  element= {<ProtectedRoutes/>}>
       
         <Route path="Booking/:id" element={<CardDetails />} />
          <Route path="admin/*" element={<SuperAdminHome />} />
          <Route path="shop-admin/*" element={<Shopadmin />} />
<Route path="/booking-confirmation" element={<BookingConfirmation />} />
<Route path = "/MyBookings"  element={<MyBookings/>}/>
<Route path = "/forgot" element={<Forgot/>}/>




               
  
        </Route>


        
        
      
        

   
        
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
