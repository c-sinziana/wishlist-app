import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import { LoginPage } from "../components/pages/LoginPage";
import { RegisterAccountPage } from "../components/pages/RegisterAccountPage";
import ProfilePage from "../components/pages/ProfilePage";
import MyGroupsPage from "../components/pages/MyGroupsPage";
import MyWishlistPage from "../components/pages/MyWishlistPage";
import NotificationsPage from "../components/pages/NotificationsPage";
import MyItemsPage from "../components/pages/MyItemsPage";

type RestrictedRouteProps = {
  MyComponent: React.FC;
};

const AnonymousUserRoute: React.FC<RestrictedRouteProps> = ({
  MyComponent,
}: RestrictedRouteProps) => {
  const loginToken = Cookies.get("token");

  return loginToken === undefined ? (
    <MyComponent />
  ) : (
    <Navigate to="/my-wishlists" />
  );
};

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  MyComponent,
}: RestrictedRouteProps) => {
  const loginToken = Cookies.get("token");

  return loginToken !== undefined ? <MyComponent /> : <Navigate to="/" />;
};

export const WishlistRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<AnonymousUserRoute MyComponent={LoginPage} />}
      />
      <Route
        path="/register"
        element={<AnonymousUserRoute MyComponent={RegisterAccountPage} />}
      />
      <Route path="/" element={<AnonymousUserRoute MyComponent={LoginPage} />} />
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
    </Routes>
  );
};
