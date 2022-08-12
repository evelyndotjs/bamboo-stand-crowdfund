import React from "react";
import Button from "@mui/material/Button";

export default function StyledButton({ style, text, onClick }) {
  const btn = {
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "none",
    borderRadius: "20px",
    padding: "10px 23px",
  };

  return (
    <Button style={{ ...style, ...btn }} variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
}
