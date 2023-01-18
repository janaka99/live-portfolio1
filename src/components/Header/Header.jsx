import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Header = () => {
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
        <List>
          <Item to="#contact">Contact</Item>
          <Item to="#projects">Projects</Item>
          <Item to="#skills">Skills</Item>
          <Item to="#home">Home</Item>
        </List>
      </Container>
    </Nav>
  );
};

export default Header;

const Nav = styled(motion.header)`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  position: sticky;
  background-color: #191919;
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
    width: 95%;
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
