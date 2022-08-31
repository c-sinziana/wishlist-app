// buton Register de tip NBA -> pagina de Create Account;
// button Login de tip NBA -> pagina de Login (pt utilizatorii care au deja cont);
// buton de Logout de tip NBA -> redirectioneaza utilizatorul spre prima pagina;
// buton Create Account de tip AUBA -> pagina de Home daca contul a fost creat cu succes;
// buton Home de tip NBA -> intoarce utilizatorul pe pagina de Home;
// button Create New Wishlist de tip NBA -> redirectionare spre o wishlist goala;
// buton Add New Wishlist de tip NBA -> actualizeaza my wishlists si intoarce user-ul pe pagina de Home;
// buton Shared with me wishlists de tip AUBA -> directioneaza utilizatorul spre o pagina cu toate wishlist-urile prietenilor;
// button My wishlists de tip AUBA -> directioneaza utilizatorul spre o pagina cu toate wishlist-urile create de el;
// button My groups de tip AUBA -> directioneza utilizatorul spre o pagina cu toate grupurile sale;

// C O N T E X T //
// pagini pentru utilizator neautentificat: Register, Login
// pagini pentru utilizator autentificat: restul

//Legenda:
//ActionItemButtonAtom - AIBA
//ActionUserButtonAtom - AUBA
//NavigationButtonAtom - NBA

import React, { Profiler, useState } from "react";
import { Routes, Link, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../components/pages/LoginPage";
import { RegisterAccountPage } from "../components/pages/RegisterAccountPage";
import ItemButtonsTemplate from "../components/templates/ItemButtonsTemplate";
import { UserContext } from "../hooks/context/context";
import ProfilePage from "../components/pages/ProfilePage";
import NewWishlistPage from "../components/pages/NewWishlistPage";
import MyGroupsPage from "../components/pages/MyGroupsPage";

type RestrictedRouteProps = {
  MyComponent: React.FC;
};

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  MyComponent,
}: RestrictedRouteProps) => {
  const isLoginToken = localStorage.getItem("token");

  console.log(isLoginToken);

  return isLoginToken !== null ? <MyComponent /> : <Navigate to="/" />;
};

export const WishlistRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterAccountPage />} />
      <Route
        path="/home"
        element={<RestrictedRoute MyComponent={ItemButtonsTemplate} />}
      />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/new-wishlist" element={<NewWishlistPage />} />
      <Route path="/my-groups" element={<MyGroupsPage />} />
    </Routes>
  );
};
