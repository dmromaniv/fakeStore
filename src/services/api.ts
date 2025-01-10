import axios, { AxiosResponse } from "axios";

import { type Product } from "../types/product";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function fetchProducts() {
  const response: AxiosResponse<Product[]> = await axiosInstance.get(
    "/products",
    {},
  );

  return response.data;
}

export async function fetchCategoryProducts(category: string) {
  const response: AxiosResponse<Product[]> = await axiosInstance.get(
    `/products/category/${category}`,
    {},
  );

  return response.data;
}
