import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Modal } from "@mui/material";

import { GroupApi, GroupPutInviteRequest } from "../../api/GroupApi";
import { PostPutDeleteResponse } from "../../api/utils/generics";
import UsersListModal from "../organisms/UsersListModal";
import { Configs } from "../../constants/Configs";

type EditGroupInviteCardProp = {
  groupId: number;
};

export default function InviteGroupCard({ groupId }: EditGroupInviteCardProp) {
  const [groupInviteResponse, setGroupInviteResponse] =
    useState<PostPutDeleteResponse>({
      message: "",
    });

  const [isResponseSuccesful, setIsResponseSuccessful] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    if (isResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        setIsResponseSuccessful(false);
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful]);

  const updateGroupUserInviteFetcher = async (
    id: number,
    bodyData: GroupPutInviteRequest
  ) => {
    await GroupApi.putGroupInvite(id, bodyData)
      .then((data) => {
        if (data !== undefined) {
          setGroupInviteResponse(data);
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

  return (
    <>
      <Button
        onClick={() => {
          updateGroupUserInviteFetcher(groupId, { status: true });
        }}
      >
        Invite group users
      </Button>

      {isResponseSuccesful === true && (
        <Alert severity="success"> You have invited this group</Alert>
      )}
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
