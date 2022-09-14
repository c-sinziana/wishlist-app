export {}; // aici o sa fie invitatiile

/*import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
} from "@mui/material";


import { GroupApi, GroupPutInviteRequest } from "../../api/GroupApi";
import { PostPutDeleteResponse } from "../../api/utils/generics";

export default function EditGroupInvitationCard({
status
}: GroupPutInviteRequest) {
  const [isEditing, setIsEditing] = useState(false);

  const [groupInviteResponse, setGroupInviteResponse] = useState<PostPutDeleteResponse>({
    message: "",
  });


  const [editStatus, setEditStatus] = useState<boolean>(status);


  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updateGroupUserInviteFetcher = async (id: number, bodyData: GroupPutInviteRequest) => {
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
    <Container>
      <Card>
        <CardContent>
        
        <Button
            onClick={async () => {
              await updateGroupUserInviteFetcher(id {
                status
              });
            }}
          >
            Save wishlist
          </Button>

          {isResponseSuccesful === true && (
            <Alert severity="success"> You have invited an user</Alert>
          )}


        </CardContent>
      </Card>
    </Container>
  );
}*/
