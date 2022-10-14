import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77%;
  height: 90%;
  top: 210px;
  left: 325px;
`;

const BotWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const BotImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const BotContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseBotButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Chatbot = ({ showBot, setShowBot }) => {
  return (
    <>
      {showBot ? (
        <Background>
          {/* <animated.div style={animation}> */}
          <BotWrapper showBot={showBot}>
            <BotImg src={require("../assets/images/bot.jpg")} alt="camera" />
            <BotContent>
              <h1>What can i help you?</h1>
              <button>Click here</button>
            </BotContent>
            <CloseBotButton
              aria-label="Close Bot"
              onClick={() => setShowBot((prev) => !prev)}
            />
          </BotWrapper>
          {/* </animated.div> */}
        </Background>
      ) : null}
    </>
  );
};
