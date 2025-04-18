import React from "react";
import { FiSend } from "react-icons/fi";

const ChatWindow: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-16 bg-violet-100 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 m-2 rounded-full"
            src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            alt="Rounded avatar"
          />
          Bivek Prasad Joshi
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 bg-white overflow-y-auto p-4">Body</div>

      {/* Footer */}
      <div className="h-16 w-full bg-violet-100 flex items-center">
        <div className=" flex items-center justify-between mx-4 w-full">
          <div className="w-full mx-2">
            <input
              type="text"
              placeholder="Aa"
              className="w-full h-8 bg-white placeholder:text-stone-400 focus:outline-none rounded-3xl"
            />
          </div>
          <FiSend className="text-violet-950"/>
        </div>

      </div>
    </div>
  );
};

export default ChatWindow;
