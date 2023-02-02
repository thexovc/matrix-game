import React from "react";
import { MdDelete } from "react-icons/md";
import cod from "../../../../assets/Home/Game/cod.jpg";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart__container">
      <div className="cart__content">
        <div className="cart__left">
          <h2>Cart (3)</h2>

          <div className="cart__cards">
            <div className="cart__card">
              <div className="cart__card__top">
                <div className="cart__card__top__left">
                  <img src={cod} alt="" />
                  <div className="cart__card__top__text">
                    <p>
                      <span>Game :</span> Cod
                    </p>
                    <p>
                      <span>Seller</span> @antisocial
                    </p>
                    <p>
                      <span>likes</span> 5k
                    </p>
                  </div>
                </div>
                <div className="cart__card__top__right">
                  <p>$ 450</p>
                  <div>
                    {/* <p>$ 750</p> */}
                    <p>-50%</p>
                  </div>
                </div>
              </div>
              <div className="card__bottom">
                <div className="card__bottom__left">
                  <MdDelete />
                  <p>REMOVE</p>
                </div>
                <div className="card__bottom__right">
                  <p>CHECKOUT</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="cart__card">
              <div className="cart__card__top">
                <div className="cart__card__top__left">
                  <img src={cod} alt="" />
                  <div className="cart__card__top__text">
                    <p>
                      <span>Game :</span> Cod
                    </p>
                    <p>
                      <span>Seller</span> @antisocial
                    </p>
                    <p>
                      <span>likes</span> 5k
                    </p>
                  </div>
                </div>
                <div className="cart__card__top__right">
                  <p>$ 450</p>
                  <div>
                    {/* <p>$ 750</p> */}
                    <p>-50%</p>
                  </div>
                </div>
              </div>
              <div className="card__bottom">
                <div className="card__bottom__left">
                  <MdDelete />
                  <p>REMOVE</p>
                </div>
                <div className="card__bottom__right">
                  <p>CHECKOUT</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="cart__card">
              <div className="cart__card__top">
                <div className="cart__card__top__left">
                  <img src={cod} alt="" />
                  <div className="cart__card__top__text">
                    <p>
                      <span>Game :</span> Cod
                    </p>
                    <p>
                      <span>Seller</span> @antisocial
                    </p>
                    <p>
                      <span>likes</span> 5k
                    </p>
                  </div>
                </div>
                <div className="cart__card__top__right">
                  <p>$ 450</p>
                  <div>
                    {/* <p>$ 750</p> */}
                    <p>-50%</p>
                  </div>
                </div>
              </div>
              <div className="card__bottom">
                <div className="card__bottom__left">
                  <MdDelete />
                  <p>REMOVE</p>
                </div>
                <div className="card__bottom__right">
                  <p>CHECKOUT</p>
                </div>
              </div>
            </div>
            {/* <hr /> */}
          </div>
        </div>
        <div className="cart__right">
          <div className="cart__right__content">
            <div className="cart__right__top">
              <h2>CART SUMMARY</h2>
              <div className="cart__right__text">
                <div className="cart__right__text1">
                  <p>Subtotal</p>
                  <p>₦ 26,452</p>
                </div>
                <p>Delivery fees not included yet.</p>
              </div>
              <div className="cart__right__button">
                <p>CHECKOUT ($600)</p>
              </div>
            </div>
            <div className="cart__right__bottom">
              <h3>Returns are easy</h3>
              <p>
                Free return within 15 days for Official Store items and 7 days
                for other eligible items <span>See more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
