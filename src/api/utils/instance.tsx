import axios, { AxiosInstance } from "axios";

import { Configs } from "../../constants/Configs";

export const instance: AxiosInstance = axios.create({
  baseURL: Configs.BASE_URL,
  timeout: Configs.REQUEST_TIMEOUT,
});
