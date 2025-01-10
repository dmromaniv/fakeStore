import { createContext } from "react";

import { type CartProduct, type Product } from "../../types/product";

interface ProductsContextType {
  products: Product[];
  cart: CartProduct[];
  total: number;

  addProducts: (products: Product[]) => void;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  getCartTotal: () => number;
  clearProductsCart: () => void;

  // handling global modal state
  isCartOpen: boolean;
  onCartOpen: () => void;
  onCartClose: () => void;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
);
