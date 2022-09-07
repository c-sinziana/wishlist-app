import React, { useState, useReducer } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  Alert,
  Fab,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Group } from "../../api/utils/entities";
import { GroupApi } from "../../api/GroupApi";
import { PutDeleteRequest } from "../../api/utils/generics";
import DeleteGroupButton from "./DeleteGroupButton";

export default function GroupCard({ id, name, details }: Group) {
  const [isEditing, setIsEditing] = useState(false);
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const [groupName, setGroupName] = useState<string>("");
  const [groupDetails, setGroupDetails] = useState<string>("");

  const toggleIsEditing = () => setIsEditing((b) => !b);

  const groupGetFetcher = async () => {
    await GroupApi.getGroups()
      .then(() => {
        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isEditing) {
    return (
      <div>
        <Card elevation={5}>
          <Grid xs={12} md={8} lg={15} display="flex" flexDirection="column">
            <CardHeader action={<DeleteGroupButton id={id} />} title={name} />
            <CardContent key={id}>
              Name:
              <TextField
                value={name}
                onChange={(e) => setGroupName(e.target.value)}
              />
              Details:
              <TextField
                value={details}
                onChange={(e) => setGroupDetails(e.target.value)}
              />
            </CardContent>
            <Fab color="secondary" aria-label="edit">
              <EditIcon onClick={() => toggleIsEditing()} />
            </Fab>
          </Grid>
        </Card>
      </div>
    );
  }

  return (
    <Grid display="flex" flexDirection="column">
      <CardHeader action={<DeleteGroupButton id={id} />} title={name} />
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15}>
          <CardContent key={id}>
            Details: <Typography> {details}</Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
