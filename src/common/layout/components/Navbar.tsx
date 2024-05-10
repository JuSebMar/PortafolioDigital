import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ParkIcon from "@mui/icons-material/Park";
import { SmoothScrollLink } from "../../utils/SmoothScrollLink";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";

const navLinks = [
  { title: "Cónoceme", path: "#about-me" },
  { title: "Proyectos", path: "#carousel" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <SmoothScrollLink to="#presentacion">
            <ParkIcon sx={{ color: "white" }} />
          </SmoothScrollLink>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navLinks.map((item) => (
              <SmoothScrollLink to={item.path}>
                <Typography
                  key={item.title}
                  sx={{ flexGrow: 1, fontSize: 20, color: "#ffffff" }}>
                  {item.title}
                </Typography>
              </SmoothScrollLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          open={open}
          anchor="left"
          onClose={() => setOpen(false)}>
          <NavListDrawer />
        </Drawer>
      </Box>
    </>
  );
};
