import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function Order() {
  return (
    <>
      {" "}
      <Helmet>
        <title> Manage Orders</title>
      </Helmet>
      <OrderContainer>
        <OrderTitle>MANAGE ORDERS</OrderTitle>
        <OrderBody>
          <OrderImage src={require("../assets/images/order.jpg")} />
        </OrderBody>
      </OrderContainer>
    </>
  );
}

export default Order;

const OrderContainer = styled.div`
  padding: 30px;
  background: #000047;
`;
const OrderTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const OrderBody = styled.div`
  display: block;
  width: 630px;
  height: 619px;
  margin: 0 auto;
`;
const OrderImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
`;
