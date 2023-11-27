import { AxiosResponse } from "axios";
import { IProductPayload } from "../../@types/apis/IProduct";
import { jsonToForm } from "../helper";
import { axiosAuthInstance } from "../axois";

class AuthApiServices {
  static getproduct = async (page: number): Promise<AxiosResponse<any>> => {
    try {
      const limit = 6;
      const response = await axiosAuthInstance.get(`/products?limit=${limit}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default AuthApiServices;
