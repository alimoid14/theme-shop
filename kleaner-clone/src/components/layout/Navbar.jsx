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
      <header className="bg-slate-900 text-white fixed top-0 z-50 w-full text-[20px] font-bold">
        <nav className="max-w-[1400px] mx-auto flex flex-row justify-between py-2 pr-2 pl-6 sm:px-6">
          <button
            className="text-xl md:hidden py-2 cursor-pointer"
            onClick={() => {
              setMenu(!menu);
              if (profileMenu) setProfileMenu(false);
            }}
          >
            <CiMenuBurger />
          </button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-1 px-4 rounded-full ${
                isActive && "border-b-2 border-amber-500"
              }`
            }
          >
            envato market
          </NavLink>

          <div className="hidden w-fit md:flex flex-row justify-around gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 sm:py-1 px-4 rounded-full ${
                  isActive && "border-b-2 border-amber-500"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/live"
              className={({ isActive }) =>
                `py-2 sm:py-1 px-4 rounded-full ${
                  isActive && "border-b-2 border-amber-500"
                }`
              }
            >
              Template Demo
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `py-2 sm:py-1 px-4 rounded-full ${
                  isActive && "border-b-2 border-amber-500"
                }`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/buy"
              className={({ isActive }) =>
                `py-2 sm:py-1 px-4 rounded-full ${
                  isActive && "border-b-2 border-amber-500"
                }`
              }
            >
              Themes
            </NavLink>
            {/* {isAuthenticated && (
            <div className="py-2 sm:text-[1.25rem] sm:py-1 bg-white rounded-full text-slate-900 px-4">
              
            </div>
          )} */}
          </div>
        </nav>
        <nav className="text-[20px] text-gray-400 mx-auto max-w-[1400px] flex flex-row justify-end gap-8 py-3 px-6 items-center font-bold">
          {isAuthenticated && (
            <p>
              <CgProfile className="inline" />
              {user?.name}
            </p>
          )}
          {!isAuthenticated && (
            <Link
              to="/signup"
              className="py-2 sm:py-1 hover:text-white hover:bg-cyan-500 rounded-full px-4"
            >
              SignUp
            </Link>
          )}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="py-2 sm:py-1 hover:text-white hover:bg-cyan-500 rounded-full px-4"
            >
              Login
            </Link>
          )}
          {isAuthenticated && (
            <button
              className="py-2 sm:py-1 text-left hover:cursor-pointer text-red-200 hover:text-white hover:bg-red-500 rounded-full px-4"
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
              className="py-2 sm:text-[1.25rem] sm:py-1 text-cyan-500 hover:text-white hover:bg-cyan-500 rounded-full px-4"
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
