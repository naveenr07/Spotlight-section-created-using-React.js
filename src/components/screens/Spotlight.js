import React from "react";
import styled from "styled-components";
import "../../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Bot from "../screens/ChatBot/Bot";
import Header from "../screens/Header/Header";

function Spotlight() {
  return (
    <>
      <Helmet>
        <title>My Title</title>
      </Helmet>
      {/* Header section  */}
      <Header />
      {/* Header completed */}
      <SpotlightContainer>
        {/* LeftAside section */}
        <LeftAside>
          <LeftContainer>
            <LogoContainer>
              <Logo
                src={require("../assets/images/logo.svg").default}
                alt="logo"
              />
            </LogoContainer>
            <LeftContainerTop>
              <ItemContainer>
                <ItemBox>
                  {" "}
                  <Items to={"/summary"}>
                    <ItemName>Summary</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/book.svg").default}
                        alt="summaty"
                      />
                    </ItemImageContainer>
                  </Items>
                  <Items to={"/product"}>
                    <ItemName>Products</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/slide.svg").default}
                        alt="product"
                      />
                    </ItemImageContainer>
                  </Items>{" "}
                  <Items to={"/hotselling"}>
                    <ItemName>Hot Selling</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/fire.svg").default}
                        alt="hetsellings"
                      />
                    </ItemImageContainer>
                  </Items>{" "}
                  <Items to={"/order"}>
                    <ItemName>Manage Order</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/oder.svg").default}
                        alt="order"
                      />
                    </ItemImageContainer>
                  </Items>{" "}
                  <Items to={"/payment"}>
                    <ItemName>Payments</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/wallet.svg").default}
                        alt="payment"
                      />
                    </ItemImageContainer>
                  </Items>
                  <Items to={"/settings"}>
                    <ItemName>settings</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/settings.svg").default}
                        alt="settings"
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
                    alt="graph-image"
                  />
                </GraphImageBox>
                <H3Container>
                  Power up Your <br /> Business
                </H3Container>
                <Button>Go Pro! </Button>
                <ArrowImageContainer>
                  <ArrowImage
                    src={require("../assets/images/right-arrow.svg").default}
                    alt="arrow-image"
                  />
                </ArrowImageContainer>
              </GrayContainer>
            </LeftContainerBottom>
          </LeftContainer>
        </LeftAside>
        {/* LeftAside section completed */}

        {/* MainMiddleContainer section  */}
        <MainMiddleContainer>
          <MidSection>
            <MiddleFormContainer>
              <Form>
                <Input type="text" placeholder="Search here" />
                <SearchImageContainer>
                  <SearchImage
                    src={require("../assets/images/search.svg").default}
                    alt="search-image"
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
                    alt="arrow-image"
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
                      alt="vehicle"
                    />
                  </PinkImageContainer>
                  <PinkDelivery>Awaiting Delivery</PinkDelivery>
                  <PinkOrder>150k Orders</PinkOrder>
                </PinkContainer>
                <BlueContainer>
                  <BlueImageContainer>
                    <BlueImage
                      src={require("../assets/images/vehicle.svg").default}
                      alt="logo"
                    />
                  </BlueImageContainer>
                  <BlueDelivery>Awaiting Delivery</BlueDelivery>
                  <BlueOrder>150k Orders</BlueOrder>
                </BlueContainer>
              </DoubleImageContainer>
              <BlueGraphImageContainer>
                <BlueGraphImage
                  src={require("../assets/images/graph-blue.svg").default}
                  alt="blue-graph-image"
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
                    alt="admin-image"
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
                    src={
                      require("../assets/images/businessman-single.svg").default
                    }
                    alt="businessman-image"
                  />
                </MidRightImageContainer>
              </MidRightBox>
            </MidBottomContainer>
          </MidSection>

          {/* middle section completed */}

          {/* RightAside  section  */}
          <RightAside>
            <CartContainer>
              <CartLeft>
                <OrangeRound>6</OrangeRound>
                <BellImageContainer>
                  <BellImage
                    src={require("../assets/images/bell.svg").default}
                    alt="bell-image"
                  />
                </BellImageContainer>
                <MessageImageContainer>
                  <MessageImage
                    src={require("../assets/images/chat.svg").default}
                    alt="message-image"
                  />
                </MessageImageContainer>
              </CartLeft>
              <CartRight>
                <BoyImageContainer>
                  <BoyImage
                    src={require("../assets/images/boy.jpg")}
                    alt="boy-image"
                  />
                </BoyImageContainer>
                <CartArrowImageContainer>
                  <CartArrowImage
                    src={require("../assets/images/down-arrow.svg").default}
                    alt="arrow-image"
                  />
                </CartArrowImageContainer>
              </CartRight>
            </CartContainer>
            <ProductContainer>
              <ProductLeftHeading>Hot SellingProducts</ProductLeftHeading>
              <ProductRightHeading>See all</ProductRightHeading>
            </ProductContainer>
            <RightAsideItemContainer>
              <RIghtItemContainer>
                <ItemLeftDiv>
                  <RightAsideImageBox>
                    <RightAsideImage
                      src={require("../assets/images/wood-books.jpg")}
                      alt="game-image"
                    />
                  </RightAsideImageBox>
                  <RightItemDetailsBox>
                    <RightAsideItemName>
                      Dominoes Coffee Table Game
                    </RightAsideItemName>
                    <RightAsideItemSale> 50k Sales</RightAsideItemSale>
                  </RightItemDetailsBox>
                </ItemLeftDiv>
                <ItemRightDiv>
                  <RightItemPrice>$30</RightItemPrice>
                </ItemRightDiv>
              </RIghtItemContainer>
              <RIghtItemContainer>
                <ItemLeftDiv>
                  <RightAsideImageBox>
                    <RightAsideImage
                      src={require("../assets/images/black-box.jpg")}
                      alt="black-box-image"
                    />
                  </RightAsideImageBox>
                  <RightItemDetailsBox>
                    <RightAsideItemName>
                      Photive Wireless Speakers
                    </RightAsideItemName>
                    <RightAsideItemSale> 44k Sales</RightAsideItemSale>
                  </RightItemDetailsBox>
                </ItemLeftDiv>
                <ItemRightDiv>
                  <RightItemPrice>$19</RightItemPrice>
                </ItemRightDiv>
              </RIghtItemContainer>
              <RIghtItemContainer>
                <ItemLeftDiv>
                  <RightAsideImageBox>
                    <RightAsideImage
                      src={require("../assets/images/speaker.jpg")}
                      alt="speaker-image"
                    />
                  </RightAsideImageBox>
                  <RightItemDetailsBox>
                    <RightAsideItemName>
                      Urbanears Lotson Speaker
                    </RightAsideItemName>
                    <RightAsideItemSale>42k Sales</RightAsideItemSale>
                  </RightItemDetailsBox>
                </ItemLeftDiv>
                <ItemRightDiv>
                  <RightItemPrice>$79</RightItemPrice>
                </ItemRightDiv>
              </RIghtItemContainer>
              <RIghtItemContainer>
                <ItemLeftDiv>
                  <RightAsideImageBox>
                    <RightAsideImage
                      src={require("../assets/images/headphones 1.jpg")}
                      alt="headphones-image"
                    />
                  </RightAsideImageBox>
                  <RightItemDetailsBox>
                    <RightAsideItemName>
                      Platttan 2 Headphones
                    </RightAsideItemName>
                    <RightAsideItemSale> 38k Sales</RightAsideItemSale>
                  </RightItemDetailsBox>
                </ItemLeftDiv>
                <ItemRightDiv>
                  <RightItemPrice>$35</RightItemPrice>
                </ItemRightDiv>
              </RIghtItemContainer>
              <RIghtItemContainer>
                <ItemLeftDiv>
                  <RIghtItemContainer>
                    <ItemLeftDiv>
                      <RightAsideImageBox>
                        <RightAsideImage
                          src={require("../assets/images/radio.jpg")}
                          alt="radio-image"
                        />
                      </RightAsideImageBox>
                      <RightItemDetailsBox>
                        <RightAsideItemName>
                          Solar Hand Crank Radio
                        </RightAsideItemName>
                        <RightAsideItemSale> 30k Sales</RightAsideItemSale>
                      </RightItemDetailsBox>
                    </ItemLeftDiv>
                  </RIghtItemContainer>
                </ItemLeftDiv>
                <ItemRightDiv>
                  <RightItemPrice>$30</RightItemPrice>
                </ItemRightDiv>
              </RIghtItemContainer>
            </RightAsideItemContainer>
            <RightAsideBottomContainer>
              <HelpComment>
                What can we help <br /> you with?
              </HelpComment>
              <ChatContainer>
                <CommentBox>
                  <Bot />
                  <CommentArrowContainer>
                    <CommentArrowImage
                      src={require("../assets/images/down-arrow2.svg").default}
                      alt="down-arrow"
                    />
                  </CommentArrowContainer>
                </CommentBox>
                <ChatRightImageContainer>
                  <ChatRightImage
                    src={require("../assets/images/businessman-2.svg").default}
                    alt="businessman"
                  />
                </ChatRightImageContainer>
              </ChatContainer>
            </RightAsideBottomContainer>
          </RightAside>

          {/* RightAside section completed */}
        </MainMiddleContainer>
      </SpotlightContainer>{" "}
    </>
  );
}
export default Spotlight;

const SpotlightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftAside = styled.div`
  border-right: 2px solid #d9d9d9;
  width: 20%;

  @media all and (max-width: 768px) {
    width: 100%;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;

const LeftContainer = styled.div`
  padding: 40px;

  @media all and (max-width: 1280px) {
    padding: 30px 18px;
  }
  @media all and (max-width: 1080px) {
    padding: 46px 16px;
  }
  @media all and (max-width: 768px) {
    padding: 20px;
  }
`;
const LogoContainer = styled.div`
  display: block;
  width: 140px;
  margin-bottom: 60px;

  @media all and (max-width: 1080px) {
    width: 120px;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;

const LeftContainerTop = styled.div``;

const ItemName = styled.h6`
  font-size: 16px;
  font-weight: 600;

  @media all and (max-width: 980px) {
    font-size: 14px;
  }
`;

const ItemContainer = styled.div``;
const ItemBox = styled.ul`
  padding-left: 0.2rem;
`;

const Items = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #867f7f;
  margin-bottom: 35px;
  text-decoration: none;

  @media all and (max-width: 1280px) {
    margin-bottom: 30px;
  }

  @media all and (max-width: 980px) {
    flex-direction: column-reverse;
    margin-bottom: 8px;
  }

  &:first-child {
    color: #323989;
    font-weight: bold;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media all and (max-width: 768px) {
    flex-direction: column-reverse;
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
  height: 430px;
  display: flex;
  align-items: end;
  justify-content: center;

  @media all and (max-width: 1440px) {
    height: 382px;
  }
`;

const GrayContainer = styled.div`
  background: #f1f1f3;
  padding: 30px;
  border-radius: 14px;
  position: relative;

  @media all and (max-width: 1280px) {
    padding: 18px;
  }
`;

const GraphImageBox = styled.div`
  display: block;
  width: 125px;
  margin-bottom: 15px;

  @media all and (max-width: 980px) {
    width: 86px;
  }
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
  padding: 11px 40px;
  border-radius: 10px;
  background: #323989;
  display: block;
  font-weight: 700;
  margin: 0 auto;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
    background: #fff;
    color: #000;
    border: 2px solid #000;
  }

  @media all and (max-width: 1280px) {
    font-size: 12px;
  }
  @media all and (max-width: 1440px) {
    padding: 11px 32px;
  }
  @media all and (max-width: 980px) {
    padding: 7px 20px;
  }
  padding: 7px 20px;
`;

const ArrowImageContainer = styled.span`
  display: inline-block;
  width: 13px;
  position: absolute;
  top: 190px;
  right: 49px;

  @media all and (max-width: 1440px) {
    width: 14px;
    right: 48px;
    top: 193px;
  }
  @media all and (max-width: 1280px) {
    width: 13px;
    right: 46px;
    top: 178px;
  }
  @media all and (max-width: 1080px) {
    right: 46px;
  }
  @media all and (max-width: 1080px) {
    right: 46px;
    width: 11px;
    top: 179px;
  }
`;
const ArrowImage = styled.img`
  width: 100%;
  display: inline-block;
  transform: rotate(270deg);
`;

// LeftAside section completed//

// main middle s section //
const MainMiddleContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  @media all and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MidSection = styled.div`
  width: 56%;
  padding: 32px 40px;

  @media all and (max-width: 768px) {
    width: 100%;
    padding: 32px 40px 1px 40px;
  }
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
  margin-bottom: 50px;

  @media all and (max-width: 360px) {
    padding: 13px 12px;
    height: 36px;
    margin-bottom: 22px;
  }
`;

const Input = styled.input`
  font-size: 15px;
  font-weight: 600;
  color: #ada9a9;

  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const SearchImageContainer = styled.span`
  width: 24px;
  @media all and (max-width: 360px) {
    width: 15px;
  }
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
  @media all and (max-width: 360px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const StaticHeading = styled.h5`
  font-weight: 600;
  font-size: 26px;
`;

const MonthBox = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 360px) {
    display: none;
  }
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

  @media all and (max-width: 1440px) {
    margin-bottom: 90px;
  }
  @media all and (max-width: 980px) {
    display: block;
  }
  @media all and (max-width: 980px) {
    margin-bottom: 0px;
  }
`;
const DoubleImageContainer = styled.div`
  width: 48%;

  @media all and (max-width: 1440px) {
    width: 45%;
  }
  @media all and (max-width: 980px) {
    display: contents;
  }
`;
const PinkContainer = styled.div`
  background: #f4e7e5;
  margin-bottom: 24px;
  height: 165px;
  border-radius: 12px;
  padding: 20px;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }

  @media all and (max-width: 1440px) {
    height: 160px;
    padding: 11px 20px;
  }

  @media all and (max-width: 1280px) {
    height: 110px;
    padding: 7px 20px;
  }
  @media all and (max-width: 1380px) {
    height: 140px;
    padding: 7px 20px;
  }
  @media all and (max-width: 1080px) {
    height: 100px;
    margin-bottom: 18px;
  }
  @media all and (max-width: 980px) {
    text-align: center;
    height: 125px;
  }
  @media all and (max-width: 768px) {
    height: 175px;
  }
  @media all and (max-width: 480px) {
    height: 175px;
  }
`;
const PinkImageContainer = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  width: 50px;

  @media all and (max-width: 1440px) {
    margin-bottom: 6px;
    width: 45px;
  }
  @media all and (max-width: 1280px) {
    width: 35px;
  }
  @media all and (max-width: 1080px) {
    width: 30px;
  }
  @media all and (max-width: 768px) {
    width: 65px;
  }
`;
const PinkImage = styled.img`
  width: 100%;
  display: block;
`;
const PinkDelivery = styled.h6`
  font-weight: 600;
  font-size: 18px;

  @media all and (max-width: 1440px) {
    font-size: 15px;
    margin-bottom: 6px;
  }
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
  @media all and (max-width: 768px) {
    font-size: 18px;
  }
`;
const PinkOrder = styled.h4`
  font-weight: 600;
  font-size: 24px;

  @media all and (max-width: 1440px) {
    font-size: 20px;
  }
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    font-size: 26px;
  }
`;

const BlueContainer = styled.div`
  background: #e6f4ff;
  height: 165px;
  border-radius: 12px;
  padding: 20px;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }

  @media all and (max-width: 1440px) {
    height: 160px;
    padding: 11px 20px;
  }
  @media all and (max-width: 1380px) {
    height: 140px;
    padding: 7px 20px;
  }

  @media all and (max-width: 1280px) {
    height: 110px;
    padding: 7px 20px;
  }
  @media all and (max-width: 1080px) {
    height: 100px;
  }
  @media all and (max-width: 980px) {
    margin-bottom: 16px;
    text-align: center;
  }
  @media all and (max-width: 980px) {
    height: 125px;
  }
  @media all and (max-width: 768px) {
    height: 175px;
  }
