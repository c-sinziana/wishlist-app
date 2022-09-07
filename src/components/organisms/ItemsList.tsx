import React, { useState, useEffect } from "react";
import { Card, Grid, TextField } from "@mui/material";
import { ItemApi, ItemPostGetResponse } from "../../api/ItemApi";
import { Container } from "@mui/system";
import ItemCard from "../molecules/ItemCard";
import ModalNewWishlist from "./ModalNewWishlist";

export default function ItemsList() {
  const [items, setItems] = useState<ItemPostGetResponse>({
    items: [
      {
        id: 0,
        name: "",
        details: "",
        quantity: 0,
        size: "",
        maker: "",
        model: "",
        link: "",
      },
    ],
  });

  useEffect(() => {
    async function itemFunction() {
      await itemFetcher();
    }

    itemFunction();
  }, []);

  const itemFetcher = async () => {
    await ItemApi.getItems()
      .then((data) => {
        let resultItems = [];

        let resultsCounter = data.items.length;
        for (let index = 0; index < resultsCounter; ++index) {
          resultItems.push(data.items[index]);
        }

        setItems({
          items: resultItems,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {items.items.map((item) => (
          <ItemCard
            id={item.id}
            name={item.name}
            details={item.details}
            quantity={item.quantity}
            size={item.size}
            maker={item.maker}
            model={item.model}
            link={item.link}
          />
        ))}
      </Grid>
    </Container>
  );
}
