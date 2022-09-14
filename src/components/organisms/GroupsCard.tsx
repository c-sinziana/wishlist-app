import { Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GroupApi, GroupGetResponse } from "../../api/GroupApi";
import GroupCard from "./GroupCard";

const GroupsCard = () => {
  const [shownGroups, setShownGroups] = useState<GroupGetResponse>({
    groups: [
      {
        id: 0,
        name: "",
        createdAt: "",
        details: "",
      },
    ],
  });

  useEffect(() => {
    async function GroupsShow() {
      await groupFetcher();
    }

    GroupsShow();
  }, []);

  const groupFetcher = async () => {
    await GroupApi.getGroups()
      .then((data) => {
        let resultGroups = [];

        let resultsCounter = data.groups.length;
        for (let index = 0; index < resultsCounter; ++index) {
          resultGroups.push(data.groups[index]);
        }

        setShownGroups({
          groups: resultGroups,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {shownGroups.groups.map((group) => (
        <GroupCard id={group.id} name={group.name} details={group.details} />
      ))}
    </Container>
  );
};

export default GroupsCard;
