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

const Container = styled.div``;

export default Chat;
