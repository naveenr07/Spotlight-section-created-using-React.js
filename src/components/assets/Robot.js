import React, { useState } from "react";
import styled from "styled-components";
import { Chatbot } from ".././screens/Chatbot";
import { GlobalStyle } from "../../globalStyles";

function Robot() {
  const [showBot, setShowBot] = useState(false);
  const openBot = () => {
    setShowBot((prev) => !prev);
  };
  return (
    <BotContainer>
      <BotButton onClick={openBot}>chat with us </BotButton>
      <Chatbot showBot={showBot} setShowBot={setShowBot} />
      <GlobalStyle />
    </BotContainer>
  );
}

export default Robot;

const BotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BotButton = styled.button`
  font-size: 18px;
  min-width: 100px;
  font-weight: 600;
  color: #3d438e;
  cursor: pointer;
`;
