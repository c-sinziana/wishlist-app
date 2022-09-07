import React from "react";
import ItemsList from "../organisms/ItemsList";
import { Title } from "../atoms/Title";
import AddItemToWishlist from "../organisms/AddItemToWishlist";
import ModalNewWishlist from "../organisms/ModalNewWishlist";

const WishlistTemplate = () => {
  return (
    <div>
      <Title title="My Wishlists" />
      <ModalNewWishlist />
    </div>
  );
};

export default WishlistTemplate;
