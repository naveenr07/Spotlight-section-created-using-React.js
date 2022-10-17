import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Index from "../../pages/Index";

function Hotselling() {
  return (
    <>
      <Helmet>
        <title> Hot Selling</title>
      </Helmet>
      <Index />
      <HotsellingContainer>
        <Name>HOT SELLINGS</Name>
        <ImageBox>
          <Image src={require("../assets/images/hotselling.jpg")} />
        </ImageBox>
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
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  font-size: 50px;
  /* display: inline-block; */
`;
const ImageBox = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
