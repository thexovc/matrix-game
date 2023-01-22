import React from "react";
import TypeWriter from "typewriter-effect";
import "./TextCard.css";

const TextCard = () => {
  return (
    <div className="textCard__con">
      <div className="textCard__content">
        <h2>News & Updates</h2>
        <p className="">
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Any deals done outside the confidement of matrix games is at owners risk",
                "There will be an auction bid for Call of duty accounts today 9:30am",
                "Clash royale will be hosting a tournament hosted today 7:00pm GMT",
                "All complains should be made before the sales time period elapses",
                "Please follow the rule and guidelines of Matrix, offenders will be punished",
              ],
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default TextCard;
