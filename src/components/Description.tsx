import { Box, Typography, useTheme } from "@mui/material";
import ProfilePicture from "../assets/foto-perfil.png";

export const Description = () => {
  const theme = useTheme();
  return (
    <Box
      id="about-me"
      sx={{
        display: "flex",
        position: "relative",
        maxWidth: "100%",
        backgroundColor: theme.palette.primary.main,
        marginTop: "-3px",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          sx={{
            fontSize: 25,
            color: "white",
            padding: "0 20px",
          }}>
          Front-end Developer/ Estudiante de psicologia. Front-End (JavaScript,
          React, Typescript Html, Css ), Además, librerías como Axios, Firebase,
          librerias de estilos como Material UI, Mantine y Bootstrap.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          right: 20,
        }}>
        <img
          src={ProfilePicture}
          alt="profile"
          style={{
            width: "400px",
          }}
        />
      </Box>
    </Box>
  );
};
