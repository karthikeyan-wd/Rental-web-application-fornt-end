
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Superadmin/components/Sidebar";
import SuperAdminNavbar from "../Superadmin/components/SuperAdminNavbar";

const S_A_Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex h-screen relative ">
      {/* Sidebar */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <div className="shadow z-10">
          <SuperAdminNavbar setOpenSidebar={setOpenSidebar} />
        </div>

        <div className="flex-1 overflow-y-auto bg-main ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default S_A_Dashboard;