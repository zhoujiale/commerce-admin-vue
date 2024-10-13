import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface CommonHttpResponse extends AxiosResponse {
  config: CommonHttpRequestConfig;
}

export interface CommonHttpError extends AxiosError {
  isCancelReequest?: boolean;
}

export interface CommonHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: CommonHttpRequestConfig) => void;
  beforeResponseCallback?: (response: CommonHttpResponse) => void;
}
