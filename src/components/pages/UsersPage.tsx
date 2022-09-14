import React from "react";
import { TitleHeading } from "../atoms/TitleHeading";
import UsersList from "../organisms/UsersList";

const UsersPage = () => {
  return (
    <div>
      <TitleHeading title="Users page" />
      <UsersList />
    </div>
  );
};

export default UsersPage;
