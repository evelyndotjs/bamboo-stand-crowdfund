import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Context } from "../Context";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: baseline;
`;

export default function PledgeAmount() {
  const { userPledgeInput, handleSubmit, reduceSpots } = useContext(Context);

  const greenbtn = {
    backgroundColor: "hsl(176, 72%, 28%)",
    color: "#fff",
    fontSize: "0.625rem",
    fontWeight: "700",
    textTransform: "none",
    borderRadius: "20px",
    padding: "10px 18px",
  };

  const inputField = {
    width: "40px",
    fontSize: "0.625rem",
    padding: "12px 18px",
    borderRadius: "20px",
    border: "1px solid hsl(176, 72%, 28%)",
    marginRight: "20px",
  };

  const text = {
    color: "hsl(0, 0%, 48%)",
    fontWeight: "400",
    fontSize: "0.625rem",
  };

  const borderStyle = {
    marginTop: "30px",
  };

  return (
    <>
      <hr style={borderStyle} />
      <FlexContainer>
        <h3 style={text}>Enter your pledge</h3>
        <form onSubmit={handleSubmit}>
          <input
            style={inputField}
            onChange={userPledgeInput}
            type="text"
            placeholder="$"
          ></input>
          <Button style={greenbtn} type="submit" onClick={reduceSpots}>
            Continue
          </Button>
        </form>
      </FlexContainer>
    </>
  );
}
