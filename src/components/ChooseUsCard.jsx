import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChooseUsCard = ({ icon, heading, para }) => {
  return (
    <div className="flex flex-col items-center justify-evenly w-[24%] h-[300px] hover:border-[#313131] bg-gradient-to-b from-cardColor to-[#171717] hover:bg-gradient-to-b transition-all hover:from-[#2b2b2b] hover:to-[#141414] rounded-xl  border-[#252525] border-2  duration-300 ease-in-out">
      <FontAwesomeIcon icon={icon} className="text-highlighter text-3xl" />
      <h1 className="text-3xl font-semibold w-[90%] text-center">{heading}</h1>
      <p className="text-[#9d9c9c] text-center w-[90%] font-medium">{para}</p>
    </div>
  );
};

export default ChooseUsCard;
