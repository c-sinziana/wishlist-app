import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Modal, TextField } from "@mui/material";
import { ItemPostPutRequest, ItemApi } from "../../api/ItemApi";
import { Item } from "../../api/utils/entities";
import { useNavigate } from "react-router-dom";
import { Configs } from "../../constants/Configs";

function CreateItemModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

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

  useEffect(() => {
    if (isResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        handleClose();
        location.reload();
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful]);

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
    <>
      <Button onClick={handleOpen}>Create item!</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 200 }}>
          <h2>Create new item:</h2>
          Name:
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          Details:
          <TextField
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          Quantity:
          <TextField value={quantity} disabled />
          Size:
          <TextField value={size} onChange={(e) => setSize(e.target.value)} />
          Maker:
          <TextField value={maker} onChange={(e) => setMaker(e.target.value)} />
          Model:
          <TextField value={model} onChange={(e) => setModel(e.target.value)} />
          Link:
          <TextField value={link} onChange={(e) => setLink(e.target.value)} />
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={() => {
              createItemFetcher({
                name,
                details,
                quantity,
                size,
                maker,
                model,
                link,
              });
            }}
          >
            Save item
          </Button>
          {isResponseSuccesful === true && (
            <Alert severity="success">Item succesfully created</Alert>
          )}
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default CreateItemModal;
