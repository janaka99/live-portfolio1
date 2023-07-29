import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import sanityClient from "../../client.js";
import { useEffect } from "react";
import styled from "styled-components";
import Loading from "../Loading.jsx";
import OtherProject from "./OtherProject.jsx";

const OtherProjects = () => {
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
    <Section id="sampleProjects">
      <Title
        initial={{
          y: 100,
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
        Other<span> Projects </span>
      </Title>
      <ItemContainer>
        <Ul>
          <OtherProject />
          <OtherProject />
        </Ul>
      </ItemContainer>
    </Section>
  );
};

export default OtherProjects;

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
  max-width: 768px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
`;
const Ul = styled.div``;
