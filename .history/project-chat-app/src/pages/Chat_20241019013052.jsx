import React from "react";
import styled from "styled-components";
function Chat() {
  const handleUserLogout = () => {
    localStorage.removeItem("chatAppUser");
  };
  return (
    <div>
      <button onClick={handleUserLogout}> Logout</button>
    </div>
  );
}

export default Chat;
