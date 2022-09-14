import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from "@mui/material";

import { MeApi, MePutRequest, MePutResponse } from "../../api/MeApi";
import { Initializers } from "../../constants/Initializers";

export default function EditProfileCard({
  name,
  email,
  dob,
  phone,
  address: { id, country, city, street, zip },
}: MePutResponse) {
  const [isEditing, setIsEditing] = useState(false);

  const [meResponse, setMeResponse] = useState<MePutResponse>({
    name: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    address: Initializers.ADDRESS,
  });

  const [editName, setEditName] = useState<string>(name);
  const [editPhone, setEditPhone] = useState<string>(phone);
  const [editDob, setEditDob] = useState<string>(dob);
  const [editCountry, setEditCountry] = useState<string>(country);
  const [editCity, setEditCity] = useState<string>(city);
  const [editStreet, setEditStreet] = useState<string>(street);
  const [editZip, setEditZip] = useState<string>(zip);

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updateMeFetcher = async (bodyData: MePutRequest) => {
    await MeApi.putMe(bodyData)
      .then((data) => {
        if (data !== undefined) {
          setMeResponse(data);
          setIsResponseSuccessful(true);
        } else {
          setIsResponseSuccessful(false);
        }
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        console.log(err);
      });
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <TextField
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <TextField disabled={true} value={email} />
          <TextField
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
          />
          <TextField
            value={editDob}
            onChange={(e) => setEditDob(e.target.value)}
          />
          <TextField
            placeholder="country"
            value={editCountry}
            onChange={(e) => setEditCountry(e.target.value)}
          />
          <TextField
            placeholder="city"
            value={editCity}
            onChange={(e) => setEditCity(e.target.value)}
          />
          <TextField
            placeholder="street"
            value={editStreet}
            onChange={(e) => setEditStreet(e.target.value)}
          />
          <TextField
            placeholder="zip"
            value={editZip}
            onChange={(e) => setEditZip(e.target.value)}
          />

          <Button
            onClick={() =>
              updateMeFetcher({
                name: editName,
                phone: editPhone,
                dob: editDob,
                address: {
                  id: id,
                  country: editCountry,
                  city: editCity,
                  street: editStreet,
                  zip: editZip,
                },
              })
            }
          >
            Edit profile
          </Button>

          {isResponseSuccesful === true && (
            <Alert severity="success"> Profile succesfully updated</Alert>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
