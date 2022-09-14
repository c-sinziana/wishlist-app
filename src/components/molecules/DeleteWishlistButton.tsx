import React, { useState } from "react";
import { Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { WishlistApi } from "../../api/WishlistApi";

type DeleteWishlistButtonProp = {
  id: number;
};

const DeleteWishlistButton = ({ id }: DeleteWishlistButtonProp) => {
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const wishlistDeleteFetcher = async (id: number) => {
    await WishlistApi.deleteWishlist(id)
      .then(() => {
        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fab
      size="small"
      color="primary"
      onClick={async () => await wishlistDeleteFetcher(id)}
    >
      <DeleteIcon />
    </Fab>
  );
};

export default DeleteWishlistButton;
