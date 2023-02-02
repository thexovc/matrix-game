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
    <div className="game__container1">
      <div className="game__container__card__con">
        <GameCard image={cod} title="Cod" />
        <GameCard image={pubg} type="" title="Pubg" />
        <GameCard image={coc} type="" title="Clash of Clans" />
        <GameCard image={apex} type="" title="Apex Legends" />
        <GameCard image={pes} type="" title="Pes Mobile" />
        <GameCard image={fortnite} type="" title="Fortnite" />
      </div>
    </div>
  );
};

export default Games;
