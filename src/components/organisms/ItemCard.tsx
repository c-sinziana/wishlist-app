import React, { useState, useReducer } from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Fab, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Item } from "../../api/utils/entities";
import DeleteItemButton from "../molecules/DeleteItemButton";
import EditItemCard from "../molecules/EditItemCard";
import PurchaseItemButton from "../molecules/PurchaseItemButton";

type ItemCardProps = {
  wishlistId: number;
  item: Item;
  isAddItemToWishlist: boolean;
  isEditItemInWishlist: boolean;
  isDeleteItemFromWishlist?: boolean;
  isItemFromWishlist?: boolean;
  handleAddToWishlist: (clickedItemId: number) => void;
};

export default function ItemCard({
  wishlistId,
  item,
  isAddItemToWishlist,
  isEditItemInWishlist,
  isDeleteItemFromWishlist,
  isItemFromWishlist,
  handleAddToWishlist,
}: ItemCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  if (isEditing) {
    return (
      <EditItemCard
        id={item.id}
        name={item.name}
        details={item.details}
        quantity={item.quantity}
        size={item.size}
        maker={item.maker}
        model={item.model}
        link={item.link}
      />
    );
  }

  return (
    <Grid lg={15} item={true}>
      <Card elevation={3} sx={{ ml: "1rem", mt: "1rem" }}>
        <CardHeader
          action={
            <>
              <DeleteItemButton
                id={item.id}
                isDeleteItemFromWishlist={isDeleteItemFromWishlist}
              />
              <PurchaseItemButton id={wishlistId} itemId={item.id} isItemFromWishlist={isItemFromWishlist} />
            </>
          }
          title={item.name}
          style={{ backgroundColor: "#cac8cc" }}
        />
        <CardContent key={item.id} style={{ backgroundColor: "lightgrey" }}>
          <Typography variant="body2" color="textSecondary">
            Details: {item.details}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Quantity: {item.quantity}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Size: {item.size}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Maker: {item.maker}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Model: {item.model}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Link: {item.link}
          </Typography>
          {isEditItemInWishlist && (
            <Fab size="small" color="secondary" aria-label="edit">
              <EditIcon onClick={() => toggleIsEditing()} />
            </Fab>
          )}
          {isAddItemToWishlist && (
            <Fab
              size="small"
              color="primary"
              onClick={() => handleAddToWishlist(item.id)}
              sx={{ ml: "1rem" }}
            >
              <AddIcon />
            </Fab>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
