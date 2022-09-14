import React, { useState, useReducer } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Fab, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { User } from "../../api/utils/entities";

type UserCardProp = {
  user: User;
};

export default function UserCard({ user }: UserCardProp) {
  const [isEditing, setIsEditing] = useState(false);

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const [addUserToGroup, setAddUserToGroup] = useState<boolean>(false);

  return (
    <Grid display="flex" flexDirection="column">
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15}>
          <CardContent key={user.id}>
            <Typography> {user.name}</Typography>
            <Typography> {user.email}</Typography>
            <Typography> {user.dob} </Typography>
            <Typography> {user.phone} </Typography>
            <Fab
              size="small"
              color="primary"
              onClick={() => addUserToGroup}
              sx={{ ml: "1rem" }}
            >
              <AddIcon />
            </Fab>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
