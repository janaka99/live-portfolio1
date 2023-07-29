import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Section id="contact">
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
        Let's <span>Talk</span>
      </Title>
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
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <Desc>
          I would love to hear from you! Whether you have a question, a project
          idea, or just want to say hello, feel free to reach out.
        </Desc>
        <ContactContainer>
          <Item>JanakaChamith88@Gmail.com</Item>
        </ContactContainer>
      </Container>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  padding: 0 0 50px 0;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
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

const Container = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 15px;
`;

const Desc = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  font-size: 18px;
  letter-spacing: 1.2px;
`;
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin: 20px auto;
`;

const Tele = styled.div`
  background-image: linear-gradient(to right, #4884ee, #06bcfb);
  padding: 10px 40px;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  color: #ffffffed;
  transition: all 1s ease-in-out;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(to right, #548af7, #12bdf7df);
    transition: all 01s ease-in-out;
  }
`;

const Item = styled.div`
  color: #ffffffc3;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  letter-spacing: 1.2px;
  font-weight: 600;
  border: 1px solid #5bd6ff;
  padding: 10px 15px;
  color: #5bd6ff;
  margin-top: 20px;
  width: fit-content;
  &:hover {
    transition: all 0.1s ease-in-out;
    text-shadow: 0 0 5px #5bd6ff;
    box-sizing: 0 0 5px #5bd6ff;
  }
  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }
`;
