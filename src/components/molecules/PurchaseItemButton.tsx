import { Alert, Button } from "@mui/material";
import React, { useState } from "react";

import { PostPutDeleteResponse } from "../../api/utils/generics";
import { WishlistApi } from "../../api/WishlistApi";

type PurchaseItemButtonProp = {
  id: number;
  itemId: number;
  isItemFromWishlist?: boolean;
};

export default function PurchaseItemButton({
  id,
  itemId,
  isItemFromWishlist,
}: PurchaseItemButtonProp) {
  const [isEditing, setIsEditing] = useState(false);

  const [itemPurchaseResponse, setItemPurchaseResponse] =
    useState<PostPutDeleteResponse>({
      message: "",
    });

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updatePurchaseItemFetcher = async (id: number, itemId: number) => {
    console.log("My wishlist id is: ", id);
    console.log("My wishlist item id is: ", itemId);
    await WishlistApi.putWishlistItemPurchase(id, itemId)
      .then((data) => {
        console.log(JSON.stringify(data));
        if (data.message !== undefined) {
          setItemPurchaseResponse(data);
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
      {isItemFromWishlist && (
        <Button onClick={() => updatePurchaseItemFetcher(id, itemId)}>
          Buy item
        </Button>
      )}
      {isResponseSuccesful === true && (
        <Alert severity="success"> Purchased item</Alert>
      )}
    </>
  );
}
