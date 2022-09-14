import React from "react";
import GroupsCard from "../organisms/GroupsCard";
import CreateGroupModal from "../organisms/CreateGroupModal";
import { TitleHeading } from "../atoms/TitleHeading";

const MyGroupsPage = () => {
  return (
    <div>
      <TitleHeading title="My groups" />
      <CreateGroupModal />
      <GroupsCard />
    </div>
  );
};

export default MyGroupsPage;
