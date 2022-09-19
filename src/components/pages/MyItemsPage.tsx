import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ItemsListTemplate from "../templates/ItemsListTemplate";
import { TitleHeading } from "../atoms/TitleHeading";
import CreateItemModal from "../organisms/CreateItemModal";

const MyItemsPage = () => {
  return (
    <Container>
      <TitleHeading title="My items" />
      <CreateItemModal />
      <Grid mt={5} item={true}>
        <ItemsListTemplate
          renderedItems={[]}
          isAddItem={false}
          isEditItem={true}
          isDeleteItemFromWishlist={false}
          isItemFromWishlist={false}
          isItemWishlistTemplate={false}
          wishlistId={-1}
          handleDeleteWishlistItem={() => console.log("Unused")}
          handleAddToWishlist={() => console.log("Unused")}
        />
      </Grid>
    </Container>
  );
};

export default MyItemsPage;
