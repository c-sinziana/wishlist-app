import React, { useEffect, useState } from "react";
import { Button, Card, Container, Typography } from "@mui/material";

import { Me } from "../../api/utils/entities";
import { MeApi } from "../../api/MeApi";
import { Initializers } from "../../constants/Initializers";
import { trimDate } from "../../utils/DateUtils";
import EditProfileModal from "../molecules/EditProfileModal";

const ProfileTemplate = () => {
  const [profile, setProfile] = useState<Me>({
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    address: Initializers.ADDRESS,
    groups: [Initializers.GROUP],
    notifications: [Initializers.NOTIFICATION],
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    meFetcher();
  }, []);

  const meFetcher = async () => {
    await MeApi.getMe()
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleIsEditing = () => setIsEditing(!isEditing);

  if (isEditing) {
    return (
      <>
        <Container>
          <Card>
            <Typography>Name: {profile.name}</Typography>
            <Typography>Email: {profile.email}</Typography>
            <Typography>Phone: {profile.phone}</Typography>
            <Typography>Date of birth: {trimDate(profile.dob)}</Typography>
            <Typography>Address:</Typography>
            <Typography>Country: {profile.address.country}</Typography>
            <Typography>City: {profile.address.city}</Typography>
            <Typography>Street: {profile.address.street}</Typography>
            <Typography>Zip: {profile.address.zip}</Typography>
            <Typography>
              Latest group's names: {profile.groups[0].name}
            </Typography>
          </Card>
          <Button onClick={() => toggleIsEditing()}>Edit profile</Button>
        </Container>
        <EditProfileModal
          me={{
            name: profile.name,
            email: profile.email,
            password: profile.password,
            dob: profile.dob,
            phone: profile.phone,
            address: profile.address,
          }}
          handleCloseModal={() => toggleIsEditing()}
        />
      </>
    );
  }

  return (
    <Container>
      <Card>
        <Typography>Name: {profile.name}</Typography>
        <Typography>Email: {profile.email}</Typography>
        <Typography>Phone: {profile.phone}</Typography>
        <Typography>Date of birth: {trimDate(profile.dob)}</Typography>
        <Typography>Address:</Typography>
        <Typography>Country: {profile.address.country}</Typography>
        <Typography>City: {profile.address.city}</Typography>
        <Typography>Street: {profile.address.street}</Typography>
        <Typography>Zip: {profile.address.zip}</Typography>
        <Typography>Latest group's names: {profile.groups[0].name}</Typography>
      </Card>
      <Button onClick={() => toggleIsEditing()}>Edit profile</Button>
    </Container>
  );
};

export default ProfileTemplate;
