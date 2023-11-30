import React, { Suspense } from "react";
import Home from "../Home/Home";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const App = () => {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Home />
      </Suspense>
    </>
  );
};

export default App;
