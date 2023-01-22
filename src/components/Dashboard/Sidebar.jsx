import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../../assets/Dashboard/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Media from "react-media";

const Sidebar = ({ sideState, expandState }) => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [state, setState] = useState(true);

  useEffect(() => {
    function sideCall() {
      if (selected == 0) {
        sideState(true, false, false, false, false);
      } else if (selected == 1) {
        sideState(false, true, false, false, false);
      } else if (selected == 3) {
        sideState(false, false, true, false, false);
      } else if (selected == 4) {
        sideState(false, false, false, true, false);
      } else if (selected == 5) {
        sideState(false, false, false, false, true);
      }
    }

    sideCall();
  }, [selected]);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-70%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      {/* <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div> */}
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={
          window.innerWidth <= 768 && state
            ? `${!expandState}`
            : `${expandState}`
        }
      >
        {/* logo */}
        <div className="logo">
          <Media queries={{ small: "(max-width: 768px)" }}>
            {(matches) =>
              matches.small ? (
                <div className="logo__con">
                  <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => {
                      setState(!state);
                    }}
                  >
                    <div className="bar"></div>
                  </div>
                  <h2>Matrix Games</h2>
                </div>
              ) : null
            }
          </Media>
        </div>

        <div className="menu ">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* 
          <div className="need__help__div">
            <div className="need__help__content">
              <div className="need__help__icon">
                <FiArrowUpRight className="help__icon" />
              </div>
              <div className="need__help__text">
                <p>Do you need help?</p>
              </div>
            </div>
          </div> */}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
