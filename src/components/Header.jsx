import React from "react";
import { headersLinks } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center fixed top-0 z-50 min-h-[80px] header p-3">
      <div className="text-3xl font-semibold font-serif flex items-center gap-2">
        <p className="flex">
          Hoo<span className="text-green-600">K</span> Up
        </p>
        <p>Ads</p>
      </div>
      <div className="w-full flex items-center justify-center gap-10 ">
        {headersLinks.map((item, index) => (
          <Link
            to={item.page}
            className="cursor-pointer font-medium"
            key={index}
          >
            {item.heading}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
