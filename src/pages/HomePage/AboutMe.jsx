import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const AboutMe = () => {
  const name = useRef();
  const ele = useRef();
  const ele2 = useRef();

  const [details, setDetails] = useState(null);
  const [socials, setsocials] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pageInfo"]{
          backgroundInformation,
          name,
        "imageUrl": profilePic.asset->url
      }`
      )
      .then((data) => {
        setDetails(data[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "social"]{
        link
    }`
      )
      .then((data) => {
        setsocials(data);
      })
      .catch(console.error);
  }, []);
  if (details === null) {
    return <></>;
  }

  return (
    <Section ref={name}>
      <Container>
        <ImageContainer imgUrl={details.imageUrl}>
          <motion.div
            initial={{
              width: "100%",
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              width: 0,
            }}
            viewport={{
              once: true,
            }}
            ref={ele}
          ></motion.div>
        </ImageContainer>
        <AboutSection
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
          <Title>
            I'am <span>{details.name}</span>
          </Title>
          <Description>
            <div ref={ele2} className="desc">
              <div className="sec">{details.backgroundInformation}</div>
            </div>
          </Description>
          <SocialLinks>
            <Sicon
              href={socials[1]?.link}
              target="_black"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin size={35} color={"#6DB1F3"} />
            </Sicon>
            <Sicon
              href={socials[0]?.link}
              target="_black"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter size={35} color={"#1DA1F2"} />
            </Sicon>
            <Sicon
              href={socials[2]?.link}
              target="_black"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub size={35} color={"#e2e2e2"} />
            </Sicon>
          </SocialLinks>
        </AboutSection>
      </Container>
    </Section>
  );
};

export default AboutMe;

const Section = styled.section`
  width: 85%;
  overflow-x: hidden;
  max-width: 1366px;
  margin: 0 auto;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 668px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  max-height: 300px;
  background-image: url(${(props) => (props.imgUrl ? props.imgUrl : "")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 50px;
  position: relative;
  @media screen and (max-width: 768px) {
    min-width: 240px;
    max-width: 300px;
    min-height: 240px;
    max-height: 300px;
  }
  @media screen and (max-width: 668px) {
    justify-content: center;
    text-align: center;
    margin-right: 0;
  }

  div {
    /* width: 100%; */
    height: 100%;
    position: absolute;
    background-color: #292929;
  }
`;
const AboutSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 668px) {
    justify-content: center;
    text-align: center;
    margin-top: 50px;
  }
`;
const Title = styled(motion.div)`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
  span {
    color: #5bd6ff;
  }
`;
const Description = styled.div`
  font-weight: 600;
  letter-spacing: 1px;
`;
const SocialLinks = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;
  @media screen and (max-width: 668px) {
    justify-content: center;
  }
`;

const Sicon = styled.a`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;
