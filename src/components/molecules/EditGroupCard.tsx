import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from "@mui/material";

import { GroupApi, GroupPutRequest } from "../../api/GroupApi";
import { Group } from "../../api/utils/entities";
import { PostPutDeleteResponse } from "../../api/utils/generics";

export default function EditGroupCard({ id, name, details }: Group) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  const [itemResponse, setItemResponse] = useState<PostPutDeleteResponse>({
    message: "",
  });

  const [editName, setEditName] = useState<string>(name);
  const [editDetails, setEditDetails] = useState<string>(details);

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updateGroupFetcher = async (id: number, bodyData: GroupPutRequest) => {
    console.log("Name is: ", bodyData.name);
    console.log("Details are: ", bodyData.details);

    await GroupApi.putGroup(id, bodyData)
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
          <TextField
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <TextField
            value={editDetails}
            onChange={(e) => setEditDetails(e.target.value)}
          />

          <Button
            onClick={() =>
              updateGroupFetcher(id, {
                name: editName,
                details: editDetails,
              })
            }
          >
            Submit
          </Button>
          {isResponseSuccesful === true && (
            <Alert severity="success"> Group succesfully updated</Alert>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
