import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as Links } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SBIcon onClick={toggle}>
          <CloseIcon />
        </SBIcon>
        <SBWrapprer>
          <SBMenu>
            <SBLink to={"/summary"}> Summary</SBLink>
            <SBLink to={"/Product"}> Products</SBLink>
            <SBLink to={"/Hotselling"}> Hot sellings</SBLink>
            <SBLink to={"/order"}> Order</SBLink>
            <SBLink to={"/payment"}> Payments</SBLink>
            <SBLink to={"/settings"}> Settings</SBLink>
          </SBMenu>
          <SbBtnWrapper>
            <SidebarRoute to={"/"}>Sign In</SidebarRoute>
          </SbBtnWrapper>
        </SBWrapprer>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0m")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  /* @media all and (max-width: 980px) {
    height: 70%;
    top: 2px;
  } */
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const SBIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SBWrapprer = styled.div`
  color: #fff;
`;

const SBMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media all and (min-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SBLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SbBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const SidebarRoute = styled(Links)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #010606;
    transition: 0.2s ease-in-out;
  }
`;
