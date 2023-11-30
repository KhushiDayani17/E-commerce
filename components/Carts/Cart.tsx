import React, { Suspense } from "react";
import PersistedIndex from "../../PersistedIndex";
import { BrowserRouter } from "react-router-dom";
import CartDetail from "./CartDetail";

const Cart = () => {
  return (
    <>
      <PersistedIndex>
        <CartDetail />
      </PersistedIndex>
    </>
  );
};

export default Cart;
