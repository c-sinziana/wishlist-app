import React, { useState } from "react";
import { Alert, Card, CardContent, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { GroupApi, GroupPostRequest } from "../../api/GroupApi";

const AddGroupCard = () => {
  const [group, setGroup] = useState<GroupPostRequest>({
    name: "",
    details: "",
  });

  const [name, setName] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const createGroupFetcher = async (bodyData: GroupPostRequest) => {
    GroupApi.postGroup(bodyData)
      .then((data) => {
        if (data.name !== undefined) {
          setGroup(data);
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
    <Grid display="flex" flexDirection="row" ml={65} mt={6}>
      <Card elevation={5} sx={{ height: "5%", width: "50%" }}>
        <CardContent>
          <Grid display="flex" flexDirection="column" xs={10} md={6} lg={5}>
            <h2> Create new group: </h2>
            Group's name:
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            Details of the group:
            <TextField
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </Grid>
        </CardContent>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon
            onClick={async () => {
              await createGroupFetcher({
                name,
                details,
              });
            }}
          />
        </Fab>
        {isResponseSuccesful === true && (
          <Alert severity="success">Group successfully created</Alert>
        )}
      </Card>
    </Grid>
  );
};

export default AddGroupCard;
