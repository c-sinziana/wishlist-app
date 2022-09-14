import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, Typography } from "@mui/material";

import { Group } from "../../api/utils/entities";
import DeleteGroupButton from "../molecules/DeleteGroupButton";
import EditGroupCard from "../molecules/EditGroupCard";

export default function GroupCard({ id, name, details }: Group) {
  const [isEditing, setIsEditing] = useState(false);
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const toggleIsEditing = () => setIsEditing((b) => !b);

  if (isEditing) {
    return <EditGroupCard id={id} name={name} details={details} />;
  }

  return (
    <Grid display="flex" flexDirection="column">
      <CardHeader action={<DeleteGroupButton id={id} />} title={name} />
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15}>
          <CardContent key={id}>
            Details: <Typography> {details}</Typography>
            <Button onClick={() => toggleIsEditing()}>Edit group</Button>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
