import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CopyrightFooter = () => {
  return (
    <div className="flex w-[95%] py-7 justify-between items-center ">
      <h1 className="text-subHeading text-sm font-semibold">
        Copyright <span className="text-[#6552a7]">©️</span> 2025 Hookup Ads.
        All rights reserved.
      </h1>

      <div>
        <a href="mailto:info.hookupads@gmail.com">
          <FontAwesomeIcon
            className="hover:text-highlighter duration-300 ease-in-out text-3xl cursor-pointer"
            icon={faEnvelope}
          />
        </a>
      </div>
    </div>
  );
};

export default CopyrightFooter;
