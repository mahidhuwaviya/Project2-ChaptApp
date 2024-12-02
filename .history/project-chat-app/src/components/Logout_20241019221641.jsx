import React from "react";
import { useNavigate } from "react-router-dom";

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
