import { Box } from "@mui/material";
import { Description } from "./Description";
import { Presentacion } from "./Presentacion";
import { Carousel } from "./Carousel";

export const Portafolio = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}>
      <Presentacion />
      <Description />
      <Carousel />
    </Box>
  );
};
