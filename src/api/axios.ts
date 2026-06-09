import axios from "axios";
import { additionalApiKeysMap } from "../constants/api";

export const api = axios.create({
  baseURL: "/api/v1",
});

api.interceptors.request.use(
  (config) => {
    const info = localStorage.getItem(additionalApiKeysMap.userInfoKey);

    if (info && config.headers) {
      config.headers.Authorization = `VKMiniApp vk_user_id=${info}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
