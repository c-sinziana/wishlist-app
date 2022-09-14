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
          handleAddToWishlist={() => console.log("Unused")}
          isEditItem={true}
          isDeleteItemFromWishlist={true}
          wishlistId={-1}
        />
      </Grid>
    </Container>
  );
};

export default MyItemsPage;
