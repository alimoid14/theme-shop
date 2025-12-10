import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MovingBanner from "./components/layout/MovingBanner";

function Layout() {
  return (
    <>
      <Navbar />
      <MovingBanner />
      <main className="pt-36">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
