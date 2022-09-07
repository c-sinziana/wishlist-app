import { Box, Button, Fab, Modal, TextField } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ChildModal from "./CreateItemModal";
import CreateWishlistModal from "./CreateWishlistModal";

export default function ModalNewWishlist() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CreateWishlistModal />
    </div>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
