import React, { useState, useContext } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import { Context } from "../Context";
import Pledge from "./Pledge";

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
  background-color: #fff;
  position: relative;
  z-index: 100;
  bottom: 40px;
  border-radius: 10px;
  margin-bottom: -60px;
`;

const Logo = styled.img`
  width: 40px;
  position: relative;
  z-index: 200;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 400;
  color: hsl(0, 0%, 48%);
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 40px auto;
`;

export default function Header() {
  const [bookmark, setBookmark] = useState(false);

  const { open, handleClickOpen } = useContext(Context);

  function handleClick() {
    setBookmark(!bookmark);
  }

  const greenbtn = {
    backgroundColor: "hsl(176, 72%, 28%)",
    color: "#fff",
    marginBottom: "30px",
  };

  const bookmarkIcon = bookmark
    ? "url(./assets/icon-check.svg)"
    : "url(./assets/icon-bookmark.svg)";

  const bookmarkTextColor = bookmark ? "hsl(176, 72%, 28%)" : "hsl(0, 0%, 48%)";

  const bookmarkImage = {
    backgroundImage: bookmarkIcon,
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "40px",
    padding: "10px 23px",
  };

  const greybtn = {
    backgroundColor: "hsl(0,0%,92.9%)",
    color: bookmarkTextColor,
    paddingLeft: "50px",
    marginBottom: "30px",
  };

  return (
    <HeaderContainer>
      <Logo src="./assets/logo-mastercraft.svg" alt="mastercraft logo" />
      <Title>Mastercraft Bamboo Monitor Riser</Title>
      <Subtitle>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Subtitle>
      <ButtonsWrapper>
        <StyledButton
          onClick={handleClickOpen}
          style={greenbtn}
          text="Back this project"
        />
        {open && <Pledge />}
        <StyledButton
          onClick={handleClick}
          style={{ ...bookmarkImage, ...greybtn }}
          text={bookmark ? "Bookmarked" : "Bookmark"}
        />
      </ButtonsWrapper>
    </HeaderContainer>
  );
}
