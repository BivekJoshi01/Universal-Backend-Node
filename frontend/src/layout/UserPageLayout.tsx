import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import UniLogo from "../assets/Office/UniversalLogo.jpeg";
import { FaEnvelope, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useGetLoggedUserData } from "../api/auth/auth-hook";
import { setUser } from "../redux/reducer/authSlice";

const UserPageLayout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPromo, setShowPromo] = useState(true);
  const [cartItems, setCartItems] = useState(3); // Example cart item count
  const [notifications, setNotifications] = useState(2); // Example notification count

  const { data: loggedUserData } = useGetLoggedUserData();

  useEffect(() => {
    if (loggedUserData) {
      dispatch(setUser(loggedUserData?.user));
    }
  }, [loggedUserData, dispatch]);
  
  return (
    <main className="text-stone-900 bg-gradient-to-br from-amber-100 via-green-100 to-blue-100 min-h-screen font-sans">
      {/* Promo Banner */}
      {showPromo && (
        <div className="bg-yellow-100 text-center py-2 px-4 text-yellow-800 flex justify-between items-center">
          <p className="text-sm font-medium">
            🎉 Free shipping on orders over Rs 5000 Shop now
          </p>
          <button
            onClick={() => setShowPromo(false)}
            className="text-sm hover:bg-white/20 p-1 rounded-full transition-colors"
            aria-label="Close promo banner"
          >
            ✕
          </button>
        </div>
      )}

      {/* Header */}
      <header
        className="bg-stone-50 shadow-md sticky top-0 z-50"
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Logo and Brand */}
            <div
              className="flex items-center gap-3"
              onClick={() => navigate("/User/Home")}
            >
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={UniLogo}
                  alt="Universal Stationery Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h1 className="text-xl font-bold text-blue-700 whitespace-nowrap">
                Universal Stationery
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-stretch w-full md:w-auto">
              <div className="relative flex-grow md:w-64 lg:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
              </div>

              {/* Navigation Links */}
              <ul className="flex justify-between md:flex gap-4 text-stone-700 font-medium items-center">
                <li className="hover:text-blue-600 cursor-pointer transition-colors px-2 py-1 rounded hover:bg-blue-50">
                  Home
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors px-2 py-1 rounded hover:bg-blue-50">
                  Categories
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors px-2 py-1 rounded hover:bg-blue-50">
                  Track
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors px-2 py-1 rounded hover:bg-blue-50">
                  Contact
                </li>
              </ul>
            </div>

            {/* Icons */}
            <div className="flex items-center justify-end gap-5 md:gap-6">
              <div className="relative cursor-pointer group">
                <IoIosNotifications className="text-2xl text-stone-600 group-hover:text-blue-600 transition-colors" />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>

              <div className="relative cursor-pointer group">
                <TiShoppingCart className="text-2xl text-stone-600 group-hover:text-blue-600 transition-colors" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </div>

              <div
                className="cursor-pointer group"
                onClick={() => navigate("/User/Profile")}
              >
                <CgProfile className="text-2xl text-stone-600 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      {/* <div className="container mx-auto px-4 py-6"> */}
      <Outlet />
      {/* </div> */}

      {/* Footer */}
      <footer
        className="bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-200
 py-12 px-6 mt-16 border-t border-stone-200"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-stone-700">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <img
                  src={UniLogo}
                  alt="Universal Stationery Logo"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800">
                Universal Stationery Suppliers
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-stone-600">
              Bringing quality office supplies to your desk since 2020. We're
              committed to providing the best stationery products with fast
              delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Products", "Track Order", "Support", "FAQ"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-stone-600 hover:text-blue-600 transition-colors block py-1"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {[
                "Returns Policy",
                "Shipping Info",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-stone-600 hover:text-blue-600 transition-colors block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-stone-600">
                  support@stationeryhub.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-stone-600">+1 234 567 890</span>
              </div>
              <div className="pt-2">
                <h5 className="text-sm font-medium mb-2">Follow Us</h5>
                <div className="flex gap-3">
                  {["Facebook", "Twitter", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-xs bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded-full transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto border-t border-stone-200 mt-10 pt-6 text-center">
          <p className="text-xs text-stone-500">
            © 2025{" "}
            <span className="font-medium">Universal Stationery Suppliers</span>.
            All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default UserPageLayout;
