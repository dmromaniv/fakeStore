import ProductCard from "../ProductCard";
import ProductCart from "../ProductCart";

import useProductsContext from "../../hooks/useProductsContext";

import info from "../../messages/info";

const ProductList = () => {
  const { products, isCartOpen, onCartClose } = useProductsContext();

  return (
    <>
      {products.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <li key={product.id} className="h-full">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex justify-center text-lg font-medium text-primary">
          {info.NO_PRODUCTS}
        </p>
      )}
      <ProductCart isModalOpen={isCartOpen} onModalClose={onCartClose} />
    </>
  );
};

export default ProductList;
