import { Box, Typography } from "@mui/material";
import ParkIcon from "@mui/icons-material/Park";
import { SmoothScrollLink } from "../../utils/SmoothScrollLink";

export const Navbar = () => {
  return (
    <nav style={{ position: "fixed", top: 0, zIndex: 9999, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          backgroundColor: "black",
        }}>
        <Box>
          <SmoothScrollLink to="#presentacion">
            <ParkIcon sx={{ color: "white", fontSize: 40 }} />
          </SmoothScrollLink>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <SmoothScrollLink to="#about-me">
            <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
              CONOCEME
            </Typography>
          </SmoothScrollLink>

          <SmoothScrollLink to="#carousel">
            <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
              PROYECTOS
            </Typography>
          </SmoothScrollLink>
        </Box>
      </Box>
    </nav>
  );
};
