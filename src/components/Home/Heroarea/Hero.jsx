import React, { Fragment } from "react";
import Media from "react-media";
import Heroarea from "./Heroarea";
import cod1 from "../../../assets/Home/cod1.jpg";
import cod2 from "../../../assets/Home/cod2.jpg";
import cod3 from "../../../assets/Home/cod3.jpg";
import cod4 from "../../../assets/Home/cod4.jpg";
import pubg1 from "../../../assets/Home/pubg1.jpg";
import pubg2 from "../../../assets/Home/pubg2.jpg";
import pubg3 from "../../../assets/Home/pubg3.jpg";
import pubg4 from "../../../assets/Home/pubg4.jpg";
import coc1 from "../../../assets/Home/coc1.jpg";
import coc2 from "../../../assets/Home/coc2.jpg";
import coc3 from "../../../assets/Home/coc3.jpg";
import coc4 from "../../../assets/Home/coc4.jpg";
import apex1 from "../../../assets/Home/apex1.jpg";
import apex2 from "../../../assets/Home/apex2.jpg";
import apex3 from "../../../assets/Home/apex3.jpg";
import apex4 from "../../../assets/Home/apex4.jpg";
import pes1 from "../../../assets/Home/pes1.jpg";
import pes2 from "../../../assets/Home/pes2.jpg";
import pes3 from "../../../assets/Home/pes3.jpg";
import pes4 from "../../../assets/Home/pes4.jpg";

const Hero = ({ expandState }) => {
  const images = [
    cod1,
    cod3,
    pubg1,
    pubg3,
    coc1,
    coc3,
    apex1,
    apex3,
    pes1,
    pes3,
  ];
  const images1 = [cod2, cod4, pubg2, pubg4, coc2, coc4, apex2, apex4, pes2];

  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 992px)",
          large: "(min-width: 993px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <Heroarea expandState={expandState} bgImages={images1} />
            )}

            {matches.large && (
              <Heroarea expandState={expandState} bgImages={images} />
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default Hero;
