import React from 'react';
import { FaRocket, FaTags, FaStar, FaBell } from 'react-icons/fa';
import { MdAutoAwesome } from 'react-icons/md';
import { BsFillLightningChargeFill } from 'react-icons/bs';

const ProductShop: React.FC = () => {
    const newArrivals = [
        { name: 'Galaxy Notebook', price: '$12.99', icon: '📓' },
        { name: 'Stellar Pen Set', price: '$8.49', icon: '🖊️' },
        { name: 'Nebula Marker Pack', price: '$6.75', icon: '🪐' },
        { name: 'Orbit Eraser', price: '$2.99', icon: '🧽' },
    ];

    const offers = [
        { label: "🚀 30% OFF on Backpacks", color: "from-indigo-500 to-pink-500" },
        { label: "🎨 Art Supplies Discount", color: "from-purple-500 to-blue-500" },
        { label: "📓 Buy 2 Get 1 Free – Notebooks", color: "from-yellow-500 to-red-500" },
    ];

    const featured = [
        { name: 'Cosmic Backpack', icon: '🎒', price: '$45.00' },
        { name: 'Planet Stickers', icon: '🪐', price: '$5.00' },
        { name: 'Zero-G Pencil', icon: '✏️', price: '$3.50' },
        { name: 'Astronaut Ruler', icon: '📏', price: '$4.25' },
    ];

    const promotions = [
        { title: "Flash Deal: 50% OFF Art Kits", icon: <BsFillLightningChargeFill />, bg: "from-red-600 to-pink-600" },
        { title: "Limited Time Galaxy Bundles", icon: <FaRocket />, bg: "from-purple-700 to-blue-700" },
        { title: "Free Shipping Over Rs 5000", icon: <FaBell />, bg: "from-indigo-800 to-cyan-700" },
    ];

    return (
        <section className="relative text-white">
            {/* Star Background */}
            <div className="absolute inset-0 opacity-10 z-0"></div>

            <div className="relative z-10 py-12 space-y-20 max-w-7xl mx-auto">

                {/* Promotional Banner */}
                <div className="grid sm:grid-cols-3 gap-4">
                    {promotions.map((promo, i) => (
                        <div key={i} className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br ${promo.bg} shadow-md`}>
                            <div className="text-4xl">{promo.icon}</div>
                            <div className="font-semibold text-lg">{promo.title}</div>
                        </div>
                    ))}
                </div>

                {/* New Arrivals */}
                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-pink-300 flex items-center gap-2">
                            <MdAutoAwesome className="text-yellow-300" /> New Arrivals
                        </h2>
                        <button className="px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg transition">
                            View All
                        </button>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
                        {newArrivals.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,105,180,0.5)] transition transform hover:scale-105 text-center"
                            >
                                <div className="text-5xl mb-2">{item.icon}</div>
                                <h4 className="text-lg font-semibold">{item.name}</h4>
                                <p className="text-sm text-pink-200 mt-1">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Offers */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-yellow-300 flex items-center gap-2">
                        <FaTags /> Special Offers
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {offers.map((offer, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl bg-gradient-to-br ${offer.color} text-white font-bold text-lg shadow-xl hover:scale-105 transition transform`}
                            >
                                {offer.label}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Newsletter */}
                <div className="text-center bg-white/10 p-10 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 space-y-4">
                    <h3 className="text-2xl font-bold text-white">📬 Join the Cosmic Club</h3>
                    <p className="text-sm text-indigo-200">
                        Subscribe to our newsletter for stellar deals, space-themed stationery, and cosmic updates!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-full text-black w-full sm:w-auto"
                        />
                        <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold shadow">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShop;
