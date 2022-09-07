import { AxiosResponse } from "axios";

import { accountInstance } from "./utils/instance";

export interface RegisterPostRequest {
  email: string;
  password: string;
  dob: string;
  name: string;
  phone: string;
}

export interface RegisterResponse {
  id: number;
  updatedAt: string;
  name: string;
  email: string;
  dob: string;
  phone: string;
  errors: [string];
}

const responseBody = (response: AxiosResponse) => response.data;

const registerRequest = {
  post: (url: string, body: RegisterPostRequest) =>
    accountInstance.post<RegisterPostRequest>(url, body).then(responseBody),
};

export const RegisterApi = {
  postRegister: (register: RegisterPostRequest): Promise<RegisterResponse> =>
    registerRequest.post("/register", register),
};
