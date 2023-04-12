import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsContainer from "./Components/Pages/Products/Products.container";
import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import CreateProductContainer from "./Components/Pages/CreateProduct/CreateProduct.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import CartContainer from "./Components/Pages/Cart/Cart.container";
import CartContextReducerProvider from "./Context/CartContextReducer";
import Checkout from "./Components/Pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextReducerProvider>
        <Routes>
          <Route path="/login" element={<h1>Estoy en la vista Login</h1>} />

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/products" element={<ProductsContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/create-product"
              element={<CreateProductContainer />}
            />
            <Route
              path="/product-detail/:id"
              element={<ProductDetailContainer />}
            />
          </Route>

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </CartContextReducerProvider>
    </BrowserRouter>
  );
}

export default App;
