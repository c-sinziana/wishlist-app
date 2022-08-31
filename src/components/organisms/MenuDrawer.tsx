import React from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Divider, Drawer } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";

import { useState } from "react";
import { NavigationButton } from "../atoms/NavigationButton";

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
        <Box p={2} width=" 270" textAlign="center" role="presentation">
          <Paper sx={{ width: 270 }}>
            <ListItemText>Menu:</ListItemText>
            <Divider />
            <MenuList dense>
              <MenuItem sx={{ ml: 3 }}>
                <NavigationButton
                  buttonType="submit"
                  buttonText="Add new wishlist"
                  onClickLogic={() => {
                    localStorage.clear();
                  }}
                  to="/new-wishlist"
                />
              </MenuItem>
              <MenuItem sx={{ ml: 8 }}>
                <NavigationButton
                  buttonType="submit"
                  buttonText="Sign out"
                  onClickLogic={() => {
                    localStorage.clear();
                  }}
                  to="/"
                />
              </MenuItem>
            </MenuList>
          </Paper>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
