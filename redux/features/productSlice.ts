// productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  [x: string]: any;
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
    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>
    ) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;
