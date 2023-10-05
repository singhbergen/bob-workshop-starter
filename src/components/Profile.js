import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#000000"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="https://media.licdn.com/dms/image/C4D03AQGokpOd5hVDFg/profile-displayphoto-shrink_400_400/0/1642209375662?e=1701907200&v=beta&t=UBS_GAIvnf9SwlNsPi2tRHsKJNGaCEekIURTztIS9c4"
        alt="Flower"
        sx={{
          maxHeigt: 500, 
          height: "100%",
          width: "100%",
          aspectRatio: "1",
          margin: "auto",
          border: "4px solid #000000",
        }}
      />
      <Typography variant="h3" gutterBottom color="#FFC0CB">
        Simerjit Singh Dhammi
      </Typography>
      <Typography variant="h7" gutterBottom color="#FFFFFF">
        Digitalt visittkort
      </Typography>
      <Typography variant="h5" gutterBottom color="#FFFFFF">
        Telefon: +47 474 47 747
      </Typography>
      <Typography variant="h5" gutterBottom color="#FFFFFF">
        E-post: simerjit@dhammi.no
        <br></br>
        <br></br>
        <br></br>
        <a href="https://www.linkedin.com/in/singhdhammi/">Besøk meg på LinkedIn</a>
      </Typography>
    
      <Avatar
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
        alt="Linkedin"
    
        sx={{
          width: 50,
          height: 50,
          margin: "auto",
          border: "4px solid #000000",
        }}
      />
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={"https://assets.adnuntius.com/rfPQFVRWck3_12obSWhMZIb6m52cMh-MKxkWeEMNJyg.jpg"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={"https://assets.adnuntius.com/rfPQFVRWck3_12obSWhMZIb6m52cMh-MKxkWeEMNJyg.jpg"}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    </Stack>
  
  );
}

export default Profile;
