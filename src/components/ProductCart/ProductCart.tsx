import { useState } from "react";

import Modal from "../Modal";
import ContactForm from "../ContactForm";
import IconButton from "../IconButton";
import Button from "../Button";

import useProductsContext from "../../hooks/useProductsContext";

import info from "../../messages/info";

import { type CartProduct } from "../../types/product";

interface ProductCartProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

const ProductCart = ({ isModalOpen, onModalClose }: ProductCartProps) => {
  const [isCheckoutActive, setIsCheckoutActive] = useState(false);

  const {
    total,
    cart,
    incrementQuantity,
    decrementQuantity,
    removeProductFromCart,
    clearProductsCart,
  } = useProductsContext();

  const onCheckoutButtonClick = () => {
    setIsCheckoutActive(true);
  };

  const onBackButtonClick = () => {
    setIsCheckoutActive(false);
  };

  const onContactFormSubmit = () => {
    onModalClose();
    clearProductsCart();
    setIsCheckoutActive(false);
  };

  return (
    isModalOpen && (
      <>
        <Modal position="right" onClose={onModalClose}>
          {isCheckoutActive ? (
            <>
              <div className="mb-3 mt-6">
                <ContactForm onContactFormSubmit={onContactFormSubmit} />
              </div>
              <IconButton onClick={onBackButtonClick}>
                <img src={"/back-arrow.svg"} alt="back-arrow icon" />
              </IconButton>
            </>
          ) : cart.length > 0 ? (
            <div className="flex h-full flex-col justify-between">
              <ul className="mt-6 flex flex-col gap-y-5">
                {cart.map(({ quantity, product }: CartProduct) => {
                  return (
                    <li key={product.id}>
                      <div className="flex gap-x-14">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-auto w-14"
                        />
                        <div className="flex w-full flex-col">
                          <p className="mb-2 line-clamp-1 font-medium text-primary">
                            {product.title}
                          </p>
                          <p className="mb-3 flex gap-x-2 text-lg">
                            <span className="font-bold text-primary">
                              Price:
                            </span>
                            <span className="font-medium">
                              ${(product.price * quantity).toFixed(2)}
                            </span>
                          </p>
                          <div className="flex items-center gap-x-3">
                            <div className="h-10 w-10">
                              <Button
                                onClick={() => {
                                  decrementQuantity(product.id);
                                }}
                                text="-"
                                variant="outlined"
                                disabled={quantity === 1}
                              ></Button>
                            </div>

                            <p className="font-semibold">{quantity}</p>

                            <div className="h-10 w-10">
                              <Button
                                onClick={() => {
                                  incrementQuantity(product.id);
                                }}
                                text="+"
                                variant="outlined"
                              ></Button>
                            </div>
                            <div className="ml-auto">
                              <IconButton
                                color="danger"
                                onClick={() => {
                                  removeProductFromCart(product.id);
                                }}
                              >
                                <img src="/delete-icon.svg" alt="delete icon" />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-5" />
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between">
                <div className="max-w-24">
                  <Button
                    onClick={clearProductsCart}
                    text="Clear all"
                    variant="outlined"
                  />
                </div>

                <p className="text-primary">
                  Total: <span className="font-bold">${total.toFixed(1)}</span>
                </p>
              </div>

              <div className="mt-auto py-2">
                <Button onClick={onCheckoutButtonClick} text="Checkout" />
              </div>
            </div>
          ) : (
            <p className="mt-10 text-center text-xl font-medium text-primary">
              {info.EMPTY_CART}
            </p>
          )}
        </Modal>
      </>
    )
  );
};

export default ProductCart;
