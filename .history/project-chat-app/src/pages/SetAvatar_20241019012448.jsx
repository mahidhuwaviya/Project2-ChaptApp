import React, { useCallback, useEffect, useState } from "react";
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
  const [avatars, setAvatars] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an Avatar", toastOptions);
    } else {
      try {
        const user = await JSON.parse(localStorage.getItem("chatAppUser"));
        const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
          image: avatars[selectedAvatar],
        });
        if (data.isSet) {
          user.isAvatarImageSet = true;
          user.avatarImage = data.image;
          localStorage.setItem("chatAppUser", JSON.stringify(user));
          navigate("/");
        } else {
          toast.error("Error Setting Avatar Please try again", toastOptions);
        }
      } catch (error) {
        console.log("error in set avatar setptofilepicture", error);
      }
    }
  };

  const handleLogin = useCallback(() => {
    if (!localStorage.getItem("chatAppUser")) {
      navigate("/");
    }
  }, [navigate]); // Adding navigate to dependency array for stability

  useEffect(() => {
    handleLogin();
  }, [handleLogin]); // Ensure effect runs only once by using handleLogin with useCallback

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
  }, []);

  return (
    <>
      {isloading ? (
        <Container>
          <img src={Loader} alt="loader" className="loader" />
        </Container>
      ) : (
        <Container>
          <div className="title-container">
            <h1>Pick an avatar as your Profile Picture</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ${
                    selectedAvatar === index ? "selected" : ""
                  } `}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avator"
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button className="submitButton" onClick={setProfilePicture}>
            Set as Profile Picture <span>(double click first time)</span>
          </button>
        </Container>
      )}
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submitButton {
    background-color: #997af0;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
    span {
      background-color: #4f2ea9;
    }
  }
`;

export default SetAvatar;
