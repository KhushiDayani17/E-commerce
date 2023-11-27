import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";

export const rootReducer = combineReducers({
  product: productReducer,
});

export type ReduxStoreType = ReturnType<typeof rootReducer>;
