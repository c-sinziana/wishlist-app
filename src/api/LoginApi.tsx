import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { User } from "./utils/entities";

interface LoginPostRequest {
  email: string;
  password: string;
}

interface LoginPostRespose {
  token: string;
  user: User;
}

const responseBody = (response: AxiosResponse) => response.data;

const loginRequest = {
  post: (url: string, body: LoginPostRequest) =>
    instance.post<LoginPostRequest>(url, body).then(responseBody),
};

export const LoginApi = {
  postLogin: (login: LoginPostRequest): Promise<LoginPostRespose> =>
    loginRequest.post("/login", login),
};
