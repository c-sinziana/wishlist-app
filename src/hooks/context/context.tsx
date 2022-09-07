import { createContext } from "react";

interface UserContextInterface {
  isLoggedIn: boolean;
}

export const UserContext: React.Context<UserContextInterface> =
  createContext<UserContextInterface>({
    isLoggedIn: false,
  });

/*
import { createContext, useContext } from "react";

export type UserContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (_: boolean) => void;
};

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const useUserContext = () => useContext(UserContext);
*/

// setState
