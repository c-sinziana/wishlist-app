import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import { LoginPage } from "../components/pages/LoginPage";
import { RegisterAccountPage } from "../components/pages/RegisterAccountPage";
import ProfilePage from "../components/pages/ProfilePage";
import MyGroupsPage from "../components/pages/MyGroupsPage";
import WishlistTemplate from "../components/templates/WishlistTemplate";
import MyWishlistPage from "../components/pages/MyWishlistPage";
import { AddNewItemPage } from "../components/pages/AddNewItemPage";
import AddGroupCard from "../components/organisms/AddGroupCard";
import NotificationsPage from "../components/pages/NotificationsPage";
import MyItemsPage from "../components/pages/MyItemsPage";

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
        path="/my-wishlist"
        element={<RestrictedRoute MyComponent={MyWishlistPage} />}
      />
      <Route
        path="/all-groups"
        element={<RestrictedRoute MyComponent={MyGroupsPage} />}
      />
      <Route
        path="/new-group"
        element={<RestrictedRoute MyComponent={AddGroupCard} />}
      />
      <Route
        path="/my-notifications"
        element={<RestrictedRoute MyComponent={NotificationsPage} />}
      />
    </Routes>
  );
};
