import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="https://media.licdn.com/dms/image/C4D03AQGokpOd5hVDFg/profile-displayphoto-shrink_400_400/0/1642209375662?e=1701907200&v=beta&t=UBS_GAIvnf9SwlNsPi2tRHsKJNGaCEekIURTztIS9c4"
        alt="Flower"
        sx={{
          width: 500,
          height: 500,
          margin: "auto",
          border: "4px solid #000000",
        }}
      />
      <Typography variant="h3" gutterBottom color="#FFC0CB">
        Simerjit Singh Dhammi
      </Typography>
      <Typography variant="h7" gutterBottom color="#FFC0CB">
        Digitalt visittkort
      </Typography>
      <Typography variant="h5" gutterBottom color="#FFC0CB">
        Telefon: +47 474 47 747
      </Typography>
      <Typography variant="h5" gutterBottom color="#FFC0CB">
        E-post: simerjit@dhammi.no
      </Typography>
    </Stack>
  );
}

export default Profile;
