import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Alert, Button, Grid, TextField } from "@mui/material";

import { WishlistApi, WishlistPostPutRequest } from "../../api/WishlistApi";

import EditItemsListModal from "../organisms/EditItemsListModal";

type EditWishlistCardProps = {
  id: number;
  updatedWishlist: WishlistPostPutRequest;
  handleAddToWishlist: (clickedItemId: number) => void;
  handleDeleteWishlistItem?: (clickedItemId: number) => void;
};

export default function EditWishlistCard({
  id,
  updatedWishlist,
  handleAddToWishlist,
  handleDeleteWishlistItem,
}: EditWishlistCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  const [editName, setEditName] = useState<string>(
    updatedWishlist.wishlist.name
  );
  const [editDetails, setEditDetails] = useState<string>(
    updatedWishlist.wishlist.details
  );

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updateWishlistFetcher = async (
    id: number,
    bodyData: WishlistPostPutRequest
  ) => {
    updatedWishlist.wishlist.name = editName;
    updatedWishlist.wishlist.details = editDetails;

    await WishlistApi.putWishlist(id, bodyData)
      .then((data) => {
        if (data !== undefined) {
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
          <CardContent>
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
          </CardContent>
          <Button
            onClick={async () => {
              await updateWishlistFetcher(id, updatedWishlist);
            }}
          >
            Submit
          </Button>
          <EditItemsListModal handleAddToWishlist={handleAddToWishlist} />
          {isResponseSuccesful === true && (
            <Alert severity="success">Wishlist succesfully updated</Alert>
          )}
        </Grid>
      </Card>
    </Grid>
  );
}
