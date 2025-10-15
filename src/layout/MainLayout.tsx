import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, SideBar } from "../components";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SideBar />
      <main className="flex-grow">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
