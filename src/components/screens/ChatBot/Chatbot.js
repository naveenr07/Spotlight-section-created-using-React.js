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

  @media all and (max-width: 1440px) {
    width: 90%;
    height: 56%;
    position: absolute;
    top: 72px;
    left: 26px;
  }
  @media all and (max-width: 640px) {
    width: 90%;
    height: 40%;
    position: absolute;
    top: 257px;
    left: 26px;
  }
  @media all and (max-width: 640px) {
    width: 92%;
    height: 28%;
    position: absolute;
    top: 257px;
    left: 12px;
  }
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

  @media all and (max-width: 1080px) {
    width: 661px;
    height: 406px;
  }

  @media all and (max-width: 768px) {
    width: 491px;
    height: 310px;
  }
  @media all and (max-width: 640px) {
    width: 329px;
    height: 241px;
  }
  @media all and (max-width: 360px) {
    width: 275px;
    height: 213px;
  }
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

    @media all and (max-width: 640px) {
      margin-bottom: 0.1rem;
      font-weight: 700;
      font-size: 20px;
    }
  }

  p {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 16px;

    @media all and (max-width: 640px) {
      margin-bottom: 0.1rem;
      font-weight: 500;
      font-size: 12px;
    }
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

    @media all and (max-width: 640px) {
      margin-top: 5px;
      padding: 8px 17px;
      background: #141414;
      color: #fff;
      border: none;
      font-weight: 600;
      font-size: 10px;
      border-radius: 10px;
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

  @media all and (max-width: 640px) {
    top: 6px;
    right: 6px;
  }
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
