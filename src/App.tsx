import Cookies from "js-cookie";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Navbar from "./components/templates/NavbarTemplate";
import { WishlistRouter } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {Cookies.get("token") !== undefined && <Navbar />}
        <WishlistRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
