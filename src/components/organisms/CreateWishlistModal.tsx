import React, { useState } from "react";
import { Alert, Box, Button, Modal, TextField } from "@mui/material";

import { WishlistApi, WishlistPostPutRequest } from "../../api/WishlistApi";
import ItemsListModal from "./ItemsListModal";

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

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const createWishlistFetcher = async (bodyData: WishlistPostPutRequest) => {
    console.log("Body data is: ", JSON.stringify(bodyData));

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
    console.log("Clicked item is:", clickedItemId);
    console.log("Clicked item are:", JSON.stringify(itemIds));
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
          <ItemsListModal handleAddToWishlist={handleAddToWishlist} />
          {isResponseSuccesful === true && (
            <Alert severity="success">Item succesfully added</Alert>
          )}
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={async () => {
              await createWishlistFetcher({
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
