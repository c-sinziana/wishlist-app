export {};

/*import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Alert, Button, Container, TextField } from "@mui/material";

import { GroupApi, GroupUsersPostRequest } from "../../api/GroupApi";
import { PostPutDeleteResponse } from "../../api/utils/generics";

export default function EditGroupUsersCard({
  userIds: [],
}: GroupUsersPostRequest) {
  const [isEditing, setIsEditing] = useState(false);

 

  const toggleIsEditing = () => setIsEditing(!isEditing);

  const [usersGroupResponse, setUsersGroupResponse] =
    useState<PostPutDeleteResponse>({
      message: "",
    });

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updateGroupUsersFetcher = async (
    id: number,
    bodyData: GroupUsersPostRequest
  ) => {
    await GroupApi.postGroupUser(id, bodyData)
      .then((data) => {
        if (data.message !== undefined) {
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
          <Button onClick={async () => {
              await updateGroupUsersFetcher(id{
             userIds
              });
            }}/>
          {isResponseSuccesful === true && (
            <Alert severity="success"> Group succesfully updated</Alert>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}*/
