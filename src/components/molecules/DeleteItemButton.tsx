import React, { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ItemApi } from "../../api/ItemApi";

type DeleteItemButtonProp = {
  id: number;
};

const DeleteItemButton = ({ id }: DeleteItemButtonProp) => {
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
    <Button
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={async () => await itemDeleteFetcher(id)}
    >
      Delete
    </Button>
  );
};

export default DeleteItemButton;
