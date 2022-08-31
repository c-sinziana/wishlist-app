import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";

interface RegisterPostRequest {
  email: string;
  password: string;
  dob: string;
  name: string;
  phone: string;
}

export interface RegisterResponse {
  token: string;
}

const responseBody = (response: AxiosResponse) => response.data;

const registerRequest = {
  post: (url: string, body: RegisterPostRequest) =>
    instance.post<RegisterPostRequest>(url, body).then(responseBody),
};

export const RegisterApi = {
  postRegister: (register: RegisterPostRequest): Promise<RegisterResponse> =>
    registerRequest.post("/register", register),
};
