import { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./ProfileSlider.css";
import img1 from "../../../../assets/Dashboard/img1.png";
import img2 from "../../../../assets/Dashboard/img2.png";
import img3 from "../../../../assets/Dashboard/img3.png";
import { AiFillStar } from "react-icons/ai";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const myArray = [
  { name: "ibmeshach", followers: 600, image: img1 },
  { name: "Kylax", followers: 554, image: img2 },
  { name: "Antisocial", followers: 432, image: img3 },
  {
    name: "Finbond",
    followers: 300,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  { name: "Finbond", followers: 300, image: "https://bit.ly/dan-abramov" },
  { name: "Finbond", followers: 300, image: img2 },
];

const ProfileSlider = () => {
  const getItems = () =>
    myArray.map((data, ind) => ({
      data: data,
      id: `element-${ind}`,
    }));

  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(500);

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
    <div
      className="chat__profile__containter"
      onClick={() => onClick(visibility)}
      tabIndex={0}
    >
      <div
        className={
          //   !!visibility.isItemVisible(itemId)
          "chat__profile__content"
        }
      >
        <Avatar
          style={{ margin: "12px 5px" }}
          size="lg"
          name="Dan Abrahmov"
          src={data.image}
        >
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        {/* <img src={data.image} alt="" /> */}
      </div>
    </div>
  );
}

export default ProfileSlider;
