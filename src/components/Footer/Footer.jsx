import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
    >
      Designed & Built By Janaka Chamith
    </Section>
  );
};

export default Footer;

const Section = styled(motion.section)`
  padding: 0 0 50px 0;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 12px;
  color: gray;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
`;
