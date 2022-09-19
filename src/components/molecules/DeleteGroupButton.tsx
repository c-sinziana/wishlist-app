import React, { useEffect, useState } from "react";
import { Alert, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { GroupApi } from "../../api/GroupApi";
import { Configs } from "../../constants/Configs";

type DeleteGroupButtonProp = {
  id: number;
};

const DeleteGroupButton = ({ id }: DeleteGroupButtonProp) => {
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

  const groupDeleteFetcher = async (id: number) => {
    await GroupApi.deleteGroup(id)
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
      <Fab size="small" color="primary" onClick={() => groupDeleteFetcher(id)}>
        <DeleteIcon />
      </Fab>
      {isResponseSuccesful === true && (
        <Alert severity="success">Group successfully deleted!</Alert>
      )}
    </>
  );
};

export default DeleteGroupButton;
