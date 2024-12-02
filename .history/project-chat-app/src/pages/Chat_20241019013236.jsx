import React from "react";
import styled from "styled-components";
function Chat() {
  const handleUserLogout = () => {
    localStorage.removeItem("chatAppUser");
  };
  return (
    <>
      <Container></Container>
      <button onClick={handleUserLogout}> Logout</button>
    </>
  );
}

const Container = styled.div``;

export default Chat;
