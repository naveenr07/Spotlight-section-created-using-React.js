import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Index from "../../pages/Index";

function Setting() {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <Index />
      <SettingContainer>
        <SettingTitle>SETTINGS</SettingTitle>
        <SettingBody>
          <SettingImage src={require("../assets/images/settings.jpg")} />
        </SettingBody>
      </SettingContainer>
    </>
  );
}

export default Setting;

const SettingContainer = styled.div`
  padding: 30px;
  background: #8dc73f;
  width: 100%;
  height: 746px;

  @media all and (max-width: 360px) {
    width: 722px;
    height: 747px;
  }
`;
const SettingTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const SettingBody = styled.div`
  display: block;
  width: 692px;
  height: 619px;
  margin: 0 auto;
`;
const SettingImage = styled.img`
  width: 100%;
  display: block;
`;
