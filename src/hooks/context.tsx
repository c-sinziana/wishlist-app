import { createContext } from "react";

interface UserContextInterface {
  isLoggedIn: boolean;
}

export const userContext = createContext<UserContextInterface>({
  isLoggedIn: false,
});
