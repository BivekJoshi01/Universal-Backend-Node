import React from 'react';

const ShopByCategory: React.FC = () => {
  const categories = [
    { name: "Pens", icon: "🪐" },
    { name: "Notebooks", icon: "📓" },
    { name: "Art Supplies", icon: "🎨" },
    { name: "Backpacks", icon: "🎒" },
    { name: "Desk Items", icon: "🛸" },
  ];

  return (
    <section className="relative py-10 text-white overflow-hidden ">
      <div className='max-w-7xl mx-auto'>
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-10 bg-cover"></div>
        </div>

        <div className="relative container mx-auto z-10">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] bg-clip-text text-white">
            🔭 Explore Our Cosmic Categories
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {categories.map(({ name, icon }) => (
              <div
                key={name}
                className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-3xl  p-4 text-center cursor-pointer group transform transition duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,105,180,0.7)]"
              >
                <div className="text-6xl mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse">
                  {icon}
                </div>
                <span className="text-xl font-semibold tracking-wide group-hover:text-pink-400 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ShopByCategory;
