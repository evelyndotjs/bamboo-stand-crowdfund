import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "90%",
  margin: "0 auto",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "hsl(0,0%,96.1%)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "hsl(176, 72%, 28%)",
  },
}));

export default function ProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress variant="determinate" value={80} />
    </Box>
  );
}
