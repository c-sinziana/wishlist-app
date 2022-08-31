import { AxiosResponse } from "axios";
import { Address, Me, Notification } from "./utils/entities";
import { instance } from "./utils/instance";
import { PostPutDeleteResponse } from "./utils/generics";

interface MePutRequest {
  name: string;
  phone: string;
  dob: string;
  address: Address;
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
  getMeNotifications: (): Promise<Notification[]> =>
    meRequest.getNotifications("/me/notifications"),
  putMe: (me: MePutRequest): Promise<PostPutDeleteResponse> =>
    meRequest.put(`/me`, me),
};
