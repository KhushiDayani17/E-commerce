export interface IApiResponse<T> {
    status?: number | string;
    "error-code"?: string | number;
    message?: string | string[];
    "hash-key"?: string;
    data?: any;
    error?: any;
  }