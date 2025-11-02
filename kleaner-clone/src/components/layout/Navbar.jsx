import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useAuthStore } from "../../store/authStore";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuthStore();
  const [menu, setMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <nav className="bg-slate-900 w-full mx-auto flex flex-row justify-between text-white py-2 pr-2 pl-6 sm:px-6">
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
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 sm:text-[1.25rem] sm:py-1 px-2 rounded-full ${
                  isActive &&
                  "bg-gray-50 font-bold text-slate-900 border-2 border-blue-400"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/live"
              className={({ isActive }) =>
                `py-2 sm:text-[1.25rem] sm:py-1 px-2 rounded-full ${
                  isActive &&
                  "bg-gray-50 font-bold text-slate-900 border-2 border-blue-400"
                }`
              }
            >
              Template Demo
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `py-2 sm:text-[1.25rem] sm:py-1 px-2 rounded-full ${
                  isActive &&
                  "bg-gray-50 font-bold text-slate-900 border-2 border-blue-400"
                }`
              }
            >
              Cart
            </NavLink>
            {/* {isAuthenticated && (
            <div className="py-2 sm:text-[1.25rem] sm:py-1 bg-white rounded-full text-slate-900 px-4">
              
            </div>
          )} */}
          </div>
          <div className="flex flex-row gap-4">
            <button className="border border-slate-900 bg-slate-300 hover:bg-slate-800 text-slate-600 hover:text-white font-bold py-2 px-4 rounded-full hover:border-white">
              <Link to="/buy" className="">
                Buy
              </Link>
            </button>
          </div>
        </nav>
        <nav className="bg-slate-900 text-xl text-white w-full flex flex-row gap-8 py-3 justify-center items-center">
          {isAuthenticated && (
            <p>
              Logged in as: <CgProfile className="inline text-cyan-500" />
              {user?.name}
            </p>
          )}
          {!isAuthenticated && (
            <Link
              to="/signup"
              className="py-2 sm:text-[1.25rem] sm:py-[0.25rem] text-cyan-500 hover:text-white hover:bg-cyan-500 rounded-full px-4"
            >
              SignUp
            </Link>
          )}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="py-2 sm:text-[1.25rem] sm:py-[0.25rem] text-cyan-500 hover:text-white hover:bg-cyan-500 rounded-full px-4"
            >
              Login
            </Link>
          )}
          {isAuthenticated && (
            <button
              className="py-2 sm:text-[1.25rem] sm:py-[0.25rem] text-left hover:cursor-pointer text-red-200 hover:text-white hover:bg-red-500 rounded-full px-4"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          )}
          {isAuthenticated && !user?.isVerified && (
            <Link
              to="/verify"
              className="py-2 sm:text-[1.25rem] sm:py-[0.25rem] text-cyan-500 hover:text-white hover:bg-cyan-500 rounded-full px-4"
            >
              Verify
            </Link>
          )}
        </nav>
      </header>
      <div
        className={`fixed left-0 font-bold px-4 max-h-0 w-full flex flex-col gap-4 md:hidden overflow-hidden z-40 ${
          menu
            ? "top-28 max-h-full text-white bg-slate-900"
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
    </>
  );
}

export default Navbar;
