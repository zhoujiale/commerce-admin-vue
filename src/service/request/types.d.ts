import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface CommonHttpResponse extends AxiosResponse {
  config: CommonHttpRequestConfig;
}

export interface CommonHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: CommonHttpRequestConfig) => void;
  beforeResponseCallback?: (response: CommonHttpResponse) => void;
}
