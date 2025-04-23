import React, { useEffect } from "react";
import advertise from "../assets/advertise1.svg";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";
import ChooseUsCard from "./ChooseUsCard.jsx";
import { advertiseAdvantages } from "../utils/constants.jsx";
import CopyrightFooter from "./CopyrightFooter.jsx";

const Advertisers = () => {
  const { ref: advantages, inView: advantagesInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-[130px] w-full flex flex-col items-center justify-center relative">
      <div className="absolute bg-[#d79cf44e]  blur-[200px] rounded-full z-10 min-w-[600px] min-h-[300px] right-0 top-20"></div>

      {/* hero component */}
      <div className="relative w-[90%] flex lg:flex-row sm:flex-col lg:items-center items-center justify-between">
        <div className="lg:w-[48%] sm:w-[90%] flex flex-col items-start justify-center gap-y-10">
          <h1 className="text-8xl font-semibold">Advertisers</h1>
          <p className="text-subHeading text-2xl tesxt-justify w-[80%]">
            Get your ads done with an advertising platform that is known for its
            effect-oriented results.
          </p>
        </div>
        <div className="w-[48%]">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeIn" }}
            src={advertise}
            alt=""
            className="sm:mt-[140px] lg:mt-[0px]"
          />
        </div>
      </div>

      {/* Advertiser */}
      <div className="lg:w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-y-28 relative mt-[200px]">
        <motion.h1
          ref={advantages}
          variants={slideInFromBottom(0.5)}
          initial="hidden"
          animate={advantagesInView ? "visible" : "hidden"}
          className="text-8xl font-extraboldbold"
        >
          What we <span className="text-highlighter">Offer ?</span>
        </motion.h1>

        <p className="text-subHeading text-3xl w-[60%] text-center">
          We offer useful set of advantages over other platforms. Our
          multi-channeled, high-end ad delivery network makes your app easier to
          reach.
        </p>

        <div className="w-full items-center flex-wrap flex lg:gap-y-6 lg:gap-x-4 sm:gap-x-3 sm:gap-y-4">
          {advertiseAdvantages.map((data, index) => (
            <ChooseUsCard key={index} {...data} />
          ))}
        </div>
      </div>

      {/* Margin */}
      <div className="w-full border border-[#252525] mt-[150px]"></div>

      {/* Footer */}
      <CopyrightFooter />
    </div>
  );
};

export default Advertisers;
