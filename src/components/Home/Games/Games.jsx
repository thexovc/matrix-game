import React from "react";
import "./Games.css";
import cod from "../../../assets/Home/Game/cod.jpg";
import pubg from "../../../assets/Home/Game/pubg.png";
import apex from "../../../assets/Home/Game/apex.png";
import coc from "../../../assets/Home/Game/coc.png";
import fortnite from "../../../assets/Home/Game/fortnite.png";
import pes from "../../../assets/Home/Game/pes.png";
import GameCard from "./GameCard";

const Games = () => {
  return (
    <div className="game__container">
      <div className="game__container__title">
        <h1>Games</h1>
        <ul>
          <li className="game__container__title__active">Popular</li>
          <li>Recent</li>
        </ul>
      </div>

      <div className="game__container__card__con">
        <GameCard image={cod} title="Call of Duty Mobile" />
        <GameCard image={pubg} type="coming" title="Pubg" />
        <GameCard image={coc} type="coming" title="Clash of Clans" />
        <GameCard image={apex} type="coming" title="Apex Legends" />
        <GameCard image={pes} type="coming" title="Pes Mobile" />
        <GameCard image={fortnite} type="coming" title="Fortnite" />
      </div>

      <p className="see__all">See All</p>
    </div>
  );
};

export default Games;
