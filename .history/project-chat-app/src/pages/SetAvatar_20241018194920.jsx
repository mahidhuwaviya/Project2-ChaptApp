import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../assets/loader.gif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";

function SetAvatar() {
  const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate();
  const [avator, setAvatar] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const setProfilePicture = async () => {};

  useEffect(() => {
    handleProfileImageOptions = async () => {
      const data = [];
      for (let i = 0; 0 < 4; i++) {
        const img = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
      }
    };
  });

  return (
    <>
      <Container>
        <div className="title-container">
          <h1>Pick an avatar as your Profile Picture</h1>
        </div>
        <div className="avatars">{}</div>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;

export default SetAvatar;
