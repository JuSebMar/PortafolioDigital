import { Avatar, Box, CardMedia, Typography, useTheme } from "@mui/material";
import ProfilePicture from "../assets/foto-perfil.png";

export const Description = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        id="about-me"
        sx={{
          display: "flex",
          backgroundColor: theme.palette.primary.main,
          textAlign: "center",
        }}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "30px" },
              color: "white",
              padding: "60px 20px",
            }}>
            Front-end Developer, he trabajado con (JavaScript, React, Typescript
            Html, Css ), Además, librerías como Axios, Firebase, librerias de
            estilos como Material UI, Mantine y Bootstrap.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <img
            src={ProfilePicture}
            alt="profile"
            style={{ width: 300 }}
          />
        </Box>
      </Box>
    </>
  );
};
