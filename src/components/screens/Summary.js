import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Index from "../../pages/Index";

function Summary() {
  return (
    <>
      <Helmet>
        <title>Summary</title>
      </Helmet>
      <Index />
      <SummaryContainer>
        <SummaryTitle>SUMMARY</SummaryTitle>
        <SummaryBody>
          <SummaryImage src={require("../assets/images/summary.jpg")} />
        </SummaryBody>
      </SummaryContainer>
    </>
  );
}

export default Summary;

const SummaryContainer = styled.div`
  padding: 30px;
  background: #dcc6ee;
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
  width: 100%;
`;
const SummaryImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
