import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
