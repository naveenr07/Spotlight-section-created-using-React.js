import React from "react";
import {
  LeftAside,
  MidSection,
  RightAside,
  SpotlightContainer,
} from "./SpotlightElements";

function Spotlight() {
  return (
    <SpotlightContainer>
      <LeftAside>left</LeftAside>
      <MidSection>middle</MidSection>
      <RightAside>right</RightAside>
    </SpotlightContainer>
  );
}
export default Spotlight;
