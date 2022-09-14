import { AxiosResponse } from "axios";

import { Address, Me, MyNotification } from "./utils/entities";
import { instance } from "./utils/instance";

export interface MePutRequest {
  name: string;
  phone: string;
  dob: string;
  address: Address;
}

export interface MePutResponse {
  name: string;
  email: string;
  password: string;
  dob: string;
  phone: string;
  address: Address;
}

export interface MeNotificationsGetResponse {
  notifications: MyNotification[];
}

const responseBody = (response: AxiosResponse) => response.data;

const meRequest = {
  get: (url: string) => instance.get<Me>(url).then(responseBody),
  getNotifications: (url: string) => instance.get<Me>(url).then(responseBody),
  put: (url: string, body: MePutRequest) =>
    instance.put<MePutRequest>(url, body).then(responseBody),
};

export const MeApi = {
  getMe: (): Promise<Me> => meRequest.get("/me"),
  getMeNotifications: (): Promise<MeNotificationsGetResponse> =>
    meRequest.getNotifications("/me/notifications"),
  putMe: (me: MePutRequest): Promise<MePutResponse> => meRequest.put(`/me`, me),
};
