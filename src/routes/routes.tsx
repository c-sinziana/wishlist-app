import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import { LoginPage } from "../components/pages/LoginPage";
import { RegisterAccountPage } from "../components/pages/RegisterAccountPage";
import ProfilePage from "../components/pages/ProfilePage";
import MyGroupsPage from "../components/pages/MyGroupsPage";
import WishlistTemplate from "../components/templates/WishlistTemplate";
import MyWishlistPage from "../components/pages/MyWishlistPage";
import NotificationsPage from "../components/pages/NotificationsPage";
import MyItemsPage from "../components/pages/MyItemsPage";
import UsersPage from "../components/pages/UsersPage";

type RestrictedRouteProps = {
  MyComponent: React.FC;
};

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  MyComponent,
}: RestrictedRouteProps) => {
  //const loginToken = localStorage.getItem("token");
  const loginToken = Cookies.get("token");

  return loginToken !== undefined ? <MyComponent /> : <Navigate to="/" />;
};

export const WishlistRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterAccountPage />} />
      <Route
        path="/home"
        element={<RestrictedRoute MyComponent={WishlistTemplate} />}
      />
      <Route
        path="/profile"
        element={<RestrictedRoute MyComponent={ProfilePage} />}
      />
      <Route
        path="/my-items"
        element={<RestrictedRoute MyComponent={MyItemsPage} />}
      />
      <Route
        path="/my-wishlists"
        element={<RestrictedRoute MyComponent={MyWishlistPage} />}
      />
      <Route
        path="/all-groups"
        element={<RestrictedRoute MyComponent={MyGroupsPage} />}
      />
      <Route
        path="/my-notifications"
        element={<RestrictedRoute MyComponent={NotificationsPage} />}
      />
      <Route
        path="/all-users"
        element={<RestrictedRoute MyComponent={UsersPage} />}
      />
    </Routes>
  );
};
