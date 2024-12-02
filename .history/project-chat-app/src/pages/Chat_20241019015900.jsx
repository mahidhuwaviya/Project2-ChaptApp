import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const handleLogin = async () => {
      if (!localStorage.getItem("chatAppUser")) {
        navigate("/");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chatAppUser")));
      }
    };
    handleLogin();
  });

  useEffect(() => {}, []);

  const handleUserLogout = () => {
    localStorage.removeItem("chatAppUser");
  };

  return (
    <>
      <Container>
        <div className="container"></div>
        <button onClick={handleUserLogout}> Logout</button>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 180px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;
