import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate()

  const login = () => {
    navigate('/login')
  }
  const signup = () => {
    navigate('/signup')
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar h-full">
      <span className="nav-logo">
        <div className="moralis">
          <h1 className="text-xl">Matrix Games</h1>
        </div>
      </span>
      <div className={`nav-items -mt-5 pt-5 ${isOpen && "open"}`}>
        <NavLink onClick={handleClick} to="/">
          Home
        </NavLink>
        <NavLink onClick={handleClick} to="/">
          Games
        </NavLink>
        <NavLink onClick={handleClick} to="/">
          Plans
        </NavLink>

        <NavLink onClick={handleClick} to="/">
          Contact Us
        </NavLink>

        <span
          style={{ textDecoration: "none" }}
          className="login"
          onClick={login}
        >
          Log In
        </span>

        <span
          style={{ textDecoration: "none" }}
          className="login bg-[#f24902]"
          onClick={signup}
        >
          Sign Up
        </span>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar text-sm"></div>
      </div>
    </div>
  );
};

export default Navbar;
