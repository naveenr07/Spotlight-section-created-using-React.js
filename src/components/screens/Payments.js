import React from "react";
import styled from "styled-components";

function Payment() {
  return (
    <PaymentContainer>
      <PaymentTitle>Payment</PaymentTitle>
      <PaymentBody>
        {/* <PaymentImage src={require("../assets/images/payment.jpg")} /> */}
      </PaymentBody>
    </PaymentContainer>
  );
}

export default Payment;

const PaymentContainer = styled.div`
  padding: 30px;
  background: #cdb8e0;
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
`;
const PaymentImage = styled.img`
  width: 100%;
  display: block;
`;
