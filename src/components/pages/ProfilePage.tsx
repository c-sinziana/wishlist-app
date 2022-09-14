import React from "react";
import { TitleHeading } from "../atoms/TitleHeading";
import ProfileTemplate from "../templates/ProfileTemplate";

const ProfilePage = () => {
  return (
    <div>
      <TitleHeading title="My profile:" />
      <ProfileTemplate />
    </div>
  );
};

export default ProfilePage;
