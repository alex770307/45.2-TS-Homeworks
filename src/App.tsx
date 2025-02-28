
import { HashRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./favoritesContext/FavoritesContext";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import Layout from "./layout/Layout";

import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import FetchFox from "./components/fetchFox/FetchFox";
import ProductPage from "./components/productPage/ProductPage";
import FormGender from "./homeworks/homework12/FormGender";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
// import Lesson05 from "./components/fellowship/Lesson05";
import Homework01 from "./homeworks/homework01/Homework01";
import Homework02 from "./homeworks/homework02/Homework02";
import Homework03 from "./homeworks/homework03/Homework03";
import Homework04 from "./homeworks/homework04/Homework04";
import Homework05 from "./homeworks/homework05/Homework05";
import Homework06 from "./homeworks/homework06/Homework06";
import Homework08 from "./homeworks/homework08/Homework08";
import Homework11 from "./homeworks/homework11/Homework11";
import Homework13 from "./homeworks/homework13/Homework13";
import Homework14 from "./homeworks/homework14/Homework14";
import Homework17 from "./homeworks/homework17/Homework17";
import Store from "./components/store/Store";
import StorePage from "./components/storePage/StorePage";









function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="fellowship" element={<Homework05 />} />
              <Route path="fetch-fox" element={<FetchFox />} />

              {/* добавили новые пути для корзины и продутков */}
              <Route path="cart" element={<Cart />} />
              <Route path="products" element={<Products />} />
              {/* новый динамический роутинг */}
              <Route path="products/:id" element={<ProductPage />} />
              <Route path="store" element={<Store />} />
              <Route path="store/:id" element={<StorePage />} />

              <Route path="homework-01" element={<Homework01 />} />
              <Route path="homework-02" element={<Homework02 />} />
              <Route path="homework-03" element={<Homework03 />} />
              <Route path="homework-04" element={<Homework04 />} />
              <Route path="homework-05" element={<Homework05 />} />
              <Route path="homework-06" element={<Homework06 />} />
              <Route path="homework-08" element={<Homework08 />} />
              <Route path="homework-11" element={<Homework11 />} />
              <Route path="homework-12" element={<FormGender />} />
              <Route path="homework-13" element={<Homework13 />} />
              <Route path="homework-14" element={<Homework14 />} />
              <Route path="homework-14/:id" element={<ProductPage />} />
              <Route path="homework-17" element={<Homework17 />} />
              <Route path="homework-17/:id" element={<StorePage />} />

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
