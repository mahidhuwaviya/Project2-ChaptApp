import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

function Contacts({ contacts, currentUser }) {
  const [currentUserName, setcurrentUserName] = useState(undefined);
  useEffect(() => {}, [currentUser]);
  return <></>;
}

export default Contacts;
