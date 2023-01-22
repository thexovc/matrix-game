import React from "react";
import "./Stats.css";
import ha2 from "../../../assets/Home/ha2.jpg";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsWallet } from "react-icons/bs";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";

const Stats = () => {
  return (
    <div className="stats__container">
      <img className="stats__image" src={ha2} alt="" />
      <div className="stats__content">
        <div className="stats__top">
          <div className="stats__top1 flex items-center flex-col">
            <MdAccountBalance className="stats__icon" />
            <div className="stats__info">
              <h1>300+</h1>
              <p>Over 300 Accounts</p>
            </div>
          </div>

          <div className="stats__top2 flex items-center flex-col">
            <BsFillPeopleFill className="stats__icon" />
            <div className="stats__info">
              <h1>1K+</h1>
              <p>Over 1000 Users</p>
            </div>
          </div>
        </div>
        <div className="stats__bottom">
          <div className="stats__top1 flex items-center flex-col">
            <BsWallet className="stats__icon" />
            <div className="stats__info">
              <h1>200+</h1>
              <p>Over 200 Transactions</p>
            </div>
          </div>

          <div className="stats__top2 flex items-center flex-col">
            <BsFillPersonLinesFill className="stats__icon" />
            <div className="stats__info">
              <h1>400+</h1>
              <p>Over 400 resellers </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
