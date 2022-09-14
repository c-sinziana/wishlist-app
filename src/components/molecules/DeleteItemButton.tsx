import React, { useState } from "react";
import { Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ItemApi } from "../../api/ItemApi";

type DeleteItemButtonProp = {
  id: number;
  isDeleteItemFromWishlist?: boolean;
};

const DeleteItemButton = ({
  id,
  isDeleteItemFromWishlist,
}: DeleteItemButtonProp) => {
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const itemDeleteFetcher = async (id: number) => {
    await ItemApi.deleteItem(id)
      .then(() => {
        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isDeleteItemFromWishlist && (
        <Fab
          size="small"
          color="primary"
          onClick={async () => await itemDeleteFetcher(id)}
          sx={{ ml: "2rem" }}
        >
          <DeleteIcon />
        </Fab>
      )}
    </>
  );
};

export default DeleteItemButton;
