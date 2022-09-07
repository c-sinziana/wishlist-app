import React, { useEffect, useState } from "react";
import { Card, Container, Typography } from "@mui/material";

import { Me } from "../../api/utils/entities";
import { MeApi } from "../../api/MeApi";
import { Initializers } from "../../constants/Initializers";

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

  const showDob = (dob: string): string => {
    let cleanedDbo: string = dob.substring(0, 10);
    let correctFormatDbo: string = cleanedDbo.split("-").reverse().join("-");

    return correctFormatDbo;
  };

  return (
    <Container>
      <Card>
        <Typography>Name: {profile.name}</Typography>
        <Typography>Email: {profile.email}</Typography>
        <Typography>Phone: {profile.phone}</Typography>
        <Typography>Date of birth: {showDob(profile.dob)}</Typography>
        <Typography>Address:</Typography>
        <Typography>Country: {profile.address.country}</Typography>
        <Typography>City: {profile.address.city}</Typography>
        <Typography>Street: {profile.address.street}</Typography>
        <Typography>Zip: {profile.address.zip}</Typography>
        <Typography>Group name: {profile.groups[0].name}</Typography>
      </Card>
    </Container>
  );
};

export default ProfileTemplate;
