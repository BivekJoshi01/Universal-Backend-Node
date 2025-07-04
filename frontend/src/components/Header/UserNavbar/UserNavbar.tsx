import React, { useState } from "react";
import { useNavigate } from "react-router";
import UniLogo from "../../../assets/Office/UniversalLogo.jpeg";

import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

const UserNavbar = () => {
  const navigate = useNavigate();
  const [notifications] = useState(2);
  const [cartItems] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-xl">
      <nav className="mx-auto px-4 py-3 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate("/User/Home")}
          >
            <img
              src={UniLogo}
              alt="Universal Logo"
              className="w-12 h-12 object-contain rounded-lg border border-white/10 shadow-md"
            />
            <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
              Universal Stationery
            </h1>
          </div>

          {/* Search + Nav */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* Search bar with glassmorphism */}
            <div className="relative w-full md:w-72 lg:w-80">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400" />
            </div>

            {/* Nav links with glow hover */}
            <ul className="flex flex-wrap gap-4 text-sm font-medium text-white">
              {["Home", "Categories", "Track", "Contact"].map((label) => (
                <li
                  key={label}
                  className="relative px-4 py-1 rounded-full cursor-pointer transition duration-200 hover:text-yellow-400 hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Icon buttons with neon glow effect */}
          <div className="flex items-center gap-6">
            {/* Notification */}
            <div className="relative group cursor-pointer transition hover:scale-110">
              <IoIosNotifications className="text-2xl text-white group-hover:text-yellow-400 transition" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                  {notifications}
                </span>
              )}
            </div>

            {/* Cart */}
            <div className="relative group cursor-pointer transition hover:scale-110">
              <TiShoppingCart className="text-2xl text-white group-hover:text-yellow-400 transition" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                  {cartItems}
                </span>
              )}
            </div>

            {/* Profile */}
            <div
              className="cursor-pointer transition hover:scale-110"
              onClick={() => navigate("/User/Profile")}
            >
              <CgProfile className="text-2xl text-white hover:text-yellow-400 transition" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UserNavbar;
