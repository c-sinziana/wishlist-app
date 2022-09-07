import React, { useState } from "react";
import { Card, CardContent, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Item, Wishlist } from "../../api/utils/entities";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddItemToWishlist from "../organisms/AddItemToWishlist";
import ModalNewWishlist from "../organisms/ModalNewWishlist";
import { ItemApi, ItemPostPutRequest } from "../../api/ItemApi";
import {
  WishlistApi,
  WishlistPostRequest,
  WishlistPostResponse,
} from "../../api/WishlistApi";
import { Initializers } from "../../constants/Initializers";

const CreateNewWishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistPostResponse>({
    id: 0,
    name: "",
    details: "",
    items: [Initializers.ITEM],
  });

  const [name, setName] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const createWishlistFetcher = async (bodyData: WishlistPostRequest) => {
    WishlistApi.postWishlist(bodyData)
      .then((data) => {
        if (data.id !== undefined) {
          setWishlist(data);
          setIsResponseSuccessful(true);
        } else {
          setIsResponseSuccessful(false);
        }
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        console.log(err);
      });
  };

  return (
    <Grid display="flex" flexDirection="row" ml={65} mt={6}>
      <Card elevation={5} sx={{ height: "5%", width: "50%" }}>
        <CardContent>
          <Grid display="flex" flexDirection="column" xs={10} md={6} lg={5}>
            <ModalNewWishlist />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CreateNewWishlist;
