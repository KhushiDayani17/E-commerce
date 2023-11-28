import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "./Slider";
import Product from "./Product";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
};

export default HomePage;
