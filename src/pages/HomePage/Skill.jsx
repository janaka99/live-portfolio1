import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Skill = ({ skill }) => {
  return (
    <Item
      key={skill.imageUrl}
      initial={{
        y: 100,
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
      <Image src={skill.imageUrl} />
      <ItemTitle>{skill.title}</ItemTitle>
      <Desc>{skill.description}</Desc>
    </Item>
  );
};

export default Skill;

const Item = styled(motion.div)`
  padding: 30px 20px;
  background-color: #1d1d1d;

  cursor: pointer;
  &:hover {
    translate: 3px -3px;
    transition: all 0.2s ease-in-out;
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
