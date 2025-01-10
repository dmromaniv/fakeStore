import { useState } from "react";

import { type CartProduct, type Product } from "../types/product";

// Custom hook to manage context
const useProviderValue = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addProducts = (products: Product[]) => {
    setProducts(products);
  };

  const addProductToCart = (product: Product) => {
    setCartProducts([...cartProducts, { quantity: 1, product }]);
  };

  const removeProductFromCart = (productId: number) => {
    const updatedProductsCart = cartProducts.filter(
      ({ product }: CartProduct) => product.id !== productId,
    );
    setCartProducts(updatedProductsCart);
  };

  const clearProductsCart = () => {
    setCartProducts([]);
  };

  const getCartTotal = () => {
    return cartProducts.reduce(
      (total, { product, quantity }: CartProduct) =>
        total + product.price * quantity,
      0,
    );
  };

  const updateCartProductsQuantity = (
    productId: number,
    operation: "increment" | "decrement",
  ) => {
    setCartProducts((prev) =>
      prev.map((product) =>
        product.product.id === productId
          ? {
              ...product,
              quantity: Math.max(
                1,
                product.quantity + (operation === "increment" ? 1 : -1),
              ),
            }
          : product,
      ),
    );
  };

  const incrementQuantity = (productId: number) => {
    updateCartProductsQuantity(productId, "increment");
  };

  const decrementQuantity = (productId: number) => {
    updateCartProductsQuantity(productId, "decrement");
  };

  return {
    products,
    cartProducts,
    total: getCartTotal(),
    addProducts,
    addProductToCart,
    removeProductFromCart,
    clearProductsCart,
    getCartTotal,
    incrementQuantity,
    decrementQuantity,
  };
};

export default useProviderValue;
