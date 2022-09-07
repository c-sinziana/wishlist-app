import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { ItemApi, ItemPostPutRequest } from "../../api/ItemApi";
import { Alert, Card, CardContent, Fab, Grid, TextField } from "@mui/material";
import { Item } from "../../api/utils/entities";

const AddItemToWishlist = () => {
  const [item, setItem] = useState<Item>({
    id: 0,
    name: "",
    details: "",
    quantity: 0,
    size: "",
    maker: "",
    model: "",
    link: "",
  });

  const [name, setName] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>("");
  const [maker, setMaker] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const createItemFetcher = async (bodyData: ItemPostPutRequest) => {
    ItemApi.postItem(bodyData)
      .then((data) => {
        if (data.id !== undefined) {
          setItem(data);
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
            Name:
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            Details:
            <TextField
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            Quantity:
            <TextField type="number" disabled={true} value={quantity} />
            Size:
            <TextField value={size} onChange={(e) => setSize(e.target.value)} />
            Maker:
            <TextField
              value={maker}
              onChange={(e) => setMaker(e.target.value)}
            />
            Model:
            <TextField
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            Link:
            <TextField value={link} onChange={(e) => setLink(e.target.value)} />
          </Grid>
        </CardContent>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon
            onClick={async () => {
              await createItemFetcher({
                name,
                details,
                quantity,
                size,
                maker,
                model,
                link,
              });
            }}
          />
        </Fab>
        {isResponseSuccesful === true && (
          <Alert severity="success">Wishlist item succesfully created</Alert>
        )}
      </Card>
    </Grid>
  );
};

export default AddItemToWishlist;
