import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const RightSide = () => {
  return (
    <div className="RightSide ">
      <div className="rightside__div">
        <h3>Updates</h3>
        <Updates />
        <div className="view__more">
          <p>View All</p>
          <AiOutlineArrowRight className="view__icon" />
        </div>
      </div>
      <div className="rightside__div">
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
