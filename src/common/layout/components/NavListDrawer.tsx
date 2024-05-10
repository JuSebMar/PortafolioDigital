import { SmoothScrollLink } from "../../utils/SmoothScrollLink";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const navLinks = [
  { title: "Cónoceme", path: "#about-me", icon: <AccountBoxIcon /> },
  { title: "Proyectos", path: "#carousel", icon: <ViewCarouselIcon /> },
];
export const NavListDrawer = () => {
  return (
    <Box sx={{ height: "100%", width: 250, bgcolor: "black", color: "white" }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <SmoothScrollLink to={item.path}>
              <ListItem
                disablePadding
                key={item.title}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>
                    {item.title}
                  </ListItemText>
                </ListItemButton>
                <Divider />
              </ListItem>
            </SmoothScrollLink>
          ))}
        </List>
      </nav>
    </Box>
  );
};
