import React from "react";
import styled from "styled-components";
import Logout from "./Logout";

export default function ChatContainer({ currentChat }) {
  return (
    <>
      {currentChat && (
        <Container>
          <div className="chatHeader">
            <div className="userDetails">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                  alt="userAvatar"
                />
              </div>
              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>
          <div className="chatMessages"></div>
          <div className="chatInput"></div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  padding-top: 1rem;
  .chatHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .userDetails {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
`;
