import React, { useState } from "react";

const ORIGINAL_DATA = [
  { id: 1, title: "Pen", img: "http://image.png" },
  { id: 2, title: "Copy", img: "http://image.png" },
  { id: 3, title: "Pencil", img: "http://image.png" },
  { id: 4, title: "Dot", img: "http://image.png" },
  { id: 5, title: "Eraser", img: "http://image.png" },
  { id: 6, title: "Game", img: "http://image.png" },
  { id: 7, title: "MOMO", img: "http://image.png" },
];

const VISIBLE_COUNT = 7; // Should be odd to center one item
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);

const getHeightByIndex = (index: number) => {
  const distanceFromCenter = Math.abs(index - CENTER_INDEX);

  switch (distanceFromCenter) {
    case 0:
      return 600;
    case 1:
      return 500;
    case 2:
      return 400;
    default:
      return 300;
  }
};

const Products: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const getRotatedItems = () => {
    const data = [...ORIGINAL_DATA];
    const rotated: typeof ORIGINAL_DATA = [];

    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const index = (startIndex + i) % data.length;
      rotated.push(data[index]);
    }

    return rotated;
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % ORIGINAL_DATA.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - 1 + ORIGINAL_DATA.length) % ORIGINAL_DATA.length
    );
  };

  const items = getRotatedItems();

  return (
    <div className="w-full flex flex-col items-center">
      {/* Controls */}
      <div className="mb-4 flex gap-4">
        <button
          onClick={handlePrev}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded"
        >
          Next
        </button>
      </div>

      {/* Carousel */}
      <div className="flex gap-2.5 justify-center items-center">
        {items.map((item, index) => {
          const height = getHeightByIndex(index);
          const isActive = index === CENTER_INDEX;

          return (
            <div
              key={item.id}
              className={`rounded-xl bg-blue-600 text-white transition-all duration-300 flex items-center justify-center ${
                isActive ? "w-[500px]" : "w-[100px]"
              }`}
              style={{ height }}
            >
              {isActive ? (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-lg mt-2">#{item.id}</span>
                </div>
              ) : (
                <span className="transform rotate-[-90deg] text-sm font-medium">
                  {item.title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
