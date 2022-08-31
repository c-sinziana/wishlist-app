import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Wishlist } from "./utils/entities";
import {
  GetRequest,
  PutDeleteRequest,
  PostPutDeleteResponse,
} from "./utils/generics";

interface WishlistPostRequest {
  wishlist: {
    name: string;
    details: string;
  };
  itemIds: [number];
}

const responseBody = (response: AxiosResponse) => response.data;

const wishlistRequest = {
  post: (url: string, body: WishlistPostRequest) =>
    instance.post<WishlistPostRequest>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  put: (url: string) => instance.put<PutDeleteRequest>(url).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const WishlistApi = {
  postItem: (wishlist: WishlistPostRequest): Promise<Wishlist> =>
    wishlistRequest.post("/wishlists", wishlist),
  getItems: (): Promise<Wishlist[]> => wishlistRequest.get("/wishlists"),
  putItem: (id: string): Promise<Wishlist> =>
    wishlistRequest.get(`/wishlists/${id}`),
  deleteItem: (id: string): Promise<PostPutDeleteResponse> =>
    wishlistRequest.get(`/wishlists/${id}`),
};
