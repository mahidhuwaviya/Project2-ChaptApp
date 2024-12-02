import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

function Contacts({ contacts, currentUser }) {
  const [currentUserName, setcurrentUserName] = useState(undefined);
  const [currentUserImg, setcurrentUserImg] = useState(undefined);
  const [currentSelected, usecurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setcurrentUserImg(currentUser.avatarImage);
      setcurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {};

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
                <div
                  key={index}
                  className={`contact ${
                    index === currentSelected ? "Selected" : ""
                  }`}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avator"
                    />
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
            <div className="currentUser">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentUserImg}`}
                  alt="avator"
                />
                <h2>{currentUserName}</h2>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 75% 15%;
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
  }
`;

export default Contacts;