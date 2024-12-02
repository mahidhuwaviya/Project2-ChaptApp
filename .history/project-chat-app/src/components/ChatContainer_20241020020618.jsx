import React, { useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import axios from "axios";
import { AddMessageRoutes ,GetAllMessageRoutes} from "../utils/APIRoutes";

export default function ChatContainer({ currentChat, currentUser }) {
  const handleSendMessage = async (message) => {
    await axios.post(AddMessageRoutes, {
      from: currentUser._id,
      to: currentChat._id,
      message: message,
    });
  };

  useEffect(()=>{
    const response=await axios.post()
  },[currentChat])

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
          <ChatInput handleSendMessage={handleSendMessage} />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  /* display: grid;
  grid-template-rows: 7% 78% 15%; */
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