import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { WishlistApi, WishlistGetResponse } from "../../api/WishlistApi";
import WishlistCard from "../organisms/WishlistCard";
import WishlistTemplate from "../templates/WishlistTemplate";
import { Grid } from "@mui/material";
import { Initializers } from "../../constants/Initializers";

const MyWishlistsPage = () => {
  const [shownWishlists, setShownWishlists] = useState<WishlistGetResponse>({
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

  useEffect(() => {
    wishlistsFetcher();
  }, []);

  const wishlistsFetcher = async () => {
    await WishlistApi.getWishlists()
      .then((data) => {
        setShownWishlists({
          wishlists: data.wishlists,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <WishlistTemplate />
      <Grid>
        {shownWishlists.wishlists.map((wishlist, index) => (
          <WishlistCard
            key={index}
            wishlist={{
              id: wishlist.id,
              name: wishlist.name,
              details: wishlist.details,
              items: wishlist.items,
            }}
            handleAddToWishlist={() => console.log("Unused")}
            handleDeleteWishlistItem={() => console.log("Unused")}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default MyWishlistsPage;
