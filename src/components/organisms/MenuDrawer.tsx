import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Drawer } from "@mui/material";

import { useState } from "react";

const MenuDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="8rem" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            <div>
              <p> Menu</p>
              <Divider />
              <ListItemText>My groups</ListItemText>
              <Divider />
              <ListItemText>My wishlists</ListItemText>
              <Divider />
              <ListItemText>Log out</ListItemText>
              <Divider />
            </div>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
