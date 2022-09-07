import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Item, Wishlist } from "./utils/entities";
import {
  GetRequest,
  PutDeleteRequest,
  PostPutDeleteResponse,
} from "./utils/generics";

export interface WishlistPostRequest {
  wishlist: {
    name: string;
    details: string;
  };
  itemIds: [number];
}

export interface WishlistPostResponse {
  id: number;
  name: string;
  details: string;
  items: Item[];
}

export interface WishlistGetResponse {
  wishlists: Wishlist[];
}

const responseBody = (response: AxiosResponse) => response.data;

const wishlistRequest = {
  post: (url: string, body: WishlistPostRequest) =>
    instance.post<WishlistPostRequest>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  put: (url: string, body: WishlistPostRequest) =>
    instance.put<PutDeleteRequest>(url).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const WishlistApi = {
  postWishlist: (wishlist: WishlistPostRequest): Promise<Wishlist> =>
    wishlistRequest.post("/wishlists", wishlist),
  getWishlists: (): Promise<WishlistGetResponse> =>
    wishlistRequest.get("/wishlists"),
  putWishlist: (id: number, wishlist: WishlistPostRequest): Promise<Wishlist> =>
    wishlistRequest.put(`/wishlists/${id}`, wishlist),
  deleteWishlist: (id: number): Promise<PostPutDeleteResponse> =>
    wishlistRequest.delete(`/wishlists/${id}`),
};
