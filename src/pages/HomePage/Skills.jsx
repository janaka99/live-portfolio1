import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sanityClient from "../../client.js";

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
  return (
    <Container id="skills">
      <Title
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
      >
        I have <span>Skills on</span>
      </Title>
      <ItemContainer>
        {details.map((detail) => (
          <Item
            key={detail.imageUrl}
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <Image src={detail.imageUrl} />
            <ItemTitle>{detail.title}</ItemTitle>
            <Desc>{detail.description}</Desc>
          </Item>
        ))}
      </ItemContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.section`
  padding: 50px 0;
  width: 85%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
// const Title = styled(motion.div)`
//   font-size: 50px;
//   font-weight: 900;
//   text-align: center;
//   margin-bottom: 50px;
//   span {
//     background-image: linear-gradient(to right, #4885eee6, #53ccf5df);
//     background-clip: text;
//     -webkit-background-clip: text;
//     color: transparent;
//   }
// `;

const Title = styled(motion.div)`
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 50px;
  color: gray;
  margin-bottom: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;
  span {
    color: #5bd6ff;
  }
`;
const Item = styled(motion.div)`
  padding: 30px 20px;
  background-color: #1d1d1d;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateX(3px) translateY(-3px);
    transition: all 0.2s ease-in-out;
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

const Image = styled.img`
  width: 40px;
  aspect-ratio: 1;
`;
const ItemTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin: 10px 0;
`;
const Desc = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: gray;
`;
