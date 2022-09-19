import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button, Fab, Grid, Typography } from "@mui/material";
import { Wishlist } from "../../api/utils/entities";
import { WishlistApi, WishlistGetResponse } from "../../api/WishlistApi";
import DeleteWishlistButton from "../molecules/DeleteWishlistButton";
import ItemsListTemplate from "../templates/ItemsListTemplate";
import EditWishlistCard from "../molecules/EditWishlistCard";
import { Initializers } from "../../constants/Initializers";

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
    useState<WishlistGetResponse>({
      wishlists: [
        {
          id: 0,
          name: "",
          details: "",
          items: [
            {
              item: Initializers.ITEM,
            },
          ],
        },
      ],
    });
  const [wishlistItemsIds, setWishlistItemsIds] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => setIsEditing((b) => !b);

  useEffect(() => {
    if (wishlistsResponse.wishlists.length <= 0) {
      wishlistGetFetcher();
    }
  }, []);

  const wishlistGetFetcher = async () => {
    await WishlistApi.getWishlists()
      .then((responseBody) => {
        setWishlistsResponse({ wishlists: responseBody.wishlists });

        let wishlistItemIdsArray: number[] = getWishlistItemsIds(
          wishlistsResponse.wishlists[wishlist.id]
        );

        setWishlistItemsIds(wishlistItemIdsArray);
        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWishlistItemsIds = (wishlist: Wishlist): number[] => {
    let itemIdsArray: number[] = [];

    for (let itemIndex = 0; itemIndex < itemIdsArray.length; ++itemIndex) {
      itemIdsArray.push(wishlist.items[itemIndex].item.id);
    }

    return itemIdsArray;
  };

  if (isEditing) {
    return (
      <>
        <Button onClick={() => toggleIsEditing()}>Cancel</Button>
        <EditWishlistCard
          id={wishlist.id}
          handleAddToWishlist={handleAddToWishlist}
          handleDeleteWishlistItem={handleDeleteWishlistItem}
          updatedWishlist={{
            wishlist: { name: wishlist.name, details: wishlist.details },
            itemIds: wishlistItemsIds,
          }}
        />
      </>
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
            isAddItem={false}
            isEditItem={false}
            isDeleteItemFromWishlist={true}
            wishlistId={wishlist.id}
            isItemFromWishlist={true}
            isItemWishlistTemplate={true}
            handleAddToWishlist={() => console.log("Unused")}
            handleDeleteWishlistItem={handleDeleteWishlistItem}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}


