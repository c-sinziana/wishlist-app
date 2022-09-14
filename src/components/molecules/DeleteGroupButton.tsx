import React, { useState } from "react";
import { Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { GroupApi } from "../../api/GroupApi";

type DeleteGroupButtonProp = {
  id: number;
};

const DeleteGroupButton = ({ id }: DeleteGroupButtonProp) => {
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const groupDeleteFetcher = async (id: number) => {
    await GroupApi.deleteGroup(id)
      .then(() => {
        console.log("Id is: ", id);
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
      onClick={async () => await groupDeleteFetcher(id)}
    >
      <DeleteIcon />
    </Fab>
  );
};

export default DeleteGroupButton;
