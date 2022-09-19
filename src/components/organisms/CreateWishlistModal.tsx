import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Modal, TextField } from "@mui/material";

import { WishlistApi, WishlistPostPutRequest } from "../../api/WishlistApi";
import ItemsListModal from "./ItemsListModal";
import { Configs } from "../../constants/Configs";

function CreateWishlistModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [itemIds, setItemIds] = useState<number[]>([]);

  const [isResponseSuccesful, setIsResponseSuccessful] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    if (isResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        handleClose();
        location.reload();
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful]);

  const createWishlistFetcher = async (bodyData: WishlistPostPutRequest) => {
    await WishlistApi.postWishlist(bodyData)
      .then((data) => {
        if (data !== undefined) {
          setIsResponseSuccessful(true);
        } else {
          setIsResponseSuccessful(false);
        }
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        console.log(err);
      });
  };

  const handleAddToWishlist = (clickedItemId: number) => {
    setItemIds([...itemIds, clickedItemId]);
  };

  return (
    <>
      <Button onClick={handleOpen}>Create wishlist!</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 200 }}>
          <h2>Create new wishlist:</h2>
          Name:
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          Details:
          <TextField
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <ItemsListModal
            isAddItem={true}
            isEditItem={false}
            isItemFromWishlist={false}
            isDeleteItemFromWishlist={false}
            handleAddToWishlist={handleAddToWishlist}
            handleDeleteWishlistItem={() => console.log("Unused")}
          />
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={() => {
              createWishlistFetcher({
                wishlist: { name, details },
                itemIds,
              });
            }}
          >
            Save wishlist
          </Button>
          {isResponseSuccesful === true && (
            <Alert severity="success">Wishlist succesfully created</Alert>
          )}
        </Box>
      </Modal>
    </>
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

export default CreateWishlistModal;
