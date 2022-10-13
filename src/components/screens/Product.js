import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function Product() {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <ProductContainer>
        <Name>PRODUCTS</Name>
        <Image src={require("../assets/images/products.jpg")} />
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

const Image = styled.img`
  width: 100%;
  display: block;
`;
