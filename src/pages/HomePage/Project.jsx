import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
const Project = ({ project, reverse }) => {
  const [technologies, settechnologies] = useState(project.technologies);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <Item
      initial={{
        x: reverse ? "100%" : "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      key={project.imageUrl}
      reverse={reverse}
    >
      <Image src={project.imageUrl} />
      <Desc>
        <ItemTitle>
          <a href={project.link}>{project.title}</a>
        </ItemTitle>
        <ItemDesc>{project.description}</ItemDesc>
        <Technolgies>
          {project.technologies?.map((tech, index) => (
            <Technology key={index} color={getRandomColor}>
              {tech}
            </Technology>
          ))}
        </Technolgies>
        <Links>
          <Deployed href={project.link}>
            <FaExternalLinkAlt size={25} />
          </Deployed>
          <Deployed href={project.github_link}>
            <AiFillGithub size={25} />
          </Deployed>
        </Links>
      </Desc>
    </Item>
  );
};

export default Project;

const Item = styled(motion.div)`
  height: 300px;
  overflow: hidden;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "")};
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Image = styled.img`
  min-width: 300px;
  height: 350px;
  width: 100%;
  max-width: 450px;
`;
const Desc = styled.div`
  width: 50%;
  /* background-color: #1d1d1d; */
  transition: all 0.5s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const ItemTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 35px;
  font-weight: 500;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const ItemDesc = styled.div`
  color: gray;
`;

const Technolgies = styled.div`
  display: flex;
  gap: 15px;
`;
const Deployed = styled.a`
  color: #5bd6ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  /* border: 1px solid #551a8b; */
  border: 1px solid #5bd6ff;
  border-radius: 25px;
  padding: 8px 28px;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid #5bd6ff;
    color: #000;
    background-color: #5bd6ff;
    transition: all 0.2s ease-in-out;
  }
`;
const Links = styled.div`
  display: flex;
  gap: 15px;
`;
const Sicon = styled(SocialIcon)`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

const Technology = styled.div`
  color: ${(props) => props.color};
`;
