import Button from "../Button";
import ProductDetails from "../ProductDetails";

import useModal from "../../hooks/useModal";
import useProductsContext from "../../hooks/useProductsContext";

import checkProductInCart from "../../utils/checkProductInCart";

import { type Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isModalOpen, onModalOpen, onModalClose } = useModal();
  const { cart, addProductToCart, onCartOpen } = useProductsContext();

  const onCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).tagName === "BUTTON") return;

    onModalOpen();
  };

  const isProductInCart = checkProductInCart(product.id, cart);

  const onButtonClick = () => {
    if (isProductInCart) {
      onCartOpen();
    } else {
      addProductToCart(product);
    }
  };

  return (
    <>
      <div
        onClick={onCardClick}
        className="flex h-full flex-col overflow-hidden rounded-lg border bg-primary shadow-xl hover:cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover"
        />

        <div className="px-3 py-2">
          <h3 className="line-clamp-2 text-xl font-bold text-primary">
            {product.title}
          </h3>
        </div>
        <div className="mt-auto">
          <p className="px-3 py-2 text-lg font-bold text-accent">
            ${product.price}
          </p>
          <Button
            onClick={onButtonClick}
            text={isProductInCart ? "Open Cart" : "Add to Cart"}
          />
        </div>
      </div>

      <ProductDetails
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        product={product}
      />
    </>
  );
};

export default ProductCard;
