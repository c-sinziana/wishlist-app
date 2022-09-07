import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ItemsList from "../organisms/ItemsList";
import { Title } from "../atoms/Title";
import CreateItemModal from "../organisms/CreateItemModal";

const MyItemsPage = () => {
  return (
    <Container>
      <Title title="My items" />
      <CreateItemModal />
      <Grid mt={5}>
        <ItemsList />
      </Grid>
    </Container>
  );
};

export default MyItemsPage;
