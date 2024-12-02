import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome,<span>{currentUser.username}!!</span>
      </h1>
      <h3>Please Select A Chat to start Messaging</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
