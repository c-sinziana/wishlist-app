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
    <Navigate to="/wishlist-app/my-wishlists" />
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
        path="/wishlist-app/login"
        element={<AnonymousUserRoute MyComponent={LoginPage} />}
      />
      <Route
        path="/wishlist-app/register"
        element={<AnonymousUserRoute MyComponent={RegisterAccountPage} />}
      />
      <Route path="/wishlist-app" element={<AnonymousUserRoute MyComponent={LoginPage} />} />
      <Route
        path="/wishlist-app/profile"
        element={<RestrictedRoute MyComponent={ProfilePage} />}
      />
      <Route
        path="/wishlist-app/my-items"
        element={<RestrictedRoute MyComponent={MyItemsPage} />}
      />
      <Route
        path="/wishlist-app/my-wishlists"
        element={<RestrictedRoute MyComponent={MyWishlistPage} />}
      />
      <Route
        path="/wishlist-app/all-groups"
        element={<RestrictedRoute MyComponent={MyGroupsPage} />}
      />
      <Route
        path="/wishlist-app/my-notifications"
        element={<RestrictedRoute MyComponent={NotificationsPage} />}
      />
    </Routes>
  );
};
