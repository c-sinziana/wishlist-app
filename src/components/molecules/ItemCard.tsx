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
import DeleteIcon from "@mui/icons-material/Delete";
import { Item } from "../../api/utils/entities";
import { ItemApi } from "../../api/ItemApi";
import DeleteItemButton from "./DeleteItemButton";
import EditItemCard from "./EditItemCard";

export default function ItemCard({
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
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  if (isEditing) {
    return (
      <EditItemCard
        id={id}
        name={name}
        details={details}
        quantity={quantity}
        size={size}
        maker={maker}
        model={model}
        link={link}
      />
    );
  }

  return (
    <div>
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15} display="flex" flexDirection="column">
          <CardHeader action={<DeleteItemButton id={id} />} title={name} />
          <CardContent key={id}>
            <Typography variant="body2" color="textSecondary">
              Details: {details}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Quantity: {quantity}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Size: {size}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Maker: {maker}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Model: {model}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Link: {link}
            </Typography>
            <Fab color="secondary" aria-label="edit">
              <EditIcon onClick={() => toggleIsEditing()} />
            </Fab>
          </CardContent>
        </Grid>
      </Card>
      {isResponseSuccesful === true && (
        <Alert severity="success">Wishlist item succesfully deleted</Alert>
      )}
    </div>
  );
}
