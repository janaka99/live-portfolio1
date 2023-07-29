import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <Container></Container>;
};

export default Loading;
const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #191919;
  color: #ffffffdf;
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
