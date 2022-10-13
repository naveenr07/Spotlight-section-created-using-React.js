import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function Hotselling() {
  return (
    <>
      <Helmet>
        <title> Hot Selling</title>
      </Helmet>
      <HotsellingContainer>
        <Name>HOT SELLINGS</Name>
        <Image src={require("../assets/images/hotselling.jpg")} />
      </HotsellingContainer>
    </>
  );
}

export default Hotselling;

const HotsellingContainer = styled.div`
  padding: 30px;
  background: #000;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  font-size: 50px;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;
