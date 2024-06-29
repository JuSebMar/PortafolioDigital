import { Box, Typography } from "@mui/material";
import presentacion from "../assets/presentacion.svg";
import TypewriterText from "../common/utils/TypewriterText";

export const Presentacion = () => {
  return (
    <>
      <Box
        id="presentacion"
        sx={{
          display: "flex",
          marginTop: { xs: "55px", sm: "65px" },
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
            top: 300,
            left: 20,
          }}>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "20px", sm: "100px" },
              lineHeight: 1,
            }}>
            <TypewriterText texts={["Juan Soto", "Front-end <br> Developer"]} />
          </Typography>
          <br />
        </Box>
      </Box>
    </>
  );
};
