import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { WishlistApi, WishlistGetResponse } from "../../api/WishlistApi";
import WishlistCard from "../organisms/WishlistCard";
import WishlistTemplate from "../templates/WishlistTemplate";
import { Grid } from "@mui/material";

const MyWishlistsPage = () => {
  const [shownWishlists, setShownWishlists] = useState<WishlistGetResponse>({
    wishlists: [],
  });

  useEffect(() => {
    async function WishlistsShow() {
      await wishlistsFetcher();
    }

    WishlistsShow();
  }, []);

  const wishlistsFetcher = async () => {
    await WishlistApi.getWishlists()
      .then((data) => {
        let resultWishlists = [];

        let resultsCounter = data.wishlists.length;
        for (let index = 0; index < resultsCounter; ++index) {
          resultWishlists.push(data.wishlists[index]);
        }

        setShownWishlists({
          wishlists: resultWishlists,
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
        {shownWishlists.wishlists.map((wishlist) => (
          <WishlistCard
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
