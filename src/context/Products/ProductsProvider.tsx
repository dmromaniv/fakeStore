import { ReactNode } from "react";

import useProviderValue from "../../hooks/useProductsProvider";
import useModal from "../../hooks/useModal";

import { ProductsContext } from "./ProductsContext";

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const {
    isModalOpen: isCartOpen,
    onModalOpen: onCartOpen,
    onModalClose: onCartClose,
  } = useModal();
  const {
    products,
    cartProducts,
    addProducts,
    addProductToCart,
    removeProductFromCart,
    incrementQuantity,
    decrementQuantity,
    clearProductsCart,
    getCartTotal,
  } = useProviderValue();

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart: cartProducts,
        total: getCartTotal(),
        isCartOpen,
        onCartOpen,
        onCartClose,
        addProducts,
        addProductToCart,
        removeProductFromCart,
        incrementQuantity,
        decrementQuantity,
        clearProductsCart,
        getCartTotal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
