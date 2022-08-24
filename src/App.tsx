import { List } from "@mui/material";
import React from "react";
import "./App.css";

import { Title } from "./components/atoms/Title";
import Navbar from "./components/templates/NavbarTemplate";
import { LoginPage } from "./components/pages/LoginPage";

import { RegisterAccountPage } from "./components/pages/RegisterAccountPage";

import ItemButtonsTemplate from "./components/templates/ItemButtonsTemplate";

import { UserContext } from "./hooks/context/context";
import { WishlistRouter } from "./routes/routes";

function App() {
  const loggedUser = React.useContext(UserContext);

  return (
    <div className="App">
      <Navbar />
      <WishlistRouter />
    </div>
  );
}

export default App;
