import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, Typography } from "@mui/material";

import { Wishlist } from "../../api/utils/entities";
import { WishlistApi, WishlistGetResponse } from "../../api/WishlistApi";
import DeleteWishlistButton from "../molecules/DeleteWishlistButton";
import ItemsListTemplate from "../templates/ItemsListTemplate";
import EditWishlistCard from "../molecules/EditWishlistCard";

type WishlistCardProps = {
  wishlist: Wishlist;
  handleAddToWishlist: (clickedItemId: number) => void;
  handleDeleteWishlistItem: (clickedItemId: number) => void;
};

export default function WishlistCard({
  wishlist,
  handleAddToWishlist,
  handleDeleteWishlistItem,
}: WishlistCardProps) {
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);
  const [wishlistsResponse, setWishlistsResponse] =
    useState<WishlistGetResponse>({ wishlists: [] });
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => setIsEditing((b) => !b);

  useEffect(() => {
    async function wishlistFunction() {
      await wishlistGetFetcher();
    }

    if (wishlistsResponse.wishlists.length === 0) {
      wishlistFunction();
    }
  }, []);

  const wishlistGetFetcher = async () => {
    await WishlistApi.getWishlists()
      .then((responseBody) => {
        setWishlistsResponse({ wishlists: responseBody.wishlists });

        setWishlistItems(
          getWishlistItems(wishlistsResponse.wishlists[wishlist.id])
        );

        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWishlistItems = (wishlist: Wishlist): number[] => {
    let itemIdsArray: number[] = [];

    for (let itemIndex = 0; itemIndex < itemIdsArray.length; ++itemIndex) {
      itemIdsArray.push(wishlist.items[itemIndex].id);
    }

    return itemIdsArray;
  };

  if (isEditing) {
    return (
      <EditWishlistCard
        id={wishlist.id}
        handleAddToWishlist={handleAddToWishlist}
        handleDeleteWishlistItem={handleDeleteWishlistItem}
        updatedWishlist={{
          wishlist: { name: wishlist.name, details: wishlist.details },
          itemIds: wishlistItems,
        }}
      />
    );
  }

  return (
    <Grid lg={15} item={true}>
      <Card elevation={5} sx={{ ml: "1rem", mt: "1rem" }}>
        <Button onClick={() => toggleIsEditing()}>Edit wishlist</Button>
        <CardHeader
          action={<DeleteWishlistButton id={wishlist.id} />}
          title={`${wishlist.name}`}
        />
        <CardContent key={wishlist.id}>
          Details: <Typography> {wishlist.details}</Typography>
          <ItemsListTemplate
            renderedItems={wishlist.items}
            handleAddToWishlist={() => console.log("Unused")}
            isAddItem={false}
            isEditItem={false}
            isDeleteItemFromWishlist={false}
            wishlistId={wishlist.id}
            isFromWishlist={true}
            isItemFromWishlist={true}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
