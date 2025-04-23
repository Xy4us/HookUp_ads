import React, { useEffect } from "react";
import growth from "../assets/Growth Analysis1.gif";
import bg from "../assets/bgHero.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom } from "../utils/motion.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faPrint } from "@fortawesome/free-solid-svg-icons";
import {
  advertisementMinimal,
  chooseUsData,
  companyImagesArray,
  publisherMinimal,
} from "../utils/constants.jsx";
import ChooseUsCard from "./ChooseUsCard.jsx";
import MinimalCard from "./MinimalCard.jsx";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import CopyrightFooter from "./CopyrightFooter.jsx";

const HomePage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: false,
  });

  const { ref: whyChooseUsRef, inView: whyChooseUsInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" mt-[80px] w-full flex flex-col items-center justify-center relative">
      <img
        alt=""
        src={bg}
        className="absolute -top-10 w-full h-[375px] -z-10"
      />
      <div className="bg-gradient-to-b from-[#b2b7c304] via-[#8990a3] to-bgColor -z-10 absoulute -top-10 min-h-[375px] min-w-full"></div>
      <div className="bg-[#b6bba5] absolute bg-[#d79cf44e] blur-[200px] rounded-full z-10 min-w-[600px] min-h-[300px] top-7 right-0"></div>

      {/* Hero Container */}
      <div className="w-[90%] z-20 absolute top-0 ">
        <div className="w-[100%] items-center flex sm:flex-col lg:flex-row  ">
          <div className="min-w-[48%] min-h-[400px] ">
            <div
              className="w-full h-[765px] flex flex-col items-start justify-center gap-y-8"
              ref={heroRef}
            >
              <motion.h1
                variants={slideInFromBottom(0.15)}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-8xl font-extraboldbold  "
              >
                Welcome to the World of{" "}
                <span className="text-highlighter">Digital Advertising.</span>
              </motion.h1>
              <motion.p className="text-xl text-justify text-subHeading w-[70%]">
                We are here to provide you with the best financial services, to
                help you grow your business.
              </motion.p>

              <div className="flex items-center gap-x-9">
                <Link to="/advertiser">
                  <motion.button
                    variants={slideInFromBottom(0.5)}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    className="flex items-center text-xl font-medium gap-x-2 bg-white text-bgColor px-6 py-3 p-4 rounded-lg"
                  >
                    Advertisers{" "}
                    <FontAwesomeIcon
                      icon={faBullhorn}
                      className="text-highlighter"
                    />
                  </motion.button>
                </Link>

                <Link to="/publisher">
                  <motion.button
                    variants={slideInFromBottom(0.5)}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    className="flex items-center text-xl font-medium gap-x-2 bg-white text-bgColor px-6 py-3 p-4 rounded-lg"
                  >
                    Publishers{" "}
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="text-highlighter"
                    />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          <div className="min-w-[48%] min-h-[400px] ">
            <img alt="" src={growth} className="w-full h-[765px]" />
          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className="lg:w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-y-28 relative lg:mt-[550px] sm:mt-[1300px]">
        <div className="absolute bg-[#d79cf44e] blur-[200px] rounded-full z-10 min-w-[600px] min-h-[300px] -left-[280px] top-20"></div>
        <motion.h1
          ref={whyChooseUsRef}
          variants={slideInFromBottom(0.5)}
          initial="hidden"
          animate={whyChooseUsInView ? "visible" : "hidden"}
          className="text-8xl font-extraboldbold"
        >
          Why <span className="text-highlighter">Choose</span> us?
        </motion.h1>
        <p className="text-subHeading text-3xl w-[60%] text-center">
          We like to build close relationships with our clients. We believe
          dynamic collaboration is the only way to get the job done well.
        </p>

        <div className="w-full items-center flex-wrap flex lg:gap-y-6 lg:gap-x-4 sm:gap-x-3 sm:gap-y-4">
          {chooseUsData.map((data, index) => (
            <ChooseUsCard key={index} {...data} />
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <div className="lg:w-[60%] sm:w-[90%] mt-[300px] flex flex-col items-center ">
        {/* Advertiser */}
        <div className="w-full flex items-center justify-between">
          <div className="w-[45%] flex flex-col gap-10">
            <h1 className="text-5xl font-bold tracking-wider uppercase">
              Advertisers
            </h1>
            <p className="text-subHeading">
              Get your ads done with an advertising platform that is known for
              its effect-oriented results. Along with high quality content, you
              can enjoy a great Rate Of Interest. Our multi-channeled, high-end
              ad delivery networks makes your app easier to reach.
            </p>

            <Link
              to="/advertiser"
              className="flex items-center text-xl font-medium  bg-white text-bgColor px-6 w-[175px]  py-3 p-4 rounded-lg"
            >
              Learn More
            </Link>
          </div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeIn" }}
            className="w-[45%] flex flex-col items-center gap-y-4 relative"
          >
            {advertisementMinimal.map((item, index) => (
              <MinimalCard key={index} {...item} />
            ))}

            <div className="absolute bg-[#bbfda8] min-w-[70px] min-h-[70px] rounded-full blur-[90px] right-4"></div>
            <div className="absolute bg-[#ae92ef] min-w-[70px] min-h-[70px] rounded-full blur-[90px] bottom-4 left-3"></div>
          </motion.div>
        </div>

        {/* publishers */}
        <div className="w-full flex flex-row-reverse mt-[200px] items-center justify-between">
          <div className="w-[45%] flex flex-col gap-10">
            <h1 className="text-5xl font-bold tracking-wider uppercase">
              Publishers
            </h1>
            <p className="text-subHeading">
              To drive the users to an advertising page that is enriched with a
              variety of various products and services, is what we aim for. We
              give you a platform that lets the user connect with the products/
              services of the advertiser.
            </p>

            <Link
              to="/publisher"
              className="flex items-center text-xl font-medium  bg-white text-bgColor px-6 w-[175px]  py-3 p-4 rounded-lg"
            >
              Learn More
            </Link>
          </div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeIn" }}
            className="w-[45%] flex flex-col items-center gap-y-4 relative"
          >
            {publisherMinimal.map((item, index) => (
              <MinimalCard key={index} {...item} />
            ))}

            <div className="absolute bg-[#23e9ff] min-w-[70px] min-h-[70px] rounded-full blur-[90px] right-4"></div>
            <div className="absolute bg-[#ff1919] min-w-[70px] min-h-[70px] rounded-full blur-[90px] bottom-4 left-3"></div>
          </motion.div>
        </div>
      </div>

      {/* Company Marquee */}
      <div className="w-full mt-[200px] flex items-center justify-center">
        <div className="w-[95%]">
          <Marquee
            gradient={true}
            speed={300}
            gradientColor="#0c0c0c"
            gradientWidth={300}
          >
            {companyImagesArray.map((item, index) => (
              <img className="mx-20" src={item.images} key={index} alt="" />
            ))}
          </Marquee>
        </div>
      </div>

      {/* MArgin */}
      <div className="w-full border border-[#252525] mt-[150px]"></div>

      {/* Footer */}
      <CopyrightFooter />
      {/* 
      <div className="mt-[90px] w-full flex items-center justify-center ">
        
      </div> */}
    </div>
  );
};

export default HomePage;
