import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, SideBar } from "../components";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SideBar />
      <main className="flex-1 p-4 md:ml-64">
        <div className="max-w-[1400px] mx-auto">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
