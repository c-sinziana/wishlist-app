import React, { useState } from "react";
import { Alert, Box, Button, Modal, TextField } from "@mui/material";
import { ItemPostPutRequest, ItemApi } from "../../api/ItemApi";
import { Group, Item } from "../../api/utils/entities";
import { GroupApi, GroupPostRequest } from "../../api/GroupApi";
import UsersListModal from "./UsersListModal";

function CreateGroupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [group, setGroup] = useState<GroupPostRequest>({
    name: "",
    details: "",
  });

  const [name, setName] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [userIds, setUserIds] = useState<number[]>([]);

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const createGroupFetcher = async (bodyData: GroupPostRequest) => {
    GroupApi.postGroup(bodyData)
      .then((data) => {
        if (data !== undefined) {
          setGroup(data);
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

  
  const handleAddToGroup = (clickedUserId: number) => {
    setUserIds([...userIds, clickedUserId]);
  };

  return (
    <>
      <Button onClick={handleOpen}>Create group!</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 200 }}>
          <h2>Create new group:</h2>
          Name:
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          Details:
          <TextField
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <UsersListModal  handleAddToGroup={handleAddToGroup}/>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={async () => {
              await createGroupFetcher({
                name,
                details,
              });
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
