import { AxiosResponse } from "axios";

export interface useApiCall<T>{
    apiCall: Promise<AxiosResponse<T>>,
    controller:AbortController;
}