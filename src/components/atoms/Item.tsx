export {};

/*import React from "react";

type Props = {
  wishlistItems: wishlistItemType[];
  addToWishlist: (clickedItem: wihsllistItemType) => void;
  removeFromWishlist: (id: number) => void;
};

const Wishlist: React.FC<Props> = (
  wishlistItems,
  addToWishlist,
  removeFromWishlist
) => {
  return (
    <div>
    
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? <p> No items in cart!</p> : null}
      {wishlistItems.map (item => (
        <Item/>
      ))}
    </div>
  );
};*/

type Item = {
  name: string;
  details: string;
  quantity: number;
  size?: string;
  maker?: string;
  model: string;
  link: string;
};
