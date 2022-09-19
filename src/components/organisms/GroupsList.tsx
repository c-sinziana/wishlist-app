import { Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GroupApi, GroupGetResponse } from "../../api/GroupApi";
import { Group, Member, Wishlist } from "../../api/utils/entities";

import GroupCard from "./GroupCard";

const GroupsList = () => {
  const [shownGroups, setShownGroups] = useState<GroupGetResponse>({
    groups: [
      {
        id: 0,
        name: "",
        createdAt: "",
        details: "",
        wishlists: [],
        users: [],
      },
    ],
  });

  useEffect(() => {
    groupFetcher();
  }, []);

  const groupFetcher = async () => {
    await GroupApi.getGroups()
      .then((data) => {
        setShownGroups({
          groups: data.groups,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {shownGroups.groups.map((group, index) => (
        <GroupCard
          key={index}
          group={{
            id: group.id,
            name: group.name,
            details: group.details,
            wishlists: group.wishlists,
            users: group.users,
          }}
          wishlist={group.wishlists[index]}
        />
      ))}
    </Container>
  );
};

export default GroupsList;
