import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "./Slider";
import Product from "./Product";
import ProductDetail from "../Product/ProductDetail";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Product />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default HomePage;
