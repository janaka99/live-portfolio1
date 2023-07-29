import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sanityClient from "../../client.js";
import Project from "./Skill.jsx";
import Skill from "./Skill.jsx";
import Loading from "../Loading.jsx";

const Skills = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skill"]{
          title,
          description,
        "imageUrl": image.asset->url
      }`
      )
      .then((data) => {
        setDetails(data);
      })
      .catch(console.error);
  }, []);
  if (details.length <= 0) {
    return <Loading />;
  }
  return (
    <Container id="skills">
      <Title
        initial={{
          y: "100px",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        I have <span>Skills on</span>
      </Title>
      <ItemContainer>
        {details.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </ItemContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.section`
  width: 85%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Title = styled(motion.div)`
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 50px;
  color: gray;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 100px;
  margin-top: 50px;
  text-align: center;
  span {
    color: #5bd6ff;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 668px) {
    grid-template-columns: 1fr;
  }
`;
