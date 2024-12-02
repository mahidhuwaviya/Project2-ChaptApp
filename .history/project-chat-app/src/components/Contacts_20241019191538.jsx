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
    }
  }, [currentUser]);
  S;
  return <>C</>;
}

export default Contacts;
