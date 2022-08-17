import React from "react";
import "./App.css";

import { RegisterAccountPage } from "./components/pages/RegisterAccountPage";
import { userContext } from "./hooks/context";

function App() {
  const loggedUser = React.useContext(userContext);
  //daca API-ul de login returneaza codul 200, deci token-ul JWT de autentificare
  //loggedUser.isLoggedIn = true;

  return (
    <div className="App">
      <RegisterAccountPage />
    </div>
  );
}

export default App;
