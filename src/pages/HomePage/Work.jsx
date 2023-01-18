import styled from "styled-components";
import React, { useState, useEffect, useLayoutEffect } from "react";

import NatureLandingPage from "../../assets/natureLandingPage.png";
import sanityClient from "../../client.js";

const Work = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          link,
          description,
          title,
        "imageUrl": image.asset->url
      }`
      )
      .then((data) => {
        setDetails(data);
      })
      .catch(console.error);
  }, []);

  return (
    <Section id="projects">
      <Title>
        <span>Sample</span> Projects
      </Title>
      <ItemContainer>
        {details.map((detail) => (
          <Item key={detail.imageUrl}>
            <Image src={detail.imageUrl} />
            <Desc>
              <ItemTitle>
                <a href={detail.link}>{detail.title}</a>
              </ItemTitle>
              <ItemDesc>{detail.description}</ItemDesc>
            </Desc>
          </Item>
        ))}
      </ItemContainer>
    </Section>
  );
};

export default Work;

const Section = styled.section`
  padding: 0 0 50px 0;
  width: 85%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 50px;
  span {
    background-image: linear-gradient(to right, #4885eee6, #53ccf5df);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
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
const Item = styled.div`
  aspect-ratio: 3/2;
  overflow: hidden;
  height: fit-content;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;
const Desc = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11111;
  background-color: #1d1d1d;
  transition: all 0.5s ease-in-out;

  ${Item}:hover & {
    top: 30%;
    transition: all 0.5s ease-in-out;
  }
`;
const ItemTitle = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const ItemDesc = styled.div`
  height: 40%;
  width: 95%;
  margin: 0 auto;
  color: gray;
`;
