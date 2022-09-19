import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Button, Divider, Drawer } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import { NavigationButton } from "../atoms/NavigationButton";

const MenuDrawerTemplate = () => {
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
                  buttonText="My items"
                  onClickLogic={() => {}}
                  to="/my-items"
                />
              </MenuItem>
              <MenuItem sx={{ ml: 3 }}>
                <NavigationButton
                  buttonType="submit"
                  buttonText="My wishlists"
                  onClickLogic={() => {}}
                  to="/my-wishlists"
                />
              </MenuItem>
              <MenuItem sx={{ ml: 3 }}>
                <NavigationButton
                  buttonType="submit"
                  buttonText="My groups"
                  onClickLogic={() => {}}
                  to="/all-groups"
                />
              </MenuItem>
              <MenuItem sx={{ ml: 8 }}>
                <Button
                  type="submit"
                  onClick={() => {
                    Cookies.remove("token");
                    window.location.pathname = "/wishlist-app";
                  }}
                >
                  Sign out
                </Button>
              </MenuItem>
            </MenuList>
          </Paper>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawerTemplate;
