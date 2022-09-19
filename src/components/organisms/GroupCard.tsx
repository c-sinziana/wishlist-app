import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, Typography } from "@mui/material";

import { Group, Wishlist } from "../../api/utils/entities";
import DeleteGroupButton from "../molecules/DeleteGroupButton";
import EditGroupCard from "../molecules/EditGroupCard";
import InviteGroupCard from "../molecules/InviteGroupCard";
import GroupMembersModal from "./GroupMembersModal";

type GroupCardProp = {
  group: Group;
  wishlist: Wishlist;
};

export default function GroupCard({ group, wishlist }: GroupCardProp) {
  const [isEditing, setIsEditing] = useState(false);
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const toggleIsEditing = () => setIsEditing((b) => !b);

  if (isEditing) {
    return (
      <>
        <Button onClick={() => toggleIsEditing()}>Cancel</Button>
        <EditGroupCard
          id={group.id}
          name={group.name}
          details={group.details}
          wishlists={group.wishlists}
          users={group.users}
        />
      </>
    );
  }

  return (
    <Grid display="flex" flexDirection="column">
      <CardHeader
        action={<DeleteGroupButton id={group.id} />}
        title={group.name}
      />
      <InviteGroupCard groupId={group.id} />
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15} item={true}>
          <CardContent key={group.id}>
            <Typography>{group.details}</Typography>
            <Button onClick={() => toggleIsEditing()}>Edit group</Button>
          </CardContent>
          <GroupMembersModal group={group} />
        </Grid>
      </Card>
    </Grid>
  );
}
