import React from "react";
import styled from "styled-components";
import "../../App.css";

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
        <MiddleFormContainer>
          <Form>
            <Input type="text" placeholder="Search here" />
            <SearchImageContainer>
              <SearchImage
                src={require("../assets/images/search.svg").default}
              />
            </SearchImageContainer>
          </Form>
        </MiddleFormContainer>
        <StaticContainer>
          <StaticHeading>Statistics</StaticHeading>
          <MonthBox>
            <MonthCount>6 Months</MonthCount>
            <MonthArrowImage>
              <ArrowDownImage
                src={require("../assets/images/down-arrow.svg").default}
              />
            </MonthArrowImage>
          </MonthBox>
        </StaticContainer>
        <ThreeImageContainer>
          <DoubleImageContainer>
            <PinkContainer>
              <PinkImageContainer>
                <PinkImage
                  src={require("../assets/images/vehicle.svg").default}
                />
              </PinkImageContainer>
              <PinkDelivery>Awaiting Delivery</PinkDelivery>
              <PinkOrder>150k Orders</PinkOrder>
            </PinkContainer>
            <BlueContainer>
              <BlueImageContainer>
                <BlueImage
                  src={require("../assets/images/vehicle.svg").default}
                />
              </BlueImageContainer>
              <BlueDelivery>Awaiting Delivery</BlueDelivery>
              <BlueOrder>150k Orders</BlueOrder>
            </BlueContainer>
          </DoubleImageContainer>
          <BlueGraphImageContainer>
            <BlueGraphImage
              src={require("../assets/images/graph-blue.svg").default}
            />
          </BlueGraphImageContainer>
        </ThreeImageContainer>
        <MidBottomContainer>
          <MidLeftBox>
            <MidLeftHeading>
              Create Ads for Your <br />
              Business
            </MidLeftHeading>
            <MidLeftImageContainer>
              <MidLeftImage
                src={require("../assets/images/admin.svg").default}
              />
            </MidLeftImageContainer>
          </MidLeftBox>
          <MidRightBox>
            <MidRightHeading>
              Secure Your <br />
              Payments
            </MidRightHeading>
            <MidRightImageContainer>
              <MidRightImage
                src={require("../assets/images/businessman-single.svg").default}
              />
            </MidRightImageContainer>
          </MidRightBox>
        </MidBottomContainer>
      </MidSection>

      {/* middle section completed */}

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
  border-right: 2px solid #d9d9d9;
  width: 20%;
`;

const LeftContainer = styled.div`
  padding: 45px;
`;
const LogoContainer = styled.div`
  display: block;
  width: 140px;
  margin-bottom: 45px;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;

const LeftContainerTop = styled.div``;

const ItemName = styled.h6`
  font-size: 15px;
  font-weight: 600;
`;

const ItemContainer = styled.div``;
const ItemBox = styled.ul``;
const Items = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #867f7f;
  margin-bottom: 35px;

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
  height: 465px;
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
  top: 198px;
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

const MiddleFormContainer = styled.div``;

const Form = styled.form`
  background: #d9d9d9;
  border-radius: 14px;
  padding: 13px 18px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Input = styled.input`
  font-size: 15px;
  font-weight: 600;
  color: #ada9a9;
`;

const SearchImageContainer = styled.span`
  width: 24px;
`;

const SearchImage = styled.img`
  width: 100%;
  display: block;
`;

const StaticContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const StaticHeading = styled.h5`
  font-weight: 600;
  font-size: 24px;
`;

const MonthBox = styled.div`
  display: flex;
  align-items: center;
`;

const MonthCount = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-right: 12px;
`;

const MonthArrowImage = styled.span`
  display: inline-block;
  width: 20px;
`;

const ArrowDownImage = styled.img`
  width: 100%;
  display: block;
`;

const ThreeImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;
`;
const DoubleImageContainer = styled.div`
  width: 48%;
`;
const PinkContainer = styled.div`
  background: #f4e7e5;
  margin-bottom: 24px;
  height: 165px;
  border-radius: 12px;
  padding: 20px;
`;
const PinkImageContainer = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  width: 50px;
`;
const PinkImage = styled.img`
  width: 100%;
  display: block;
`;
const PinkDelivery = styled.h6`
  font-weight: 600;
  font-size: 18px;
`;
const PinkOrder = styled.h4`
  font-weight: 600;
  font-size: 24px;
`;

const BlueContainer = styled.div`
  background: #e6f4ff;
  height: 165px;
  border-radius: 12px;
  padding: 20px;
`;
const BlueImageContainer = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  width: 50px;
`;
const BlueImage = styled.img`
  width: 100%;
  display: block;
`;
const BlueDelivery = styled.h6`
  font-weight: 600;
  font-size: 18px;
`;
const BlueOrder = styled.h4`
  font-weight: 600;
  font-size: 24px;
`;

const BlueGraphImageContainer = styled.div`
  width: 48%;
  display: block;
`;
const BlueGraphImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`;

const MidBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MidLeftBox = styled.div`
  width: 30%;
`;

const MidLeftHeading = styled.h5`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const MidLeftImageContainer = styled.div`
  display: block;
  width: 100px;
`;

const MidLeftImage = styled.img`
  width: 100%;
  display: block;
`;

const MidRightBox = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
`;

const MidRightHeading = styled.h5`
  font-size: 18px;
  font-weight: 600;
`;

const MidRightImageContainer = styled.div`
  display: block;
  width: 130px;
`;

const MidRightImage = styled.img`
  width: 100%;
  display: block;
`;

const RightAside = styled.div`
  background: #f1f1f3;
  width: 35%;
`;
