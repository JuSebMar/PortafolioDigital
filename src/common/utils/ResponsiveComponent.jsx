import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const ResponsiveComponent = () => {
  const theme = useTheme();

  // Verificar si el ancho de pantalla es menor o igual a 'md'
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Definir estilos condicionales basados en el tamaño de la pantalla
  const containerStyles = {
    display: "flex",
    flexDirection: isTabletOrMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  };

  const itemStyles = {
    backgroundColor: "lightgray",
    padding: "10px",
    margin: isTabletOrMobile ? "10px 0" : "0 10px",
    textAlign: "center",
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={itemStyles}>
        <Typography variant="h6">Project 1</Typography>
        <Typography>Some description about Project 1</Typography>
      </Box>
      <Box sx={itemStyles}>
        <Typography variant="h6">Project 2</Typography>
        <Typography>Some description about Project 2</Typography>
      </Box>
      <Box sx={itemStyles}>
        <Typography variant="h6">Project 3</Typography>
        <Typography>Some description about Project 3</Typography>
      </Box>
    </Box>
  );
};

const App = () => (
  <Box sx={{ padding: "20px" }}>
    <Typography variant="h4" align="center">
      My Portfolio
    </Typography>
    <ResponsiveComponent />
  </Box>
);
