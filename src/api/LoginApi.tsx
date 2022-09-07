import { AxiosResponse } from "axios";

import { accountInstance } from "./utils/instance";
import { User } from "./utils/entities";

interface LoginPostRequest {
  email: string;
  password: string;
}

interface LoginPostRespose {
  token: string;
  user: User;
  errors: [string];
}

const responseBody = (response: AxiosResponse) => response.data;

const loginRequest = {
  post: (url: string, body: LoginPostRequest) =>
    accountInstance.post<LoginPostRequest>(url, body).then(responseBody),
};

export const LoginApi = {
  postLogin: (login: LoginPostRequest): Promise<LoginPostRespose> =>
    loginRequest.post("/login", login),
};
