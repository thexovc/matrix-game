import React, { useState } from "react";
import sell1 from "../../../assets/Dashboard/Sellers/sell1.jpg";
import sell2 from "../../../assets/Dashboard/Sellers/sell2.jpg";
import sell3 from "../../../assets/Dashboard/Sellers/sell3.jpg";
import sell4 from "../../../assets/Dashboard/Sellers/sell4.jpg";
import sell5 from "../../../assets/Dashboard/Sellers/sell5.jpg";
import sell6 from "../../../assets/Dashboard/Sellers/sell6.jpg";
import sell7 from "../../../assets/Dashboard/Sellers/sell7.jpg";
import sell8 from "../../../assets/Dashboard/Sellers/sell8.jpg";
import "./Sellers.css";
import "../Sellers/Sellers2/Sellers2.css";
import img1 from "../../../assets/Dashboard/img1.png";
import img2 from "../../../assets/Dashboard/img2.png";
import img3 from "../../../assets/Dashboard/img3.png";
import { AiFillStar } from "react-icons/ai";
import Media from "react-media";
import Sellers1 from "./sellers1/Sellers1";

import { GiArchiveRegister } from "react-icons/gi";
import { AiOutlineSelect } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { GoSettings } from "react-icons/go";
import { BsArrowReturnRight } from "react-icons/bs";

import { FaUserTag } from "react-icons/fa";
import Sellers2 from "./Sellers2/Sellers2";
import { motion } from "framer-motion";
import { BsCheck } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import SellersTable from "./SellersTable/SellersTable";

