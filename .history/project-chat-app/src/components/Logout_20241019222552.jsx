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
    <div>
      {" "}
      <button onClick={handleUserLogout}> Logout</button>
    </div>
  );
}
