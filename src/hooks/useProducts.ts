import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useProductsContext from "./useProductsContext";

import { fetchCategoryProducts, fetchProducts } from "../services/api";

import notification from "../messages/toast-notification";

import { type Product } from "../types/product";

const useProducts = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);

  const { addProducts } = useProductsContext();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoadingStatus(true);
        if (category === "All") {
          const data = await fetchProducts();
          setProducts(data);
        } else {
          const data = await fetchCategoryProducts(category);
          setProducts(data);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error(notification.GENERAL_ERROR);
      } finally {
        setIsLoadingStatus(false);
      }
    }
    fetchData();
  }, [category]);

  useEffect(() => {
    addProducts(products);
  }, [products, addProducts]);

  return { isLoadingStatus, products };
};

export default useProducts;
