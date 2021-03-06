import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const bakeryCategory = createInstanceWithAuth("bakeryCategory");
export const bakery = createInstanceWithAuth("bakery");
export const breadStyle = createInstanceWithAuth("breadstyle");
export const emoji = createInstanceWithAuth("emoji");
export const authInstance = createInstanceWithAuth("");
