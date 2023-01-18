import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Section id="contact">
      <Title>
        <span>Get</span> in Touch
      </Title>
      <Container>
        <Desc>How can we help you? I'd love to hear from you:</Desc>
        <ContactContainer>
          <Item>JanakaChamith88@Gmail.com</Item>
          <Tele>+9476 766 1535</Tele>
        </ContactContainer>
      </Container>
    </Section>
  );
};

export default Contact;

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

const Container = styled.div`
  background-color: #292929;
  width: fit-content;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
`;

const Desc = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;
const ContactContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.div`
  background-image: linear-gradient(to right, #4884ee, #06bcfb);
  padding: 10px 40px;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  color: #ffffffed;
  transition: all 1s ease-in-out;
  border-radius: 50px;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(to right, #548af7, #12bdf7df);
    transition: all 01s ease-in-out;
  }
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
