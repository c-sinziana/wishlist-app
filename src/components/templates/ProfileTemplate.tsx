import React, { useEffect, useState } from "react";
import { Button, Card, Container, Typography } from "@mui/material";

import { Me, Address } from "../../api/utils/entities";
import { MeApi } from "../../api/MeApi";
import { Initializers } from "../../constants/Initializers";
import EditProfileCard from "../molecules/EditProfileCard";
import { trimDate } from "../../utils/DateUtils";

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
    async function ProfileTemplate() {
      await meFetcher();
    }

    ProfileTemplate();
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
      <EditProfileCard
        name={profile.name}
        email={profile.email}
        password={profile.password}
        dob={profile.dob}
        phone={profile.phone}
        address={{
          id: profile.address.id,
          country: profile.address.country,
          city: profile.address.city,
          street: profile.address.street,
          zip: profile.address.zip,
        }}
      />
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
