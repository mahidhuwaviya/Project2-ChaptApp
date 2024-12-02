import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BiPowerOff } from "react-icons/bi";

export default function Logout() {
  const navigate = useNavigate();
  const handleUserLogout = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Button onClick={handleUserLogout}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
