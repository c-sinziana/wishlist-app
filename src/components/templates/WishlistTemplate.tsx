import React from "react";

import ItemsListTemplate from "./ItemsListTemplate";
import { TitleHeading } from "../atoms/TitleHeading";
import CreateWishlistModal from "../organisms/CreateWishlistModal";

const WishlistTemplate = () => {
  return (
    <div>
      <TitleHeading title="My Wishlists" />
      <CreateWishlistModal />
    </div>
  );
};

export default WishlistTemplate;
