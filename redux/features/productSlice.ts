// productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const newItem = {
        ...action.payload,
      };
      state.items = [...state.items, newItem];
    },
  },
});

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;
