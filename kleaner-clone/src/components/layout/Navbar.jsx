import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useAuthStore } from "../../store/authStore";

function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const [menu, setMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <>
      <nav className="fixed bg-slate-900 top-0 w-full mx-auto flex flex-row justify-between text-white py-2 pr-2 pl-6 sm:px-6 z-50">
        <button
          className="text-xl md:hidden py-2 text-white cursor-pointer"
          onClick={() => {
            setMenu(!menu);
            if (profileMenu) setProfileMenu(false);
          }}
        >
          <CiMenuBurger />
        </button>
        <Link to="/" className="py-2 sm:text-[1.25rem] sm:py-1">
          <span className="font-bold">envato </span>market
        </Link>

        <div className="hidden w-[300px] sm:w-[450px] md:flex flex-row justify-around gap-6">
          <Link to="/about" className="py-2 sm:text-[1.25rem] sm:py-1">
            About
          </Link>
          <Link to="/live" className="py-2 sm:text-[1.25rem] sm:py-1">
            Template Demo
          </Link>
          <Link to="/cart" className="py-2 sm:text-[1.25rem] sm:py-1">
            Cart
          </Link>
          {/* {isAuthenticated && (
            <div className="py-2 sm:text-[1.25rem] sm:py-1 bg-white rounded-full text-slate-900 px-4">
              
            </div>
          )} */}
        </div>
        <div className="flex flex-row gap-4">
          <button
            className="text-xl py-2 text-white cursor-pointer"
            onClick={() => {
              setProfileMenu(!profileMenu);
              if (menu) setMenu(false);
            }}
          >
            <CgProfile />
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/buy" className="">
              Buy
            </Link>
          </button>
        </div>
      </nav>
      <div
        className={`fixed left-0 font-bold px-4 max-h-0 w-full flex flex-col gap-4 md:hidden overflow-hidden z-40 ${
          menu
            ? "top-[56px] max-h-full text-white bg-slate-900"
            : "-top-[200px] bg-slate-800"
        } transition-all duration-500 ease-in-out`}
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <Link to="/about" className="py-2 sm:text-[1.25rem] sm:py-1">
          About
        </Link>
        <Link to="/live" className="py-2 sm:text-[1.25rem] sm:py-1">
          Template Demo
        </Link>
        <Link to="/cart" className="py-2 sm:text-[1.25rem] sm:py-1">
          Cart
        </Link>
      </div>
      <div
        className={`fixed left-0 font-bold px-4 max-h-0 w-full md:w-[200px] md:left-auto flex flex-col gap-4 overflow-hidden z-40 ${
          profileMenu
            ? "top-[56px] md:right-0 max-h-full text-white bg-slate-900"
            : "-top-[200px] md:top-[56px] md:-right-[100px] bg-slate-800"
        } transition-all duration-500 ease-in-out`}
        onClick={() => {
          setProfileMenu(!profileMenu);
        }}
      >
        {!isAuthenticated && (
          <Link to="/signup" className="py-2 sm:text-[1.25rem] sm:py-[0.25rem]">
            SignUp
          </Link>
        )}
        {!isAuthenticated && (
          <Link to="/login" className="py-2 sm:text-[1.25rem] sm:py-[0.25rem]">
            Login
          </Link>
        )}
        {isAuthenticated && (
          <button
            className="py-2 sm:text-[1.25rem] sm:py-[0.25rem] text-left hover:cursor-pointer"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
