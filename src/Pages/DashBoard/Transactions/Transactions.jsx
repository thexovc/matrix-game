import React, { useState } from "react";
import "./Transactions.css";
import TrxTable1 from "./TrxTable1";
import TrxTable2 from "./TrxTable2";
import TrxTable3 from "./TrxTable3";
import TrxTable4 from "./TrxTable4";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";

const Transactions = () => {
  const [filterModal, setFilterModal] = useState("modal-container__target");

  return (
    <>
      <div className={filterModal}>
        <section class="modal">
          <header class="modal-header">
            <h2 class="modal-title">Sort By:</h2>
            <span
              onClick={() => {
                setFilterModal("modal-container__target ");
              }}
              class="modal-close"
            >
              Close
            </span>
          </header>
          <div class="modal-content">
            <select
              required
              // onChange={}
              // value={}
              className="selector"
            >
              <option value="pick" selected>
                All Sellers
              </option>
              <option value="cod">Call of duty</option>
              <option value="coc">Clash of clans</option>
              <option value="pubg">Pubg</option>
              <option value="apex">Apex Legends</option>
              <option value="clashRoyale">Clash Royale</option>
              <option value="pes">Pes Mobile</option>
              <option value="fortnite">Fortnite</option>
              <option value="5stars">5 stars</option>
              <option value="4stars">4 stars</option>
              <option value="3stars">3 stars</option>
              <option value="2stars">2 stars</option>
              <option value="1stars">1 stars</option>
            </select>
          </div>
        </section>
      </div>
      <div className="transactions__container">
        <div className="transactions__content">
          <div className="transactions__head">
            <div className="transactions__text">
              <h1>Transactions</h1>
              <p>
                Browse through your transactions to view your past transactions
              </p>
            </div>
            <div className="sellers__list__inputs1">
              <form action="">
                <FiSearch className="sellers__list__icon" />
                <input placeholder="Search sellers Id" type="text" />
              </form>
              <GoSettings
                onClick={() => {
                  setFilterModal("modal-container");
                }}
                className="sellers__filter__icon"
              />
            </div>
          </div>

          <div className="transactions__tables">
            <div className="transactions__table">
              <TrxTable1 />
            </div>

            <div className="transactions__table">
              <TrxTable2 />
            </div>

            <div className="transactions__table">
              <TrxTable3 />
            </div>

            <div className="transactions__table">
              <TrxTable4 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
