import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Index from "../../pages/Index";

function Product() {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Index />
      <ProductContainer>
        <Name>PRODUCTS</Name>
        <ImageBox>
          <Image src={require("../assets/images/products.jpg")} />
        </ImageBox>
      </ProductContainer>
    </>
  );
}

export default Product;

const ProductContainer = styled.div`
  padding: 30px;
  background: #000;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  font-size: 50px;
`;

const ImageBox = styled.div`
  width: 100%;
  display: block;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
