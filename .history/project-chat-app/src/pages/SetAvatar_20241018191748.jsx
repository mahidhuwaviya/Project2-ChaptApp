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
  return (
    <>
      <Container>
        <div className="title">
          <h1>Pick an avatar as your Profile Picture</h1>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;

export default SetAvatar;