`;
const BlueImageContainer = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  width: 50px;

  @media all and (max-width: 1440px) {
    margin-bottom: 6px;
    width: 45px;
  }
  @media all and (max-width: 1280px) {
    width: 35px;
  }
  @media all and (max-width: 1080px) {
    width: 30px;
  }
  @media all and (max-width: 768px) {
    width: 65px;
  }
`;
const BlueImage = styled.img`
  width: 100%;
  display: block;
`;
const BlueDelivery = styled.h6`
  font-weight: 600;
  font-size: 18px;

  @media all and (max-width: 1440px) {
    font-size: 15px;
    margin-bottom: 6px;
  }
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
  @media all and (max-width: 768px) {
    font-size: 18px;
  }
`;
const BlueOrder = styled.h4`
  font-weight: 600;
  font-size: 24px;
  @media all and (max-width: 1440px) {
    font-size: 20px;
  }
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    font-size: 26px;
  }
`;

const BlueGraphImageContainer = styled.div`
  width: 48%;
  display: block;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }

  @media all and (max-width: 1440px) {
    width: 50%;
  }
  @media all and (max-width: 980px) {
    margin: 0 auto;
  }
  @media all and (max-width: 768px) {
    width: 62%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const BlueGraphImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
  &:hover {
    transform: scale(1);
    transition-duration: 0.5s;
  }
`;

const MidBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media all and (max-width: 768px) {
    padding: 30px 40px 0px 40px;
    margin: 0 auto;
    width: 77%;
  }
  @media all and (max-width: 480px) {
    padding: 5px;
  }
`;

const MidLeftBox = styled.div`
  width: 30%;

  @media all and (max-width: 1440px) {
    width: 36%;
  }
  @media all and (max-width: 1280px) {
    width: 46%;
  }
  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

const MidLeftHeading = styled.h5`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 22px;

  @media all and (max-width: 1280px) {
    font-size: 18px;
  }
  @media all and (max-width: 1080px) {
    font-size: 16px;
  }
  @media all and (max-width: 980px) {
    font-size: 12px;
  }
  @media all and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
  @media all and (max-width: 480px) {
    font-size: 13px;
  }
`;

const MidLeftImageContainer = styled.div`
  display: block;
  width: 100px;
  margin-left: 32px;

  @media all and (max-width: 1280px) {
    width: 108px;
  }
  @media all and (max-width: 980px) {
    margin-left: 0px;
    width: 75px;
  }
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

  @media all and (max-width: 1280px) {
    width: 46%;
    height: 290px;
  }
  @media all and (max-width: 980px) {
    justify-content: space-evenly;
  }
  @media all and (max-width: 768px) {
    justify-content: space-around;
    align-items: center;
  }
`;

