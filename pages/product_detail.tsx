import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Product/ProductDetail";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const product_detail = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <ProductDetail />
        <Footer />
      </Provider>
    </div>
  );
};

export default product_detail;
