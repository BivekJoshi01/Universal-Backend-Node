import React from 'react';
import UniLogo from "../../../assets/Office/UniversalLogo.jpeg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer:React.FC = () => {
  return (
    <footer className="relative py-10 px-6 text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #0f2027 0%, #203a43 60%, #2c5364 100%)",
        color: "white",
      }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
          opacity: 0.1,
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={UniLogo}
              alt="Universal Logo"
              className="w-10 h-10 rounded-lg shadow-md border border-white/10"
            />
            <h4 className="text-xl font-semibold text-white drop-shadow-md">
              Universal Stationery
            </h4>
          </div>
          <p className="text-sm text-gray-300">
            Your trusted partner for premium office and school stationery since 2020.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "Products", "Support", "FAQ"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              support@stationeryhub.com
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              +1 234 567 890
            </div>
            <div className="pt-2">
              <h5 className="text-sm font-medium text-white mb-2">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="hover:text-yellow-400 transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-gray-400">
        © 2025 <span className="text-white font-semibold">Universal Stationery</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
