import { Box, Typography } from "@mui/material";
import presentacion from "../assets/presentacion.svg";
import TypewriterText from "../common/utils/TypewriterText";

export const Presentacion = () => {
  return (
    <Box
      id="presentacion"
      sx={{
        marginTop: "85px",
        position: "relative",
        minHeight: "fit-content",
      }}>
      <img
        src={presentacion}
        alt="portada"
        style={{
          maxWidth: "100%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 200,
          left: 50,
        }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "100px",
            lineHeight: 1,
          }}>
          <TypewriterText texts={["Sebastian <br/> Soto"]} />
        </Typography>
        <br />
        <Typography sx={{ fontSize: "30px", color: "white" }}>
          Front-End Developer
        </Typography>
      </Box>
    </Box>
  );
};
