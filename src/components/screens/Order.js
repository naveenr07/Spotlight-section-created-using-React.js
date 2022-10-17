import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Index from "../../pages/Index";

function Order() {
  return (
    <>
      {" "}
      <Helmet>
        <title> Manage Orders</title>
      </Helmet>
      <Index />
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
  width: 100%;
`;
const OrderImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
`;
