import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BiPowerOff } from "react-icons";

export default function Logout() {
  const navigate = useNavigate();
  const handleUserLogout = () => {
    localStorage.removeItem("chatAppUser");
    navigate("/login");
  };
  return (
    <div>
      {" "}
      <button onClick={handleUserLogout}> Logout</button>
    </div>
  );
}
