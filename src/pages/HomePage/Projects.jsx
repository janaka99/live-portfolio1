import styled from "styled-components";
import React, { useState, useEffect, useLayoutEffect } from "react";

import NatureLandingPage from "../../assets/natureLandingPage.png";
import sanityClient from "../../client.js";
import { motion } from "framer-motion";
import Project from "./Project";
import Loading from "../Loading";

const Projects = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          link,
          description,
          title,
          technologies,
          github_link,
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
    <Section id="projects">
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
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
      >
        Sample<span> Projects </span>
      </Title>
      <ItemContainer>
        {details.map((project, index) => (
          <Project
            key={index}
            project={project}
            reverse={index === 0 ? "true" : index % 2 !== 0 ? "false" : "true"}
          />
        ))}
      </ItemContainer>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  width: 85%;
  max-width: 1366px;
  margin: 100px auto;
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
  text-align: center;
  span {
    color: #5bd6ff;
  }
`;
const ItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
`;
const Item = styled(motion.div)`
  aspect-ratio: 3/2;
  overflow: hidden;
  height: fit-content;
  position: relative;
`;
