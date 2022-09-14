import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import { ItemApi, ItemPostGetResponse } from "../../api/ItemApi";
import { Container } from "@mui/system";
import ItemCard from "../organisms/ItemCard";
import { Item } from "../../api/utils/entities";

type ItemsListTemplateProp = {
  wishlistId: number;
  renderedItems: Item[];
  isAddItem: boolean;
  isItemFromWishlist?: boolean;
  isDeleteItemFromWishlist?: boolean;
  isEditItem: boolean;
  isFromWishlist?: boolean;
  handleAddToWishlist: (clickedItemId: number) => void;
};

export default function ItemsListTemplate({
  wishlistId,
  isAddItem,
  renderedItems,
  isEditItem,
  isFromWishlist,
  handleAddToWishlist,
  isItemFromWishlist,
}: ItemsListTemplateProp) {
  const [shownItems, setShownItems] = useState<ItemPostGetResponse>({
    items: [],
  });

  useEffect(() => {
    async function itemFunction() {
      await itemFetcher();
    }

    if (shownItems.items.length === 0) {
      itemFunction();
    }
  }, []);

  const itemFetcher = async () => {
    if (renderedItems.length === 0 && isFromWishlist === undefined) {
      await ItemApi.getItems()
        .then((data) => {
          let resultItems = [];

          let resultsCounter = data.items.length;
          for (let index = 0; index < resultsCounter; ++index) {
            resultItems.push(data.items[index]);
          }

          setShownItems({
            items: resultItems,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setShownItems({ items: renderedItems });
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {shownItems.items.map((shownItem) => (
          <ItemCard
            key={shownItem.id}
            item={{
              id: shownItem.id,
              name: shownItem.name,
              details: shownItem.details,
              quantity: shownItem.quantity,
              size: shownItem.size,
              maker: shownItem.maker,
              model: shownItem.model,
              link: shownItem.link,
            }}
            isAddItemToWishlist={isAddItem}
            isEditItemInWishlist={isEditItem}
            handleAddToWishlist={handleAddToWishlist}
            wishlistId={wishlistId}
            isItemFromWishlist={isItemFromWishlist}
            isDeleteItemFromWishlist={true}
          />
        ))}
      </Grid>
    </Container>
  );
}
