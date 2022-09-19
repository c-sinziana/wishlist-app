import React, { useEffect, useState } from "react";
import { Alert, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { WishlistApi } from "../../api/WishlistApi";
import { Configs } from "../../constants/Configs";

type DeleteWishlistButtonProp = {
  id: number;
};

const DeleteWishlistButton = ({ id }: DeleteWishlistButtonProp) => {
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  useEffect(() => {
    if (isResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        location.reload();
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful]);

  const wishlistDeleteFetcher = async (id: number) => {
    await WishlistApi.deleteWishlist(id)
      .then(() => {
        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        console.log(err);
      });
  };

  return (
    <>
      <Fab
        size="small"
        color="primary"
        onClick={() => wishlistDeleteFetcher(id)}
      >
        <DeleteIcon />
      </Fab>
      {isResponseSuccesful === true && (
        <Alert severity="success">Wishlist successfully deleted!</Alert>
      )}
    </>
  );
};

export default DeleteWishlistButton;
