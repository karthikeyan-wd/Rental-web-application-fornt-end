
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Shopadmin/components/Sidebar";
import S_A_navbar from "../Shopadmin/components/Shop_Admin_NavBar";

const S_A_Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex h-screen relative ">
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <div className="shadow z-10">
          <S_A_navbar setOpenSidebar={setOpenSidebar} />
        </div>

        <div className="flex-1 overflow-y-auto bg-main ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default S_A_Dashboard;