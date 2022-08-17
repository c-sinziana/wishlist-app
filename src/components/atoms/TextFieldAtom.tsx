import React from "react";
import { TextField } from "@mui/material";

type TextFieldProp = {
  label: string;
  autoFocus: boolean;
};

export const TextFieldAtom: React.FC<TextFieldProp> = ({
  label,
  autoFocus,
}: TextFieldProp): React.ReactElement => {
  return <TextField label={label} autoFocus={autoFocus} />;
};
