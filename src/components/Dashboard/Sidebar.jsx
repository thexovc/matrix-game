import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../../assets/Dashboard/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import image from "../../assets/Dashboard/img1.png";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import Media from "react-media";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sideState, expandState, styleChange }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [state, setState] = useState(true);
  const [subState, setSubState] = useState(false);

  useEffect(() => {
    function sideCall() {
      if (selected == 0) {
        sideState(
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        );
      } else if (selected == 1) {
        sideState(
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        );
      } else if (selected == 3) {
        sideState(
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        );
      } else if (selected == 4) {
        sideState(
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false
        );
      } else if (selected == 5) {
        sideState(
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false
        );
      } else if (selected == "bought") {
        sideState(
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        );
      } else if (selected == "sold") {
        sideState(
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        );
      } else if (selected == "auctioned") {
        sideState(
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false
        );
      } else if (selected == "swaped") {
        sideState(
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false
        );
      }
    }

    // function styleChangeSelected() {
    //   if (styleChange == true) {
    //     setSelected("topNav");
    //   }
    // }

    // styleChangeSelected();

    sideCall();
  }, [selected]);

  console.log("love");
  console.log(styleChange);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-70%",
    },
  };

  const sendSubState = () => {
    setSubState(!subState);
  };
  const sendSubState1 = () => {
    setSubState(false);
  };

  const sendSelected = (index) => {
    setSelected(index);
  };

  // const gotoB = () => {
  //   navigate("/boughtTrx");
  // };

  // const gotoSo = () => {
  //   navigate("/soldTrx");
  // };

  // const gotoA = () => {
  //   navigate("/auctionedTrx");
  // };

  // const gotoSw = () => {
  //   navigate("/swapedTrx");
  // };

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
                  <div className="side__head">
                    <div className="nav__profile1">
                      <div className="icon__profile1">
                        <img src={image} alt="profile" />
                      </div>
                      <div className="profile__icon__text">
                        <p>Hi, kylax</p>
                        <p>Joined 19 Aug 2022</p>
                      </div>
                    </div>
                    <h2>Matrix Games</h2>
                  </div>
                </div>
              ) : null
            }
          </Media>
        </div>

        <div className="menu ">
          {SidebarData.map((item, index) => {
            return (
              <div className="menuItem__con">
                <div
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={
                    index !== 3 ? () => sendSelected(index) : sendSubState
                  }
                  // onMouseOver={index == 3 && sendSubState}
                  // onMouseOut={index == 3 && sendSubState1}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                  {index == 3 && <AiFillCaretDown />}
                </div>
                <div className={subState ? "sub__menuItems" : "closeState"}>
                  {index == 3 && (
                    <div className="sub__menuItem">
                      <p onClick={() => setSelected("bought")}>Bought</p>
                      <p onClick={() => setSelected("sold")}>Sold</p>
                      <p onClick={() => setSelected("auctioned")}>Auctioned</p>
                      <p onClick={() => setSelected("swaped")}>Swaped</p>
                    </div>
                  )}
                </div>
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
