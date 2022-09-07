import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Item } from "./utils/entities";
import {
  GetRequest,
  PutDeleteRequest,
  PostPutDeleteResponse,
} from "./utils/generics";

export interface ItemPostPutRequest {
  name: string;
  details: string;
  quantity: number;
  size: string;
  maker: string;
  model: string;
  link: string;
}

export interface ItemPostGetResponse {
  items: Item[];
}

const responseBody = (response: AxiosResponse) => response.data;

const itemRequest = {
  post: (url: string, body: ItemPostPutRequest) =>
    instance.post<Item>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  put: (url: string, body: ItemPostPutRequest) =>
    instance.put<PutDeleteRequest>(url, body).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const ItemApi = {
  postItem: (item: ItemPostPutRequest): Promise<Item> =>
    itemRequest.post("/items", item),
  getItems: (): Promise<ItemPostGetResponse> => itemRequest.get("/items"),
  putItem: (id: number, item: ItemPostPutRequest): Promise<PostPutDeleteResponse> =>
    itemRequest.put(`/items/${id}`, item),
  deleteItem: (id: number): Promise<PostPutDeleteResponse> =>
    itemRequest.delete(`/items/${id}`),
};
