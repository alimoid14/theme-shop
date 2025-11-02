import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-[112px]">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
