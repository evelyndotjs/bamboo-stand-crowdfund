import React, { useContext } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import Pledge from "./Pledge";
import { Context } from "../Context";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
  align-items: baseline;
`;

const Container = styled.div`
  border: 1px solid hsl(0, 0%, 48%);
  border-radius: 5px;
  padding: 15px;
  margin: 20px auto;
  max-width: 80%;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: hsl(0, 0%, 48%);
  line-height: 1.5;
`;

export default function MainPledge() {
  const { open, handleClickOpen, spots } = useContext(Context);

  const greenbtn = {
    backgroundColor: "hsl(176, 72%, 28%)",
    color: "#fff",
  };

  const greybtn = {
    backgroundColor: "hsl(0, 0%, 48%)",
    color: "#fff",
  };

  const spotsText = {
    fontSize: "1rem",
    fontWeight: "700",
  };

  const leftText = {
    fontSize: "0.65rem",
    fontWeight: "400",
    color: "hsl(0, 0%, 48%)",
    position: "relative",
    top: "-5px",
  };

  return (
    <>
      <Container>
        <Title>Bamboo Stand</Title>
        <Text>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </Text>
        <FlexContainer>
          <p style={spotsText}>
            {spots.bamboo} <span style={leftText}>left</span>
          </p>
          <StyledButton
            style={spots.bamboo === "0" ? greybtn : greenbtn}
            text={spots.bamboo === 0 ? "Out of stock" : "Select Reward"}
            onClick={handleClickOpen}
            disable={spots.bamboo === 0 ? true : false}
          />
          {open && <Pledge />}
        </FlexContainer>
      </Container>
      <Container>
        <Title>Black Edition Stand</Title>
        <Text>
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </Text>
        <FlexContainer>
          <p style={spotsText}>
            {spots.black} <span style={leftText}>left</span>
          </p>
          <StyledButton
            style={spots.black === "0" ? greybtn : greenbtn}
            text={spots.black === 0 ? "Out of stock" : "Select Reward"}
            onClick={handleClickOpen}
            disable={spots.black === 0 ? true : false}
          />
        </FlexContainer>
      </Container>
      <Container>
        <Title>Mahogany Special Edition</Title>
        <Text>
          You get two Special Edition Maghogany stands, a Backer T-shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </Text>
        <FlexContainer>
          <p style={spotsText}>
            {spots.mahogany} <span style={leftText}>left</span>
          </p>
          <StyledButton
            style={spots.mahogany === 0 ? greybtn : greenbtn}
            text={spots.mahogany === 0 ? "Out of Stock" : "Select Reward"}
            disable={spots.mahogany === 0 ? true : false}
          />
        </FlexContainer>
      </Container>
    </>
  );
}
