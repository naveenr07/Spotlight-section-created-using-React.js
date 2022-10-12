import React from "react";
import styled from "styled-components";

function Spotlight() {
  return (
    <SpotlightContainer>
      <LeftAside>
        <LeftContainer>
          <LogoContainer>
            <Logo src={require("../assets/images/logo.svg").default} />
          </LogoContainer>
          <LeftContainerTop>
            <ItemContainer>
              <ItemBox>
                <Items>
                  <ItemName>Summary</ItemName>
                  <ItemImageContainer>
                    <ItemImage
                      src={require("../assets/images/book.svg").default}
                    />
                  </ItemImageContainer>
                </Items>
                <Items>
                  <ItemName>Products</ItemName>
                  <ItemImageContainer>
                    <ItemImage
                      src={require("../assets/images/slide.svg").default}
                    />
                  </ItemImageContainer>
                </Items>{" "}
                <Items>
                  <ItemName>Hot Selling</ItemName>
                  <ItemImageContainer>
                    <ItemImage
                      src={require("../assets/images/fire.svg").default}
                    />
                  </ItemImageContainer>
                </Items>{" "}
                <Items>
                  <ItemName>Manage Order</ItemName>
                  <ItemImageContainer>
                    <ItemImage
                      src={require("../assets/images/oder.svg").default}
                    />
                  </ItemImageContainer>
                </Items>{" "}
                <Items>
                  <ItemName>Payments</ItemName>
                  <ItemImageContainer>
                    <ItemImage
                      src={require("../assets/images/wallet.svg").default}
                    />
                  </ItemImageContainer>
                </Items>
                <Items>
                  <ItemName>Settings</ItemName>
                  <ItemImageContainer>
                    <ItemImage
                      src={require("../assets/images/settings.svg").default}
                    />
                  </ItemImageContainer>
                </Items>
              </ItemBox>
            </ItemContainer>
          </LeftContainerTop>
          <LeftContainerBottom>
            <GrayContainer>
              <GraphImageBox>
                <GraphImage
                  src={require("../assets/images/graph-lap.svg").default}
                />
              </GraphImageBox>
              <H3Container>
                Power up Your <br /> Business
              </H3Container>
              <Button>Go Pro!</Button>
              <ArrowImageContainer>
                <ArrowImage
                  src={require("../assets/images/right-arrow.svg").default}
                />
              </ArrowImageContainer>
            </GrayContainer>
          </LeftContainerBottom>
        </LeftContainer>
      </LeftAside>
      <MidSection>
        <MiddleContainer>
          <Form>
            <Input type="text" placeholder="Search" />
            <SearchImageContainer>
              <SearchImage
                src={require("../assets/images/search.svg").default}
              />
            </SearchImageContainer>
          </Form>
        </MiddleContainer>
      </MidSection>
      <RightAside>right</RightAside>
    </SpotlightContainer>
  );
}
export default Spotlight;

const SpotlightContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
`;

const LeftAside = styled.div`
  border-right: 2px solid #f1f1f3;
  width: 20%;
`;

const LeftContainer = styled.div`
  padding: 45px;
`;
const LogoContainer = styled.div`
  display: block;
  width: 140px;
  margin-bottom: 40px;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;

const LeftContainerTop = styled.div``;

const ItemName = styled.h6`
  font-size: 16px;
  font-weight: 500;
`;

const ItemContainer = styled.div``;
const ItemBox = styled.ul``;
const Items = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #867f7f;
  margin-bottom: 32px;

  &:first-child {
    color: #323989;
    font-weight: bold;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemImageContainer = styled.span`
  display: inline-block;
`;
const ItemImage = styled.img`
  width: 100%;
  display: block;
`;

const LeftContainerBottom = styled.div`
  height: 480px;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const GrayContainer = styled.div`
  background: #f1f1f3;
  padding: 30px;
  border-radius: 14px;
  position: relative;
`;

const GraphImageBox = styled.div`
  display: block;
  width: 125px;
  margin-bottom: 15px;
`;

const GraphImage = styled.img`
  width: 100%;
  display: block;
`;
const H3Container = styled.h3`
  color: #000;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  margin-bottom: 15px;
`;

const Button = styled.button`
  color: #fff;
  padding: 9px 40px;
  border-radius: 10px;
  background: #323989;
  display: inline-block;
  font-weight: 600;
  margin: 0 auto;
`;

const ArrowImageContainer = styled.span`
  display: inline-block;
  width: 10px;
  position: absolute;
  top: 191px;
  right: 58px;
`;
const ArrowImage = styled.img`
  width: 100%;
  display: inline-block;
  transform: rotate(270deg);
`;

// LeftAside section completed//

const MidSection = styled.div`
  width: 45%;
  padding: 32px 40px;
`;

const MiddleContainer = styled.div``;

const Form = styled.form`
  background: #d9d9d9;
  border-radius: 14px;
  padding: 13px 18px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  font-size: 17px;
  font-weight: 500;
`;

const SearchImageContainer = styled.span`
  width: 24px;
`;

const SearchImage = styled.img`
  width: 100%;
  display: block;
`;

const RightAside = styled.div`
  background: #f1f1f3;
  width: 35%;
`;
