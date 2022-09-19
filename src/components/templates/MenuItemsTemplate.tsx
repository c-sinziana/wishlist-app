import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const MenuItemsTemplate = () => {
  const navigate = useNavigate();

  return (
    <>
      <MenuItem onClick={() => navigate("/my-notifications")}>
        <IconButton
          size="large"
          color="inherit"
          onClick={() => navigate("/my-notifications")}
        >
          <Badge color="error" onClick={() => navigate("/my-notifications")}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p onClick={() => navigate("/my-notifications")}>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
          onClick={() => console.log("/profile")}
        >
          <AccountCircle onClick={() => console.log("/profile")} />
        </IconButton>
        <p onClick={() => console.log("/profile")}> My Profile </p>
      </MenuItem>
    </>
  );
};

export default MenuItemsTemplate;
