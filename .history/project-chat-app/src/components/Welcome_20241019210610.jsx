import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome,<span>{currentUser.username}</span>
      </h1>
    </Container>
  );
}

const Container = styled.div``;
