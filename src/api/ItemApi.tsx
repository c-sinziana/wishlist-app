import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Item } from "./utils/entities";
import {
  GetRequest,
  PutDeleteRequest,
  PostPutDeleteResponse,
} from "./utils/generics";

interface ItemPostRequest {
  name: string;
  details: string;
  quantity: number;
  size: string;
  maker: string;
  model: string;
  link: string;
}

const responseBody = (response: AxiosResponse) => response.data;

const itemRequest = {
  post: (url: string, body: ItemPostRequest) =>
    instance.post<ItemPostRequest>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  put: (url: string) => instance.put<PutDeleteRequest>(url).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const ItemApi = {
  postItem: (item: ItemPostRequest): Promise<Item> =>
    itemRequest.post("/items", item),
  getItems: (): Promise<Item[]> => itemRequest.get("/items"),
  putItem: (id: string): Promise<PostPutDeleteResponse> =>
    itemRequest.put(`/items/${id}`),
  deleteItem: (id: string): Promise<PostPutDeleteResponse> =>
    itemRequest.delete(`/items/${id}`),
};
