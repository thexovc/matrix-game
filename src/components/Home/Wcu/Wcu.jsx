import React from "react";
import "./Wcu.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Wcu = () => {
  return (
    <div className="wcu__container">
      <div className="wcu__heading">
        <h1>Why Choose Us</h1>
        <p>We Offer Quality Services that makes customers satisfied</p>
      </div>

      <div className="wcu__content">
        <div className="wcu__cards">
          <div className="wcu__card">
            <BsFillTelephoneFill className="wcu__icon " />
            <div className="wcu__text">
              <h1>Supports</h1>
              <p>Technical support for all our services 24/7 to help you</p>
            </div>
          </div>

          <div className="wcu__card">
            <AiFillLock className="wcu__icon " />
            <div className="wcu__text">
              <h1>Secure Payments</h1>
              <p>
                We have popular payment methods such as card payments, bank
                transfer cryptocurrencies and many more can be enabled upon
                request
              </p>
            </div>
          </div>

          <div className="wcu__card">
            <AiFillStar className="wcu__icon " />
            <div className="wcu__text">
              <h1>High Quality Services</h1>
              <p>Get the best high quality services in less time here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wcu;
