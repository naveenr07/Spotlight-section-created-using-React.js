import React from "react";
import styled from "styled-components";
import "../../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Spotlight() {
  return (
    <>
      <Helmet>
        <title>My Title</title>
      </Helmet>
      <SpotlightContainer>
        <LeftAside>
          <LeftContainer>
            <LogoContainer>
              <Logo src={require("../assets/images/logo.svg").default} />
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
                      />
                    </ItemImageContainer>
                  </Items>
                  <Items to={"/product"}>
                    <ItemName>Products</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/slide.svg").default}
                      />
                    </ItemImageContainer>
                  </Items>{" "}
                  <Items to={"/hotselling"}>
                    <ItemName>Hot Selling</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/fire.svg").default}
                      />
                    </ItemImageContainer>
                  </Items>{" "}
                  <Items to={"/order"}>
                    <ItemName>Manage Order</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/oder.svg").default}
                      />
                    </ItemImageContainer>
                  </Items>{" "}
                  <Items to={"/payment"}>
                    <ItemName>Payments</ItemName>
                    <ItemImageContainer>
                      <ItemImage
                        src={require("../assets/images/wallet.svg").default}
                      />
                    </ItemImageContainer>
                  </Items>
                  <Items to={"/settings"}>
                    <ItemName>settings</ItemName>
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
                <Button>Go Pro! </Button>
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
                  src={
                    require("../assets/images/businessman-single.svg").default
                  }
                />
              </MidRightImageContainer>
            </MidRightBox>
          </MidBottomContainer>
        </MidSection>

        {/* middle section completed */}

        <RightAside>
          <CartContainer>
            <CartLeft>
              <OrangeRound>6</OrangeRound>
              <BellImageContainer>
                <BellImage src={require("../assets/images/bell.svg").default} />
              </BellImageContainer>
              <MessageImageContainer>
                <MessageImage
                  src={require("../assets/images/chat.svg").default}
                />
              </MessageImageContainer>
            </CartLeft>
            <CartRight>
              <BoyImageContainer>
                <BoyImage src={require("../assets/images/boy.jpg")} />
              </BoyImageContainer>
              <CartArrowImageContainer>
                <CartArrowImage
                  src={require("../assets/images/down-arrow.svg").default}
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
                  />
                </RightAsideImageBox>
                <RightItemDetailsBox>
                  <RightAsideItemName>Platttan 2 Headphones</RightAsideItemName>
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
                <Comment to={"/Chatbot"}>Chat with us</Comment>
                <CommentArrowContainer>
                  <CommentArrowImage
                    src={require("../assets/images/down-arrow2.svg").default}
                  />
                </CommentArrowContainer>
              </CommentBox>
              <ChatRightImageContainer>
                <ChatRightImage
                  src={require("../assets/images/businessman-2.svg").default}
                />
              </ChatRightImageContainer>
            </ChatContainer>
          </RightAsideBottomContainer>
        </RightAside>
      </SpotlightContainer>{" "}
    </>
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

const Items = styled(Link)`
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
  padding: 11px 40px;
  border-radius: 10px;
  background: #323989;
  display: inline-block;
  font-weight: 600;
  margin: 0 auto;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
    background: #fff;
    color: #000;
    border: 2px solid #000;
  }
`;

const ArrowImageContainer = styled.span`
  display: inline-block;
  width: 10px;
  position: absolute;
  top: 200px;
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

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
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

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
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
  margin-bottom: 22px;
`;

const MidLeftImageContainer = styled.div`
  display: block;
  width: 100px;
`;

const MidLeftImage = styled.img`
  width: 100%;
  display: block;
  margin-left: 40px;
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

// middle section completed

const RightAside = styled.div`
  background: #f1f1f3;
  width: 35%;
  padding: 38px 30px 11px 58px;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
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
`;
const CartArrowImage = styled.img`
  width: 100%;
  display: block;

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
`;
const ProductLeftHeading = styled.h4`
  font-size: 22px;
  font-weight: 600;
`;
const ProductRightHeading = styled.h4`
  font-size: 13px;
  font-weight: 600;
`;

const RightAsideItemContainer = styled.ul`
  margin-bottom: 28px;
`;

const RIghtItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const ItemLeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
const RightAsideImageBox = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 18px;
`;
const RightAsideImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`;
const RightItemDetailsBox = styled.div``;

const RightAsideItemName = styled.h4`
  font-size: 16px;
  font-weight: 600;
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
`;

const RightAsideBottomContainer = styled.div`
  padding: 10px;
`;
const HelpComment = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;
const ChatContainer = styled.div`
  display: flex;
  align-content: center;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
    color: #000;
  }
`;
const Comment = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: #3d438e;
`;
const CommentArrowContainer = styled.div`
  display: inline-block;
  transform: rotate(270deg);
  width: 20px;
  margin-right: 100px;
`;
const CommentArrowImage = styled.img`
  width: 100%;
  display: block;
`;
const ChatRightImageContainer = styled.span`
  display: inline-block;
  width: 140px;
`;
const ChatRightImage = styled.img`
  width: 100%;
  display: block;
`;
