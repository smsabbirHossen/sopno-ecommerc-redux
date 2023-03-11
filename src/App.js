import React from "react";
//react router v6
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import {
  Home,
  Cart,
  CategoryProduct,
  Search,
  ProductSingle,
} from "./pages/index";
//components
import { Header, Slidebar, Footer } from "./components/index";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Slidebar />
          <Routes>
            {/* home page route */}
            <Route path="/" element={<Home />}></Route>
            {/* single product route */}
            <Route path="/product/:id" element={<ProductSingle />}></Route>
            {/* category wise product listing route */}
            <Route
              path="/category/:category"
              element={<CategoryProduct />}
            ></Route>
            {/* cart */}
            <Route path="/cart" element={<Cart />}></Route>
            {/* srarched product */}
            <Route path="/search/:searchTerm" element={<Search />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
