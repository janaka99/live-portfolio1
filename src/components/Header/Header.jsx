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
  const navbarShow = useRef(null);
  const hamburgerIcon = useRef();
  const [visible, setvisible] = useState(false);

  const handleNavBar = (e) => {
    if (visible == true) {
      navbarShow.current.classList.remove("show");
      setvisible(false);
    } else {
      navbarShow.current.classList.add("show");
      setvisible(true);
    }
  };

  const handleDocumentClick = () => {
    document.addEventListener("click", (e) => {
      if (
        !navbarShow.current.contains(e.target) &&
        !hamburgerIcon.current.contains(e.target)
      ) {
        setvisible(false);
      }
    });
  };

  useEffect(() => {
    handleDocumentClick();
  }, []);

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
          ref={navbarShow}
          $visible={visible}
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
          <Item to="#contact">Contact</Item>
          <Item to="#projects">Projects</Item>
          <Item to="#skills">Skills</Item>
          <Item to="#home">Home</Item>
        </List>
        <BurgerWrapper ref={hamburgerIcon} onClick={(e) => handleNavBar(e)}>
          <HamburgerMenu />
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
`;
const Container = styled(motion.nav)`
  max-width: 1366px;
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    .show {
      height: fit-content;
      padding: 20px 0;
      transition: all 0.5s ease-in-out;
    }
  }
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
    gap: 20px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 0;
    padding: 0;
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
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #53ccf5df;
    transition: all 0.1s ease-in-out;
  }
`;
