import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 172px;
  left: 0px;
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
  width: 100%;
  height: 100%;
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

  h1 {
    font-size: 40px;
    display: inline-block;
    font-weight: 700;
  }

  p {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 16px;
  }

  button {
    margin-top: 20px;
    padding: 14px 30px;
    background: #141414;
    color: #fff;
    border: none;
    font-weight: 600;
    font-size: 18px;
    border-radius: 10px;

    &:hover {
      transform: scale(1.2);
      transition-duration: 0.5s;
      background: #fff;
      color: #000;
      border: 2px solid #000;
    }
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
  const botRef = useRef();

  const closeBot = (e) => {
    if (botRef.current === e.target) {
      setShowBot(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showBot) {
        setShowBot(false);
        console.log("I pressed");
      }
    },
    [setShowBot, showBot]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showBot ? (
        // <Background>
        <Background onClick={closeBot} ref={botRef}>
          <BotWrapper showBot={showBot}>
            <BotImg src={require("../../assets/images/bot.jpg")} alt="bot" />
            <BotContent>
              <h1>Welcome</h1>
              <p>We're here to assist you</p>
              <button>Join Now</button>
            </BotContent>
            <CloseBotButton
              aria-label="Close Bot"
              onClick={() => setShowBot((prev) => !prev)}
            />
          </BotWrapper>
        </Background>
      ) : null}
    </>
  );
};
