import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

import { Configs } from "../../constants/Configs";

export const instance: AxiosInstance = axios.create({
  baseURL: Configs.BASE_URL,
  timeout: Configs.REQUEST_TIMEOUT,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export const accountInstance: AxiosInstance = axios.create({
  baseURL: Configs.BASE_URL,
  timeout: Configs.REQUEST_TIMEOUT,
});
