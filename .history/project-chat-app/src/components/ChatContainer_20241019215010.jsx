import React from "react";
import styled from "styled-components";

export default function ChatContainer() {
  return (
    <container>
      <div className="chatHeader">
        <div className="userDetailes">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <div className="usernaem">
            <h3></h3>
          </div>
        </div>
      </div>
    </container>
  );
}

const container = styled.div``;
