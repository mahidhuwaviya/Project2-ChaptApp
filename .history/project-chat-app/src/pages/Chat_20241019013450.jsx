import React from "react";
import styled from "styled-components";
function Chat() {
  const handleUserLogout = () => {
    localStorage.removeItem("chatAppUser");
  };
  return (
    <>
      <Container>
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
`;

export default Chat;
