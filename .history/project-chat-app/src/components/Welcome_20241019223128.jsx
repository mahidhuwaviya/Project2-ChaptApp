import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <Logout />
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
