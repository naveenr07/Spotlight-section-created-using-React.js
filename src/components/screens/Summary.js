import React from "react";
import styled from "styled-components";

function Summary() {
  return (
    <SummaryContainer>
      <SummaryTitle>SUMMARY</SummaryTitle>
      <SummaryBody>
        <SummaryImage src={require("../assets/images/summary1.jpg")} />
      </SummaryBody>
    </SummaryContainer>
  );
}

export default Summary;

const SummaryContainer = styled.div`
  padding: 30px;
  background: #cdb8e0;
`;
const SummaryTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const SummaryBody = styled.div`
  display: block;
`;
const SummaryImage = styled.img`
  width: 100%;
  display: block;
`;
