import React, { useState } from "react";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Messages from "./components/Messages";
import ProfileSlider from "./ProfileSlider";
import img1 from "../../../../assets/Dashboard/img1.png";
import img2 from "../../../../assets/Dashboard/img2.png";
import img3 from "../../../../assets/Dashboard/img3.png";
import Media from "react-media";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Chat = (props) => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <div>
      <Flex
        w="100%"
        h="100vh"
        flexDirection="column"
        justify="center"
        align="center"
        gap="20px"
      >
        <Flex
          background="#17212b"
          padding="10px"
          w="90%"
          h="90%"
          flexDir="column"
          display="flex"
          gap="5px"
          borderRadius="10px"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2 style={{ color: "white" }}>Chats</h2>
            <span
              onClick={() => {
                props.sendChat("modal-container__target ");
              }}
              class="modal-close"
            >
              Close
            </span>
          </div>
          <Media queries={{ small: "(max-width: 768px)" }}>
            {(matches) =>
              matches.small ? (
                <ProfileSlider />
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Avatar
                    style={{}}
                    size="md"
                    name="Dan Abrahmov"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  >
                    <AvatarBadge boxSize="1.0rem" bg="green.500" />
                  </Avatar>
                  <Avatar
                    style={{}}
                    size="md"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  >
                    <AvatarBadge boxSize="1.0rem" bg="green.500" />
                  </Avatar>
                  <Avatar style={{}} size="md" name="Dan Abrahmov" src={img1}>
                    <AvatarBadge boxSize="1.0rem" bg="green.500" />
                  </Avatar>

                  <Avatar style={{}} size="md" name="Dan Abrahmov" src={img2}>
                    <AvatarBadge boxSize="1.0rem" bg="green.500" />
                  </Avatar>

                  <Avatar style={{}} size="md" name="Dan Abrahmov" src={img3}>
                    <AvatarBadge boxSize="1.0rem" bg="green.500" />
                  </Avatar>
                </div>
              )
            }
          </Media>

          <Header />
          <Divider />
          <Messages messages={messages} />
          <Divider />
          <Footer
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSendMessage={handleSendMessage}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default Chat;
