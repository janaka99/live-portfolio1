import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const OtherProject = () => {
  return (
    <Container
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      href="#"
    >
      <Title>
        <ArrowRight />
        <Text>Sample</Text>
      </Title>
      <Links>
        <Deployed href="#" target="_black" rel="noopener noreferrer">
          <FaExternalLinkAlt size={25} />
        </Deployed>
        <Deployed href="#" target="_black" rel="noopener noreferrer">
          <AiFillGithub size={35} />
        </Deployed>
      </Links>
    </Container>
  );
};

export default OtherProject;

const slideIn = keyframes`
    0%{
        margin-left: -25px;
    }
    40%{
        margin-left: 10px;
    }
    100%{
        margin-left: -2px;
    }
    /* 100%{
        margin-left: 2px;
    } */
`;

const Title = styled.div`
  display: flex;
  margin-left: -25px;
  transition: all 0.2s ease-in-out;
  align-items: center;
`;
const Container = styled(motion.a)`
  display: flex;
  width: 100%;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid #fff;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  &:hover {
    ${Title} {
      margin-left: 12px;
      transition: all 0.2s ease;
      transition-delay: 0.7s;
      animation-name: ${slideIn};
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
    }
  }
`;
const ArrowRight = styled(FaArrowRight)`
  margin-right: 15px;
  font-size: 25px;
  padding-top: 5px;
`;
const Text = styled.div`
  font-size: 28px;
  text-transform: lowercase;
  font-family: cursive;
`;
const Category = styled.div`
  font-size: 22px;
`;

const Links = styled.div`
  display: flex;
  gap: 25px;
  width: fit-content;
`;

const Deployed = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.2s ease-in-out;

  &:nth-child(1) {
    border: none;
    background-color: none;
    color: #00b5f1;
    &:hover {
      color: #5bd6ff;
      transition: all 0.2s ease-in-out;
    }
  }
  &:nth-child(2) {
    color: #a1a0a0;
    &:hover {
      color: #e2e2e2;
      transition: all 0.2s ease-in-out;
    }
  }
`;
