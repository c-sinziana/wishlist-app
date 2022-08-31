import React from "react";
import { Button } from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme: Theme = createTheme({
  palette: {
    custom: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

type NavigationButtonProp = {
  buttonType: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  onClickLogic: any;
  to: string;
};

export const NavigationButton: React.FC<NavigationButtonProp> = ({
  buttonType,
  buttonText,
  onClickLogic,
  to,
}: NavigationButtonProp): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Button
        type={buttonType}
        variant="contained"
        color="custom"
        onClick={() => {
          onClickLogic;
          navigate(to);
        }}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};
