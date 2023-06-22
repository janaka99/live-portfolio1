import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [navActive, setnavActive] = useState(false);

  const handleNavBar = () => {
    setnavActive(!navActive);
  };

  return (
    <Nav>
      <Container
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Logo> Janaka </Logo>

        <List
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          navActive={navActive}
        >
          <Item to="#contact">CONTACT</Item>
          <Item to="#projects">PROJECTS</Item>
          <Item to="#skills">SKILLS</Item>
          <ItemDW to="#home">RESUME</ItemDW>
        </List>
        <BurgerWrapper>
          <HamburgerMenu onClick={handleNavBar} />
        </BurgerWrapper>
      </Container>
    </Nav>
  );
};
export default Header;

const navbarAnimaitonShow = keyframes`
  0%{
    height: 0;
    padding: 0;
  }
  100%{
    height: fit-content;
    padding: 20px 0;
  }
`;
const navbarAnimaitonHide = keyframes`
  0%{

    height: fit-content;
    padding: 20px 0;
  }
  100%{
    height: 0;
    padding: 0;
  }
`;

const Nav = styled(motion.header)`
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  position: sticky;
  background-color: #191919;
  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
`;
const BurgerWrapper = styled.div`
  z-index: 12121;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const Container = styled(motion.nav)`
  max-width: 1366px;
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  background-image: linear-gradient(to right, #4885eee6, #53ccf5df);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
  font-style: italic;
`;

const List = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 95%;
    background-color: #323232;
    position: absolute;
    top: 50px;
    left: 0;
    gap: 0;
    width: 100vw;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    height: ${(props) => (props.navActive ? "200px" : "0px")};
    transition: all 0.5s ease-in-out;
  }
`;

const HamburgerMenu = styled(RxHamburgerMenu)`
  color: #53ccf5df;
  font-size: 30px;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Item = styled(HashLink)`
  margin-left: 30px;
  color: #ffffffc3;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  letter-spacing: 1.2px;
  font-weight: 600;
  &:hover {
    color: #5bd6ff;
    transition: all 0.1s ease-in-out;
    text-shadow: 0 0 5px #5bd6ff;
  }
`;

const ItemDW = styled(HashLink)`
  margin-left: 30px;
  color: #ffffffc3;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  letter-spacing: 1.2px;
  font-weight: 600;
  border: 1px solid #5bd6ff;
  padding: 10px 15px;
  color: #5bd6ff;

  &:hover {
    transition: all 0.1s ease-in-out;
    text-shadow: 0 0 5px #5bd6ff;
    box-sizing: 0 0 5px #5bd6ff;
  }
`;
