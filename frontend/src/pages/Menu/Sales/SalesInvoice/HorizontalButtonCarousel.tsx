import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "../../../../components/Button/button";
import "./Style.css";
import { useGetAllProductGroupsHook } from "../../../../api/product/productGroup/productGroup-hook";
import HorizontalProgressLoader from "../../../../components/Loader/HorizontalProgressLoader";

const HorizontalButtonCarousel: React.FC<any> = ({ setSelectedProductGroupId }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

  const {
    data: productGroupData = [],
    isPending: isPendingGetGroupData,
  } = useGetAllProductGroupsHook();

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (el) {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  useEffect(() => {
    checkOverflow();
  }, [productGroupData]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelectGroup = (groupId: string) => {
    setSelectedGroupId(groupId);
    setSelectedProductGroupId(groupId);
  };

  return (
    <div className="relative bg-primary-10 p-2">
      {/* Left Arrow */}
      {isOverflowing && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background h-full w-8 flex items-center justify-center"
        >
          <FiChevronLeft size={20} />
        </button>
      )}

      {isPendingGetGroupData ? (
        <HorizontalProgressLoader />
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto px-8 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {productGroupData.map((g: any) => (
            <Button
              key={g._id}
              onClick={() => handleSelectGroup(g._id)}
              className={`snap-start ${selectedGroupId === g._id
                ? ""
                : "bg-primary-30"
                }`}
            >
              {g.name}
            </Button>
          ))}
        </div>
      )}

      {/* Right Arrow */}
      {isOverflowing && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background h-full w-8 flex items-center justify-center"
        >
          <FiChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default HorizontalButtonCarousel;
