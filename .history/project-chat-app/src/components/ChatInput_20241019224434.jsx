import React from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

export default function ChatInput() {
  return (
    <Container>
      <div className="button">
        <div className="emoji">
          <BsEmojiSmileFill />
        </div>
      </div>
    </Container>
  );
  ut;
}

const Container = styled.div``;
