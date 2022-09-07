import React from "react";
import { Title } from "../atoms/Title";
import ProfileTemplate from "../templates/ProfileTemplate";

const ProfilePage = () => {
  return (
    <div>
      <Title title="My profile:" />
      <ProfileTemplate />
    </div>
  );
};

export default ProfilePage;
