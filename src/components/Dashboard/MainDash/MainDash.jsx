import React from "react";
import Cards from "../Cards/Cards";
import DashCard from "../DashCard/DashCard";
import DashWallet from "../DashWallet/DashWallet";
import Table from "../Table/Table";
import Table1 from "../Table1/Table1";
import Table2 from "../Table2/Table2";
import TextCard from "../TextCard/TextCard";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash ">
      <h1>Good Evening, Kylax!</h1>
      <div className="row1">
        <div className="dashcard">
          {" "}
          <DashCard />
        </div>
        <div className="dashwallet">
          <DashWallet />
          <TextCard />
        </div>
      </div>
      <Cards />
      <Table />
      <Table1 />
      <Table2 />
    </div>
  );
};

export default MainDash;
