import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function Payment() {
  return (
    <>
      <Helmet>
        <title>Payments</title>
      </Helmet>
      <PaymentContainer>
        <PaymentTitle>PAYMENTS</PaymentTitle>
        <PaymentBody>
          <PaymentImage src={require("../assets/images/payment.jpg")} />
        </PaymentBody>
      </PaymentContainer>
    </>
  );
}

export default Payment;

const PaymentContainer = styled.div`
  padding: 30px;
  background: #000;
`;
const PaymentTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const PaymentBody = styled.div`
  display: block;
  width: 930px;
  height: 619px;
  margin: 0 auto;
`;
const PaymentImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
`;
