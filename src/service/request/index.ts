import Axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { stringify } from "querystring";
import { CommonHttpRequestConfig } from "./types";

const TEN_SECONDS = 10 * 1000;

/**默认的请求配置 */
const defaultRequestConfig: AxiosRequestConfig = {
  timeout: TEN_SECONDS,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  paramsSerializer: params => {
    return stringify(params);
  }
};

/**通用请求响应类 */
class CommonHttp {

  /**初始化配置对象 */
  private static initConfig: CommonHttpRequestConfig = {};
  /**axios 实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(defaultRequestConfig);


}
