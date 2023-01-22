import React, { useState, useEffect, useRef } from "react";
import { BiLike } from "react-icons/bi";
import { BiCloudDownload } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BiTimer } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

import "./DashCard.css";
import dash1 from "../../../assets/Dashboard/dash1.jpg";
import dash2 from "../../../assets/Dashboard/dash2.jpg";
import dash3 from "../../../assets/Dashboard/dash3.jpg";
import dash4 from "../../../assets/Dashboard/dash4.jpg";
import dash5 from "../../../assets/Dashboard/dash5.jpg";
import dash6 from "../../../assets/Dashboard/dash6.jpg";
import dash7 from "../../../assets/Dashboard/dash7.jpg";

import img1 from "../../../assets/Dashboard/img1.png";
import img2 from "../../../assets/Dashboard/img2.png";
import img3 from "../../../assets/Dashboard/img3.png";

const DashCard = () => {
  const delay = 4000;

  const imagesList1 = [
    { name: dash1, value: "50k" },
    { name: dash2, value: "44k" },
    { name: dash5, value: "30k" },
    { name: dash4, value: "25k" },
    { name: dash7, value: "22k" },
    { name: dash6, value: "19k" },
    { name: dash3, value: "💙" },
  ];
  const imagesList2 = [
    { name: dash2, value: "500" },
    { name: dash5, value: "430" },
    { name: dash7, value: "399" },
    { name: dash6, value: "367" },
    { name: dash1, value: "289" },
    { name: dash4, value: "170" },
    { name: dash3, value: "💙" },
  ];
  const imagesList3 = [
    { name: dash4, value: "289" },
    { name: dash7, value: "289" },
    { name: dash6, value: "289" },
    { name: dash1, value: "289" },
    { name: dash2, value: "289" },
    { name: dash5, value: "289" },
    { name: dash1, value: "💙" },
  ];
  const imagesList4 = [
    { name: dash6, value: "20k" },
    { name: dash1, value: "18k" },
    { name: dash4, value: "17k" },
    { name: dash2, value: "15k" },
    { name: dash5, value: "12k" },
    { name: dash7, value: "10k" },
    { name: dash3, value: "💙" },
  ];

  const [cstate, setCstate] = useState(0);
  const [popular, setPopular] = useState(true);
  const [download, setDownload] = useState(false);
  const [view, setView] = useState(false);
  const [recent, setRecent] = useState(false);

  function renderState() {
    let state;
    if (popular) {
      state = imagesList1;
    } else if (download) {
      state = imagesList2;
    } else if (view) {
      state = imagesList3;
    } else if (recent) {
      state = imagesList4;
    }
    return state;
  }

  const popularState = () => {
    setPopular(true);
    setDownload(false);
    setRecent(false);
    setView(false);
  };

  const recentState = () => {
    setPopular(false);
    setDownload(false);
    setRecent(true);
    setView(false);
  };

  const downloadState = () => {
    setPopular(false);
    setDownload(true);
    setRecent(false);
    setView(false);
  };

  const viewState = () => {
    setPopular(false);
    setDownload(false);
    setRecent(false);
    setView(true);
  };
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FFBB28",
    "#FFBB28",
    "#FFBB28",
    "#FFBB28",
  ];

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCstate((prevIndex) =>
          prevIndex === renderState().length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [cstate]);

  return (
    <div className="dashCard__con">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-cstate * 100}%, 0, 0)` }}
        >
          {renderState().map((image, index) => (
            <div className="slide" key={index}>
              <img src={image.name} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${cstate === idx ? " active1" : ""}`}
            onClick={() => {
              setCstate(idx);
            }}
          ></div>
        ))}
      </div>

      <div className="content__top">
        <div className="content__top__icons">
          <div
            onClick={popularState}
            className={popular ? "active__top__icon" : "content__top__icon"}
          >
            <BiLike className="top__icon" />
            {popular ? <p>Popular</p> : null}
          </div>

          <div
            onClick={downloadState}
            className={download ? "active__top__icon" : "content__top__icon"}
          >
            <BiShoppingBag className="top__icon" />
            {download ? <p>Sales</p> : null}
          </div>

          <div
            onClick={recentState}
            className={recent ? "active__top__icon" : "content__top__icon"}
          >
            <BiTimer className="top__icon" />
            {recent ? <p>Recent</p> : null}
          </div>

          <div
            onClick={viewState}
            className={view ? "active__top__icon" : "content__top__icon"}
          >
            <AiOutlineEye className="top__icon" />
            {view ? <p>Viewed</p> : null}
          </div>
        </div>
      </div>
      <div className="content__bottom">
        <div className="content__bottom__images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>

        {popular ? (
          <div className="content__bottom__icon">
            <BiLike className="bottom__icon" />
            <p>+50k likes</p>
          </div>
        ) : null}

        {download ? (
          <div className="content__bottom__icon">
            <BiShoppingBag className="bottom__icon" />
            <p>800+ sales </p>
          </div>
        ) : null}

        {view ? (
          <div className="content__bottom__icon">
            <AiOutlineEye className="bottom__icon" />
            <p>+100k views </p>
          </div>
        ) : null}

        {recent ? (
          <div className="content__bottom__icon">
            <BiTimer className="bottom__icon" />
            <p>+20+ sales/hr </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DashCard;
