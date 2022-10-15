import React, { useState } from "react";
import styled from "styled-components";
import { Chatbot } from "./Chatbot";

function App() {
  const [showBot, setShowBot] = useState(false);

  const openBot = () => {
    setShowBot((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openBot}>Chat with us</Button>
        {/* <Button>Chat with us</Button> */}
        <Chatbot showBot={showBot} setShowBot={setShowBot} />
        {/* <GlobalStyle /> */}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  min-width: 100px;
  font-weight: 600;
  color: #323989;
  font-size: 16px;
  cursor: pointer;

  @media all and (max-width: 1280px) {
    font-size: 14px;
  }

  &:hover {
    transform: scale(0.8);
    transition-duration: 0.5s;
    background: #fff;
    color: #000;
    border: 2px solid #000;
    padding: 4px 6px;
    border-radius: 8px;
  }
`;