const Sellers = () => {
  const [filterModal, setFilterModal] = useState("modal-container__target");
  return (
    <>
      <div className="sellers__container">
        <div className="sellers__content">
          <Media queries={{ small: "(max-width: 576px)" }}>
            {(matches) =>
              matches.small ? (
                <div>
                  <h1 className="small__h1">Trending Sellers</h1>
                  <Sellers1 />
                </div>
              ) : (
                <div className="sellers__top__content">
                  <div className="sellers__top__sellers">
                    <div className="sellers__top__sellers__head">
                      <h1>Trending Sellers</h1>
                    </div>

                    <div className="top__sellers">
                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell1} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img1} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">ibmeshach</p>
                              <p className="left__info__followers">
                                600 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>

                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell2} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img2} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">Kylax</p>
                              <p className="left__info__followers">
                                554 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>

                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell3} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img3} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">Antisocial</p>
                              <p className="left__info__followers">
                                432 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>

                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell4} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img3} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">finbond</p>
                              <p className="left__info__followers">
                                300 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </Media>
        </div>

        <div className="sellers__content">
          <Media queries={{ small: "(max-width: 576px)" }}>
            {(matches) =>
              matches.small ? (
                <div>
                  <h1 className="small__h1">Popular Sellers</h1>
                  <Sellers2 />
                </div>
              ) : (
                <div className="sellers__top__content">
                  <div className="sellers__top__sellers">
                    <div className="sellers__top__sellers__head">
                      <h1>Popular Sellers</h1>
                    </div>

                    <div className="top__sellers">
                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell5} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img1} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">Padrino</p>
                              <p className="left__info__followers">
                                800 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>

                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell6} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img2} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">Ace</p>
                              <p className="left__info__followers">
                                774 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>

                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell7} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img3} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">Bethakar</p>
                              <p className="left__info__followers">
                                592 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>

                      <div className="top__seller">
                        <div className="top-seller-overlay"></div>
                        <img src={sell8} alt="" />
                        <div className="top__seller__top__content">
                          <div className="top__seller__left">
                            <img src={img3} alt="" />
                            <div className="left__info">
                              <p className="left__info__name">Gaga</p>
                              <p className="left__info__followers">
                                444 followers
                              </p>
                            </div>
                          </div>
                          <div className="top__seller__right">
                            <div className="top__seller__right__star">
                              <AiFillStar className="star__icon" />
                              <p> 4.8</p>
                            </div>
                            <div className="top__seller__right__button">
                              <p>follow</p>
                            </div>
                          </div>
                        </div>
                        <div className="top__seller__bottom__content">
                          <AiFillStar className="star1" />
                          <AiFillStar className="star2" />
                          <AiFillStar className="star3" />
                          <AiFillStar className="star4" />
                          <AiFillStar className="star5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </Media>
        </div>

        <div
          style={{ backgroundColor: "var(--bg-c)", marginBottom: "100px" }}
          className="plans__container"
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",

              // width: "100%",
            }}
            className="plans__heading1"
          >
            <h1>Become a Seller</h1>
            <p>Register to any of our paid plans and start selling!!!</p>
          </div>
          <div className="plans__cards">
            {/* card1 */}
            <div
              style={{ backgroundColor: "#17212b" }}
              className="plans__card1"
            >
              <div className="plans__card__top">
                <h1 className="plans__card__top__head">Free</h1>
                <p className="plans__card__top__price">$0/Month</p>
                <p className="plans__card__top__info">
                  ameconsectetur adipiscing elit. ac aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  Lorem ipsum dolor sit amet,{" "}
                </p>
              </div>
              <div className="plans__card__middle">
                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="plans__card__bottom">
                <div className="plans__card__bottom__button">
                  <p>Get started</p>
                </div>
              </div>
            </div>

            {/* card2 */}
            <div
              style={{ backgroundColor: "#17212b" }}
              className="plans__card2"
            >
              <div
                style={{ backgroundColor: "#17212b" }}
                className="plans__card__h1"
              >
                <h1>MOST POPULAR</h1>
              </div>

              <div className="plans__card__top">
                <h1 className="plans__card__top__head">Basic</h1>
                <p className="plans__card__top__price">$30/Month</p>
                <p className="plans__card__top__info">
                  ameconsectetur adipiscing elit. ac aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  Lorem ipsum dolor sit amet,{" "}
                </p>
              </div>
              <div className="plans__card__middle">
                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="plans__card__bottom">
                <div className="plans__card__bottom__button">
                  <p>Get started</p>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: "#17212b" }}
              className="plans__card3"
            >
              <div className="plans__card__top">
                <h1 className="plans__card__top__head">Premium</h1>
                <p className="plans__card__top__price">$100/Month</p>
                <p className="plans__card__top__info">
                  ameconsectetur adipiscing elit. ac aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  Lorem ipsum dolor sit amet,{" "}
                </p>
              </div>
              <div className="plans__card__middle">
                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className="plans__card__middle__list">
                  <div className="plans__card__middle__icon">
                    <BsCheck className="check__icon" />
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="plans__card__bottom">
                <div className="plans__card__bottom__button">
                  <p>Get started</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sellers__list">
          <h2>Sellers List</h2>
          <div className="sellers__list__inputs">
            <form action="">
              <FiSearch className="sellers__list__icon" />
              <input placeholder="Search sellers Id" type="text" />
            </form>
            <GoSettings
              onClick={() => {
                setFilterModal("modal-container");
              }}
              className="sellers__filter__icon"
            />
          </div>

          <SellersTable />
        </div>
        <div className="join">
          <div className="join__head">
            <h1 className="join__h1">Want to become a seller?</h1>
            <p className="join__para">How it works:</p>
          </div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="join__steps"
          >
            <div className="join__icons">
              <div className="icons__div">
                <span className="icon__div">
                  <GiArchiveRegister className="join__icon" />
                </span>
              </div>

              <div className="icon__text">
                <h1 className="icon__h1">Register under 5 minutes</h1>

                <p className="icon__para">
                  Select a plan, fill the registration form and make payment.
                </p>
              </div>
            </div>

            <div className="join__icons">
              <div className="icons__div">
                <span className="icon__div">
                  <AiOutlineSelect className="join__icon" />
                </span>
              </div>

              <div className="icon__text">
                <h1 className="icon__h1"> Select a game platform</h1>

                <p className="icon__para">
                  In the list of various games select the type of game your
                  account is under.
                </p>
              </div>
            </div>

            <div className="join__icons">
              <div className="icons__div">
                <span className="icon__div">
                  <GoChecklist className="join__icon" />
                </span>
              </div>

              <div className="icon__text">
                <h1 className="icon__h1">List & Sell</h1>

                <p className="icon__para">
                  list the details of your account and sell
                </p>
              </div>
            </div>

            <div className="join__icons">
              <div className="icons__div">
                <span className="icon__div">
                  <AiOutlineCloudUpload className="join__icon" />
                </span>
              </div>

              <div className="icon__text">
                <h1 className="icon__h1">Upload Accounts</h1>

                <p className="icon__para">
                  Upload the required details of the account you want to sell.
                </p>
              </div>
            </div>

            <div className="join__words"></div>
          </motion.div>
        </div>
      </div>
      <div className={filterModal}>
        <section class="modal">
          <header class="modal-header">
            <h2 class="modal-title">Sort By:</h2>
            <span
              onClick={() => {
                setFilterModal("modal-container__target ");
              }}
              class="modal-close"
            >
              Close
            </span>
          </header>
          <div class="modal-content">
            <select
              required
              // onChange={}
              // value={}
              className="selector"
            >
              <option value="pick" selected>
                All Sellers
              </option>
              <option value="cod">Call of duty</option>
              <option value="coc">Clash of clans</option>
              <option value="pubg">Pubg</option>
              <option value="apex">Apex Legends</option>
              <option value="clashRoyale">Clash Royale</option>
              <option value="pes">Pes Mobile</option>
              <option value="fortnite">Fortnite</option>
              <option value="5stars">5 stars</option>
              <option value="4stars">4 stars</option>
              <option value="3stars">3 stars</option>
              <option value="2stars">2 stars</option>
              <option value="1stars">1 stars</option>
            </select>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sellers;
