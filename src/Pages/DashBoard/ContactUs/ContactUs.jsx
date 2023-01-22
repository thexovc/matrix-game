import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

import "./ContactUs.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiH3, RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ContactUs = () => {
  return (
    <div className="contact-con">
      <div className="contact">
        <div className="contact-content">
          <div className="left-side">
            <div className="phone details">
              <AiFillPhone className="icon-c" />
              <div className="topic">Phone</div>
              <div className="text-one">+955 50505 0404</div>
              <div className="text-two">+005 48494 949</div>
            </div>

            <div className="email details">
              <FaEnvelope className="icon-c" />
              <div className="topic">Email</div>
              <div className="text-one">email@gmail.com</div>
              <div className="text-two">info@gmail.com</div>
            </div>
          </div>

          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any suggestion or query related to this platform, you
              can send a message.
            </p>

            <form>
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea></textarea>
              </div>
              <div className="button">
                <button type="submit"> Send Now </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
