import { type CartProduct } from "../types/product";

const checkProductInCart = (productId: number, products: CartProduct[]) => {
  return !!products.find(({ product }: CartProduct) => {
    return product.id === productId;
  });
};

export default checkProductInCart;
