import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

function NavBar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to={"/"}>
            <NavImage src={require("../../assets/images/logo.svg").default} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NaveItem>
              <NavLinks to={"/summary"}> Summary</NavLinks>
            </NaveItem>
            <NaveItem>
              <NavLinks to={"/product"}> Products</NavLinks>
            </NaveItem>
            <NaveItem>
              <NavLinks to={"/hotselling"}> Hot selling</NavLinks>
            </NaveItem>
            <NaveItem>
              <NavLinks to={"/order"}>Manage Order</NavLinks>
            </NaveItem>
            <NaveItem>
              <NavLinks to={"/payment"}> Payments</NavLinks>
            </NaveItem>
            <NaveItem>
              <NavLinks to={"/settings"}> Settings</NavLinks>
            </NaveItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={"/summary"}>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;

const Nav = styled.nav`
  background: #9f9898de;
  height: 80px;
  display: none;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media all and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media all and (max-width: 768px) {
    display: block;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 40px;
`;

const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  display: block;
  @media all and (max-width: 768px) {
    width: 180px;
  }
  @media all and (max-width: 480px) {
    width: 140px;
  }
`;

const NavImage = styled.img`
  display: block;
  width: 100%;
`;

const MobileIcon = styled.div`
  display: none;

  @media all and (max-width: 768px) {
    display: block;
    position: absolute;
    /* top: -6px; */
    bottom: 45px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

const NaveItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &active {
    border-bottom: 1px solid #01bf71;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.div`
  box-sizing: 50px;
  background: #000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 13px;

  &:hover {
    background: #fff;
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`;
