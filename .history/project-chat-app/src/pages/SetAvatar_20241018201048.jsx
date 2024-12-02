import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../assets/loader.gif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";

function SetAvatar() {
  const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate();
  const [avators, setAvatars] = useState([]);
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
    const handleProfileImageOptions = async () => {
      try {
        const data = [];
        for (let i = 0; i < 4; i++) {
          const img = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`
          );
          const buffer = new Buffer(img.data);
          data.push(buffer.toString("base64"));
        }
        setAvatars(data);
        setIsloading(false);
      } catch (error) {
        console.log("Error getting Image");
      }
    };
    handleProfileImageOptions();
  });

  return (
    <>
      <Container>
        <div className="title-container">
          <h1>Pick an avatar as your Profile Picture</h1>
        </div>
        <div className="avatars">
          {avators.map((avator, index) => {
            return (
              <div
                key={index}
                className={`avatar ${
                  selectedAvatar === index ? "selected" : ""
                } `}
              >
                <img
                  src={`data:image/svg+xml;base64,${avator}`}
                  alt="avator"
                  onClick={() => setSelectedAvatar(index)}
                />
              </div>
            );
          })}
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100wh;
`;

export default SetAvatar;
