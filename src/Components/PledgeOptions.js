import React, { useState } from "react";
import styled from "styled-components";
import PledgeAmount from "./PledgeAmount";

const Container = styled.div`
  margin: 10px 30px;
  border: 1px solid hsl(0, 0%, 48%);
  border-radius: 5px;
  padding: 20px;
  font-size: 0.725rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export default function PledgeOptions(props) {
  const [select, setSelect] = useState(false);

  function handleClick(e) {
    setSelect(!select);
  }

  const descriptionStyle = {
    color: "hsl(0, 0%, 48%)",
    fontWeight: "400",
    fontSize: "0.725rem",
    lineHeight: "1rem",
  };

  const radioBtnStyle = {
    marginRight: "15px",
  };

  const spotsTextStyle = {
    marginLeft: "auto",
    fontWeight: "700",
    fontSize: "0.75rem",
  };

  const labelStyle = {
    color: "hsl(176, 50%, 47%)",
    fontWeight: "700",
  };

  const spanStyle = {
    color: "hsl(0, 0%, 48%)",
    marginLeft: "5px",
    fontSize: "0.625rem",
  };

  console.log(props.title);
  return (
    <Container>
      <FlexContainer>
        <input
          style={radioBtnStyle}
          type="radio"
          name="pledge"
          disabled={props.spots === 0}
          onClick={handleClick}
        />
        <label style={labelStyle}>{props.title}</label>
        <p style={spotsTextStyle}>{props.spots}</p>
        {props.title !== "Pledge with no reward" && (
          <span style={spanStyle}>left</span>
        )}
      </FlexContainer>
      <p style={descriptionStyle}>{props.text}</p>
      {select && <PledgeAmount />}
    </Container>
  );
}
