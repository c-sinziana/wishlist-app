import React, { useState, useReducer } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Fab, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { User } from "../../api/utils/entities";

type UserCardProp = {
  user: User;
  isAddUserToGroup: boolean;
  isUserFromGroup: boolean;
  handleAddToGroup: (clickedItemId: number) => void;
};

export default function UserCard({
  user,
  isAddUserToGroup,
  handleAddToGroup,
}: UserCardProp) {
  const [isEditing, setIsEditing] = useState(false);

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const [addUserToGroup, setAddUserToGroup] = useState<boolean>(false);

  return (
    <Grid display="flex" flexDirection="column">
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15} item={true}>
          <CardContent key={user.id}>
            <Typography> {user.name}</Typography>
            <Typography> {user.email}</Typography>
            <Typography> {user.dob} </Typography>
            <Typography> {user.phone} </Typography>

            {isAddUserToGroup && (
              <Fab
                size="small"
                color="primary"
                onClick={() => handleAddToGroup(user.id)}
                sx={{ ml: "1rem" }}
              >
                <AddIcon />
              </Fab>
            )}
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
