import React from "react";
import { Button } from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";

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
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const NavigationButton: React.FC<NavigationButtonProp> = ({
  buttonType,
  buttonText,
  onClick,
}: NavigationButtonProp): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        type={buttonType}
        variant="contained"
        color="custom"
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};
