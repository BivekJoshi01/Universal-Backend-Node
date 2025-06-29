import React from "react";

const HorizontalProgressLoader:React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes slide-horizontal {
            0% { left: 0%; }
            50% { left: 67%; }
            100% { left: 0%; }
          }
          .animate-slide-horizontal {
            animation: slide-horizontal 2s ease-in-out infinite;
          }
        `}
      </style>

      <div className="relative w-full h-2 overflow-hidden rounded-full bg-gray-200">
        <div className="absolute h-full w-1/3 bg-gradient-to-r from-violet-500 to-violet-300 animate-slide-horizontal" />
      </div>
    </>
  );
};

export default HorizontalProgressLoader;
