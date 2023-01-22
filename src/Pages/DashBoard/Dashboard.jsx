import React, { useEffect, useState } from "react";
import MainDash from "../../components/Dashboard/MainDash/MainDash";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import RightSide from "../../components/Dashboard/RigtSide/RightSide";
import Sidebar from "../../components/Dashboard/Sidebar";
import { supabase } from "../../config/supabaseClient";
import ContactUs from "./ContactUs/ContactUs";

import "./Dashboard.css";
import Sellers from "./Sellers/Sellers";
import Sellers1 from "./Sellers/sellers1/Sellers1";
import Settings from "./Settings/Settings";
import Transactions from "./Transactions/Transactions";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(!false);

  const [dashboard, setDashBoard] = useState(false);
  const [sellers, setSellers] = useState(false);
  const [settings, setSettings] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [transactions, setTransactions] = useState(false);

  console.log("lllll");
  console.log(dashboard);
  console.log(sellers);
  const expandState = (state) => {
    setExpanded(state);
  };

  const sideState = (dashboard, sellers, transactions, settings, contactUs) => {
    setDashBoard(dashboard);
    setSellers(sellers);
    setContactUs(contactUs);
    setTransactions(transactions);
    setSettings(settings);
  };

  const updateUser = async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      console.log(user);

      if (error) {
        throw error;
      }
      if (user) {
        const { data, error } = await supabase
          .from("user_info")
          .update({ uid: user.id })
          .eq("email", user.email)
          .select()
          .single();

        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div className="App bg-[#170727]">
      <div className="AppHead">
        <Navbar expandState={expandState} />
      </div>

      <div className={dashboard ? "AppGlass bg-[#170727]" : "AppGlass1"}>
        <Sidebar sideState={sideState} expandState={expanded} />
        {dashboard && <MainDash />}
        {dashboard && <RightSide />}

        {sellers && <Sellers />}
        {contactUs && <ContactUs />}
        {transactions && <Transactions />}
        {settings && <Settings />}
      </div>
    </div>
  );
};

export default Dashboard;
