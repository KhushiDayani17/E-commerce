import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import PersistedIndex from "../PersistedIndex";
import { Provider } from "react-redux";
import { store } from "../redux/store";
const index = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </>
  );
};

export default index;
