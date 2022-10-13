import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export default function PageNotFound() {
  return (
    <>
      {" "}
      <Helmet>
        <title>PageNotFound</title>
      </Helmet>
      <div>
        <Images src={require("../assets/images/order.jpg")}   />
      </div>
    </>
  );
}

const Images = styled.img``;
