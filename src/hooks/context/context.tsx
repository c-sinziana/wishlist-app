import { createContext } from "react";

interface UserContextInterface {
  isLoggedIn: boolean;
}

export const UserContext = createContext<UserContextInterface>({
  isLoggedIn: false,
});
