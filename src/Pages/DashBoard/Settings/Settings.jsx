import React from "react";
import "./Settings.css";
import image from "../../../assets/Dashboard/camera.png";
import { HiUserGroup } from "react-icons/hi";
import { AiTwotoneStar } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlinePhotoCameraFront } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="acc__container">
        <div className="acc__left">
          <div className="acc__head">
            <img src={image} alt="" />
            <h1>Meshach</h1>
            <p>ibmeshach@gmail.com</p>
          </div>
          <div className="acc__left__icons">
            <div
              className="div__left__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div1">
                <HiUserGroup className="settings__icon" />
              </div>
              <p>Referrals</p>
            </div>

            <div
              className="div__left__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div2">
                <AiTwotoneStar className="settings__icon" />
              </div>
              <p>Watch List</p>
            </div>

            <div
              className="div__left__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div3">
                <BiMoney className="settings__icon" />
              </div>
              <p>Withdrawals</p>
            </div>
          </div>
        </div>
        <div className="acc__right">
          <div className="acc__right__icons">
            <div
              className="div__right__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div4">
                <FiLogOut className="settings__icon" />
              </div>
              <p>Logout</p>
            </div>
            <div
              className="div__right__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div5">
                <AiOutlineMail className="settings__icon" />
              </div>
              <p>Update Email</p>
            </div>
            <div
              className="div__right__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div6">
                <MdOutlinePhotoCameraFront className="settings__icon" />
              </div>
              <p>Update Photo</p>
            </div>
            <div
              className="div__right__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div7">
                <AiFillLock className="settings__icon" />
              </div>
              <p>Update Password</p>
            </div>
            <div
              className="div__right__icon"
              onClick={() => navigate("/dashboard")}
            >
              <div className="icon__logo__div8">
                <AiFillSetting className="settings__icon" />
              </div>
              <p>Account Settings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
