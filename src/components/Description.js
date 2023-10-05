import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#FFFFFF" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#000000">
        Sammendrag
      </Typography>
      <Typography>
        En hyggelig forretningsutvikler som kan altfor lite om IT . 
      </Typography>
      <Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={5}
  onChange={(event, 5) => {
    setValue(5);
  }}
  <Rating name="read-only" value={5} readOnly />
/>
    </Box>
    
  );
}

export default Description;
