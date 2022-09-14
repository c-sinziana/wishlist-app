import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { User } from "./utils/entities";
import { GetRequest } from "./utils/generics";

export interface UserGetResponse {
  users: User[];
}

const responseBody = (response: AxiosResponse) => response.data;

const userRequest = {
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
};

export const UserApi = {
  getUsers: (): Promise<UserGetResponse> => userRequest.get("/users"),
};
