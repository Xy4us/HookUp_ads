import React, { useEffect, useRef } from "react";
import contact from "../assets/contact.svg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CopyrightFooter from "./CopyrightFooter";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xfluo5g",
        "template_xkp5g68",
        form.current,
        "cy4BZwUP_ZHuDPOng"
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            zIndex: 9999,
          });
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error(`Failed to send email. Error: ${error.text}`, {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            zIndex: 9999,
          });
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" mt-[130px] w-full flex flex-col items-center justify-center relative">
      <div className="absolute bg-[#d79cf44e]  blur-[200px] rounded-full z-10 min-w-[600px] min-h-[300px] right-0 top-20"></div>

      {/* hero component */}
      <div className="relative w-[90%] flex items-center justify-between">
        <div className="w-[48%] flex flex-col items-start justify-center gap-y-10">
          <h1 className="text-8xl font-semibold">Contact Us</h1>
          <p className="text-subHeading text-2xl tesxt-justify w-[80%]">
            We are always here to help you. Contact us for any queries or
            feedback.
          </p>
        </div>
        <div className="w-[48%]">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeIn" }}
            src={contact}
            alt=""
          />
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="w-[60%] mt-[110px] flex flex-col justify-between items-center gap-y-10 "
      >
        <div className="w-[80%] flex items-center justify-center gap-x-20">
          <input
            placeholder="Name *"
            type="text"
            name="user_name"
            className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border-2 rounded-md border-highlighter focus:ring-highlighter "
            required
          />
          <input
            placeholder="Email *"
            type="email"
            name="user_email"
            className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary border-2 rounded-md border-highlighter focus:ring-opacity-50 focus:ring-highlighter"
            required
          />
          <input
            placeholder="Phone Number *"
            type="tel"
            name="user_phone"
            className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border-2 rounded-md border-highlighter focus:ring-highlighter"
            required
          />
        </div>

        <textarea
          rows="10"
          cols="4"
          name="message"
          required
          aria-multiline
          placeholder="Your Message *"
          className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border-2 rounded-md border-highlighter min-w-[90%] h-[175px] focus:ring-highlighter"
        />

        <button
          className="flex items-center text-xl font-medium gap-x-2 bg-green-600 text-bgColor px-6 py-3 p-4 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer />

      {/* Margin */}
      <div className="w-full border border-[#252525] mt-[150px] z-10"></div>

      {/* Footer */}
      <CopyrightFooter />
    </div>
  );
};

export default Contact;
