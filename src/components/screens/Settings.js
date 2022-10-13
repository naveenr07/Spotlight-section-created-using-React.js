import React from "react";
import styled from "styled-components";

function Setting() {
  return (
    <SettingContainer>
      <SettingTitle>Setting</SettingTitle>
      <SettingBody>
        {/* <SettingImage src={require("../assets/images/setting0.jpg")} /> */}
      </SettingBody>
    </SettingContainer>
  );
}

export default Setting;

const SettingContainer = styled.div`
  padding: 30px;
  background: #cdb8e0;
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
`;
const SettingImage = styled.img`
  width: 100%;
  display: block;
`;
