import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const AboutMe = () => {
  const name = useRef();
  const ele = useRef();
  const ele2 = useRef();

  var anm = false;

  const scrollHandler = (_) => {
    var h = name.current.getBoundingClientRect().top;
    const scrollPos = window.scrollY + window.innerHeight;
    // console.log("item position", h, "  innerHEight", scrollPos);

    if (h < scrollPos) {
      anm = true;
      ele.current.className = "anim";
      ele2.current.className = "desc anim";
    } else {
      anm = false;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => window.removeEventListener("scroll", scrollHandler, true);
  }, []);
  // const builder = imageUrlBuilder(client);
  const initialState = {
    name: "",
    role: "",
    bio: "",
  };

  const [details, setDetails] = useState(initialState);
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

  return (
    <Section ref={name}>
      <Container>
        <ImageContainer imgUrl={details.imageUrl}>
          {/* <h2>{`Header inside viewport ${useInView}.`}</h2> */}
          <div ref={ele}></div>
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
            {socials.map((social) => (
              <Item key={social.link}>
                <Sicon url={social.link} bgColor="#5bd6ff" />
              </Item>
            ))}
          </SocialLinks>
        </AboutSection>
      </Container>
    </Section>
  );
};

export default AboutMe;

const LandingAnimation = keyframes`
    0%{transform: rotate(3deg);}
    50%{transform: rotate(-3deg);}
    100%{transform: rotate(0deg);}
`;

const slideOut = keyframes`
    0%{width:100%;}
    100%{width:0%;}
`;

const slideIn = keyframes`
  0%{transform: translateX(100%);}
  100%{transform: translateX(0%);}
`;

const Section = styled.section`
  width: 85%;
  overflow-x: hidden;
  max-width: 1366px;
  margin: 0 auto;
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
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #292929;
  }
  .anim {
    animation: ${slideOut} 1.5s ease-in-out forwards;
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
    /* background-image: linear-gradient(to right, #4885eee6, #53ccf5df);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent; */
    color: #5bd6ff;
  }
`;
const Description = styled.div`
  font-weight: 600;
  letter-spacing: 1px;
  /* .sec {
    margin-bottom: 10px;
  }
  .desc {
    transform: translateX(100%);
  }
  .anim {
    animation: ${slideIn} 1.5s ease-in-out forwards;
  } */
`;
const SocialLinks = styled.div`
  display: flex;
  margin: 20px 0;
  @media screen and (max-width: 668px) {
    justify-content: center;
  }
`;
const Item = styled.div`
  margin-right: 20px;
  border-radius: 25px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
const Sicon = styled(SocialIcon)`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;
