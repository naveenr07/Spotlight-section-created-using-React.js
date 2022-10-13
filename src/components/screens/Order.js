import React from "react";
import styled from "styled-components";

function Order() {
  return (
    <OrderContainer>
      <Name>MANAGE ORDER</Name>
      <Image src={require("../assets/images/order.jpg")} />
    </OrderContainer>
  );
}

export default Order;

const OrderContainer = styled.div`
  padding: 30px;
  background: #f55718;
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
  border-radius: 20px;
`;
