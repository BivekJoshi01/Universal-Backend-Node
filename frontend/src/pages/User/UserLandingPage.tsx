import React from "react";
import { CiStar } from "react-icons/ci";
import LogoSVG from "../../assets/Office/GlobeImage.svg";
import { FiShoppingCart } from "react-icons/fi";
import ShopByCategory from "./ShopByCategory";
import ProductShop from "./ProductShop";

const UserLandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section with galaxy gradient & subtle starry background */}
      <section
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, #0f2027 0%, #203a43 60%, #2c5364 100%)",
          color: "white",
        }}
      >
        {/* Faint starry overlay */}
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
        <img
          src={LogoSVG}
          alt="Background Logo"
          className="absolute inset-0 w-full h-full object-contain opacity-31 pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide">
            Explore the Universe of Universal Stationery
          </h2>
          <p className="text-lg mb-4 max-w-3xl mx-auto text-blue-200">
            Shop stellar supplies for school, art, and office — all in one
            galaxy.
          </p>
          <p className="text-blue-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            शिक्षा, सिर्जनशीलता र सफलताको हरेक यात्रा सुरु हुन्छ सही सामाग्रीबाट
            – कापी, कलमदेखि किताब, रङ र फाइलसम्म, हाम्रै स्टेसनरी पसलमा पाइन्छ
            सबै कुरा एउटै छानामुनि, उचित मूल्यमा र भरपर्दो सेवा सहित।
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-600 transition transform hover:scale-105">
            Explore Products
          </button>
        </div>
      </section>

      {/* Categories with cosmic vibe */}
      <ShopByCategory />
      <ProductShop/>

      {/* New Arrivals with dark card and neon accents */}
      <section className="container mx-auto py-16 px-6">
        <h3 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-md">
          New Arrivals
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gradient-to-tr from-gray-900 to-gray-800 rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden rounded-t-3xl">
                <img
                  src={`https://via.placeholder.com/300x200?text=Product+${item}`}
                  alt={`Product ${item}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-purple-700/80 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                  New
                </div>
              </div>

              <div className="p-5 text-white">
                <h4 className="text-lg font-semibold mb-2 tracking-wide">
                  Product Name {item}
                </h4>

                <div className="flex items-center text-yellow-400 text-sm mb-3">
                  {[...Array(4)].map((_, i) => (
                    <CiStar
                      key={i}
                      size={18}
                      className="drop-shadow-lg"
                      fill="currentColor"
                    />
                  ))}
                  <span className="ml-2 text-gray-400 text-xs">(24 reviews)</span>
                </div>

                <p className="text-gray-300 text-sm mb-5">
                  A brief product description that gives users quick insight.
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-pink-400 font-bold text-lg">$9.99</span>
                  <button className="flex items-center gap-2 text-sm bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-4 py-2 rounded-full font-semibold shadow-lg hover:brightness-110 transition">
                    <FiShoppingCart size={18} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Track Your Goods - cosmic card */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-xl bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-10 shadow-xl text-white">
          <h3 className="text-3xl font-bold mb-6 tracking-wide">Track Your Goods</h3>
          <p className="mb-6 text-indigo-300">
            Enter your order ID below to track your delivery.
          </p>
          <form className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              placeholder="Order ID"
              className="flex-1 px-5 py-3 rounded-xl bg-indigo-800 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white border border-indigo-700"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 transition rounded-xl px-8 py-3 font-semibold shadow-lg"
            >
              Track
            </button>
          </form>
          <div className="mt-8 bg-indigo-800/80 p-5 rounded-xl text-center">
            <h4 className="font-semibold mb-2 text-pink-400">Status:</h4>
            <span className="inline-block bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
              In Transit
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription with starry bg */}
      <section
        className="relative py-20 px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.6)",
        }}
      >
        <div className="relative max-w-xl mx-auto bg-black bg-opacity-50 rounded-3xl p-10 shadow-lg text-white">
          <h3 className="text-4xl font-bold mb-6 tracking-wide">Stay Updated</h3>
          <p className="mb-8 text-pink-300">
            Subscribe to our newsletter and never miss new arrivals or cosmic deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-5 justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-6 py-4 rounded-3xl text-gray-900 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 font-semibold px-8 py-4 rounded-3xl hover:brightness-110 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserLandingPage;


// import React from "react";
// import { CiStar } from "react-icons/ci";
// import LogoSVG from "../../assets/Office/GlobeImage.svg";
// import { FiShoppingCart } from "react-icons/fi";

// const UserLandingPage: React.FC = () => {
//   return (
//     <>

//       {/* Featured Products */}
//       <section className="container mx-auto py-16 px-6">
//         <h3 className="text-3xl font-bold text-white mb-10 text-center">
//           🌟 Featured Launches
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[1, 2, 3, 4].map((item) => (
//             <div
//               key={item}
//               className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl overflow-hidden group"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={`https://via.placeholder.com/300x200?text=Product+${item}`}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   alt={`Product ${item}`}
//                 />
//               </div>
//               <div className="p-4 text-white">
//                 <h4 className="text-lg font-semibold mb-2">Stellar Product {item}</h4>
//                 <div className="flex items-center text-yellow-400 text-sm mb-2">
//                   {[...Array(4)].map((_, i) => (
//                     <CiStar key={i} size={16} fill="currentColor" />
//                   ))}
//                   <span className="ml-2 text-xs text-gray-400">(24 reviews)</span>
//                 </div>
//                 <p className="text-sm text-gray-300 mb-3">
//                   Unlock cosmic efficiency with this product built for excellence.
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-pink-400 font-bold text-lg">$9.99</span>
//                   <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-full px-4 py-1.5 flex items-center gap-2">
//                     <FiShoppingCart /> Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Order Tracking */}
//       <section className="py-12 px-6">
//         <div className="container mx-auto max-w-xl bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-10 shadow-xl text-white">
//           <h3 className="text-2xl font-bold mb-4">🚀 Track Your Galaxy Delivery</h3>
//           <p className="mb-4 text-indigo-300 text-sm">
//             Enter your order ID and locate your interstellar shipment.
//           </p>
//           <form className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="text"
//               placeholder="Order ID"
//               className="flex-1 px-4 py-2 rounded-xl bg-indigo-800 placeholder-indigo-400 text-white border border-indigo-700 focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-xl font-semibold"
//             >
//               Track
//             </button>
//           </form>
//           <div className="mt-6 bg-indigo-700/50 p-4 rounded-xl">
//             <h4 className="font-semibold mb-1">Status:</h4>
//             <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs">
//               In Transit to Milky Way
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section
//         className="relative py-20 px-6 text-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=3000&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="relative max-w-xl mx-auto bg-black bg-opacity-60 rounded-3xl p-10 shadow-xl text-white">
//           <h3 className="text-3xl font-bold mb-4">🛰 Stay in Orbit</h3>
//           <p className="mb-6 text-blue-200 text-sm">
//             Join our newsletter and receive updates on galactic deals, offers, and fresh arrivals.
//           </p>
//           <form className="flex flex-col sm:flex-row gap-4 justify-center">
//             <input
//               type="email"
//               placeholder="Your Email Address"
//               className="px-5 py-3 rounded-xl w-full sm:w-auto text-gray-800 focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:brightness-110"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default UserLandingPage;