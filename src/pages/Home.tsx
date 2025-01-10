import Layout from "../layouts/Layout";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";

import useProducts from "../hooks/useProducts";

const HomePage = () => {
  const { isLoadingStatus } = useProducts();

  return (
    <Layout>
      <section className="container">
        {isLoadingStatus ? <Loader /> : <ProductList />}
      </section>
    </Layout>
  );
};

export default HomePage;
