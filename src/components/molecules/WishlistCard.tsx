import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography } from "@mui/material";

import { Wishlist } from "../../api/utils/entities";
import { WishlistApi } from "../../api/WishlistApi";
import ItemCard from "./ItemCard";
import DeleteWishlistButton from "./DeleteWishlistButton";

export default function WishlistCard({ id, name, details, items }: Wishlist) {
  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  useEffect(() => {
    async function wishlistFunction() {
      await wishlistGetFetcher();
    }

    wishlistFunction();
  }, []);

  const wishlistGetFetcher = async () => {
    await WishlistApi.getWishlists()
      .then(() => {
        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid display="flex" flexDirection="column">
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15} mt={2}>
          <CardHeader action={<DeleteWishlistButton id={id} />} title={`Wishlist ${name}`} />
          <CardContent key={id}>
            Name: <Typography> {name}</Typography>
            Details: <Typography> {details}</Typography>
            {items.length !== 0 && (
              <>
                Items:
                <Typography>
                  {items.map((item) => (
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
                </Typography>
              </>
            )}
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
