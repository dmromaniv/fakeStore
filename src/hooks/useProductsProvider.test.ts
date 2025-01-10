import { renderHook, act } from "@testing-library/react";

import useProviderValue from "./useProductsProvider";

import { Product } from "../types/product";

const mockProduct: Product = {
  id: 1,
  title: "Product 1",
  price: 29.99,
  category: "Electronics",
  description: "A high-quality electronic product",
  image: "https://example.com/product1.jpg",
  rating: {
    rate: 4.5,
    count: 120,
  },
};

describe("useProviderValue Hook", () => {
  it("adds products to the state", () => {
    const { result } = renderHook(() => useProviderValue());

    act(() => {
      result.current.addProducts([mockProduct]);
    });

    expect(result.current.products).toEqual([mockProduct]);
  });

  it("adds a product to the cart", () => {
    const { result } = renderHook(() => useProviderValue());

    act(() => {
      result.current.addProductToCart(mockProduct);
    });

    expect(result.current.cartProducts).toEqual([
      { product: mockProduct, quantity: 1 },
    ]);
  });

  it("removes a product from the cart", () => {
    const { result } = renderHook(() => useProviderValue());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.removeProductFromCart(mockProduct.id);
    });

    expect(result.current.cartProducts).toEqual([]);
  });

  it("increments and decrements product quantity in the cart", () => {
    const { result } = renderHook(() => useProviderValue());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.incrementQuantity(mockProduct.id);
    });

    expect(result.current.cartProducts[0].quantity).toBe(2);

    act(() => {
      result.current.decrementQuantity(mockProduct.id);
    });

    expect(result.current.cartProducts[0].quantity).toBe(1);
  });

  it("calculates the cart total correctly", () => {
    const { result } = renderHook(() => useProviderValue());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.incrementQuantity(mockProduct.id);
    });

    expect(result.current.getCartTotal()).toBe(29.99 * 2);
  });

  it("clears the cart", () => {
    const { result } = renderHook(() => useProviderValue());

    act(() => {
      result.current.addProductToCart(mockProduct);
      result.current.clearProductsCart();
    });

    expect(result.current.cartProducts).toEqual([]);
  });
});
