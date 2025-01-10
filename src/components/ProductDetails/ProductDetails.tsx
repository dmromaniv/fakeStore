import Modal from "../Modal";
import Button from "../Button";

import useProductsContext from "../../hooks/useProductsContext";
import checkProductInCart from "../../utils/checkProductInCart";

import { type Product } from "../../types/product";

interface ProductDetailsProps {
  product: Product;
  isModalOpen: boolean;
  onModalClose: () => void;
}

const ProductDetails = ({
  product,
  isModalOpen,
  onModalClose,
}: ProductDetailsProps) => {
  const { cart, addProductToCart, onCartOpen } = useProductsContext();

  const isProductInCart = checkProductInCart(product.id, cart);

  const onButtonClick = () => {
    if (isProductInCart) {
      onModalClose();
      onCartOpen();
      return;
    } else {
      addProductToCart(product);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal position="center" onClose={onModalClose}>
          <div className="w-full">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-auto max-h-[45vh] w-[50%]"
            />

            <div className="px-3 py-2">
              <h3 className="text-xs text-primary">{product.category}</h3>
              <h2 className="text-xl font-bold text-primary">
                {product.title}
              </h2>
              <p className="mt-2 text-lg text-primary">{product.description}</p>
              <div className="mb-5 mt-2 flex items-center justify-between">
                <p className="text-3xl font-bold text-accent">
                  ${product.price}
                </p>
                <div className="bg-warm relative flex h-10 w-10 justify-center rounded-full p-1">
                  <p className="text-xl font-medium text-secondary">
                    {product.rating.rate.toFixed(1)}
                  </p>
                  <img
                    className="absolute -right-2 -top-[6px]"
                    src="/rating-star.svg"
                    alt="rating icon"
                  />
                </div>
              </div>
              <Button
                onClick={onButtonClick}
                text={isProductInCart ? "Open Cart" : "Add to Cart"}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductDetails;