const MidRightHeading = styled.h5`
  font-size: 18px;
  font-weight: 600;

  @media all and (max-width: 1280px) {
    font-size: 18px;
  }
  @media all and (max-width: 1080px) {
    font-size: 16px;
  }
  @media all and (max-width: 980px) {
    font-size: 12px;
  }
  @media all and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
  @media all and (max-width: 480px) {
    font-size: 13px;
  }
`;

const MidRightImageContainer = styled.div`
  display: block;
  width: 130px;

  @media all and (max-width: 1280px) {
    width: 160px;
  }
  @media all and (max-width: 980px) {
    width: 100px;
  }
`;

const MidRightImage = styled.img`
  width: 100%;
  display: block;
`;

// middle section completed

const RightAside = styled.div`
  background: #f1f1f3;
  width: 44%;
  padding: 38px 30px 11px 58px;

  @media all and (max-width: 1280px) {
    padding: 25px 18px 11px 18px;
  }
  @media all and (max-width: 1440px) {
    padding: 38px 18px 11px 22px;
  }

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;

  @media all and (max-width: 1280px) {
    margin-bottom: 32px;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;

const CartLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const OrangeRound = styled.div`
  position: absolute;
  border-radius: 50%;
  background: #f99177;
  padding: 2px 6px;
  height: 18px;
  font-size: 11px;
  top: -8px;
  right: 43px;

  &:hover {
    transform: scale(1.6);
    transition-duration: 0.5s;
    color: #000;
  }
`;

const BellImageContainer = styled.span`
  display: inline-block;
  width: 20px;
  margin-right: 24px;
`;
const BellImage = styled.img`
  width: 100%;
  display: block;

  &:hover {
    transform: scale(1.8);
    transition-duration: 0.5s;
    color: #000;
  }
`;

const MessageImageContainer = styled.span`
  display: inline-block;
  width: 25px;
