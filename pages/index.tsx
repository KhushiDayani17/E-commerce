import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import PersistedIndex from "../PersistedIndex";

const index = () => {
  return (
    <>
      <PersistedIndex>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistedIndex>
      ,
    </>
  );
};

export default index;
