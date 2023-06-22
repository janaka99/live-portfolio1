import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import { useState } from "react";
import { createRef } from "react";

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
          <Item to="#home">HOME</Item>
        </List>
        <BurgerWrapper>
          <HamburgerMenu onClick={handleNavBar} />
        </BurgerWrapper>
      </Container>
    </Nav>
  );
};
// 🙎‍♂️I have been coding for more than 3 years. I'am freelance web developer who loves building full-stack application & learning new technologies.I am currently a Software Engineer undergraduate🎓. Also, I am fascinated about forex trading and blogging. Besides all, i have two dogs named 'Tobby' and 'Sheeba' who are best friends of mine 🐶 .
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
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  position: sticky;
  background-color: #191919;
  /* position: relative; */
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
  @media screen and (max-width: 768px) {
    width: 95%;
    background-color: #323232;
    position: absolute;
    top: 50px;
    left: 0;
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
  margin-left: 10px;
  color: #ffffffc3;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  letter-spacing: 1.2px;
  &:hover {
    color: #53ccf5df;
    transition: all 0.1s ease-in-out;
  }
`;
