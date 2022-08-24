import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { spacing } from "@mui/system";

const buttons = [
  <Button
    key="add"
    sx={{
      mr: "1rem",
    }}
  >
    Add item
  </Button>,
  <Button
    key="remove"
    sx={{
      mr: "1rem",
    }}
  >
    Remove item
  </Button>,
  <Button
    key="reserve"
    sx={{
      mr: "1rem",
    }}
  >
    Reserve item
  </Button>,
];

export default function ItemButtonsTemplate() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
