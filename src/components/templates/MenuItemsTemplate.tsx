import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { Chat } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MenuItemsTemplate = () => {
  return (
    <>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <Chat />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p> My Profile</p>
      </MenuItem>
    </>
  );
};

export default MenuItemsTemplate;
