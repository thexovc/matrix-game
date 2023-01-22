import React from "react";
import cod1 from "../../../assets/Home/Game/cod1.jpg";
import vid from "../../../assets/Home/Video/video.mp4";
import "./TrxCard.css";

function TrxCard() {
  return (
    <>
      <div className="trxcard__container__card__con__card">
        <video src={vid} loop controls />
        <div className="trx__info__div">
          <div className="trx__info">
            <p className="trx__info__title">Game:</p>
            <p className="trx__info__value">Call of duty</p>
          </div>

          <div className="trx__info">
            <p className="trx__info__title">Amount:</p>
            <p className="trx__info__value">$300</p>
          </div>

          <div className="trx__info">
            <p className="trx__info__title">Seller:</p>
            <p className="trx__info__value">@Antisocial</p>
          </div>

          <div className="trx__info">
            <p className="trx__info__title">Buyer:</p>
            <p className="trx__info__value">@Kylax</p>
          </div>
          <div className="trx__info">
            <p className="trx__info__title">Date:</p>
            <p className="trx__info__value">12-04-2023</p>
          </div>
        </div>
        <div className="trx__text">
          <p>View</p>
        </div>
      </div>
    </>
  );
}

export default TrxCard;
