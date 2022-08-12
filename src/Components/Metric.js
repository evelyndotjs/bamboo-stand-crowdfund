import React, { useContext } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import ProgressBar from "./ProgressBar";
import { Context } from "../Context";

const Container = styled.div`
  margin: 0 auto;
  background-color: #fff;
  width: 80%;
  height: 140px;
  border-radius: 10px;
  text-align: center;
`;

export default function Metric() {
  const { pledge, backers } = useContext(Context);

  const titleTextStyle = {
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "-3.5px",
  };

  const titleTextWithDivider = {
    ...titleTextStyle,
    borderRight: "1px solid hsl(0, 0%, 48%)",
    marginBottom: "-20px",
    height: "40px",
  };

  const subTitleTextStyle = {
    fontSize: "0.75rem",
    color: "hsl(0, 0%, 48%)",
  };

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <p style={titleTextWithDivider}>${pledge.toLocaleString()}</p>
          <p style={subTitleTextStyle}>of $100,000 backed</p>
        </Grid>
        <Grid item xs={4}>
          <p style={titleTextWithDivider}>{backers.toLocaleString()}</p>
          <p style={subTitleTextStyle}>total backers</p>
        </Grid>

        <Grid item xs={4}>
          <p style={titleTextStyle}>56</p>
          <p style={subTitleTextStyle}>days left</p>
        </Grid>
      </Grid>
      <ProgressBar />
    </Container>
  );
}
