import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Context } from "../Context";
import PledgeOptions from "./PledgeOptions";
import styled from "styled-components";

const CloseModalIcon = styled.img`
  width: 10px;
  cursor: pointer;
  margin-right: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Pledge() {
  const { open, handleClose, spots } = useContext(Context);

  const titleStyle = {
    fontSize: "1rem",
    margin: "20px 30px",
  };

  const subtitleStyle = {
    fontSize: "0.75rem",
    fontWeight: "400",
    color: "hsl(0, 0%, 48%)",
    margin: "10px 30px",
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <FlexContainer>
          <h1 style={titleStyle}>Back this project</h1>
          <CloseModalIcon
            src="./assets/icon-close-modal.svg"
            alt="logo"
            onClick={handleClose}
          />
        </FlexContainer>
        <h2 style={subtitleStyle}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </h2>
        <PledgeOptions
          title="Pledge with no reward"
          text="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
        />

        <PledgeOptions
          title="Bamboo Stand - Pledge $25 or more"
          spots={spots.bamboo}
          text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
        />

        <PledgeOptions
          title="Black Edition Stand - Pledge $75 or more"
          spots={spots.black}
          text="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        />

        <PledgeOptions
          title="Mahogany Special Edition - Pledge $200 or more"
          spots={spots.mahogany}
          text="You get two Special Edition Maghogany stands, a Backer T-shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        />
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}
