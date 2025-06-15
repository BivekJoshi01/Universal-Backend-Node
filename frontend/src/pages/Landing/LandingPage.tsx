import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LandingLayout from "../../layout/LandingLayout";
import { setCurrentPage } from "../../redux/reducer/navigationSlice";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { RootState } from "../../redux/store";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router";

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPage = useSelector(
    (state: RootState) => state.navigation.currentPage
  );

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (page: string) => {
    dispatch(setCurrentPage(page));
  };

  const handleOpenMap = (event: React.MouseEvent<HTMLParagraphElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMap = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "map-popover" : undefined;

  const renderPageContent = () => {
    switch (currentPage) {
      case "About Us":
        return <AboutUs />;
      case "Products":
        return <Products />;
      case "Partners":
        return <Partners />;
      case "Testimonials":
        return <Testimonials />;
      case "Home":
      default:
        return (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-6xl font-extrabold tracking-wide drop-shadow-lg">
              Universal Stationery Suppliers
            </h1>
            <p className="text-gray-300 text-xl mt-3 font-medium">
              Your one-stop wholesale destination
            </p>
            <p className="text-gray-300 text-xl mt-3 font-medium">
              The Only Place Where Buying in Bulk Feels Like a Steal!
            </p>
            <p
              className="text-gray-300 text-xl mt-3 font-medium cursor-pointer hover:underline"
              onClick={handleOpenMap}
            >
              Balambu || Kathmandu
            </p>
            <button
              className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
              onClick={() => navigate("/auth/register")}
            >
              Scale with Us!
            </button>

            {/* Popover for Map */}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleCloseMap}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className="w-100 h-60">
                <iframe
                  title="Balambu Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6040037058942!2d81.91739709573305!3d28.55162009538097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb23007b896d9b%3A0xaae7e073014fbd1b!2sUniversal%20Stationary%20Suppliers!5e0!3m2!1sen!2snp!4v1742918124348!5m2!1sen!2snp"
                  allowFullScreen
                ></iframe>
              </div>
            </Popover>
          </div>
        );
    }
  };

  return (
    <LandingLayout>
      {/* Centered Main Content */}
      {renderPageContent()}

      {/* Right Top Menu - Hidden in Mobile */}
      <div className="hidden lg:flex absolute top-5 right-5 text-white space-x-4">
        {["Home", "About Us", "Products", "Partners", "Testimonials"].map(
          (item) => (
            <p
              key={item}
              className="cursor-pointer px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg text-sm"
              onClick={() => handleNavigation(item)}
            >
              {item}
            </p>
          )
        )}
      </div>

      {/* Mobile View - Burger Menu */}
      <div className="lg:hidden absolute top-5 right-5 text-white z-50">
        <button
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FiMenu size={24} />
        </button>

        {isOpen && (
          <div className="mt-2 bg-gray-900 rounded-lg shadow-lg w-48 absolute right-0">
            {["Home", "About Us", "Products", "Partners", "Testimonials"].map(
              (item) => (
                <p
                  key={item}
                  className="px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    handleNavigation(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </p>
              )
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-5 right-5 text-white text-right">
        <button
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg"
          onClick={() => navigate('/auth/login')}
        >
          <FiLogIn size={24} />
        </button>
        <p className="text-sm mt-2 text-gray-400">Powered By: Bivek Joshi</p>
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
