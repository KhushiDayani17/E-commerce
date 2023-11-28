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
      const { product, quantity } = action.payload;
      const newItem = {
        ...product,
        quantity: quantity || 1,
      };

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
    },
  },
});

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;
