"use client";
import { useState } from "react";
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";

type Props = {
  className?: string;
};

export const ReadSection = ({ className }: Props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen((prevState) => !prevState);
  };

  return (
    <div
      className={`${className} ${
        isFullScreen ? "fixed top-0 left-0 w-full p-2 h-full z-50 bg-white" : ""
      }`}
    >
      <button
        onClick={toggleFullScreen}
        className=" bg-blue-400 text-white p-2 rounded"
      >
        {isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
      </button>
      <div className="p-4">
        {/* Your ReadSection content here */}
        <p>Content of Read Section goes here.</p>
      </div>
    </div>
  );
};
