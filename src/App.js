import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Sellers from "./Pages/DashBoard/Sellers/Sellers";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Navbar from "./components/Home/Navbar/Navbar";
import Sellers1 from "./Pages/DashBoard/Sellers/sellers1/Sellers1";
import Sellers2 from "./Pages/DashBoard/Sellers/Sellers2/Sellers2";
import SellersTable from "./Pages/DashBoard/Sellers/SellersTable/SellersTable";
import ContactUs from "./Pages/DashBoard/ContactUs/ContactUs";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Chat from "./components/Dashboard/Navbar/Chat/Chat";

import Cart from "./components/Dashboard/Navbar/Cart/Cart";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/chat"
            element={
              <ChakraProvider theme={theme}>
                <Chat />
              </ChakraProvider>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
