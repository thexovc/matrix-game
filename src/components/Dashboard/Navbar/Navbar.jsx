import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import image from "../../../assets/Dashboard/img1.png";
import Media from "react-media";
import Cart from "./Cart/Cart";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Chat from "./Chat/Chat";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";
import { UpdatesData1 } from "../../../Data/Data";
import Updates from "../Updates/Updates";
import Notification from "./Notification";

const Navbar = ({ sideState, expandState, styleChangeFunc }) => {
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState("modal-container__target");
  const [notification, setNotification] = useState("modal-container__target");
  const [chat, setChat] = useState("modal-container__target");

  const [selected, setSelected] = useState(0);

  // const handleToggle = () => {
  //     setToggle(!toggle);
  // }

  // const variants = {
  //     open: {
  //         transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  //     },
  //     closed: {
  //         transition: { staggerChildren: 0.05, staggerDirection: -1 }
  //     }
  // }

  const searchFunc = () => {
    setSearch(!search);
  };

  const sendCart = (value) => {
    setCart(value);
  };

  const sendChat = (value) => {
    setChat(value);
  };

  const sendNotification = (value) => {
    setNotification(value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   function navCall() {
  //     if (selected == "cart") {
  //       sideState(false, false, false, false, false, false, false, false, true);
  //     }
  //   }

  //   navCall();
  // }, [selected]);

  return (
    <>
      <div
        style={{
          // display: "flex",
          flexDirection: "column",

          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",
        }}
        className={cart}
      >
        <div className="cart__div">
          <Cart sendCart={sendCart} />
        </div>
      </div>

      <div
        style={{
          // display: "flex",
          flexDirection: "column",

          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",
        }}
        className={notification}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
          }}
          className="chat__div"
        >
          <Notification sendNotification={sendNotification} />
        </div>
      </div>

      <div
        style={{
          // display: "flex",
          flexDirection: "column",

          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",
        }}
        className={chat}
      >
        <div
          style={{
            // display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            // background: "#17212b",
          }}
          className="chat__div"
        >
          <ChakraProvider theme={theme}>
            <Chat sendChat={sendChat} />
          </ChakraProvider>
        </div>
      </div>

      <Media queries={{ small: "(max-width: 768px)" }}>
        {(matches) =>
          matches.small ? (
            <div
              style={{
                zIndex: "9999999999999999999",
                width: "100%",
                position: "fixed",
                display: "flex",
                flexDirection: "column",

                alignItems: "center",
                height: "50px",
                background: "#0d1720",
                gap: "10px",
                padding: "12px 20px",
              }}
              className="navbar"
            >
              <div className="nav__div">
                <div className="nav__logo">
                  <Media queries={{ small: "(max-width: 768px)" }}>
                    {(matches) =>
                      matches.small ? (
                        <div
                          className={`nav-toggle ${open && "open"}`}
                          onClick={() => {
                            setIsOpen(!isOpen);
                            expandState(isOpen);
                          }}
                        >
                          <div className="bar"></div>
                        </div>
                      ) : null
                    }
                  </Media>
                  <Media queries={{ small: "(max-width: 768px)" }}>
                    {(matches) =>
                      matches.small ? null : <h1>Matrix Games</h1>
                    }
                  </Media>

                  <div className="search__div">
                    <FiSearch className="search__icon" onClick={searchFunc} />
                  </div>
                </div>

                <div className="nav__is">
                  <div
                    onClick={() => {
                      sideState(
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        true,
                        false,
                        false
                      );
                      // styleChangeFunc(true);
                    }}
                    className="nav__i"
                  >
                    <span class="day">
                      <p>10</p>
                    </span>
                    <BsCart className="icon cart" />
                  </div>

                  <div
                    onClick={() => {
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
                        true,
                        false
                      );
                    }}
                    className="nav__i"
                  >
                    <span class="day">
                      <p>0</p>
                    </span>
                    <BsChatLeft className=" icon chat" />
                  </div>

                  <div
                    onClick={() => {
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
                        true
                      );
                    }}
                    className="nav__i"
                  >
                    <span class="day">
                      <p>19</p>
                    </span>
                    <BsBell className="icon bell" />
                  </div>

                  {/* <div className="nav__profile">
                    <div className="icon__profile">
                      <img src={image} alt="profile" />
                    </div>
                    <p>Hi, kylax</p>
                    <RiArrowDropDownLine className="icon dropdown" />
                  </div> */}

                  {/* <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div> */}
                </div>
              </div>
              <Media queries={{ small: "(max-width: 768px)" }}>
                {(matches) =>
                  matches.small ? (
                    <>
                      {search ? (
                        <input placeholder="search" type="text" />
                      ) : null}
                    </>
                  ) : (
                    <input placeholder="search" type="text" />
                  )
                }
              </Media>
            </div>
          ) : (
            <div className="navbar">
              <div className="nav__logo">
                <Media queries={{ small: "(max-width: 768px)" }}>
                  {(matches) =>
                    matches.small ? (
                      <div
                        className={`nav-toggle ${open && "open"}`}
                        onClick={() => {
                          setIsOpen(!isOpen);
                          expandState(isOpen);
                        }}
                      >
                        <div className="bar"></div>
                      </div>
                    ) : null
                  }
                </Media>
                <Media queries={{ small: "(max-width: 768px)" }}>
                  {(matches) => (matches.small ? null : <h1>Matrix Games</h1>)}
                </Media>

                <div className="search__div">
                  <FiSearch className="search__icon" onClick={searchFunc} />
                  <Media queries={{ small: "(max-width: 768px)" }}>
                    {(matches) =>
                      matches.small ? (
                        <>
                          {search ? (
                            <input placeholder="search" type="text" />
                          ) : null}
                        </>
                      ) : (
                        <input placeholder="search" type="text" />
                      )
                    }
                  </Media>
                </div>
              </div>

              <div className="nav__is">
                <div
                  onClick={() => {
                    sideState(
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      true,
                      false,
                      false
                    );
                    // styleChangeFunc(true);
                  }}
                  className="nav__i"
                >
                  <span class="day">
                    <p>10</p>
                  </span>
                  <BsCart className="icon cart" />
                </div>

                <div
                  onClick={() => {
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
                      true,
                      false
                    );
                  }}
                  className="nav__i"
                >
                  <span class="day">
                    <p>0</p>
                  </span>
                  <BsChatLeft className=" icon chat" />
                </div>

                <div
                  onClick={() => {
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
                      true
                    );
                  }}
                  className="nav__i"
                >
                  <span class="day">
                    <p>19</p>
                  </span>
                  <BsBell className="icon bell" />
                </div>

                <div className="nav__profile">
                  <div className="icon__profile">
                    <img src={image} alt="profile" />
                  </div>
                  <p>Hi, kylax</p>
                  <RiArrowDropDownLine className="icon dropdown" />
                </div>

                {/* <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div> */}
              </div>
            </div>
          )
        }
      </Media>
    </>
  );
};

export default Navbar;
