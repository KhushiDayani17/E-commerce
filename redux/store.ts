import { configureStore } from "@reduxjs/toolkit";
// import { persistedReducer } from "./features/persistedRootReducer";
import { rootReducer } from "./features/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
