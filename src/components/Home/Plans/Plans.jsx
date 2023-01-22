import React from "react";
import "./Plans.css";
import { motion } from "framer-motion";
import { BsCheck } from "react-icons/bs";

const Plans = () => {
  return (
    // <motion.div
    //   whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
    //   transition={{ duration: 0.7 }}
    //   className={styles.plans__container}
    // ></motion.div>
    <div className="plans__container">
      <div className="plans__heading">
        <h1>Plans</h1>
        <p>Subscribe to any of our paid plans and enjoy more services</p>
      </div>
      <div className="plans__cards">
        {/* card1 */}
        <div className="plans__card1">
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
        <div className="plans__card2">
          <div className="plans__card__h1">
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

        <div className="plans__card3">
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
  );
};

export default Plans;
