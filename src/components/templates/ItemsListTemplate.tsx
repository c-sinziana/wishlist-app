import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import { ItemApi, ItemPostGetResponse } from "../../api/ItemApi";
import { Container } from "@mui/system";
import ItemCard from "../organisms/ItemCard";
import { Item } from "../../api/utils/entities";

type ItemsListTemplateProp = {
  renderedItems: { item: Item }[];
  wishlistId: number;
  isAddItem: boolean;
  isItemFromWishlist: boolean;
  isDeleteItemFromWishlist: boolean;
  isEditItem: boolean;
  isItemWishlistTemplate: boolean;
  handleAddToWishlist: (clickedItemId: number) => void;
  handleDeleteWishlistItem: (clickedItemId: number) => void;
};

export default function ItemsListTemplate({
  renderedItems,
  wishlistId,
  isAddItem,
  isEditItem,
  isItemFromWishlist,
  isDeleteItemFromWishlist,
  isItemWishlistTemplate,
  handleAddToWishlist,
  handleDeleteWishlistItem,
}: ItemsListTemplateProp) {
  const [shownItems, setShownItems] = useState<ItemPostGetResponse>({
    items: [],
  });
  const [shownItemIds, setShownItemIds] = useState<number[]>([]);

  useEffect(() => {
    if (renderedItems.length === 0) {
      itemFetcher();
    }
  }, []);

  const itemFetcher = async () => {
    await ItemApi.getItems()
      .then((data) => {
        setShownItems({
          items: data.items,
        });

        let dataItemIds = [];
        let dataItemsLength = data.items.length;
        for (let index = 0; index < dataItemsLength; ++index) {
          dataItemIds.push(data.items[index].id);
        }

        setShownItemIds(dataItemIds);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {isItemWishlistTemplate === false && (
          <>
            {shownItems.items.map((shownItem: Item, index: number) => (
              <ItemCard
                key={index}
                item={shownItem}
                isAddItemToWishlist={isAddItem}
                isEditItemInWishlist={isEditItem}
                wishlistId={wishlistId}
                isItemFromWishlist={isItemFromWishlist}
                isDeleteItemFromWishlist={isDeleteItemFromWishlist}
                handleAddToWishlist={handleAddToWishlist}
                handleDeleteWishlistItem={handleDeleteWishlistItem}
              />
            ))}
          </>
        )}
        {isItemWishlistTemplate === true && (
          <>
            {renderedItems.map((shownItem: { item: Item }, index: number) => (
              <ItemCard
                key={index}
                item={shownItem.item}
                isAddItemToWishlist={isAddItem}
                isEditItemInWishlist={isEditItem}
                wishlistId={wishlistId}
                isItemFromWishlist={isItemFromWishlist}
                isDeleteItemFromWishlist={isDeleteItemFromWishlist}
                handleAddToWishlist={handleAddToWishlist}
                handleDeleteWishlistItem={handleDeleteWishlistItem}
              />
            ))}
          </>
        )}
      </Grid>
    </Container>
  );
}
