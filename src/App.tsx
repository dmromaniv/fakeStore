import NotificationContainer from "./components/NotificationContainer";
import HomePage from "./pages/Home";
import { ProductsProvider } from "./context/Products/ProductsProvider";

import "animate.css";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <ProductsProvider>
      <HomePage />
      <NotificationContainer />
    </ProductsProvider>
  );
}

export default App;
