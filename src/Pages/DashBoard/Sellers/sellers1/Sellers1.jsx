import { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import sell1 from "../../../../assets/Dashboard/Sellers/sell1.jpg";
import sell2 from "../../../../assets/Dashboard/Sellers/sell2.jpg";
import sell3 from "../../../../assets/Dashboard/Sellers/sell3.jpg";
import sell4 from "../../../../assets/Dashboard/Sellers/sell4.jpg";
import usePreventBodyScroll from "./usePreventBodyScroll";
import "./Sellers1.css";
import img1 from "../../../../assets/Dashboard/img1.png";
import img2 from "../../../../assets/Dashboard/img2.png";
import img3 from "../../../../assets/Dashboard/img3.png";
import { AiFillStar } from "react-icons/ai";

const myArray = [
  { name: "ibmeshach", followers: 600, image: sell1, image2: img1 },
  { name: "Kylax", followers: 554, image: sell2, image2: img2 },
  { name: "Antisocial", followers: 432, image: sell3, image2: img3 },
  { name: "Finbond", followers: 300, image: sell4, image2: img2 },
];

const Sellers1 = () => {
  const getItems = () =>
    myArray.map((data, ind) => ({
      data: data,
      id: `element-${ind}`,
    }));

  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(500);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  const [ease, setEase] = useState("noEasing");

  const easingFunctions = {
    noEasing: undefined,
    // no easing, no acceleration
    linear: (t) => t,
    // accelerating from zero velocity
    easeInQuad: (t) => t * t,
    // decelerating to zero velocity
    easeOutQuad: (t) => t * (2 - t),
    // acceleration until halfway, then deceleration
    easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    // accelerating from zero velocity
    easeInCubic: (t) => t * t * t,
    // decelerating to zero velocity
    easeOutCubic: (t) => --t * t * t + 1,
    // acceleration until halfway, then deceleration
    easeInOutCubic: (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    // accelerating from zero velocity
    easeInQuart: (t) => t * t * t * t,
    // decelerating to zero velocity
    easeOutQuart: (t) => 1 - --t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuart: (t) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
    // accelerating from zero velocity
    easeInQuint: (t) => t * t * t * t * t,
    // decelerating to zero velocity
    easeOutQuint: (t) => 1 + --t * t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuint: (t) =>
      t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
    // Source https://gist.github.com/gre/1650294#file-easing-js
  };

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu
      transitionDuration={duration} // NOTE: for transitions
      transitionEase={easingFunctions[ease]}
    >
      {getItems().map(({ id, data }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          data={data}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
};

function Card({ onClick, selected, title, itemId, data }) {
  const visibility = useContext(VisibilityContext);

  return (
    <div className="s__card" onClick={() => onClick(visibility)} tabIndex={0}>
      <div
        className={
          !!visibility.isItemVisible(itemId)
            ? "s__top__seller"
            : "s__top__seller1"
        }
      >
        <div className="top-seller-overlay"></div>
        <img src={data.image} alt="" />
        <div className="top__seller__top__content">
          <div className="top__seller__left">
            <img src={data.image2} alt="" />
            <div className="left__info">
              <p className="left__info__name">{data.name}</p>
              <p className="left__info__followers">
                {data.followers} followers
              </p>
            </div>
          </div>
          <div className="top__seller__right">
            <div className="top__seller__right__star">
              <AiFillStar className="star__icon" />
              <p> 4.8</p>
            </div>
            <div className="s__top__seller__right__button">
              <p>follow</p>
            </div>
          </div>
        </div>
        <div className="top__seller__bottom__content">
          <AiFillStar className="star1" />
          <AiFillStar className="star2" />
          <AiFillStar className="star3" />
          <AiFillStar className="star4" />
          <AiFillStar className="star5" />
        </div>
      </div>
    </div>
  );
}

export default Sellers1;
