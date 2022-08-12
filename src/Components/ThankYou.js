import React, { useContext } from "react";
import { Context } from "../Context";
import StyledButton from "./StyledButton";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  background-color: #fff;
  text-align: center;
  border: 3px solid hsl(0, 0%, 48%);
  border-radius: 10px;
  padding: 30px;
`;

const Text = styled.p`
  color: hsl(0, 0%, 48%);
  line-height: 1.5;
`;

export default function ThankYou() {
  const { setIsSubmitted } = useContext(Context);

  const greenbtn = {
    backgroundColor: "hsl(176, 72%, 28%)",
    color: "#fff",
  };

  return (
    <Container>
      <img src="./assets/icon-check.svg" alt="check icon" />
      <h1>Thank you for your support!</h1>
      <Text>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </Text>
      <StyledButton
        style={greenbtn}
        text="Got it"
        onClick={() => setIsSubmitted(false)}
      ></StyledButton>
    </Container>
  );
}
