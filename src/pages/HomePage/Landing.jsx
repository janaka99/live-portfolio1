import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import sanityClient from "../../client.js";

const Landing = () => {
  const initialState = {
    name: "",
    role: "",
    bio: "",
  };
  const [details, setDetails] = useState(initialState);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pageInfo"]{
        name, role, bio
      }`
      )
      .then((data) => {
        setDetails(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <Hero>
      <Container>
        <Text>Hi, MY NAME IS</Text>
        <Title>{details.name}.</Title>
        <Title>I am a {details.role}.</Title>
        <About>{details.bio}</About>
        <Button>Do You Want to Work With Me?</Button>
      </Container>
    </Hero>
  );
};

export default Landing;
const LandingAnimation = keyframes`
    0%{transform: translateY(50px); opacity:0}
    100%{transform: translateY(0); opacity:1}
`;

const Hero = styled.section`
  width: 85%;
  max-width: 1366px;
  margin: 0 auto;
  margin: 0 auto;
  height: 100vh;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 55%;
  left: 50%;
`;
const Text = styled.div`
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
  letter-spacing: 5px;
  animation: ${LandingAnimation} 0.8s ease-in;
`;
const Title = styled.div`
  font-size: calc(35px + (55 - 35) * ((100vw - 366px) / (1366 - 366)));
  font-weight: 900;
  background-image: linear-gradient(to right, #4885eee6, #53ccf5df);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0;
  animation: ${LandingAnimation} 0.8s ease-in 0.2s;
  animation-fill-mode: forwards;
`;
const About = styled.div`
  font-weight: 600;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  opacity: 0;

  animation: ${LandingAnimation} 0.8s ease-in 0.4s;
  animation-fill-mode: forwards;
`;
const Button = styled.div`
  background-image: linear-gradient(to right, #4884ee, #06bcfb);
  padding: 10px 40px;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  color: #ffffffed;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 50px;
  cursor: pointer;
  /* transition: all 1s ease-in-out; */
  opacity: 0;
  animation: ${LandingAnimation} 0.8s ease-in 0.6s forwards;
  animation-fill-mode: forwards;

  &:hover {
    background-image: linear-gradient(#548af7, #12bdf7df);
    transition: all 01s ease-in-out;
  }
`;
