import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MinimalCard = ({ heading, icon }) => {
  return (
    <div className="w-full bg-[#161718] p-4 rounded-lg flex items-center justify-between">
      <h1 className="text-xl font-medium tracking-wide">{heading}</h1>
      <div className="bg-white rounded-lg">
        <FontAwesomeIcon icon={icon} className="text-[#161718] p-2" />
      </div>
    </div>
  );
};

export default MinimalCard;
