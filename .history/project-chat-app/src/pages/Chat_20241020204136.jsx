import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUserRoutes, host } from "../utils/APIRoutes.js";
import Contacts from "../components/Contacts.jsx";
import Welcome from "../components/Welcome.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import io from "socket.io-client";

function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLogin = async () => {
      if (!localStorage.getItem("chatAppUser")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chatAppUser")));
        setIsLoaded(true);
      }
    };
    handleLogin();
  }, [navigate]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("addUser", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const handleCurrentUser = async () => {
      try {
        if (currentUser) {
          if (currentUser.isAvatarImageSet) {
            const data = await axios.get(`${allUserRoutes}/${currentUser._id}`);
            setContacts(data.data);
          } else navigate("/setAvatar");
        }
      } catch (error) {
        console.log("error from handleCurrentUser", error);
      }
    };
    handleCurrentUser();
  }, [currentUser, navigate]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <Container>
        <div className="container">
          <Contacts
            contacts={contacts}
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {isLoaded && currentChat === undefined ? (
            <Welcome currentUser={currentUser} />
          ) : (
            <ChatContainer
              currentChat={currentChat}
              currentUser={currentUser}
              socket={socket}
            />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100 vw;
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
