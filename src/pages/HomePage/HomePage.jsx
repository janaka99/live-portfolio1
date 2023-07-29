import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Landing from "./Landing";
import Skills from "./Skills";
import Footer from "../../components/Footer/Footer";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects";
import { useState } from "react";

const HomePage = () => {
  const [loading, setloading] = useState(true);
  return (
    <Container id="home">
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <OtherProjects /> */}
      <Contact />
      <Footer />
    </Container>
  );
};

export default HomePage;

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #191919;
  color: #ffffffdf;
  min-height: 100vh;
`;
