import { AxiosResponse } from "axios";
import { IProductPayload } from "../../@types/apis/IProduct";
import { jsonToForm } from "../helper";
import { axiosAuthInstance } from "../axois";

class AuthApiServices {
  static getproduct = async (): Promise<AxiosResponse<AxiosResponse<any>>> => {
    return await axiosAuthInstance.get("/products");
  };
}

export default AuthApiServices;
