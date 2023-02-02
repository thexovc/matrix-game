import React, { useState } from "react";
import "./Transactions.css";

import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";

const SoldTrx = () => {
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
              <h1>Accounts Sold Transactions</h1>
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

          <div className="transactions__cards">
            <div className="transactions__card">
              <div className="transactions__card__content">
                <h2>Call of Duty Mobile</h2>
                <div className="transactions__card__body">
                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Order ID</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>6669095244397937846</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Transaction ID</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>6669095244297691599</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Item purchased</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>Cod Account</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Order date</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>27 Oct 2022, 15:25:24</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Payment status</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p className="card__state">fuilfilled</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="transactions__card__tail">
                <p className="tail1">Total payment</p>
                <p className="tail2">$315</p>
              </div>
            </div>

            <div className="transactions__card">
              <div className="transactions__card__content">
                <h2>Call of Duty Mobile</h2>
                <div className="transactions__card__body">
                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Order ID</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>6669095244397937846</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Transaction ID</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>6669095244297691599</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Item purchased</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>Cod Account</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Order date</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p>27 Oct 2022, 15:25:24</p>
                    </div>
                  </div>

                  <div className="transactions__card__body__value">
                    <div className="transactions__card__title">
                      <p>Payment status</p>
                      <p>:</p>
                    </div>
                    <div className="transactions__card__value">
                      <p className="card__state">fuilfilled</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="transactions__card__tail">
                <p className="tail1">Total payment</p>
                <p className="tail2">$315</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoldTrx;
