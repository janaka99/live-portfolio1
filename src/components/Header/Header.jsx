import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <Nav>
      <Container>
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

const Nav = styled.header`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  position: sticky;
  background-color: #191919;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Container = styled.nav`
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
