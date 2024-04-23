import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

export const AppLayOut = () => {
  return (
    <Box sx={{ maxWidth: "100%", position: "relative" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};
