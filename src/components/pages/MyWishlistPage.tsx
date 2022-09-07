import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { WishlistApi, WishlistGetResponse } from "../../api/WishlistApi";
import WishlistCard from "../molecules/WishlistCard";
import WishlistTemplate from "../templates/WishlistTemplate";
import { Grid } from "@mui/material";

const MyWishlistsPage = () => {
  const [shownWishlists, setShownWishlists] = useState<WishlistGetResponse>({
    wishlists: [
      {
        id: 0,
        name: "",
        details: "",
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
      },
    ],
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
      <Grid display="flex" flexDirection="column">
        {shownWishlists.wishlists.map((wishlist) => (
          <WishlistCard
            id={wishlist.id}
            name={wishlist.name}
            details={wishlist.details}
            items={wishlist.items}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default MyWishlistsPage;
