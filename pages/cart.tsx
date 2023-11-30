import React, { Suspense } from "react";
import { Provider } from "react-redux";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { store } from "../redux/store";
import Cart from "../components/Carts/Cart";
import PersistedIndex from "../PersistedIndex";

const cart_detail = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistedIndex>
          <div>
            <Header />
            <Cart />
            <Footer />
          </div>
        </PersistedIndex>
      </Provider>
    </div>
  );
};

export default cart_detail;
