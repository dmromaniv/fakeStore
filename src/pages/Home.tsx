import { useCallback, useState } from "react";

import Layout from "../layouts/Layout";
import ProductList from "../components/ProductList";
import CategoriesList from "../components/CategoriesList";
import ProductCardSkeleton from "../loaders/ProductCardSkeleton";

import useProducts from "../hooks/useProducts";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isLoadingStatus } = useProducts(selectedCategory);

  const onCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <Layout>
      <section className="container my-5">
        <CategoriesList
          selectedCategory={selectedCategory}
          onCategoryClick={onCategoryClick}
        />
      </section>
      <section className="container pb-5">
        {isLoadingStatus ? <ProductCardSkeleton /> : <ProductList />}
      </section>
    </Layout>
  );
};

export default HomePage;
