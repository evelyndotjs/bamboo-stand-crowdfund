import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

const Logo = styled.img`
  width: 100px;
`;

const ImageHero = styled.div`
  background-image: url(./assets/image-hero-desktop.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
`;

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ImageHero>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Logo src="./assets/logo.svg" alt="logo" />
            </Typography>
            <Button style={{ textTransform: "none" }} color="inherit">
              About
            </Button>
            <Button style={{ textTransform: "none" }} color="inherit">
              Discover
            </Button>
            <Button style={{ textTransform: "none" }} color="inherit" s>
              Get Started
            </Button>
          </Toolbar>
        </ImageHero>
      </AppBar>
    </Box>
  );
}
