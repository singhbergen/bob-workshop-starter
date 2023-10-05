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
    </Box>
    
  );
}

export default Description;
