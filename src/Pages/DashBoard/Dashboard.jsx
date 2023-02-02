import React, { useEffect, useState } from "react";
import MainDash from "../../components/Dashboard/MainDash/MainDash";
import Cart from "../../components/Dashboard/Navbar/Cart/Cart";
import Chat from "../../components/Dashboard/Navbar/Chat/Chat";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Notification from "../../components/Dashboard/Navbar/Notification";
import RightSide from "../../components/Dashboard/RigtSide/RightSide";
import Sidebar from "../../components/Dashboard/Sidebar";
import { supabase } from "../../config/supabaseClient";
import ContactUs from "./ContactUs/ContactUs";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "./Dashboard.css";
import Sellers from "./Sellers/Sellers";
import Sellers1 from "./Sellers/sellers1/Sellers1";
import Settings from "./Settings/Settings";
import AuctionedTrx from "./Transactions/AuctionedTrx";
import BoughtTrx from "./Transactions/BoughtTrx";
import SoldTrx from "./Transactions/SoldTrx";
import SwapedTrx from "./Transactions/SwapedTrx";
import Transactions from "./Transactions/Transactions";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(!false);
  // const [styleChange, setStyleChange] = useState(false);

  const [dashboard, setDashBoard] = useState(false);
  const [sellers, setSellers] = useState(false);
  const [settings, setSettings] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [cart, setCart] = useState(false);
  const [chat, setChat] = useState(false);
  const [notification, setNotification] = useState(false);
  const [trx1, setTrx1] = useState(false);
  const [trx2, setTrx2] = useState(false);
  const [trx3, setTrx3] = useState(false);
  const [trx4, setTrx4] = useState(false);

  console.log("lllll");
  console.log(dashboard);
  console.log(sellers);
  const expandState = (state) => {
    setExpanded(state);
  };

  // const styleChangeFunc = (state) => {
  //   setStyleChange(state);
  // };

  const sideState = (
    dashboard,
    sellers,
    trx1,
    trx2,
    trx3,
    trx4,
    settings,
    contactUs,
    cart,
    chat,
    notification
  ) => {
    setDashBoard(dashboard);
    setSellers(sellers);
    setContactUs(contactUs);
    setTrx1(trx1);
    setTrx2(trx2);
    setTrx3(trx3);
    setTrx4(trx4);
    setSettings(settings);
    setCart(cart);
    setChat(chat);
    setNotification(notification);
  };

  // const updateUser = async () => {
  //   try {
  //     const {
  //       data: { user },
  //       error,
  //     } = await supabase.auth.getUser();

  //     console.log(user);

  //     if (error) {
  //       throw error;
  //     }
  //     if (user) {
  //       const { data, error } = await supabase
  //         .from("user_info")
  //         .update({ uid: user.id })
  //         .eq("email", user.email)
  //         .select()
  //         .single();

  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   updateUser();
  // }, []);

  return (
    <div className="App bg-[#170727]">
      <div className="AppHead">
        <Navbar
          sideState={sideState}
          expandState={expandState}
          // styleChangeFunc={styleChangeFunc}
        />
      </div>

      <div className={dashboard ? "AppGlass bg-[#170727]" : "AppGlass1"}>
        <Sidebar
          sideState={sideState}
          expandState={expanded}
          // styleChange={styleChange}
        />
        {dashboard && <MainDash />}
        {dashboard && <RightSide />}

        {sellers && <Sellers />}
        {contactUs && <ContactUs />}
        {/* {transactions && <Transactions />} */}
        {settings && <Settings />}
        {trx1 && <BoughtTrx />}
        {trx2 && <SoldTrx />}
        {trx3 && <AuctionedTrx />}
        {trx4 && <SwapedTrx />}
        {cart && <Cart />}
        {chat && (
          <ChakraProvider theme={theme}>
            <Chat />
          </ChakraProvider>
        )}
        {notification && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100% ",
              marginTop: "100px",
            }}
          >
            <Notification />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
