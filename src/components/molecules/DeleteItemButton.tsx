import React, { useEffect, useState } from "react";
import { Alert, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ItemApi } from "../../api/ItemApi";
import { Configs } from "../../constants/Configs";

type DeleteItemButtonProp = {
  itemId: number;
};

const DeleteItemButton = ({ itemId }: DeleteItemButtonProp) => {
  const [isResponseSuccesful, setIsResponseSuccessful] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    if (isResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        location.reload();
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful]);

  const itemDeleteFetcher = async (id: number) => {
    await ItemApi.deleteItem(id)
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
        onClick={() => itemDeleteFetcher(itemId)}
        sx={{ ml: "2rem" }}
      >
        <DeleteIcon />
      </Fab>
      {isResponseSuccesful === true && (
        <Alert severity="success">Item successfully deleted!</Alert>
      )}
    </>
  );
};

export default DeleteItemButton;
