import React, { useEffect, useRef, useState } from "react";
import { AddMessageRoutes, GetAllMessageRoutes } from "../utils/APIRoutes";
import styled from "styled-components";
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function ChatContainer({ currentChat, socket }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    const getAllMessages = async () => {
      const data = await JSON.parse(localStorage.getItem("chatAppUser"));
      if (currentChat) {
        try {
          const response = await axios.post(GetAllMessageRoutes, {
            from: data._id,
            to: currentChat._id,
          });
          setMessages(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getAllMessages();
  }, [currentChat]);

  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
        await JSON.parse(localStorage.getItem("chatAppUser"));
      }
    };
    getCurrentChat();
  }, [currentChat]);

  const handleSendMessage = async (message) => {
    const data = await JSON.parse(localStorage.getItem("chatAppUser"));
    await axios.post(AddMessageRoutes, {
      from: data._id,
      to: currentChat._id,
      message: message,
    });
    socket.current.emit("sendMessage", {
      to: currentChat._id,
      from: data._id,
      message: message,
    });
    setMessages((prev) => [...prev, { fromSelf: true, message: message }]);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("messageRecieve", (message) => {
        setArrivalMessage({ fromSelf: false, message: message });
      });
    }
  }, [socket]);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

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
          <div className="chatMessages">
            {messages.map((message) => {
              return (
                <div
                  ref={scrollRef}
                  key={uuidv4()}
                  className={`message ${
                    message.fromSelf ? "sended" : "received"
                  }`}
                >
                  <div className="content">
                    <p>{message.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMessage={handleSendMessage} />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  padding-top: 1rem;
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 180px) {
    grid-template-rows: 15% 70% 15%;
  }
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
  .chatMessages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
