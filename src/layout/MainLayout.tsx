import React from "react";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <main className="flex-grow">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
