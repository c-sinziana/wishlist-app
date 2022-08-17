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
  buttonText: string;
};

export const NavigationButton: React.FC<NavigationButtonProp> = ({
  buttonText,
}: NavigationButtonProp): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="custom">
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};
