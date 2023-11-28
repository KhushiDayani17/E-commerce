import { AxiosResponse } from "axios";
import {
  IProductDetailPayload,
  IProductPayload,
} from "../../@types/apis/IProduct";
import { jsonToForm } from "../helper";
import { axiosAuthInstance } from "../axois";
import { IApiResponse } from "../../@types/apis/iApis";

class AuthApiServices {
  static getproduct = async (): Promise<AxiosResponse<IApiResponse<any>>> => {
    return await axiosAuthInstance.get("/products");
  };
  static productDetail = async (
    id: number
  ): Promise<AxiosResponse<IApiResponse<any>>> => {
    return await axiosAuthInstance.get(`/products/${id}`);
  };
}

export default AuthApiServices;
