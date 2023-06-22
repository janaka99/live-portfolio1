import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import sanityClient from "../../client.js";
import { Typewriter } from "react-simple-typewriter";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../components/animation/91382-web-development.json";
import { useRef } from "react";

const Landing = () => {
  const animation = useRef < LottieRefCurrentProps > null;

  const initialState = {
    name: "",
    role: "",
    bio: "",
  };
  const [details, setDetails] = useState(initialState);
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await sanityClient.fetch(
        `*[_type == "pageInfo"]{
        name, role, bio
      }`
      );
      setDetails(data[0]);
      setloaded(true);
    }
    fetchData();
  }, []);

  return (
    <Hero>
      {loaded ? (
        <>
          <Container>
            <Text>Hi, MY NAME IS</Text>
            <Title>{details.name}.</Title>
            <Title2>
              I am a{" "}
              <span>
                <Typewriter
                  words={["Front-End Dev", "Back-End Dev"]}
                  cursor
                  cursorStyle="_"
                  loop={false}
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </Title2>
            <About>{details.bio}</About>
            <ItemDW>Lets, Talk?</ItemDW>
          </Container>
          <Background>
            <Lottie
              loop={true}
              lottieRef={animation}
              animationData={animationData}
            />
          </Background>
        </>
      ) : (
        <Container></Container>
      )}
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
  height: calc(100vh - 50px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Background = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    display: none;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 50%;
  text-align: left;
  top: 25%;
  left: 0;
  @media screen and (max-width: 768px) {
    width: 95%;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
    text-align: center;
  }
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
  /* background-image: linear-gradient(to right, #4885eee6, #53ccf5df);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */
  color: #5bd6ff;
  opacity: 0;
  animation: ${LandingAnimation} 0.8s ease-in 0.2s;
  animation-fill-mode: forwards;
`;

const Title2 = styled.div`
  font-size: calc(20px + (40 - 20) * ((100vw - 366px) / (1366 - 366)));
  font-weight: 900;
  /* background-image: linear-gradient(to right, #4885eee6, #53ccf5df); */
  color: #5bd6ff;
  /* background-clip: text;
  -webkit-background-clip: text; */
  /* color: transparent; */
  opacity: 0;
  animation: ${LandingAnimation} 0.8s ease-in 0.2s;
  animation-fill-mode: forwards;
  span {
    color: #4885eead;
  }
`;

const About = styled.div`
  font-weight: 600;
  max-width: 600px;
  /* margin: 0 auto; */
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
  /* margin: 0 auto; */
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

const ItemDW = styled.div`
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
  opacity: 0;
  animation: ${LandingAnimation} 0.8s ease-in 0.6s forwards;
  animation-fill-mode: forwards;
  &:hover {
    transition: all 0.1s ease-in-out;
    text-shadow: 0 0 5px #5bd6ff;
    box-sizing: 0 0 5px #5bd6ff;
  }
  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }
`;
