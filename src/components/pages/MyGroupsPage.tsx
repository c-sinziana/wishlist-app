import React from "react";
import GroupsList from "../organisms/GroupsList";
import CreateGroupModal from "../organisms/CreateGroupModal";
import { TitleHeading } from "../atoms/TitleHeading";


const MyGroupsPage = () => {
  return (
    <div>
      <TitleHeading title="My groups" />
      <CreateGroupModal />
      <GroupsList />
    </div>
  );
};

export default MyGroupsPage;
