import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setcurrentUserName] = useState(undefined);
  const [currentUserImg, setcurrentUserImg] = useState(undefined);
  const [currentSelected, setcurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setcurrentUserImg(currentUser.avatarImage);
      setcurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setcurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImg && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h3> Snappy</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <>
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>{" "}
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>{" "}
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>{" "}
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>{" "}
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>{" "}
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "Selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avator"
                      />
                    </div>
                    <div className="userName">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="currentUser">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImg}`}
                alt="avator"
              />
            </div>
            <div className="userName">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      display: flex;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .userName {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9186f3;
    }
  }
  .currentUser {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .userName {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 180px) {
      /* grid-template-columns: 35% 65%; */
      gap: 0.5rem;
      .userName {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Contacts;