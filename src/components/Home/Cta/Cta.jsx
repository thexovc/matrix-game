import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cta.css";

const Cta = () => {
  const navigate = useNavigate()

  const goto = () => {
    navigate('/signup')
  }

  return (
    <div className="cta__container">
      <div className="cta__text">
        So what are you waiting for? Get that account you have alwayss wanted
        now
      </div>
      <div className="cta__button cursor-pointer">
        <p onClick={goto}>Get Started</p>
      </div>
    </div>
  );
};

export default Cta;
