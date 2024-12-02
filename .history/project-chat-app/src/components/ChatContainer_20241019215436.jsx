import React from "react";
import styled from "styled-components";

export default function ChatContainer({ currentChat }) {
  return (
    <container>
      <div className="chatHeader">
        <div className="userDetailes">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt="userAvatar"
            />
          </div>
          <div className="usernaem">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
      </div>
    </container>
  );
}

const container = styled.div``;
