import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Item, Wishlist } from "./utils/entities";
import {
  GetRequest,
  PutDeleteRequest,
  PostPutDeleteResponse,
} from "./utils/generics";

export interface WishlistPostPutRequest {
  wishlist: {
    name: string;
    details: string;
  };
  itemIds: number[];
}

export interface WishlistPutPurchaseItemRequest {
  id: number;
  itemId: number;
}

export interface WishlistGetResponse {
  wishlists: [
    {
      id: number;
      name: string;
      details: string;
      items: [
        {
          item: Item;
        }
      ];
    }
  ];
}

const responseBody = (response: AxiosResponse) => response.data;

const wishlistRequest = {
  post: (url: string, body: WishlistPostPutRequest) =>
    instance.post<WishlistPostPutRequest>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  put: (url: string, body: WishlistPostPutRequest) =>
    instance.put<PutDeleteRequest>(url, body).then(responseBody),
  putWishlistItem: (url: string) =>
    instance.put<WishlistPutPurchaseItemRequest>(url).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const WishlistApi = {
  postWishlist: (wishlist: WishlistPostPutRequest): Promise<Wishlist> =>
    wishlistRequest.post("/wishlists", wishlist),
  getWishlists: (): Promise<WishlistGetResponse> =>
    wishlistRequest.get("/wishlists"),
  putWishlist: (
    id: number,
    wishlist: WishlistPostPutRequest
  ): Promise<Wishlist> => wishlistRequest.put(`/wishlists/${id}`, wishlist),
  putWishlistItemPurchase: (
    id: number,
    itemId: number
  ): Promise<PostPutDeleteResponse> =>
    wishlistRequest.putWishlistItem(`/wishlists/${id}/items/${itemId}/buy`),
  deleteWishlist: (id: number): Promise<PostPutDeleteResponse> =>
    wishlistRequest.delete(`/wishlists/${id}`),
};
