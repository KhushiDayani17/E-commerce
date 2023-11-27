import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./features/persistedRootReducer";

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
