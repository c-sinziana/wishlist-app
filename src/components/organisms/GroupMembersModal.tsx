import React, { useState } from "react";
import { Alert, Box, Button, CardHeader, Modal } from "@mui/material";
import { Group, User } from "../../api/utils/entities";
import UserCard from "../molecules/UserCard";

type GroupMembersModalProp = {
  group: Group;
};

function GroupMembersModal({ group }: GroupMembersModalProp) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);
  return (
    <>
      <Button onClick={handleOpen}>See group's members</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: "90%", height: "80%", mt: "2rem" }}>
          <CardHeader action={<Button onClick={handleClose}>Close</Button>} />
          Group members:
          {group.users.map((shownUser, index) => (
            <UserCard
              key={index}
              user={shownUser}
              handleAddToGroup={() => console.log("Unused")}
              isAddUserToGroup={true}
              isUserFromGroup={true}
            />
          ))}
          {isResponseSuccesful === true && <Alert severity="success"></Alert>}
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  overflow: "scroll",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default GroupMembersModal;
