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
                ></div>
              );
            })}
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div``;

export default Contacts;
