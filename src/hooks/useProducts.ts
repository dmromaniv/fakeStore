import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useProductsContext from "./useProductsContext";

import { fetchProducts } from "../services/api";

import notification from "../messages/toast-notification";

import { type Product } from "../types/product";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);

  const { addProducts } = useProductsContext();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoadingStatus(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
        toast.error(notification.GENERAL_ERROR);
      } finally {
        setIsLoadingStatus(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    addProducts(products);
  }, [products, addProducts]);

  return { isLoadingStatus, products };
};

export default useProducts;
