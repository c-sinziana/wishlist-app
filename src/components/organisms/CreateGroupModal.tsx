import React, { useState, useReducer, useEffect } from "react";
import { Alert, Box, Button, Modal, TextField } from "@mui/material";
import {
  GroupApi,
  GroupPostPutRequest,
  GroupPostResponse,
} from "../../api/GroupApi";
import UsersListModal from "./UsersListModal";
import { Configs } from "../../constants/Configs";

function CreateGroupModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [group, setGroup] = useState<GroupPostResponse>({
    id: 0,
    name: "",
    details: "",
  });

  const [shownName, setShownName] = useState<string>("");
  const [shownDetails, setShownDetails] = useState<string>("");
  const [usersIds, setUsersIds] = useState<number[]>([]);

  const [isResponseSuccesful, setIsResponseSuccessful] = useState<
    boolean | undefined
  >();
  const [isAddUserResponseSuccesful, setIsAddUserResponseSuccessful] = useState<
    boolean | undefined
  >();

  let myGroupId: number = 0;

  useEffect(() => {
    if (isResponseSuccesful === true && isAddUserResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        handleClose();
        location.reload();
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful, isAddUserResponseSuccesful]);

  const createGroupFetcher = async (bodyData: GroupPostPutRequest) => {
    await GroupApi.postGroup(bodyData)
      .then((data) => {
        if (data !== undefined) {
          setGroup({ id: data.id, name: data.name, details: data.details });
          myGroupId = data.id;
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

  const addGroupUserFetcher = async (id: number, userIdentifiers: number[]) => {
    await GroupApi.postGroupUser(id, { userIds: userIdentifiers })
      .then((data) => {
        if (data.message !== undefined) {
          setIsAddUserResponseSuccessful(true);
        } else {
          setIsAddUserResponseSuccessful(false);
        }
      })
      .catch((err) => {
        setIsAddUserResponseSuccessful(false);
        console.log(err);
      });
  };

  const handleAddToGroup = (clickedUserId: number) => {
    setUsersIds([...usersIds, clickedUserId]);
  };

  return (
    <>
      <Button onClick={handleOpen}>Create group!</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 200 }}>
          <h2>Create new group:</h2>
          Name:
          <TextField
            value={shownName}
            onChange={(e) => setShownName(e.target.value)}
          />
          Details:
          <TextField
            value={shownDetails}
            onChange={(e) => setShownDetails(e.target.value)}
          />
          <UsersListModal handleAddToGroup={handleAddToGroup} />
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={async () => {
              await createGroupFetcher({
                name: shownName,
                details: shownDetails,
              });
              await addGroupUserFetcher(myGroupId, usersIds);
            }}
          >
            Save Group
          </Button>
          {isResponseSuccesful === true && (
            <Alert severity="success">Group successfully created!</Alert>
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

export default CreateGroupModal;
