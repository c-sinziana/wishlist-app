import React, { useState, useReducer } from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  Alert,
  Button,
  Fab,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Item } from "../../api/utils/entities";
import { ItemApi, ItemPostPutRequest } from "../../api/ItemApi";
import { PostPutDeleteResponse } from "../../api/utils/generics";

export default function EditItemCard({
  id,
  name,
  details,
  quantity,
  size,
  maker,
  model,
  link,
}: Item) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  const [itemResponse, setItemResponse] = useState<PostPutDeleteResponse>({
    message: "",
  });

  const [editName, setEditName] = useState<string>(name);
  const [editDetails, setEditDetails] = useState<string>(details);
  const [editQuantity, setEditQuantity] = useState<number>(quantity);
  const [editSize, setEditSize] = useState<string>(size);
  const [editMaker, setEditMaker] = useState<string>(maker);
  const [editModel, setEditModel] = useState<string>(model);
  const [editLink, setEditLink] = useState<string>(link);

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updateItemFetcher = async (
    itemId: number,
    bodyData: ItemPostPutRequest
  ) => {
    ItemApi.putItem(itemId, bodyData)
      .then((data) => {
        if (data.message !== undefined) {
          setItemResponse(data);
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
    <Grid display="flex" flexDirection="column">
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15}>
          <CardContent key={id}>
            Name:
            <TextField
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            Details:
            <TextField
              value={editDetails}
              onChange={(e) => setEditDetails(e.target.value)}
            />
            Quantity:
            <TextField type="number" disabled={true} value={quantity} />
            Size:
            <TextField
              value={editSize}
              onChange={(e) => setEditSize(e.target.value)}
            />
            Maker:
            <TextField
              value={editMaker}
              onChange={(e) => setEditMaker(e.target.value)}
            />
            Model:
            <TextField
              value={editModel}
              onChange={(e) => setEditModel(e.target.value)}
            />
            Link:
            <TextField
              value={editLink}
              onChange={(e) => setEditLink(e.target.value)}
            />
          </CardContent>
          <Button
            onClick={() =>
              updateItemFetcher(id, {
                name: editName,
                details: editDetails,
                quantity: editQuantity,
                size: editSize,
                maker: editMaker,
                model: editModel,
                link: editLink,
              })
            }
          >
            Edit item
          </Button>
          {isResponseSuccesful === true && (
            <Alert severity="success">Item succesfully updated</Alert>
          )}
        </Grid>
      </Card>
    </Grid>
  );
}
