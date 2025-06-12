import React, { useState, useEffect } from "react";

const ORIGINAL_DATA = [
  {
    id: 1,
    title: "Pen",
    img: "https://imgs.search.brave.com/fCkJjgJNc17_piMZ0plr1oG7SswIfOkMss_BFLDX1zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/MTY0OS9wZXhlbHMt/cGhvdG8tMTQ1MTY0/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
  {
    id: 2,
    title: "Copy",
    img: "https://imgs.search.brave.com/fCkJjgJNc17_piMZ0plr1oG7SswIfOkMss_BFLDX1zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/MTY0OS9wZXhlbHMt/cGhvdG8tMTQ1MTY0/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
  {
    id: 3,
    title: "Pencil",
    img: "https://imgs.search.brave.com/fCkJjgJNc17_piMZ0plr1oG7SswIfOkMss_BFLDX1zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/MTY0OS9wZXhlbHMt/cGhvdG8tMTQ1MTY0/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
  {
    id: 4,
    title: "Dot",
    img: "https://imgs.search.brave.com/fCkJjgJNc17_piMZ0plr1oG7SswIfOkMss_BFLDX1zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/MTY0OS9wZXhlbHMt/cGhvdG8tMTQ1MTY0/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
  {
    id: 5,
    title: "Eraser",
    img: "https://imgs.search.brave.com/fCkJjgJNc17_piMZ0plr1oG7SswIfOkMss_BFLDX1zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/MTY0OS9wZXhlbHMt/cGhvdG8tMTQ1MTY0/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
  {
    id: 6,
    title: "Game",
    img: "https://imgs.search.brave.com/fCkJjgJNc17_piMZ0plr1oG7SswIfOkMss_BFLDX1zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/MTY0OS9wZXhlbHMt/cGhvdG8tMTQ1MTY0/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
  {
    id: 7,
    title: "MOMO",
    img: "https://imgs.search.brave.com/fCkJjgJNc17_piMZ0plr1oG7SswIfOkMss_BFLDX1zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/MTY0OS9wZXhlbHMt/cGhvdG8tMTQ1MTY0/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
];

const getVisibleCount = (width: number) => {
  if (width < 640) return 3;
  if (width < 1024) return 5;
  return 7;
};

const getHeightByDistance = (distance: number, screenSize: number) => {
  if (screenSize < 640) return [150, 110, 90][distance] ?? 70;
  if (screenSize < 1024) return [250, 200, 160][distance] ?? 130;
  return [600, 500, 400][distance] ?? 300;
};

const Products: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const visibleCount = getVisibleCount(screenWidth);
  const centerIndex = Math.floor(visibleCount / 2);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRotatedItems = () => {
    const rotated = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % ORIGINAL_DATA.length;
      rotated.push(ORIGINAL_DATA[index]);
    }
    return rotated;
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % ORIGINAL_DATA.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + ORIGINAL_DATA.length) % ORIGINAL_DATA.length
    );
  };

  const items = getRotatedItems();

  return (
    <div className="w-full flex flex-col items-center px-2">
      <div className="flex justify-center items-center gap-2.5 w-full">
        {items.map((item, index) => {
          const distance = Math.abs(index - centerIndex);
          const height = getHeightByDistance(distance, screenWidth);
          const isActive = index === centerIndex;

          const width =
            screenWidth < 640
              ? isActive
                ? "w-[140px]"
                : "w-[40px]"
              : screenWidth < 1024
                ? isActive
                  ? "w-[200px]"
                  : "w-[70px]"
                : isActive
                  ? "w-[500px]"
                  : "w-[100px]";

          const handleClick = () => {
            if (index < centerIndex) handlePrev();
            else if (index > centerIndex) handleNext();
          };

          return (
            <div
              key={item.id}
              className={`rounded-xl bg-white/8 backdrop-blur-xl text-white transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer ${!isActive ? "hover:bg-blue-700" : ""
                } ${width}`}
              style={{ height }}
              onClick={handleClick}
            >
              {isActive ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                  <div className="w-full h-[100%]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center mt-2">
                    {item.title}
                  </h3>
                  <span className="text-xs sm:text-sm md:text-base mt-1">#{item.id}</span>
                </div>

              ) : (
                <span
                  className={`transform rotate-[-90deg] text-center ${screenWidth < 640
                      ? "text-[10px]"
                      : screenWidth < 1024
                        ? "text-xs"
                        : "text-sm"
                    } font-medium`}
                >
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
