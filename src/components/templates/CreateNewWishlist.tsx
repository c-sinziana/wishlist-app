import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";

import CreateWishlistModal from "../organisms/CreateWishlistModal";

const CreateNewWishlist = () => {
  return (
    <Grid display="flex" flexDirection="row" ml={65} mt={6}>
      <Card elevation={5} sx={{ height: "5%", width: "50%" }}>
        <CardContent>
          <Grid display="flex" flexDirection="column" xs={10} md={6} lg={5}>
            <CreateWishlistModal />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CreateNewWishlist;
