import React from "react";
import Games from "../../components/Home/Games/Games";
import HowToUse from "../../components/Home/HowToUse/HowToUse";
import Video from "../../components/Home/Video/Video";
import Heroarea from "../../components/Home/Heroarea/Heroarea";
import Stats from "../../components/Home/Stats/Stats";
import Wcu from "../../components/Home/Wcu/Wcu";
import Plans from "../../components/Home/Plans/Plans";
import Cta from "../../components/Home/Cta/Cta";
import Trx from "../../components/Home/Trx/Trx";
import "./Home.css";
import Hero from "../../components/Home/Heroarea/Hero";
import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

const Home = ({ expandState }) => {
  return (
    <>
      <Navbar />
      <div className="home__container">
        <Hero expandState={expandState} />
        <Games />
        <Stats />
        <Cta />
        <Wcu />
        <Plans />
        <HowToUse />
        <Video />
        <Trx />
      </div>
      <Footer />
    </>
  );
};

export default Home;
