import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Modal,
  TextField,
} from "@mui/material";

import { MeApi, MePutRequest, MePutResponse } from "../../api/MeApi";
import { Initializers } from "../../constants/Initializers";
import { trimUpdateDate } from "../../utils/DateUtils";
import { Configs } from "../../constants/Configs";

type EditProfileModalProps = {
  me: MePutResponse;
  handleCloseModal: (isClosed: boolean) => void;
};

export default function EditProfileModal({
  me,
  handleCloseModal,
}: EditProfileModalProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    handleCloseModal(false);
  };

  const [meResponse, setMeResponse] = useState<MePutResponse>({
    name: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    address: Initializers.ADDRESS,
  });

  const [editName, setEditName] = useState<string>(me.name);
  const [editPhone, setEditPhone] = useState<string>(me.phone);
  const [editDob, setEditDob] = useState<string>(me.dob);
  const [editCountry, setEditCountry] = useState<string>(me.address.country);
  const [editCity, setEditCity] = useState<string>(me.address.city);
  const [editStreet, setEditStreet] = useState<string>(me.address.street);
  const [editZip, setEditZip] = useState<string>(me.address.zip);

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  useEffect(() => {
    if (isResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        handleClose();
        location.reload();
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful]);

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
    <>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 200 }}>
          <TextField
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <TextField disabled={true} value={me.email} />
          <TextField
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
          />
          <TextField
            value={trimUpdateDate(editDob)}
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
          <Button onClick={handleClose}>Close</Button>

          <Button
            onClick={() =>
              updateMeFetcher({
                name: editName,
                phone: editPhone,
                dob: editDob,
                address: {
                  id: me.address.id,
                  country: editCountry,
                  city: editCity,
                  street: editStreet,
                  zip: editZip,
                },
              })
            }
          >
            Submit
          </Button>

          {isResponseSuccesful === true && (
            <Alert severity="success"> Profile succesfully updated</Alert>
          )}
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