`;
const MessageImage = styled.img`
  width: 100%;
  display: block;

  &:hover {
    transform: scale(1.8);
    transition-duration: 0.5s;
    color: #000;
  }
`;

const CartRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoyImageContainer = styled.span`
  display: inline-block;
  width: 38px;
  margin-right: 12px;
`;
const BoyImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
    color: #000;
  }
`;

const CartArrowImageContainer = styled.span`
  display: inline-block;
  width: 20px;
  z-index: 10;
`;
const CartArrowImage = styled.img`
  width: 100%;
  display: block;
  z-index: 10;

  &:hover {
    transform: scale(1.8);
    transition-duration: 0.5s;
    color: #000;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media all and (max-width: 1280px) {
    margin-bottom: 25px;
  }
  @media all and (max-width: 980px) {
    justify-content: center;
  }
  @media all and (max-width: 768px) {
    justify-content: center;
  }
`;
const ProductLeftHeading = styled.h4`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  @media all and (max-width: 768px) {
    font-size: 30px;
  }
  @media all and (max-width: 480px) {
    font-size: 26px;
  }
`;
const ProductRightHeading = styled.h4`
  font-size: 13px;
  font-weight: 600;

  @media all and (max-width: 980px) {
    display: none;
  }
`;

const RightAsideItemContainer = styled.ul`
  margin-bottom: 28px;
  padding-left: 0;

  @media all and (max-width: 1440px) {
    margin-bottom: 60px;
  }
  @media all and (max-width: 480px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const RIghtItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0px;
  }
  @media all and (max-width: 1280px) {
    margin-bottom: 30px;
  }
  @media all and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const ItemLeftDiv = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
const RightAsideImageBox = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 18px;
  @media all and (max-width: 1440px) {
    width: 70px;
    margin-right: 14px;
  }

  @media all and (max-width: 1280px) {
    width: 79px;
    margin-right: 19px;
  }
  @media all and (max-width: 768px) {
    width: 125px;
  }

  @media all and (max-width: 640px) {
    width: 78px;
  }
  @media all and (max-width: 480px) {
    width: 140px;
  }
`;
const RightAsideImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`;
const RightItemDetailsBox = styled.div`
  @media all and (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const RightAsideItemName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  @media all and (max-width: 1280px) {
    font-size: 14px;
    width: 155px;
    font-weight: 600;
  }
  @media all and (max-width: 768px) {
    font-size: 20px;
    width: 300px;
    font-weight: 600;
  }
  @media all and (max-width: 640px) {
    font-size: 15px;
    width: 262px;
  }
`;
const RightAsideItemSale = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
`;
const ItemRightDiv = styled.div``;
const RightItemPrice = styled.span`
  display: inline-block;
  font-weight: 600;

  @media all and (max-width: 980px) {
    display: none;
  }
  @media all and (max-width: 768px) {
    display: block;
    justify-content: space-evenly;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;

const RightAsideBottomContainer = styled.div`
  padding: 10px;
`;
const HelpComment = styled.h3`
  font-size: 20px;
  font-weight: 600;

  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media all and (max-width: 640px) {
    text-align: center;
    font-size: 22px;
  }
  @media all and (max-width: 360px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
const ChatContainer = styled.div`
  display: flex;
  align-content: center;
  @media all and (max-width: 980px) {
    flex-direction: column;
  }
  @media all and (max-width: 768px) {
    align-items: center;
  }
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const CommentArrowContainer = styled.div`
  display: inline-block;
  transform: rotate(270deg);
  width: 17px;
  margin-right: 70px;

  @media all and (max-width: 768px) {
    display: none;
  }
`;
const CommentArrowImage = styled.img`
  width: 100%;
  display: block;
`;
const ChatRightImageContainer = styled.span`
  display: inline-block;
  width: 140px;

  @media all and (max-width: 980px) {
    width: 98px;
  }
  @media all and (max-width: 768px) {
    width: 300px;
  }
  @media all and (max-width: 640px) {
    width: 210px;
  }
  @media all and (max-width: 480px) {
    width: 140px;
  }
  @media all and (max-width: 360px) {
    width: 105px;
  }
`;
const ChatRightImage = styled.img`
  width: 100%;
  display: block;
`;

// rightaside section completed //
