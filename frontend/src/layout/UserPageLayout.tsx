import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { useGetLoggedUserData } from "../api/auth/auth-hook";
import { setUser } from "../redux/reducer/authSlice";
import UserNavbar from "../components/Header/UserNavbar/UserNavbar";
import Footer from "../components/Header/UserNavbar/Footer";
import BGIMG from "../assets/galxybg.jpg";

const UserPageLayout: React.FC = () => {
  const dispatch = useDispatch();

  const [showPromo, setShowPromo] = useState(true);

  const { data: loggedUserData } = useGetLoggedUserData();

  useEffect(() => {
    if (loggedUserData) {
      dispatch(setUser(loggedUserData?.user));
    }
  }, [loggedUserData, dispatch]);

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${BGIMG})` }}
    >
      {showPromo && (
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-center py-1 px-4 text-yellow-200 flex justify-between items-center">
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

      <UserNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserPageLayout;
