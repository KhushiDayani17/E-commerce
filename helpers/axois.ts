import axios from "axios";
let apiEndpoint = "https://fakestoreapi.com";

export const axiosAuthInstance = axios.create({
  baseURL: `${apiEndpoint}/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "en",
    "Content-Language": "en",
  },
});
