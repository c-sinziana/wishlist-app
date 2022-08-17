import React from "react";
import { userContext } from "../../hooks/context";
import { NavigationButton } from "../atoms/NavigationButtonAtom";
import { TitleAtom } from "../atoms/TitleAtom";

export const RegisterAccountPage: React.FC = (): React.ReactElement => {
  const loggedUser = React.useContext(userContext);
  
  return (
    <>
      <TitleAtom title="Create an account here!" />
      <NavigationButton buttonText="Create an account"/>
    </>
  );
};
