import { useContext } from "react";
import { ProductsContext } from "../context/Products/ProductsContext";

// Custom hook to access the products context
const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("Context must be used within a ProductsProvider'");
  }
  return context;
};

export default useProductsContext;
