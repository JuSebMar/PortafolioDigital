import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";

export const ButtonGroup = () => {
  const [view, setView] = useState("List");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: 12,
        right: 30,
      }}>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}>
        <ToggleButton
          sx={{ backgroundColor: "white" }}
          value="list"
          aria-label="list">
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
